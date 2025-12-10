#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re, csv, json, os

def load_image_mappings():
    image_map = {}
    try:
        with open('image-mappings-extracted.csv', 'r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            for row in reader:
                q_id_key = next((k for k in row.keys() if 'questionId' in k), None)
                if q_id_key:
                    q_id = int(row[q_id_key])
                    image_map[q_id] = row['imageUrl']
    except Exception as e:
        print(f"Error: {e}")
    print(f"✓ Loaded {len(image_map)} image mappings")
    return image_map

def parse_questions_robust():
    questions = {}
    try:
        with open('extracted_questions_text.txt', 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Use DOTALL to match across newlines
        pattern = r'Câu\s+(\d+):\s+(.+?)(?=Câu\s+\d+:|$)'
        
        for match in re.finditer(pattern, content, re.DOTALL):
            q_id = int(match.group(1))
            q_block = match.group(2)
            
            # Find where answers start (look for space+digit+dot)
            ans_match = re.search(r'\s+\d+\.\s+', q_block)
            
            if ans_match and ans_match.start() > 10:
                q_text = q_block[:ans_match.start()].strip()
                answers_text = q_block[ans_match.start():]
            else:
                continue
            
            if not q_text or len(q_text) < 5:
                continue
            
            # Split answers by digit+dot pattern
            answers = []
            for ans in re.split(r'\s+\d+\.\s+', answers_text):
                ans = ans.strip()
                if ans:
                    answers.append(ans[:300])
            
            if len(answers) >= 2:
                questions[q_id] = {'question': q_text[:200], 'answers': answers[:4]}
        
        print(f"✓ Parsed {len(questions)} questions")
        return questions
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
        return {}

def merge_with_images(questions, image_map):
    merged = {}
    for q_id in sorted(image_map.keys()):
        if q_id in questions:
            merged[q_id] = questions[q_id].copy()
        else:
            merged[q_id] = {'question': '[To recover]', 'answers': []}
        merged[q_id]['id'] = q_id
        merged[q_id]['image'] = image_map[q_id]
        merged[q_id]['correctAnswer'] = 0
    return merged

def generate_typescript(questions):
    lines = ['export interface Question {', '  id: number;', '  question: string;', '  answers: string[];', '  correctAnswer: number;', '  image?: string;', '}', '', 'export const candQuestions: Question[] = [']
    
    for q_id in sorted(questions.keys()):
        q = questions[q_id]
        lines.append('  {')
        lines.append(f'    id: {q["id"]},')
        q_text = q.get('question', '').replace('\\', '\\\\').replace('"', '\\"')
        lines.append(f'    question: "{q_text}",')
        answers = [f'"{ans.replace(chr(92), chr(92)*2).replace(chr(34), chr(92)+chr(34))}"' for ans in q.get('answers', [])]
        lines.append(f'    answers: [{", ".join(answers)}],')
        lines.append(f'    correctAnswer: {q.get("correctAnswer", 0)},')
        if 'image' in q:
            lines.append(f'    image: "{q["image"]}",')
        lines.append('  },')
    lines.append('];')
    return '\n'.join(lines)

print("="*70)
print("RESTORING QUESTIONS")
print("="*70)

image_map = load_image_mappings()
if not image_map:
    print("ERROR: No mappings!")
    exit()

print("\nParsing text...")
questions = parse_questions_robust()
if not questions:
    print("ERROR: No questions!")
    exit()

print("Merging...")
merged = merge_with_images(questions, image_map)

with_text = sum(1 for q in merged.values() if '[To' not in q.get('question', ''))
with_answers = sum(1 for q in merged.values() if q.get('answers'))
with_images = len([q for q in merged.values() if 'image' in q])

print(f"\n✓ {len(merged)} total questions")
print(f"  • Text: {with_text}")
print(f"  • Answers: {with_answers}")
print(f"  • Images: {with_images}")

print("\nGenerating TypeScript...")
ts_code = generate_typescript(merged)

output_file = 'src/data/cand-questions.ts'
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(ts_code)

print(f"✓ Written to {output_file}")

# Check BOM
with open(output_file, 'rb') as f:
    if f.read(3) == b'\xef\xbb\xbf':
        print("Fixing BOM...")
        with open(output_file, 'r', encoding='utf-8-sig') as f:
            content = f.read()
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(content)

print("\n" + "="*70)
print("✅ COMPLETE")
print("="*70)
