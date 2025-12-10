# Integration Example: Adding Images to Questions

This document provides complete examples of how to integrate images into your question system.

## Example 1: Manual Addition (Single Questions)

### Step 1: Add image to a single question

```typescript
// In questions.ts or cand-questions.ts
const questionWithImage: Question = {
  id: 150,
  question: 'Biển báo này có ý nghĩa gì?',
  image: 'https://example.com/traffic-signs/yield.png',
  answers: [
    'Nhường đường cho xe đi ngược chiều',
    'Dừng lại và nhường đường',
    'Giảm tốc độ và nhường đường cho xe ưu tiên',
  ],
  correctAnswer: 2
};
```

### Step 2: Verify rendering

The image will automatically display in both Study Mode and Test Mode:
- Above the question text
- Centered in a gray background section
- Responsive sizing (max-width on desktop, full-width on mobile)
- With proper alt text for accessibility

---

## Example 2: Bulk Addition Using CSV

### Step 1: Prepare your CSV file

Create a file `image-mappings.csv`:

```csv
questionId,imageUrl
101,https://images.unsplash.com/photo-1234/stop-sign.jpg
102,https://images.unsplash.com/photo-5678/yield-sign.jpg
103,https://images.unsplash.com/photo-9012/speed-limit.jpg
150,https://images.unsplash.com/photo-3456/pedestrian.jpg
```

### Step 2: Use the bulk import helper

```typescript
// In a setup script or in questions.ts
import { questions } from './questions';
import { parseCSVMappings, applyImageMappings } from './bulk-import-helper';

// Your CSV data (could be loaded from file)
const csvData = `questionId,imageUrl
101,https://images.unsplash.com/photo-1234/stop-sign.jpg
102,https://images.unsplash.com/photo-5678/yield-sign.jpg
103,https://images.unsplash.com/photo-9012/speed-limit.jpg`;

// Parse and apply
const mappings = parseCSVMappings(csvData);
const updatedQuestions = applyImageMappings(questions, mappings);

export { updatedQuestions as questions };
```

---

## Example 3: Using JSON Format

### Step 1: Create JSON mapping file

Create `image-mappings.json`:

```json
{
  "101": "https://example.com/signs/stop.png",
  "102": "https://example.com/signs/yield.png",
  "103": "https://example.com/signs/speed-limit.png",
  "150": "https://example.com/signs/pedestrian.png"
}
```

### Step 2: Import and apply

```typescript
import { questions } from './questions';
import { parseJSONMappings, applyImageMappings } from './bulk-import-helper';
import imageMappings from './image-mappings.json';

const mappings = parseJSONMappings(imageMappings);
const updatedQuestions = applyImageMappings(questions, mappings);

export { updatedQuestions as questions };
```

---

## Example 4: Adding Sample Visual Questions

### Quick Start with Pre-built Examples

```typescript
// In questions.ts
import type { Question } from './question-types';
import { candQuestions } from './cand-questions';
import { sampleVisualQuestions, addVisualQuestions } from './sample-visual-questions';

const baseQuestions: Question[] = [
  // ... your existing questions
];

// Combine with sample visual questions
export const questions = addVisualQuestions(
  [...baseQuestions, ...candQuestions],
  sampleVisualQuestions,
  501 // Start IDs from 501
);
```

This will add 5 sample questions with traffic sign images to your question set.

---

## Example 5: Dynamic Image Assignment

### Assign images based on question content

```typescript
import type { Question } from './question-types';

// Mapping keywords to image categories
const imageCategories = {
  'biển báo': 'traffic-sign',
  'vạch kẻ đường': 'road-marking',
  'giao lộ': 'intersection',
  'người đi bộ': 'pedestrian'
};

function assignImagesAutomatically(questions: Question[]): Question[] {
  return questions.map(q => {
    // Check if question already has an image
    if (q.image) return q;
    
    // Look for keywords in question text
    const questionLower = q.question.toLowerCase();
    
    for (const [keyword, category] of Object.entries(imageCategories)) {
      if (questionLower.includes(keyword)) {
        // Assign appropriate image based on category
        return {
          ...q,
          image: `/assets/${category}/question-${q.id}.png`
        };
      }
    }
    
    return q;
  });
}

// Usage
const questionsWithImages = assignImagesAutomatically(baseQuestions);
```

---

## Example 6: Validation Before Deployment

### Ensure all images are valid

```typescript
import { questions } from './questions';
import { validateImageURLs, getImageStats } from './bulk-import-helper';

async function validateQuestionImages() {
  // Get questions with images
  const questionsWithImages = questions.filter(q => q.image);
  
  // Create mappings for validation
  const mappings = questionsWithImages.map(q => ({
    questionId: q.id,
    imageUrl: q.image!
  }));
  
  // Validate
  console.log('Validating image URLs...');
  const results = await validateImageURLs(mappings);
  
  console.log(`✓ Valid: ${results.valid.length}`);
  console.log(`✗ Invalid: ${results.invalid.length}`);
  
  if (results.invalid.length > 0) {
    console.log('\nInvalid images:');
    results.invalid.forEach(m => {
      console.log(`  Question ${m.questionId}: ${m.imageUrl}`);
    });
  }
  
  // Get overall stats
  const stats = getImageStats(questions);
  console.log(`\nImage Coverage: ${stats.percentage}% (${stats.withImages}/${stats.total})`);
}

// Run validation
validateQuestionImages();
```

---

## Example 7: Progressive Image Loading

### Add images to existing questions over time

```typescript
// Create a staging area for new images
const pendingImages: Record<number, string> = {
  // Add new images here as they become available
  101: 'https://example.com/new-sign.png',
  102: 'https://example.com/another-sign.png',
};

