# Image Import Guide for Road Traffic Law Exam

This guide explains how to add images to questions in the exam system for visual-based questions like traffic signs, road scenarios, and situational diagrams.

## Quick Start

### Adding Images to Individual Questions

To add an image to a question, simply include the `image` field in your question object:

```typescript
{
  id: 101,
  question: "Biển báo này có ý nghĩa gì?",
  image: "https://example.com/traffic-signs/no-entry.png",
  answers: [
    "Cấm đi ngược chiều",
    "Cấm quay đầu xe",
    "Cấm rẽ trái"
  ],
  correctAnswer: 0
}
```

## Image Source Options

### Option 1: External URLs (Recommended for testing)
Use direct HTTPS URLs to images hosted online:

```typescript
image: "https://example.com/images/traffic-sign.png"
```

### Option 2: Unsplash (For placeholder images)
Request images using the Unsplash tool for placeholder content:

```typescript
// The developer can use the unsplash_tool to get image URLs
image: "https://images.unsplash.com/photo-xxxxx"
```

### Option 3: Local Assets
Store images in a public directory and reference them:

```typescript
image: "/assets/traffic-signs/sign-001.png"
```

## Bulk Import Process

### Step 1: Prepare Your Image Files

Organize your images with a clear naming convention:

```
/public/assets/traffic-signs/
  ├── question-101-stop-sign.png
  ├── question-102-yield-sign.png
  ├── question-103-speed-limit.png
  └── ...
```

### Step 2: Create Image Mapping

Create a mapping object that links question IDs to image paths:

```typescript
// data/image-mappings.ts
export const imageMap: Record<number, string> = {
  101: "/assets/traffic-signs/question-101-stop-sign.png",
  102: "/assets/traffic-signs/question-102-yield-sign.png",
  103: "/assets/traffic-signs/question-103-speed-limit.png",
  // ... add more mappings
};
```

### Step 3: Apply Mappings to Questions

In your questions file, import and apply the mappings:

```typescript
import { imageMap } from './image-mappings';
import type { Question } from './question-types';

export const questions: Question[] = baseQuestions.map(q => ({
  ...q,
  image: imageMap[q.id] || undefined
}));
```

## Bulk Import Script Template

For importing many images at once, you can use this template:

```typescript
// scripts/bulk-image-import.ts
import type { Question } from '../data/question-types';

/**
 * Bulk applies images to questions based on a CSV mapping
 * CSV format: questionId,imageUrl
 * 
 * Example CSV:
 * 101,https://example.com/sign1.png
 * 102,https://example.com/sign2.png
 */
function applyImagesFromCSV(
  questions: Question[], 
  csvData: string
): Question[] {
  const mappings = new Map<number, string>();
  
  // Parse CSV
  const lines = csvData.split('\n').slice(1); // Skip header
  lines.forEach(line => {
    const [id, url] = line.split(',');
    if (id && url) {
      mappings.set(parseInt(id), url.trim());
    }
  });
  
  // Apply mappings
  return questions.map(q => ({
    ...q,
    image: mappings.get(q.id) || q.image
  }));
}
```

## Image Specifications

### Recommended Format
- **Format**: PNG or JPG
- **Max Width**: 800px (automatically scales for mobile)
- **Max File Size**: 200KB for optimal loading
- **Aspect Ratio**: 16:9 or 4:3 for best display

### Traffic Sign Images
- Clear, high-contrast images
- Centered subject
- Minimal background distractions
- Good lighting conditions

### Road Scenario Images
- Clear lane markings
- Visible traffic conditions
- Appropriate perspective angle
- Sufficient context for question

## How Images Are Displayed

### Study Mode
- Image appears between question header and answer options
- Full-width responsive container
- Rounded corners with border
- Light gray background section

### Test Mode
- Same layout as Study Mode during the test
- In results view, images shown inline with question text
- Max width constraints for better readability

### Responsive Behavior
- **Desktop**: Full width up to container max
- **Tablet**: Scales proportionally
- **Mobile**: Full width with proper aspect ratio
- All sizes maintain image quality with automatic scaling

## Accessibility

All images automatically include:
- `alt` text: "Question {id}" for screen readers
- Fallback handling if image fails to load
- Proper semantic HTML structure

## Example Questions with Images

```typescript
const visualQuestions: Question[] = [
  {
    id: 201,
    question: "Biển báo này có ý nghĩa gì?",
    image: "https://example.com/signs/stop-sign.png",
    answers: [
      "Dừng lại",
      "Giảm tốc độ",
      "Nhường đường"
    ],
    correctAnswer: 0
  },
  {
    id: 202,
    question: "Trong tình huống này, xe nào được quyền đi trước?",
    image: "https://example.com/scenarios/intersection-1.png",
    answers: [
      "Xe màu đỏ",
      "Xe màu xanh",
      "Cả hai xe cùng đi"
    ],
    correctAnswer: 1
  },
  {
    id: 203,
    question: "Đây là loại vạch kẻ đường nào?",
    image: "https://example.com/markings/road-marking-1.png",
    answers: [
      "Vạch liền - cấm vượt",
      "Vạch đứt - được phép vượt",
      "Vạch kép - đường một chiều"
    ],
    correctAnswer: 0
  }
];
```

## Troubleshooting

### Image Not Displaying
1. Check that the URL is valid and accessible
2. Verify CORS headers if using external URLs
3. Ensure image format is supported (PNG, JPG, WebP)
4. Check browser console for loading errors

### Image Too Large/Small
- The system automatically scales images responsively
- For very large images, consider optimizing before upload
- Minimum recommended width: 400px

### Bulk Import Issues
1. Verify CSV format matches expected structure
2. Check that all question IDs exist in your question set
3. Ensure URLs are properly formatted (no spaces or special characters)
4. Test with a small batch first before bulk importing

## Best Practices

1. **Consistency**: Use similar image styles throughout your question set
2. **Optimization**: Compress images before upload to improve load times
3. **Naming**: Use descriptive file names that include question ID
4. **Testing**: Always test images on both mobile and desktop views
5. **Fallback**: Never rely solely on images - ensure question text is clear
6. **Copyright**: Only use images you have rights to use

## Support

For questions about image implementation:
- Review the Question type definition in `/data/question-types.ts`
- Check existing implementations in `/components/StudyMode.tsx` and `/components/TestMode.tsx`
- See the ImageWithFallback component at `/components/figma/ImageWithFallback.tsx`
