/**
 * Questions Database for Road Traffic Law Exam
 * 
 * This file exports all questions used in the exam system.
 * Questions are combined from multiple sources and can include images.
 * 
 * ==========================================
 * IMAGE SUPPORT SYSTEM - QUICK START
 * ==========================================
 * 
 * To add images to questions:
 * 
 * 1. Single Question:
 *    {
 *      id: 101,
 *      question: "Biển báo này có ý nghĩa gì?",
 *      image: "https://example.com/traffic-sign.png",  // ← Add this line
 *      answers: ["Đáp án A", "Đáp án B", "Đáp án C"],
 *      correctAnswer: 0
 *    }
 * 
 * 2. Add Sample Visual Questions (5 questions with images):
 *    Uncomment the import and export lines below.
 * 
 * 3. Bulk Import from CSV/JSON:
 *    See /data/bulk-import-helper.ts for utility functions
 * 
 * Documentation:
 * - Quick Start: /QUICK_REFERENCE.md
 * - Complete Guide: /IMAGE_IMPORT_GUIDE.md
 * - 10 Examples: /INTEGRATION_EXAMPLE.md
 * - Full Docs: /README_IMAGE_SYSTEM.md
 * 
 * ==========================================
 */

import type { Question } from './question-types';
import { candQuestions } from './cand-questions';
import { sampleVisualQuestions } from './sample-visual-questions';

/**
 * Sample visual questions enabled!
 * You now have 5 additional questions (IDs 501-505) with traffic sign images.
 * 
 * To disable: Comment out the import above and remove from export below.
 * 
 * Documentation:
 * - Quick Start: /QUICK_REFERENCE.md
 * - Complete Guide: /IMAGE_IMPORT_GUIDE.md
 */

const baseQuestions: Question[] = [
  {
    id: 1,
    question: 'Trong Luật TTATGTĐB, "đường ưu tiên" được quy định như thế nào?',
    answers: [
      'Đường ưu tiên là đường chỉ dành cho một số loại phương tiện tham gia giao thông, được cắm biển báo hiệu đường ưu tiên.',
      'Đường ưu tiên là đường mà trên đó phương tiện tham gia giao thông đường bộ phải nhường đường cho các phương tiện đến từ hướng khác khi qua nơi giao nhau, có thể được cắm biển báo hiệu đường ưu tiên.',
      'Đường ưu tiên là đường mà trên đó phương tiện tham gia giao thông đường bộ được các phương tiện tham gia giao thông đường bộ đến từ hướng khác nhường đường khi qua nơi đường giao nhau, được cắm biển báo hiệu đường ưu tiên.',
    ],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: 'Trong Luật TTATGTĐB, "làn đường" được quy định như thế nào?',
    answers: [
      'Là phần của đường bộ được sử dụng cho phương tiện giao thông đi lại.',
      'Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ chiều rộng cho xe chạy an toàn.',
      'Cả hai ý trên.',
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: 'Trong Luật TTATGTĐB, "người tham gia giao thông đường bộ" gồm những thành phần nào?',
    answers: [
      'Người điều khiển, người được chở trên phương tiện tham gia giao thông đường bộ.',
      'Người điều khiển, dẫn dắt vật nuôi trên đường bộ.',
      'Người đi bộ trên đường bộ.',
      'Cả ba ý trên.',
    ],
    correctAnswer: 3,
  },
  {
    id: 4,
    question: 'Trong Luật TTATGTĐB, "người lái xe" được quy định như thế nào?',
    answers: [
      'Là người điều khiển xe cơ giới.',
      'Là người điều khiển xe thô sơ.',
      'Là người điều khiển xe máy chuyên dùng.',
    ],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: 'Trong Luật TTATGTĐB, "người điều khiển giao thông đường bộ" gồm những thành phần nào?',
    answers: [
      'Người điều khiển phương tiện tham gia giao thông.',
      'Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.',
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: 'Người tham gia giao thông ngoài việc phải chấp hành các quy định của pháp luật về trật tự, an toàn giao thông đường bộ và quy định khác của pháp luật có liên quan, còn có trách nhiệm gì?',
    answers: [
      'Giữ an toàn cho mình.',
      'Giữ an toàn cho người khác.',
      'Cả hai ý trên.',
    ],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: 'Mọi hành vi vi phạm pháp luật về trật tự, an toàn giao thông đường bộ phải được phát hiện, ngăn chặn kịp thời và phải bị xử lý nghiêm minh theo quy định của pháp luật là đúng hay sai?',
    answers: [
      'Sai.',
      'Đúng.',
      'Tùy trường hợp.',
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: 'Luật TTATGTĐB có nghiêm cấm người điều khiển phương tiện tham gia giao thông đường bộ mà trong máu hoặc hơi thở có nồng độ cồn không?',
    answers: [
      'Nghiêm cấm.',
      'Không nghiêm cấm.',
      'Cấm người điều khiển phương tiện giao thông mà trong máu có nồng độ cồn vượt quá 50 miligam/100 mililít máu hoặc vượt quá 0,25 miligam/1 lít khí thở.',
    ],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: 'Luật TTATGTĐB có nghiêm cấm người điều khiển phương tiện tham gia giao thông đường bộ mà trong cơ thể có chất ma túy không?',
    answers: [
      'Không nghiêm cấm.',
      'Nghiêm cấm.',
      'Nghiêm cấm tùy từng trường hợp.',
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: 'Hành vi nào dưới đây bị nghiêm cấm trong Luật TTATGTĐB?',
    answers: [
      'Điều khiển phương tiện tham gia giao thông đường bộ lạng lách, đánh võng, rú ga liên tục.',
      'Đua xe, tổ chức đua xe, xúi giục, giúp sức, cổ vũ đua xe trái phép.',
      'Xúc phạm, đe dọa, cản trở, chống đối hoặc không chấp hành hiệu lệnh, hướng dẫn, yêu cầu kiểm tra, kiểm soát của người thi hành công vụ về bảo đảm trật tự, an toàn giao thông đường bộ.',
      'Cả ba ý trên.',
    ],
    correctAnswer: 3,
  },
];

export const questions: Question[] = [
  ...baseQuestions,
  ...candQuestions,
  ...sampleVisualQuestions  // 5 questions with traffic sign images (IDs 501-505)
];

export type { Question };