// Merge with existing questions
export const questions = baseQuestions.map(q => ({
  ...q,
  image: pendingImages[q.id] || q.image
}));
```

---

## Example 8: Conditional Images (Environment-based)

### Use different images for development vs production

```typescript
const isDevelopment = process.env.NODE_ENV === 'development';

const imageBasePath = isDevelopment
  ? 'http://localhost:3000/dev-assets'
  : 'https://cdn.yoursite.com/assets';

export const questions = baseQuestions.map(q => {
  if (!q.image) return q;
  
  // Convert relative paths to full URLs
  const imageUrl = q.image.startsWith('http')
    ? q.image
    : `${imageBasePath}${q.image}`;
  
  return { ...q, image: imageUrl };
});
```

---

## Example 9: Generate Missing Image Report

### Identify which questions need images

```typescript
import { questions } from './questions';
import { generateCSVTemplate } from './bulk-import-helper';

// Generate template for questions without images
const template = generateCSVTemplate(questions, true);

console.log('CSV Template for questions missing images:');
console.log(template);

// Save to file or copy to clipboard
// You can then fill in the imageUrl column and import
```

---

## Example 10: Complete Integration

### Full example with all features

```typescript
// questions.ts - Complete integration
import type { Question } from './question-types';
import { candQuestions } from './cand-questions';
import { sampleVisualQuestions } from './sample-visual-questions';
import { 
  applyImageMappings, 
  parseJSONMappings,
  getImageStats 
} from './bulk-import-helper';

// Base questions without images
const baseQuestions: Question[] = [
  {
    id: 1,
    question: 'Trong Luật TTATGTĐB, "đường ưu tiên" được quy định như thế nào?',
    answers: [
      'Đường ưu tiên là đường chỉ dành cho một số loại phương tiện tham gia giao thông...',
      'Đường ưu tiên là đường mà trên đó phương tiện tham gia giao thông đường bộ phải nhường đường...',
      'Đường ưu tiên là đường mà trên đó phương tiện tham gia giao thông đường bộ được các phương tiện...'
    ],
    correctAnswer: 2
  },
  // ... more questions
];

// Optional: Load image mappings from external source
const externalImageMappings = {
  "1": "https://example.com/traffic/priority-road.png",
  "2": "https://example.com/traffic/lane-marking.png",
  // ... more mappings
};

// Apply external mappings
const questionsWithExternalImages = applyImageMappings(
  baseQuestions,
  parseJSONMappings(externalImageMappings)
);

// Combine all question sources
export const questions = [
  ...questionsWithExternalImages,
  ...candQuestions,
  ...sampleVisualQuestions
];

// Log statistics
const stats = getImageStats(questions);
console.log(`Question set loaded: ${stats.total} questions`);
console.log(`Images: ${stats.withImages} (${stats.percentage}%)`);
console.log(`Pending: ${stats.withoutImages} questions need images`);
```

---

## Testing the Integration

After integrating images, test the following:

### Visual Verification
1. Navigate to Study Mode
2. Scroll through questions with images
3. Verify images display correctly on desktop
4. Test on mobile device or use browser DevTools responsive mode

### Functional Testing
1. Ensure images don't break answer selection in Test Mode
2. Verify images appear in results review
3. Check that questions without images still work correctly
4. Test image fallback (try an invalid URL to see error handling)

### Performance Testing
1. Check page load times with images
2. Monitor network tab for image loading
3. Ensure images don't block question rendering
4. Verify responsive images load appropriate sizes

---

## Troubleshooting Common Issues

### Images Not Displaying

**Problem**: Image URLs are correct but images don't show

**Solution**:
```typescript
// Check browser console for CORS errors
// Ensure image URLs are publicly accessible
// Verify ImageWithFallback component is imported correctly
```

### Images Too Large on Mobile

**Problem**: Images overflow on small screens

**Solution**:
The responsive classes are already applied:
- `max-w-full` - Ensures image never exceeds container
- `md:max-w-2xl` - Sets max width on medium+ screens
- `h-auto` - Maintains aspect ratio

If still having issues, adjust in the component:
```typescript
className="max-w-full md:max-w-xl h-auto rounded-lg border border-gray-300 shadow-sm"
```

### Slow Page Loading

**Problem**: Too many large images slow down the page

**Solution**:
1. Optimize images before upload (max 800px width, compress to ~100KB)
2. Use WebP format for better compression
3. Consider lazy loading (future enhancement)
4. Use CDN for image hosting

---

## Best Practices Summary

1. **Image Quality**: Use clear, high-contrast images (min 400px width)
2. **File Size**: Keep under 200KB per image
3. **Consistency**: Use similar style/quality across all images
4. **Accessibility**: Alt text is auto-generated, but ensure images are clear
5. **Fallback**: Always write clear question text (don't rely solely on image)
6. **Organization**: Use consistent naming and directory structure
7. **Testing**: Test on both mobile and desktop before deploying
8. **Documentation**: Keep track of which questions have images

---

## Next Steps

After setting up images:

1. Review the sample visual questions in `/data/sample-visual-questions.ts`
2. Check the bulk import helper in `/data/bulk-import-helper.ts`
3. Read the detailed guide in `/data/IMAGE_IMPORT_GUIDE.md`
4. Review the Question type documentation in `/data/question-types.ts`
5. Start adding images to your existing questions using your preferred method

Happy image integration! 🎨📚
