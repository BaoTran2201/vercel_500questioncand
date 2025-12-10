#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import json
import csv
from typing import Dict, Set
from pathlib import Path

md_file = 'src/data/cand-question.md'
ts_file = 'src/data/cand-questions.ts'
csv_file = 'image-mappings-extracted02.csv'

# Load image question IDs from CSV
image_question_ids: Set[int] = set()
with open(csv_file, 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f)
    for row in reader:
        image_question_ids.add(int(row['questionId']))

print(f"✓ Loaded {len(image_question_ids)} image mappings from CSV")

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

    # Properly escape question and answers using json.dumps
    question_json = json.dumps(q['question'], ensure_ascii=False)

    # Format answers array using json.dumps
    answers_json = json.dumps(q['answers'], ensure_ascii=False)

    # Check if this question ID is in the CSV
    has_image = q_id in image_question_ids

    ts_output += f"""  {{
    id: {q['id']},
    question: {question_json},
    answers: {answers_json},
    correctAnswer: {q['correctAnswer']},
"""

    if has_image:
        ts_output += f"    image: \"/images/question_{q['id']}.jpeg\",\n"

    ts_output += "  },\n"

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
