#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Parser cải tiến để đọc file .docx
Logic: Tìm "Câu X:" -> Tập hợp phương án (1., 2., 3., 4.) -> Xác định cái nào gạch chân
"""

import re
import json
from docx import Document

def is_underlined(para):
    """Kiểm tra xem paragraph có gạch chân không"""
    for run in para.runs:
        if run.underline:
            return True
        if run.font and run.font.underline:
            return True
    return False

def extract_questions_v2(docx_path):
    """Extract questions từ .docx với logic mới"""
    doc = Document(docx_path)
    
    questions = []
    current_q = None
    current_answers = []
    underlined_option = None
    
    paras = doc.paragraphs
    i = 0
    
    while i < len(paras):
        para = paras[i]
        text = para.text.strip()
        
        # Tìm "Câu X:"
        if text.startswith("Câu "):
            # Lưu câu trước đó nếu có
            if current_q is not None:
                correct_idx = None
                if underlined_option is not None:
                    correct_idx = underlined_option - 1  # Convert từ 1,2,3,4 sang 0,1,2,3
                
                questions.append({
                    'id': len(questions) + 1,
                    'question': current_q,
                    'answers': current_answers,
                    'correctAnswer': correct_idx
                })
            
            # Reset cho câu mới
            # Trích nội dung câu hỏi (sau "Câu X:")
            match = re.match(r'Câu\s+\d+:\s*(.*)', text)
            if match:
                current_q = match.group(1)
            else:
                current_q = text
            
            current_answers = []
            underlined_option = None
        
        # Tìm phương án (1., 2., 3., 4.)
        elif re.match(r'^[1-4]\.\s+', text):
            # Trích số (1, 2, 3, 4) và nội dung
            match = re.match(r'^([1-4])\.\s+(.*)', text)
            if match:
                option_num = int(match.group(1))
                option_text = match.group(2)
                
                current_answers.append(option_text)
                
                # Kiểm tra gạch chân
                if is_underlined(para):
                    underlined_option = option_num
        
        i += 1
    
    # Xử lý câu cuối cùng
    if current_q is not None:
        correct_idx = None
        if underlined_option is not None:
            correct_idx = underlined_option - 1
        
        questions.append({
            'id': len(questions) + 1,
            'question': current_q,
            'answers': current_answers,
            'correctAnswer': correct_idx
        })
    
    return questions

def main():
    print("🔍 Đang đọc file .docx với parser cải tiến...")
    
    questions = extract_questions_v2("500 câu hoi CAND.docx")
    
    print(f"✅ Đã trích xuất {len(questions)} câu hỏi")
    
    # Lưu JSON
    with open("audit_docx_questions.json", 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)
    
    print(f"💾 Lưu vào: audit_docx_questions.json")
    
    # Hiển thị mẫu
    print("\n📋 Mẫu 10 câu đầu tiên:")
    for q in questions[:10]:
        print(f"\nCâu {q['id']}: {q['question'][:70]}")
        correct_marker = q['correctAnswer'] if q['correctAnswer'] is not None else "?"
        for i, ans in enumerate(q['answers']):
            marker = "✓" if i == q['correctAnswer'] else " "
            print(f"  {marker} {chr(65+i)}) {ans[:60]}")
        print(f"  → Đáp án: {chr(65 + correct_marker) if correct_marker is not None else 'CHƯA XÁC ĐỊNH'}")

if __name__ == "__main__":
    main()
