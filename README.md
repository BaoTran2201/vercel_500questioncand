# Road Traffic Law Review Website

This is a comprehensive exam system for Road Traffic Law with support for visual questions (traffic signs, road scenarios, diagrams).

The original project is available at https://www.figma.com/design/vSZJbH42YctRgEkc0S2zt8/Road-Traffic-Law-Review-Website.

## 🚀 Running the Code

```bash
npm i          # Install dependencies
npm run dev    # Start development server
```

---

## ✨ Features

### Core Features
- ✅ **Study Mode** - Learn with all 500+ questions, correct answers highlighted
- ✅ **Test Mode** - Random 100-question quiz with scoring
- ✅ **Image Support** - Visual questions with traffic signs and scenarios
- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Vietnamese Interface** - Full Vietnamese localization

### Image Support System (NEW!)
- ✅ **Visual Questions** - Traffic signs, road scenarios, situational diagrams
- ✅ **Bulk Import** - CSV/JSON import for adding images to questions
- ✅ **Responsive Images** - Auto-scaling for all devices
- ✅ **Graceful Fallback** - Questions without images work normally
- ✅ **Accessibility** - Vietnamese alt text for screen readers

---

## 📚 Quick Start with Images

### See Demo (2 minutes)
1. Open `/src/data/questions.ts`
2. Uncomment: `import { sampleVisualQuestions } from './sample-visual-questions';`
3. Change export to: `export const questions = [...baseQuestions, ...candQuestions, ...sampleVisualQuestions];`
4. Go to Study Mode → Question 501 → See 5 traffic sign questions!

### Add Your First Image (30 seconds)
```typescript
// In questions.ts, add to any question:
{
  id: 101,
  question: "Biển báo này có ý nghĩa gì?",
  image: "https://your-image-url.png",  // ← Add this line
  answers: ["Dừng lại", "Giảm tốc", "Nhường đường"],
  correctAnswer: 0
}
```

---

## 📖 Documentation

### Image Support System
- **Quick Start**: `/QUICK_REFERENCE.md` - Common tasks in 30 seconds
- **Demo Guide**: `/ENABLE_IMAGE_DEMO.md` - See it working in 2 minutes
- **Complete Guide**: `/IMAGE_IMPORT_GUIDE.md` - Full documentation
- **10 Examples**: `/INTEGRATION_EXAMPLE.md` - Step-by-step examples
- **Implementation**: `/IMAGE_SUPPORT_IMPLEMENTATION.md` - Technical details
- **Full Index**: `/IMAGE_SYSTEM_INDEX.md` - Documentation directory

### Code Reference
- **Type Definition**: `/src/data/question-types.ts` - Question interface
- **Utilities**: `/src/data/bulk-import-helper.ts` - Import functions
- **Examples**: `/src/data/sample-visual-questions.ts` - 5 sample questions

---

## 🎯 Project Structure

```
/src
├── components/
│   ├── StudyMode.tsx           # Study mode with image support
│   ├── TestMode.tsx            # Test mode with image support
│   ├── HomePage.tsx            # Landing page
│   └── figma/
│       └── ImageWithFallback.tsx  # Image component with fallback
│
├── data/
│   ├── question-types.ts       # Type definitions (with image field)
│   ├── questions.ts            # Main questions export
│   ├── cand-questions.ts       # Candidate questions (498 questions)
│   ├── sample-visual-questions.ts  # Sample questions with images
│   └── bulk-import-helper.ts  # Image import utilities
│
└── styles/
    └── globals.css             # Global styles
```

---

## 📊 Statistics

- **Total Questions**: 500+ (498 from DOCX + examples)
- **Test Mode**: Random 100 questions per test
- **Study Mode**: All questions with correct answers
- **Image Support**: Ready for unlimited visual questions
- **Languages**: TypeScript, React 18, Tailwind CSS

---

## 🔧 Tech Stack

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Vite 6.3.5** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **python-docx** - Question extraction from DOCX

---

## 🎨 Image System Features

### Supported Use Cases
- Traffic sign recognition
- Road scenario analysis
- Lane marking interpretation
- Intersection navigation
- Situational diagrams

### Image Specifications
- **Formats**: PNG, JPG, WebP
- **Max Width**: 800px (recommended)
- **Max Size**: 200KB (recommended)
- **Source**: External URLs or local assets

### Bulk Import Tools
```typescript
import { parseCSVMappings, applyImageMappings } from './data/bulk-import-helper';

// CSV format
const csv = `questionId,imageUrl
101,https://example.com/sign1.png
102,https://example.com/sign2.png`;

const mappings = parseCSVMappings(csv);
const updated = applyImageMappings(questions, mappings);
```

---

## ✅ Testing

### Run Tests
```bash
npm run dev     # Start dev server
# Open browser to http://localhost:3001
# Navigate to Study Mode or Test Mode
# Verify questions display correctly
```

### Manual Testing
- ✅ Study Mode: All questions scrollable
- ✅ Test Mode: Random 100 questions
- ✅ Images: Display above question text
- ✅ Mobile: Responsive layout
- ✅ Fallback: Broken URLs show placeholder

---

## 🚀 Deployment

The project is ready for deployment to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

```bash
npm run build   # Build for production
npm run preview # Preview production build
```

---

## 📝 License

This project is for educational purposes.
