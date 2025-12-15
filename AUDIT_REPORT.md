===============================================================================
                    AUDIT REPORT: cand-questions.ts vs 500 câu hỏi CAND.docx
===============================================================================

OVERVIEW:
---------
Source File: 500 câu hỏi CAND.docx (source of truth)
Target File: src/data/cand-questions.ts

STATISTICS:
-----------
Total questions in .docx:           498
Total questions in .ts:             463
Missing questions:                   37
Questions with wrong answers:       211
Total issues found:                 248

===============================================================================
MISSING QUESTIONS (37 TOTAL)
===============================================================================

The following questions exist in the .docx source but are missing from .ts:

Câu 1, Câu 2, Câu 3, Câu 4, Câu 5, Câu 29, Câu 133, Câu 134, Câu 135, 
Câu 136, Câu 137, Câu 138, Câu 139, Câu 140, Câu 141, Câu 142, Câu 143, 
Câu 144, Câu 145, Câu 146, Câu 147, Câu 148, Câu 149, Câu 150, Câu 151, 
Câu 153, Câu 154, Câu 162, Câu 163, Câu 177, Câu 186, Câu 199, Câu 214, 
Câu 229, Câu 238, Câu 464, Câu 465

These questions need to be added to cand-questions.ts from the .docx source.

===============================================================================
QUESTIONS WITH WRONG ANSWERS (211 TOTAL)
===============================================================================

Sample of incorrect answers (first 50 with corrections needed):

Câu 58:  .docx=(none/null), .ts=3
Câu 64:  .docx=1, .ts=0
Câu 69:  .docx=2, .ts=1
Câu 75:  .docx=2, .ts=1
Câu 95:  .docx=3, .ts=2
Câu 103: .docx=1, .ts=0
Câu 108: .docx=0, .ts=1
Câu 110: .docx=0, .ts=1
Câu 111: .docx=(none/null), .ts=0
Câu 116: .docx=1, .ts=3
Câu 118: .docx=2, .ts=3
Câu 120: .docx=3, .ts=2
Câu 122: .docx=0, .ts=1
Câu 123: .docx=1, .ts=2
Câu 126: .docx=3, .ts=2
Câu 127: .docx=0, .ts=1
Câu 130: .docx=2, .ts=1
Câu 152: .docx=0, .ts=1
Câu 155: .docx=3, .ts=0
Câu 156: .docx=1, .ts=0
Câu 157: .docx=0, .ts=1
Câu 158: .docx=2, .ts=1
Câu 159: .docx=2, .ts=1
Câu 160: .docx=0, .ts=1
Câu 161: .docx=2, .ts=1
Câu 164: .docx=1, .ts=2
Câu 165: .docx=0, .ts=1
Câu 166: .docx=2, .ts=1
Câu 167: .docx=3, .ts=2
Câu 168: .docx=1, .ts=0
Câu 169: .docx=2, .ts=1
Câu 170: .docx=0, .ts=1
Câu 171: .docx=3, .ts=2
Câu 172: .docx=1, .ts=0
Câu 173: .docx=2, .ts=1
Câu 174: .docx=0, .ts=1
Câu 175: .docx=2, .ts=1
Câu 176: .docx=3, .ts=2
Câu 178: .docx=1, .ts=0
Câu 179: .docx=0, .ts=1
Câu 180: .docx=2, .ts=1
Câu 181: .docx=3, .ts=2
Câu 182: .docx=1, .ts=0
Câu 183: .docx=2, .ts=1
Câu 184: .docx=1, .ts=2
Câu 185: .docx=0, .ts=1
Câu 187: .docx=2, .ts=1
Câu 188: .docx=3, .ts=2
Câu 189: .docx=1, .ts=0
Câu 190: .docx=2, .ts=1

... and 161 more questions with wrong answers.

See audit_errors.json for complete list of all 211 wrong answers.

===============================================================================
KEY FINDINGS:
===============================================================================

1. MAJOR ISSUE - 37 missing questions
   These questions are in the source .docx but completely absent from .ts:
   - Most critical: Câu 1-5 (first questions)
   - Large gaps: Câu 133-151 (19 consecutive questions missing)
   
2. DATA INTEGRITY - 211 wrong answers
   Over 45% of questions have incorrect answer indices
   This suggests:
   - Potential misalignment between question versions
   - Incorrect underline detection in .docx parsing
   - Manual data entry errors in .ts file

3. PARSING CONCERNS
   Some questions show 'None' for correctAnswer in .docx
   (Câu 58, Câu 111, and possibly others)
   This may indicate:
   - Missing underline formatting in .docx
   - Parsing library not detecting formatting correctly
   - Need for manual verification

===============================================================================
ACTION ITEMS:
===============================================================================

PRIORITY 1 - CRITICAL:
  [ ] Add 37 missing questions to cand-questions.ts
  [ ] Verify question IDs are sequential after additions
  [ ] Test application loads all 498 questions correctly

PRIORITY 2 - HIGH:
  [ ] Fix 211 questions with wrong answer indices
  [ ] Use audit_errors.json as reference for each correction
  [ ] Verify underline detection in problematic questions in .docx

PRIORITY 3 - MEDIUM:
  [ ] Investigate questions with 'None' correctAnswer
  [ ] Determine if parsing issue or formatting issue in .docx
  [ ] Consider re-running parser with different settings if available

PRIORITY 4 - LOW:
  [ ] Document data source and parsing process
  [ ] Create regression tests to prevent future mismatches
  [ ] Set up automated validation in CI/CD pipeline

===============================================================================
TECHNICAL NOTES:
===============================================================================

Audit performed using:
- Python script: audit_docx_to_json.py (extracts from .docx)
- Comparison script: compare_questions_fixed.py
- Detects question presence and correctAnswer index mismatches

Source of Truth: 500 câu hỏi CAND.docx
- Parsed 498 questions total
- Correct answers indicated by underline formatting

Full comparison data: audit_errors.json
Detailed .docx extraction: audit_docx_questions.json

===============================================================================
