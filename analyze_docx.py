#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Script để phân tích cấu trúc file .docx để hiểu layout
"""

from docx import Document

def analyze_docx_structure(docx_path):
    """Phân tích cấu trúc file .docx"""
    doc = Document(docx_path)
    
    print("🔍 Phân tích cấu trúc file .docx...\n")
    
    for idx, para in enumerate(doc.paragraphs[:50]):  # In 50 paragraph đầu
        text = para.text.strip()
        if text:
            # Kiểm tra underline
            has_underline = False
            for run in para.runs:
                if run.underline or (run.font and run.font.underline):
                    has_underline = True
                    break
            
            style = para.style.name if para.style else "None"
            underline_marker = "🔴 UNDERLINE" if has_underline else ""
            
            print(f"[{idx}] Style: {style:20} | {text[:80]:<80} {underline_marker}")

if __name__ == "__main__":
    analyze_docx_structure("500 câu hoi CAND.docx")
