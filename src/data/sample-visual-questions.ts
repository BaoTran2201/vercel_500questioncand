/**
 * Sample Visual Questions with Traffic Sign Images
 * 
 * This file contains example questions with images to demonstrate
 * the image support system. These can be used for testing or as
 * templates for creating your own visual questions.
 */

import type { Question } from './question-types';

/**
 * Sample questions with real traffic sign images from Unsplash
 * IDs: 501-505 (to avoid conflicts with existing questions)
 */
export const sampleVisualQuestions: Question[] = [
  
];

/**
 * Helper function to add visual questions to existing question set
 * 
 * @param existingQuestions - Your current questions array
 * @param checkDuplicates - If true, checks for ID conflicts (default: true)
 * @param startId - Starting ID for sample questions if conflicts found (default: 501)
 * @returns Combined questions array
 * 
 * @example
 * ```ts
 * import { questions as baseQuestions } from './questions';
 * import { addVisualQuestions } from './sample-visual-questions';
 * 
 * export const questions = addVisualQuestions(baseQuestions);
 * ```
 */
export function addVisualQuestions(
  existingQuestions: Question[],
  checkDuplicates: boolean = true,
  startId: number = 501
): Question[] {
  if (!checkDuplicates) {
    return [...existingQuestions, ...sampleVisualQuestions];
  }
  
  // Check for ID conflicts
  const existingIds = new Set(existingQuestions.map(q => q.id));
  const hasConflict = sampleVisualQuestions.some(q => existingIds.has(q.id));
  
  if (!hasConflict) {
    return [...existingQuestions, ...sampleVisualQuestions];
  }
  
  // Reassign IDs if conflicts found
  console.warn('ID conflicts detected. Reassigning sample question IDs...');
  const reassigned = sampleVisualQuestions.map((q, index) => ({
    ...q,
    id: startId + index
  }));
  
  return [...existingQuestions, ...reassigned];
}
