#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import re

def load_docx_questions():
    """Load questions extracted from .docx"""
    with open('audit_docx_questions.json', 'r', encoding='utf-8') as f:
        return json.load(f)

def load_ts_questions():
    """Load questions from TypeScript file"""
    questions = {}
    
    with open('src/data/cand-questions.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract question objects using regex
    # Look for id: number pattern followed by question, answers, correctAnswer
    pattern = r'\{\s*id:\s*(\d+),\s*question:\s*[\'"]([^\'"]*)[\'"],\s*answers:\s*\[(.*?)\],\s*correctAnswer:\s*(\d+)'
    
    matches = re.finditer(pattern, content, re.DOTALL)
    for match in matches:
        q_id = int(match.group(1))
        question_text = match.group(2)
        answers_str = match.group(3)
        correct_answer = int(match.group(4))
        
        # Parse answers (this is a simplified approach)
        answers = []
        answer_pattern = r'[\'"]([^\'"]*)[\'"]'
        answers = re.findall(answer_pattern, answers_str)
        
        questions[q_id] = {
            'id': q_id,
            'question': question_text,
            'answers': answers,
            'correctAnswer': correct_answer
        }
    
    return questions

def compare_questions():
    """Compare docx and TypeScript questions"""
    docx_questions = load_docx_questions()
    ts_questions = load_ts_questions()
    
    errors = []
    
    print(f"📄 .docx contains: {len(docx_questions)} questions")
    print(f"📝 .ts contains: {len(ts_questions)} questions")
    print()
    
    # Check for missing questions (in docx but not in ts)
    missing_in_ts = []
    for docx_q in docx_questions:
        q_id = docx_q['id']
        if q_id not in ts_questions:
            missing_in_ts.append(q_id)
            errors.append({
                'id': q_id,
                'type': 'MISSING',
                'message': f'Câu {q_id} có trong .docx nhưng không có trong cand-questions.ts'
            })
    
    # Check for wrong answers
    wrong_answers = []
    for q_id in ts_questions:
        if q_id in [q['id'] for q in docx_questions]:
            docx_q = next(q for q in docx_questions if q['id'] == q_id)
            ts_q = ts_questions[q_id]
            
            if docx_q['correctAnswer'] != ts_q['correctAnswer']:
                wrong_answers.append(q_id)
                errors.append({
                    'id': q_id,
                    'type': 'WRONG_ANSWER',
                    'docx_answer': docx_q['correctAnswer'],
                    'ts_answer': ts_q['correctAnswer'],
                    'message': f'Câu {q_id}: Đáp án trong .docx là {docx_q["correctAnswer"]}, trong .ts là {ts_q["correctAnswer"]}'
                })
    
    # Print summary
    print("=" * 80)
    print("📋 AUDIT SUMMARY")
    print("=" * 80)
    print()
    
    if missing_in_ts:
        print(f"❌ Missing in .ts file: {len(missing_in_ts)} questions")
        print(f"   Questions: {missing_in_ts[:10]}..." if len(missing_in_ts) > 10 else f"   Questions: {missing_in_ts}")
        print()
    
    if wrong_answers:
        print(f"⚠️  Wrong answers: {len(wrong_answers)} questions")
        for q_id in wrong_answers[:10]:
            docx_q = next(q for q in docx_questions if q['id'] == q_id)
            ts_q = ts_questions[q_id]
            print(f"   Câu {q_id}: .docx={docx_q['correctAnswer']}, .ts={ts_q['correctAnswer']}")
        if len(wrong_answers) > 10:
            print(f"   ...and {len(wrong_answers) - 10} more")
        print()
    
    if not missing_in_ts and not wrong_answers:
        print("✅ All questions match! No errors found.")
        print()
    
    print(f"Total errors: {len(errors)}")
    
    # Save detailed report
    with open('audit_errors.json', 'w', encoding='utf-8') as f:
        json.dump(errors, f, ensure_ascii=False, indent=2)
    
    print(f"📄 Detailed errors saved to: audit_errors.json")
    
    return errors

if __name__ == '__main__':
    compare_questions()
