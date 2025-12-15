#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate a detailed CSV report of all answer discrepancies
"""

import json
import csv

def generate_csv_report():
    with open('audit_errors.json', 'r', encoding='utf-8') as f:
        errors = json.load(f)
    
    with open('audit_docx_questions.json', 'r', encoding='utf-8') as f:
        docx_questions = json.load(f)
    
    # Create lookup dict for docx questions
    docx_dict = {q['id']: q for q in docx_questions}
    
    # Separate errors
    wrong_answers = [e for e in errors if e['type'] == 'WRONG_ANSWER']
    missing = [e for e in errors if e['type'] == 'MISSING']
    
    # Generate CSV for wrong answers
    with open('audit_wrong_answers.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Câu', '.docx Đáp Án', '.ts Đáp Án', 'Câu Hỏi (excerpt)', 'Status'])
        
        for error in sorted(wrong_answers, key=lambda x: x['id']):
            q_id = error['id']
            docx_q = docx_dict.get(q_id)
            question_excerpt = docx_q['question'][:60] + "..." if docx_q and len(docx_q['question']) > 60 else (docx_q['question'] if docx_q else "Unknown")
            
            writer.writerow([
                q_id,
                error.get('docx_answer', 'N/A'),
                error.get('ts_answer', 'N/A'),
                question_excerpt,
                'CẦN SỬA'
            ])
    
    # Generate CSV for missing questions
    with open('audit_missing_questions.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Câu', 'Câu Hỏi', 'Đáp Án Đúng (.docx)', 'Status'])
        
        for error in sorted(missing, key=lambda x: x['id']):
            q_id = error['id']
            docx_q = docx_dict.get(q_id)
            if docx_q:
                writer.writerow([
                    q_id,
                    docx_q['question'][:100],
                    docx_q.get('correctAnswer', 'N/A'),
                    'CẦN THÊM VÀO'
                ])
    
    print(f"✅ Generated audit_wrong_answers.csv ({len(wrong_answers)} rows)")
    print(f"✅ Generated audit_missing_questions.csv ({len(missing)} rows)")
    
    # Summary stats
    print(f"\n📊 Summary:")
    print(f"  - Total wrong answers: {len(wrong_answers)}")
    print(f"  - Total missing questions: {len(missing)}")
    print(f"  - Total issues: {len(wrong_answers) + len(missing)}")

if __name__ == '__main__':
    generate_csv_report()
