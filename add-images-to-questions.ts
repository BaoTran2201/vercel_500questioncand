/**
 * Script to add image field to cand-questions.ts based on CSV mapping
 * Run with: npx tsx add-images-to-questions.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// Read CSV file
const csvPath = 'image-mappings-extracted.csv';
const csvContent = fs.readFileSync(csvPath, 'utf-8');

// Parse CSV to get question ID -> image URL mapping
const imageMappings = new Map<number, string>();

const lines = csvContent.split('\n');
for (let i = 1; i < lines.length; i++) { // Skip header
  const line = lines[i].trim();
  if (!line) continue;
  
  const [questionId, imageUrl] = line.split(',');
  if (questionId && imageUrl) {
    imageMappings.set(parseInt(questionId), imageUrl);
  }
}

console.log(`Loaded ${imageMappings.size} image mappings from CSV`);

// Read cand-questions.ts file
const questionsFilePath = 'src/data/cand-questions.ts';
let content = fs.readFileSync(questionsFilePath, 'utf-8');

// Add images to questions
let modifiedCount = 0;

imageMappings.forEach((imageUrl, questionId) => {
  // Find the question object with this ID
  // Pattern: id: <number>,
  const idPattern = new RegExp(`(\\{[^}]*id:\\s*${questionId}\\s*,)`, 'g');
  
  // Check if this question already has an image field
  const questionObjRegex = new RegExp(`\\{[^}]*id:\\s*${questionId}\\s*,[^}]*image:`, 's');
  
  if (questionObjRegex.test(content)) {
    console.log(`Question ${questionId} already has an image field, skipping`);
    return;
  }
  
  // Find the question block and add image field after correctAnswer
  const questionBlockRegex = new RegExp(
    `(\\{[^}]*id:\\s*${questionId}\\s*,[^}]*correctAnswer:\\s*\\d+\\s*,)`,
    's'
  );
  
  const match = content.match(questionBlockRegex);
  if (match) {
    const replacement = `${match[1]}\n    image: "${imageUrl}",`;
    content = content.replace(questionBlockRegex, replacement);
    modifiedCount++;
    console.log(`Added image to question ${questionId}: ${imageUrl}`);
  } else {
    console.warn(`Could not find question ${questionId} in file`);
  }
});

// Write back to file
fs.writeFileSync(questionsFilePath, content, 'utf-8');

console.log(`\n✅ Successfully updated ${modifiedCount} questions with images!`);
console.log(`Updated file: ${questionsFilePath}`);
