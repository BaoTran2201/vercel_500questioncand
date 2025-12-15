# 📊 Data Audit Complete: cand-questions.ts vs 500 câu hỏi CAND.docx

## Executive Summary

A comprehensive audit has been completed comparing the exam questions in the TypeScript codebase against the source document (500 câu hỏi CAND.docx).

### Key Findings

| Metric | Count |
|--------|-------|
| **Questions in .docx (source)** | 498 |
| **Questions in .ts** | 463 |
| **Missing Questions** | 37 |
| **Questions with Wrong Answers** | 211 |
| **Total Issues** | **248** |

## Issues Breakdown

### 🔴 Critical Issues

**1. 37 Missing Questions**
- Câu 1-5 (first 5 questions)
- Large gaps in middle sections (Câu 133-151: 19 consecutive questions)
- Scattered missing: Câu 29, 153-154, 162-163, 177, 186, 199, 214, 229, 238, 464-465

**2. 211 Questions with Wrong Answer Indices**
- Systematic misalignment between .docx and .ts
- Suggests data integrity issues in either:
  - Original data entry
  - Underline detection from .docx parser
  - Manual editing in .ts file

### ⚠️ Data Quality Concerns

Several questions show **no detectible correct answer** in the .docx:
- Câu 58, Câu 111, and possibly others
- Likely parsing issue with underline formatting detection
- Requires manual verification in source document

## Generated Files

| File | Purpose | Rows |
|------|---------|------|
| `AUDIT_REPORT.md` | Detailed audit findings and recommendations | - |
| `audit_errors.json` | Complete list of all errors (JSON format) | 248 |
| `audit_wrong_answers.csv` | Spreadsheet of wrong answers | 211 |
| `audit_missing_questions.csv` | Spreadsheet of missing questions | 37 |
| `audit_docx_questions.json` | All 498 questions extracted from .docx | 498 |

## How to Use the Audit Files

### 1. **View Summary Report**
```
AUDIT_REPORT.md - Start here for overview and recommendations
```

### 2. **Fix Missing Questions**
```
1. Open: audit_missing_questions.csv
2. For each missing question (37 total):
   - Get question details from audit_docx_questions.json
   - Add to src/data/cand-questions.ts in correct ID order
   - Maintain TypeScript interface structure
```

### 3. **Fix Wrong Answers**
```
1. Open: audit_wrong_answers.csv
2. For each wrong answer (211 total):
   - Column ".docx Đáp Án" = correct value
   - Column ".ts Đáp Án" = current (wrong) value
   - Update src/data/cand-questions.ts
   - Change correctAnswer index accordingly
```

### 4. **Reference Full Data**
```
- audit_docx_questions.json: Complete data from .docx with all question details
- audit_errors.json: Raw error data for programmatic processing
```

## Technical Details

### Audit Tools Created

1. **audit_docx_to_json.py**
   - Extracts all questions from .docx file
   - Detects correct answers via underline formatting
   - Outputs JSON format matching .ts structure

2. **compare_questions_fixed.py**
   - Compares .docx vs .ts data
   - Identifies missing questions and wrong answers
   - Generates error reports

3. **generate_csv_report.py**
   - Creates spreadsheet-friendly exports
   - Easy for manual review and correction

### Data Structure

Each question object contains:
```typescript
interface Question {
  id: number;           // Question number (1-498)
  question: string;     // Question text
  answers: string[];    // Array of 4 answer options (indices 0-3)
  correctAnswer: number; // Index of correct answer (0-3)
}
```

## Recommendations

### Immediate Actions (Priority 1)

1. ✅ **Review the 37 missing questions** - All must be added
2. ✅ **Verify questions with null correctAnswer** - Check .docx formatting
3. ✅ **Validate question numbering** - Ensure sequential IDs 1-498

### Short-term Actions (Priority 2)

4. ✅ **Fix 211 wrong answer indices** - Use CSV files for reference
5. ✅ **Re-test application** - Verify all questions load correctly
6. ✅ **Validate answer selection** - Confirm correct answers work in UI

### Long-term Actions (Priority 3)

7. ✅ **Document data source** - Track version of .docx used
8. ✅ **Automate validation** - Add test to prevent future mismatches
9. ✅ **Establish data QA process** - Review any future updates

## Status: Ready for Review

All audit files have been generated and are ready for:
- Data correction
- Quality assurance review
- Implementation of fixes

---

**Audit Date:** Generated during development session
**Source:** 500 câu hỏi CAND.docx (source of truth)
**Target:** src/data/cand-questions.ts
