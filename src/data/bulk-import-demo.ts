/**
 * Bulk Image Import Demo - CSV Example
 * 
 * This file demonstrates how to bulk import images from CSV format.
 * Run this script to add images to multiple questions at once.
 * 
 * Usage:
 * 1. Prepare your CSV file with questionId and imageUrl columns
 * 2. Import and run the functions from this file
 * 3. The questions will be updated with images
 */

import type { Question } from './question-types';
import { questions } from './questions';
import { parseCSVMappings, applyImageMappings, getImageStats } from './bulk-import-helper';

/**
 * Example CSV data for bulk import
 * 
 * Format: questionId,imageUrl
 * - questionId: The ID of the question to add image to
 * - imageUrl: The URL of the image (HTTPS recommended)
 */
const exampleCSV = `questionId,imageUrl
1,https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format&fit=crop
2,https://images.unsplash.com/photo-1502726299822-6f583f972e02?w=800&auto=format&fit=crop
3,https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop
4,https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&auto=format&fit=crop
5,https://images.unsplash.com/photo-1666816312206-c7b7285469b0?w=800&auto=format&fit=crop`;

/**
 * Demo function: Apply CSV mappings to questions
 */
export function demoCSVImport() {
  console.log('=== Bulk Image Import Demo ===\n');
  
  // Step 1: Show original stats
  const statsBefore = getImageStats(questions);
  console.log('📊 Before import:');
  console.log(`   Total questions: ${statsBefore.total}`);
  console.log(`   With images: ${statsBefore.withImages}`);
  console.log(`   Coverage: ${statsBefore.percentage}%\n`);
  
  // Step 2: Parse CSV
  console.log('📄 Parsing CSV data...');
  const mappings = parseCSVMappings(exampleCSV);
  console.log(`   Found ${Object.keys(mappings).length} image mappings\n`);
  
  // Step 3: Apply mappings
  console.log('🔄 Applying images to questions...');
  const updatedQuestions = applyImageMappings(questions, mappings);
  
  // Step 4: Show updated stats
  const statsAfter = getImageStats(updatedQuestions);
  console.log('✅ After import:');
  console.log(`   Total questions: ${statsAfter.total}`);
  console.log(`   With images: ${statsAfter.withImages}`);
  console.log(`   Coverage: ${statsAfter.percentage}%\n`);
  
  // Step 5: Show summary
  const added = statsAfter.withImages - statsBefore.withImages;
  console.log(`🎉 Successfully added ${added} images!`);
  console.log(`   New coverage: ${statsAfter.percentage}% (was ${statsBefore.percentage}%)\n`);
  
  return updatedQuestions;
}

/**
 * Example: Create your own CSV mapping
 * 
 * You can create a CSV string like this and use parseCSVMappings()
 */
export const yourCustomCSV = `questionId,imageUrl
10,https://example.com/your-image-1.png
20,https://example.com/your-image-2.png
30,https://example.com/your-image-3.png`;

/**
 * Example: Import from file (in real scenario)
 * 
 * In a real application, you might load CSV from a file:
 * 
 * ```typescript
 * import fs from 'fs';
 * const csvData = fs.readFileSync('image-mappings.csv', 'utf-8');
 * const mappings = parseCSVMappings(csvData);
 * const updated = applyImageMappings(questions, mappings);
 * ```
 */

// Uncomment to run the demo
// console.log('Running bulk import demo...\n');
// demoCSVImport();

/**
 * Quick Usage Example
 * ====================
 * 
 * 1. Import the functions:
 *    import { parseCSVMappings, applyImageMappings } from './bulk-import-helper';
 * 
 * 2. Prepare CSV data:
 *    const csv = `questionId,imageUrl
 *    101,https://example.com/sign1.png
 *    102,https://example.com/sign2.png`;
 * 
 * 3. Parse and apply:
 *    const mappings = parseCSVMappings(csv);
 *    const updated = applyImageMappings(questions, mappings);
 * 
 * 4. Use the updated questions:
 *    export const questions = updated;
 */

export { parseCSVMappings, applyImageMappings, getImageStats };
