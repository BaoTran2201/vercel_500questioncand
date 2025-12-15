#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Auto-update cand-questions.ts with correct answers from .docx audit
"""

import json
import re

def load_audit_data():
    """Load audit errors and docx questions"""
    with open('audit_errors.json', 'r', encoding='utf-8') as f:
        errors = json.load(f)
    
    with open('audit_docx_questions.json', 'r', encoding='utf-8') as f:
        docx_questions = json.load(f)
    
    return errors, docx_questions

def create_update_mapping():
    """Create mapping of question ID -> correct answer from docx"""
    errors, docx_questions = load_audit_data()
    
    # Filter only wrong answer errors
    wrong_answers = [e for e in errors if e.get('type') == 'WRONG_ANSWER']
    
    # Create docx lookup
    docx_dict = {q['id']: q['correctAnswer'] for q in docx_questions}
    
    # Create mapping
    mapping = {}
    for error in wrong_answers:
        q_id = error['id']
        if q_id in docx_dict and docx_dict[q_id] is not None:
            mapping[q_id] = docx_dict[q_id]
    
    return mapping, docx_questions

def update_ts_file():
    """Update cand-questions.ts with correct answers"""
    mapping, docx_questions = create_update_mapping()
    
    with open('src/data/cand-questions.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    updated_count = 0
    changes_log = []
    
    # For each question ID that needs updating
    for q_id, correct_answer in sorted(mapping.items()):
        # Find the question object in the file
        # Pattern: id: X, ... correctAnswer: Y
        pattern = r'(\{\s*id:\s*' + str(q_id) + r',.*?correctAnswer:\s*)(\d+)(\s*[,}])'
        
        def replacer(match):
            nonlocal updated_count
            old_answer = int(match.group(2))
            new_answer = correct_answer
            
            if old_answer != new_answer:
                updated_count += 1
                docx_q = next((q for q in docx_questions if q['id'] == q_id), None)
                question_text = docx_q['question'][:60] if docx_q else 'Unknown'
                
                changes_log.append({
                    'id': q_id,
                    'question': question_text,
                    'old_answer': old_answer,
                    'new_answer': new_answer
                })
                
                return match.group(1) + str(new_answer) + match.group(3)
            return match.group(0)
        
        content = re.sub(pattern, replacer, content, flags=re.DOTALL)
    
    # Write updated content
    with open('src/data/cand-questions.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    
    return updated_count, changes_log

if __name__ == '__main__':
    print("Starting auto-update of cand-questions.ts...")
    print()
    
    updated_count, changes_log = update_ts_file()
    
    print(f"✅ Updated {updated_count} questions with correct answers")
    print()
    
    if changes_log:
        print("Changes made:")
        print("-" * 80)
        for change in changes_log[:30]:  # Show first 30
            print(f"Câu {change['id']}: {change['old_answer']} → {change['new_answer']}")
            print(f"  Q: {change['question']}...")
            print()
        
        if len(changes_log) > 30:
            print(f"... and {len(changes_log) - 30} more changes")
            print()
    
    # Save detailed report
    with open('update_report.json', 'w', encoding='utf-8') as f:
        json.dump(changes_log, f, ensure_ascii=False, indent=2)
    
    print(f"📄 Detailed report saved to: update_report.json")
