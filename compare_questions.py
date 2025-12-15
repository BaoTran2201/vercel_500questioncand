#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Script để so sánh dữ liệu giữa audit_docx_questions.json và cand-questions.ts
Phát hiện các câu hỏi có đáp án sai
"""

import json
import re

def load_docx_questions():
    """Load questions từ audit_docx_questions.json"""
    with open('audit_docx_questions.json', 'r', encoding='utf-8') as f:
        return json.load(f)

def load_ts_questions():
    """Load questions từ cand-questions.ts"""
    with open('src/data/cand-questions.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Trích xuất JSON array từ TypeScript
    # Tìm dòng "export const candQuestions: Question[] = ["
    match = re.search(r'export const candQuestions: Question\[\]\s*=\s*\[(.*)\];', content, re.DOTALL)
    if not match:
        print("❌ Không tìm thấy candQuestions array")
        return []
    
    # Thay thế TypeScript syntax bằng JSON valid
    json_str = '[' + match.group(1) + ']'
    
    # Parse JSON
    try:
        questions = json.loads(json_str)
        return questions
    except json.JSONDecodeError as e:
        print(f"❌ Lỗi parse JSON: {e}")
        return []

def compare_questions(docx_qs, ts_qs):
    """So sánh danh sách câu hỏi"""
    errors = []
    
    # Duyệt qua từng câu trong docx
    for docx_q in docx_qs:
        docx_id = docx_q['id']
        
        # Tìm câu tương ứng trong ts
        ts_q = None
        for q in ts_qs:
            if q['id'] == docx_id:
                ts_q = q
                break
        
        if ts_q is None:
            errors.append({
                'id': docx_id,
                'type': 'MISSING',
                'message': f'Câu {docx_id} có trong .docx nhưng không có trong cand-questions.ts'
            })
            continue
        
        # So sánh đáp án đúng
        if docx_q['correctAnswer'] != ts_q['correctAnswer']:
            docx_correct = docx_q['correctAnswer']
            ts_correct = ts_q['correctAnswer']
            
            docx_ans_text = docx_q['answers'][docx_correct] if docx_correct is not None else "NULL"
            ts_ans_text = ts_q['answers'][ts_correct] if ts_correct is not None else "NULL"
            
            errors.append({
                'id': docx_id,
                'type': 'WRONG_ANSWER',
                'question': docx_q['question'][:60],
                'docx_correct': f"{chr(65 + docx_correct) if docx_correct is not None else '?'} ({docx_correct})",
                'ts_correct': f"{chr(65 + ts_correct) if ts_correct is not None else '?'} ({ts_correct})",
                'docx_answer': docx_ans_text[:40],
                'ts_answer': ts_ans_text[:40] if ts_ans_text != "NULL" else "NULL"
            })
    
    return errors

def main():
    print("🔍 Đang load dữ liệu...")
    docx_qs = load_docx_questions()
    ts_qs = load_ts_questions()
    
    print(f"✅ Docx: {len(docx_qs)} câu")
    print(f"✅ TypeScript: {len(ts_qs)} câu")
    
    print("\n🔎 Đang so sánh...")
    errors = compare_questions(docx_qs, ts_qs)
    
    if not errors:
        print("✅ Không tìm thấy lỗi! Dữ liệu khớp 100%")
        return
    
    print(f"\n❌ Tìm thấy {len(errors)} lỗi:\n")
    
    for err in errors:
        print(f"{'='*80}")
        print(f"Câu {err['id']}")
        
        if err['type'] == 'MISSING':
            print(f"⚠️  {err['message']}")
        elif err['type'] == 'WRONG_ANSWER':
            print(f"📝 {err['question']}")
            print(f"   Tài liệu gốc (.docx): {err['docx_correct']} → {err['docx_answer']}")
            print(f"   Code hiện tại (.ts):   {err['ts_correct']} → {err['ts_answer']}")
    
    # Lưu danh sách lỗi ra JSON
    with open('audit_errors.json', 'w', encoding='utf-8') as f:
        json.dump(errors, f, ensure_ascii=False, indent=2)
    
    print(f"\n💾 Danh sách lỗi lưu vào: audit_errors.json")

if __name__ == "__main__":
    main()
