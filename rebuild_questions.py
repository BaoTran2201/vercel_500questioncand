#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
from typing import Dict

md_file = 'src/data/cand-question.md'
ts_file = 'src/data/cand-questions.ts'

# Read markdown file and parse all questions
with open(md_file, 'r', encoding='utf-8') as f:
    md_content = f.read()

# Parse questions from markdown
pattern = r'\{\s*id:\s*(\d+),\s*question:\s*"([^"]+)",\s*answers:\s*\[(.*?)\],\s*correctAnswer:\s*(\d+),?\s*\}'

questions_dict = {}

for match in re.finditer(pattern, md_content, re.DOTALL):
    q_id = int(match.group(1))
    question = match.group(2)
    answers_str = match.group(3)
    correct_answer = int(match.group(4))
    
    # Parse answers array
    answers = []
    answer_pattern = r'"([^"]*)"'
    for ans_match in re.finditer(answer_pattern, answers_str):
        answers.append(ans_match.group(1))
    
    questions_dict[q_id] = {
        'id': q_id,
        'question': question,
        'answers': answers,
        'correctAnswer': correct_answer
    }

print(f"✓ Parsed {len(questions_dict)} questions from markdown")

# Build the TypeScript file from scratch
ts_output = '''export interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: number;
  image?: string;
}

export const candQuestions: Question[] = [
'''

# Sort by ID and add each question
for q_id in sorted(questions_dict.keys()):
    q = questions_dict[q_id]
    
    # Format answers array
    answers_json = ', '.join([f'"{ans}"' for ans in q['answers']])
    
    # Escape quotes in question if needed
    question_escaped = q['question'].replace('"', '\\"')
    
    ts_output += f'''  {{
    id: {q['id']},
    question: "{question_escaped}",
    answers: [{answers_json}],
    correctAnswer: {q['correctAnswer']},
    image: "/images/question_{q['id']}.jpeg",
  }},
'''

ts_output += '];\n'

# Write to file
with open(ts_file, 'w', encoding='utf-8') as f:
    f.write(ts_output)

print(f"✅ Successfully rebuilt {ts_file}")
print(f"Total questions: {len(questions_dict)}")
print(f"File size: {len(ts_output)} bytes")

# Verify by counting questions in output
count = ts_output.count('id:')
print(f"Verification: Found {count} questions in output file")
