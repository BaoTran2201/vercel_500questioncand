# Quick Reference - Image Support System

## 🚀 TL;DR - Add an Image in 30 Seconds

```typescript
// In questions.ts, add to any question:
{
  id: 101,
  question: 'Biển báo này có ý nghĩa gì?',
  image: 'https://example.com/traffic-sign.png', // ← Add this line
  answers: ['Đáp án A', 'Đáp án B', 'Đáp án C'],
  correctAnswer: 0
}
```

**Done!** The image will automatically display in Study Mode and Test Mode.

---

## 📚 Common Tasks

### Add Sample Questions (5 with images)

```typescript
// In questions.ts, add at top:
import { sampleVisualQuestions } from './sample-visual-questions';

// Change the export:
export const questions = [...baseQuestions, ...candQuestions, ...sampleVisualQuestions];
```

### Bulk Import from CSV

```typescript
import { parseCSVMappings, applyImageMappings } from './bulk-import-helper';

const csv = `questionId,imageUrl
101,https://example.com/sign1.png
102,https://example.com/sign2.png`;

const mappings = parseCSVMappings(csv);
const updated = applyImageMappings(questions, mappings);
```

### Check Image Statistics

```typescript
import { getImageStats } from './bulk-import-helper';
const stats = getImageStats(questions);
console.log(`${stats.withImages}/${stats.total} questions have images`);
```

### Generate Import Template

```typescript
import { generateCSVTemplate } from './bulk-import-helper';
const template = generateCSVTemplate(questions, true); // only questions without images
console.log(template);
```

---

## 📖 File Reference

| File | Purpose |
|------|---------|
| `/data/question-types.ts` | Type definition with docs |
| `/data/sample-visual-questions.ts` | 5 example questions |
| `/data/bulk-import-helper.ts` | Utility functions |
| `/data/IMAGE_IMPORT_GUIDE.md` | Complete guide |
| `/data/INTEGRATION_EXAMPLE.md` | 10 examples |
| `/data/README_IMAGE_SYSTEM.md` | Full documentation |
| `/data/IMPLEMENTATION_CHECKLIST.md` | Testing checklist |
| `/components/StudyMode.tsx` | Study mode rendering |
| `/components/TestMode.tsx` | Test mode rendering |

---

## 🎨 Image Specs

- **Formats**: PNG, JPG, WebP
- **Max Width**: 800px recommended
- **Max Size**: 200KB recommended
- **Ratio**: 16:9 or 4:3 preferred

---

## 🔧 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Image not showing | Check URL, try in browser directly |
| Too large on mobile | Already responsive, check `md:max-w-2xl` |
| Broken image icon | Intentional fallback, URL is invalid |
| TypeScript error | Ensure `image?: string` in Question type |

---

## ✅ Pre-flight Checklist

Before deployment:

1. ✓ Question type has `image?: string` field
2. ✓ StudyMode and TestMode render images
3. ✓ Images are responsive
4. ✓ Fallback works for broken URLs
5. ✓ Vietnamese alt text is present

---

## 💡 Best Practices

1. **Always test URLs** before adding to production
2. **Compress images** to < 200KB each
3. **Use HTTPS** URLs for security
4. **Don't rely only on images** - question text must be clear
5. **Test on mobile** before deploying

---

## 🎯 Quick Examples

### Example 1: Traffic Sign
```typescript
{
  id: 201,
  question: 'Biển báo này có nghĩa là gì?',
  image: 'https://example.com/stop-sign.png',
  answers: ['Dừng lại', 'Giảm tốc', 'Nhường đường'],
  correctAnswer: 0
}
```

### Example 2: Road Scenario
```typescript
{
  id: 202,
  question: 'Trong tình huống này, xe nào được đi trước?',
  image: 'https://example.com/intersection.png',
  answers: ['Xe đỏ', 'Xe xanh', 'Cùng lúc'],
  correctAnswer: 1
}
```

### Example 3: No Image (Optional)
```typescript
{
  id: 203,
  question: 'Tốc độ tối đa trong khu dân cư là bao nhiêu?',
  // No image field - works normally
  answers: ['30 km/h', '40 km/h', '50 km/h'],
  correctAnswer: 2
}
```

---

## 📞 Need More Info?

- **Complete Guide**: `/data/IMAGE_IMPORT_GUIDE.md`
- **Examples**: `/data/INTEGRATION_EXAMPLE.md`
- **Full Docs**: `/data/README_IMAGE_SYSTEM.md`
- **Checklist**: `/data/IMPLEMENTATION_CHECKLIST.md`

---

**Version**: 1.0.0 | **Date**: December 9, 2025 | **Status**: ✅ Production Ready
