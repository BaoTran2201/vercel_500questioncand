
export interface Question {
 
  id: number;
  question: string;  
  answers: string[];
  correctAnswer: number;
  /**
   * Optional image URL for visual/situational questions
   * 
   * Use cases:
   * - Traffic sign recognition
   * - Road scenario analysis
   * - Lane marking interpretation
   * - Intersection navigation
   * - Situational diagrams
   * 
   * Image specifications:
   * - Formats: PNG, JPG, WebP
   * - Recommended max width: 800px
   * - Recommended max size: 200KB
   * - Must be publicly accessible URL (HTTPS recommended)
   * 
   * The image will be displayed:
   * - Above the question text
   * - In a centered, responsive container
   * - With proper alt text for accessibility
   * - With graceful fallback if URL fails
   * 
   * If omitted, the question will be text-only (backward compatible)
   * 
   * @example
   * ```ts
   * {
   *   id: 101,
   *   question: "Biển báo này có ý nghĩa gì?",
   *   image: "https://example.com/traffic-signs/stop-sign.png",
   *   answers: ["Dừng lại", "Giảm tốc", "Nhường đường"],
   *   correctAnswer: 0
   * }
   * ```
   */
  image?: string;
}

