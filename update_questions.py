#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import json
from typing import Dict, List, Tuple

# Read the markdown file
md_file = 'src/data/cand-question.md'
ts_file = 'src/data/cand-questions.ts'

with open(md_file, 'r', encoding='utf-8') as f:
    md_content = f.read()

# Parse questions from markdown
# Pattern: { id: number, question: string, answers: [...], correctAnswer: number }
pattern = r'\{\s*id:\s*(\d+),\s*question:\s*"([^"]+)",\s*answers:\s*\[(.*?)\],\s*correctAnswer:\s*(\d+),?\s*\}'

questions_dict = {}

for match in re.finditer(pattern, md_content, re.DOTALL):
    q_id = int(match.group(1))
    question = match.group(2)
    answers_str = match.group(3)
    correct_answer = int(match.group(4))
    
    # Parse answers array
    answers = []
    # Extract strings from answers: "answer 1", "answer 2", ...
    answer_pattern = r'"([^"]*)"'
    for ans_match in re.finditer(answer_pattern, answers_str):
        answers.append(ans_match.group(1))
    
    questions_dict[q_id] = {
        'id': q_id,
        'question': question,
        'answers': answers,
        'correctAnswer': correct_answer
    }

print(f"Parsed {len(questions_dict)} questions from markdown")
print(f"Questions IDs: {sorted(questions_dict.keys())[:10]}... to {sorted(questions_dict.keys())[-10:]}")

# Read current TypeScript file
with open(ts_file, 'r', encoding='utf-8-sig') as f:
    ts_content = f.read()

# Update each question in TypeScript
ts_lines = ts_content.split('\n')
output_lines = []
i = 0

while i < len(ts_lines):
    line = ts_lines[i]
    
    # Check if this line contains 'id:'
    id_match = re.search(r'id:\s*(\d+),', line)
    
    if id_match:
        q_id = int(id_match.group(1))
        
        # Extract full question block (from { to matching })
        block_start = i
        block_lines = [line]
        brace_count = line.count('{') - line.count('}')
        i += 1
        
        while i < len(ts_lines) and brace_count > 0:
            current_line = ts_lines[i]
            block_lines.append(current_line)
            brace_count += current_line.count('{') - current_line.count('}')
            i += 1
        
        # Now update the question block if found in dictionary
        if q_id in questions_dict:
            md_q = questions_dict[q_id]
            
            # Reconstruct the block with updated data
            updated_block = f"""  {{
    id: {q_id},
    question: "{md_q['question']}",
    answers: {json.dumps(md_q['answers'], ensure_ascii=False)},
    correctAnswer: {md_q['correctAnswer']},
    image: "/images/question_{q_id}.jpeg",
  }},"""
            
            output_lines.append(updated_block)
            print(f"✓ Updated question {q_id}")
        else:
            # Keep original block
            output_lines.extend(block_lines)
    else:
        output_lines.append(line)
        i += 1

# Join and write output
output_content = '\n'.join(output_lines)

# Fix JSON.dumps output formatting (remove spaces after commas in arrays)
output_content = re.sub(r'",\s*"', '", "', output_content)

with open(ts_file, 'w', encoding='utf-8') as f:
    f.write(output_content)

print(f"\n✅ Successfully updated {ts_file}")
print(f"Total questions updated: {len(questions_dict)}")
