/**
 * Bulk Import Helper for Question Images
 * 
 * Utility functions to bulk import and manage images for visual questions.
 * Supports CSV, JSON formats and provides validation/statistics.
 */

import type { Question } from './question-types';

/**
 * Image mapping type: questionId -> imageUrl
 */
export type ImageMapping = Record<number, string>;

/**
 * Apply image mappings to a question array
 * 
 * @param questions - Array of questions to update
 * @param mappings - Object mapping question IDs to image URLs
 * @returns Updated questions array with images applied
 * 
 * @example
 * ```ts
 * const mappings = { 101: "https://example.com/sign1.png", 102: "https://example.com/sign2.png" };
 * const updated = applyImageMappings(questions, mappings);
 * ```
 */
export function applyImageMappings(
  questions: Question[],
  mappings: ImageMapping
): Question[] {
  return questions.map(q => ({
    ...q,
    image: mappings[q.id] || q.image
  }));
}

/**
 * Parse CSV data into image mappings
 * 
 * Expected CSV format:
 * ```
 * questionId,imageUrl
 * 101,https://example.com/sign1.png
 * 102,https://example.com/sign2.png
 * ```
 * 
 * @param csvData - CSV string with header row
 * @returns ImageMapping object
 * 
 * @example
 * ```ts
 * const csv = `questionId,imageUrl
 * 101,https://example.com/sign1.png
 * 102,https://example.com/sign2.png`;
 * const mappings = parseCSVMappings(csv);
 * ```
 */
export function parseCSVMappings(csvData: string): ImageMapping {
  const mappings: ImageMapping = {};
  const lines = csvData.trim().split('\n');
  
  // Skip header row
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const [idStr, url] = line.split(',').map(s => s.trim());
    const id = parseInt(idStr);
    
    if (!isNaN(id) && url) {
      mappings[id] = url;
    }
  }
  
  return mappings;
}

/**
 * Parse JSON object into image mappings
 * 
 * Expected JSON format:
 * ```json
 * {
 *   "101": "https://example.com/sign1.png",
 *   "102": "https://example.com/sign2.png"
 * }
 * ```
 * 
 * @param jsonData - Object with string keys (question IDs) and URL values
 * @returns ImageMapping object
 * 
 * @example
 * ```ts
 * const json = { "101": "https://example.com/sign1.png", "102": "https://example.com/sign2.png" };
 * const mappings = parseJSONMappings(json);
 * ```
 */
export function parseJSONMappings(jsonData: Record<string, string>): ImageMapping {
  const mappings: ImageMapping = {};
  
  for (const [idStr, url] of Object.entries(jsonData)) {
    const id = parseInt(idStr);
    if (!isNaN(id) && url) {
      mappings[id] = url;
    }
  }
  
  return mappings;
}

/**
 * Validate image URLs by attempting to fetch them
 * 
 * @param mappings - Image mappings to validate
 * @returns Object with valid and invalid URL lists
 * 
 * @example
 * ```ts
 * const mappings = { 101: "https://example.com/sign1.png", 102: "https://invalid.com/bad.png" };
 * const result = await validateImageURLs(mappings);
 * console.log(`Valid: ${result.valid.length}, Invalid: ${result.invalid.length}`);
 * ```
 */
export async function validateImageURLs(mappings: ImageMapping): Promise<{
  valid: number[];
  invalid: number[];
}> {
  const valid: number[] = [];
  const invalid: number[] = [];
  
  for (const [id, url] of Object.entries(mappings)) {
    const questionId = parseInt(id);
    
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (response.ok) {
        valid.push(questionId);
      } else {
        invalid.push(questionId);
      }
    } catch (error) {
      invalid.push(questionId);
    }
  }
  
  return { valid, invalid };
}

/**
 * Generate CSV template for adding images to questions
 * 
 * @param questions - Questions array
 * @param onlyWithoutImages - If true, only include questions without images
 * @returns CSV string ready to fill in
 * 
 * @example
 * ```ts
 * const template = generateCSVTemplate(questions, true); // Only questions without images
 * console.log(template);
 * // Output:
 * // questionId,imageUrl
 * // 101,
 * // 102,
 * ```
 */
export function generateCSVTemplate(
  questions: Question[],
  onlyWithoutImages: boolean = false
): string {
  const filtered = onlyWithoutImages 
    ? questions.filter(q => !q.image)
    : questions;
  
  const rows = filtered.map(q => `${q.id},`);
  return ['questionId,imageUrl', ...rows].join('\n');
}

/**
 * Get statistics about image coverage in questions
 * 
 * @param questions - Questions array
 * @returns Statistics object
 * 
 * @example
 * ```ts
 * const stats = getImageStats(questions);
 * console.log(`Coverage: ${stats.percentage}% (${stats.withImages}/${stats.total})`);
 * ```
 */
export function getImageStats(questions: Question[]): {
  total: number;
  withImages: number;
  withoutImages: number;
  percentage: number;
} {
  const total = questions.length;
  const withImages = questions.filter(q => q.image).length;
  const withoutImages = total - withImages;
  const percentage = total > 0 ? Math.round((withImages / total) * 100) : 0;
  
  return {
    total,
    withImages,
    withoutImages,
    percentage
  };
}
