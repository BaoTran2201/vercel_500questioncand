import { useState, useMemo, useEffect } from 'react';
import { questions, Question } from '../data/questions';
import { Check, X, RotateCcw, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface TestModeProps {
  onAppHeaderCompactChange?: (isCompact: boolean) => void;
  appHeaderCompact?: boolean;
}

export function TestMode({ onAppHeaderCompactChange, appHeaderCompact = false }: TestModeProps) {
  // Get random 100 questions on component mount
  const randomQuestions = useMemo(() => {
    const shuffled = shuffleArray(questions);
    return shuffled.slice(0, 30);
  }, []);

  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(randomQuestions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(20 * 60); // 20 minutes in seconds
  const [isAutoSubmitted, setIsAutoSubmitted] = useState(false);

  const handleAnswerSelect = (qIndex: number, answerIndex: number) => {
    if (showResults) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[qIndex] = answerIndex;
    setSelectedAnswers(newAnswers);

    // Auto scroll after selection
    setTimeout(() => {
      // Find next unanswered question
      let nextUnansweredIndex = -1;
      for (let i = qIndex + 1; i < randomQuestions.length; i++) {
        if (newAnswers[i] === null) {
          nextUnansweredIndex = i;
          break;
        }
      }
      
      // If no unanswered question after current, search from beginning
      if (nextUnansweredIndex === -1) {
        for (let i = 0; i < qIndex; i++) {
          if (newAnswers[i] === null) {
            nextUnansweredIndex = i;
            break;
          }
        }
      }

      if (nextUnansweredIndex !== -1) {
        // Scroll to next unanswered question
        const nextQuestionElement = document.getElementById(`question-${nextUnansweredIndex}`);
        if (nextQuestionElement) {
          const headerOffset = 140;
          const elementPosition = nextQuestionElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // All questions answered - scroll to submit button
        const submitButton = document.getElementById('submit-button');
        if (submitButton) {
          submitButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }, 350);
  };

  const handleSubmit = () => {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAutoSubmit = () => {
    // Fill unanswered questions as incorrect (null → index stays as is)
    setShowResults(true);
    setIsAutoSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSelectedAnswers(new Array(randomQuestions.length).fill(null));
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === randomQuestions[index].correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: randomQuestions.length,
      percentage: Math.round((correct / randomQuestions.length) * 100),
    };
  };

  const score = calculateScore();
  const answered = selectedAnswers.filter((a) => a !== null).length;
  const isPassed = score.correct >= 18;

  // Calculate sticky header top position based on AppHeader state
  const appHeaderHeight = appHeaderCompact ? 56 : 64; // h-14 = 56px, h-16 = 64px
  const stickyTopValue = appHeaderHeight;

  // Format time to mm:ss
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Warn before leaving page if test is not submitted
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!showResults && answered > 0) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [showResults, answered]);

  // Countdown timer
  useEffect(() => {
    if (showResults) return; // Stop timer when results are shown

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time's up - auto submit
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showResults]);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderCompact(window.scrollY > 50);
      
      // Notify parent (App) when scroll passes 80px threshold for AppHeader compact
      if (onAppHeaderCompactChange) {
        onAppHeaderCompactChange(window.scrollY > 80);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onAppHeaderCompactChange]);

  if (showResults) {
    return (
      <div className="space-y-6">
        {/* Results Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
              <Award className="w-10 h-10 text-white" />
            </div>
            {isAutoSubmitted && (
              <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mb-2">
                <p className="text-yellow-800 text-sm font-medium">⏰ Hết giờ! Bài kiểm tra đã được nộp tự động.</p>
              </div>
            )}
            <h2 className="text-green-800">Kết quả bài kiểm tra</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-gray-600 text-sm">Tổng số Đáp án đúng</p>
                <p className="text-green-700">{score.correct}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-gray-600 text-sm">Tổng số câu hỏi</p>
                <p className="text-blue-700">{score.total}</p>
              </div>
              <div className={`rounded-lg p-4 border ${
                isPassed 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-red-50 border-red-200'
              }`}>
                <p className="text-gray-600 text-sm">Kết quả</p>
                <p className={isPassed ? 'text-green-700 font-bold text-lg' : 'text-red-700 font-bold text-lg'}>
                  {isPassed ? '✓ Đạt' : '✗ Không đạt'}
                </p>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-md mx-auto"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Làm lại bài kiểm tra</span>
            </button>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="space-y-4">
          <h3 className="text-gray-800">Xem lại đáp án</h3>
          {randomQuestions.map((q, qIndex) => {
            const userAnswer = selectedAnswers[qIndex];
            const isCorrect = userAnswer === q.correctAnswer;
            
            return (
              <div
                key={q.id}
                className={`bg-white rounded-xl shadow-sm overflow-hidden border ${
                  isCorrect ? 'border-green-200' : 'border-red-200'
                }`}
              >
                <div
                  className={`px-6 py-4 ${
                    isCorrect
                      ? 'bg-gradient-to-r from-green-50 to-green-100'
                      : 'bg-gradient-to-r from-red-50 to-red-100'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                          isCorrect
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                        }`}
                      >
                        {q.id}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 text-2xl leading-relaxed" style={{fontWeight: 750}}>{q.question}</p>
                        {q.image && (
                          <ImageWithFallback
                            src={q.image}
                            alt={`Question ${q.id}`}
                            className="max-w-sm h-auto rounded-lg border border-gray-300 mt-3"
                          />
                        )}
                      </div>
                    </div>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        isCorrect ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    >
                      {isCorrect ? (
                        <Check className="w-5 h-5 text-white" />
                      ) : (
                        <X className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  {q.answers.map((answer, index) => {
                    const isUserAnswer = index === userAnswer;
                    const isCorrectAnswer = index === q.correctAnswer;

                    return (
                      <div
                        key={index}
                        className={`relative rounded-lg p-4 border-2 ${
                          isCorrectAnswer
                            ? 'bg-green-50 border-green-500'
                            : isUserAnswer
                            ? 'bg-red-50 border-red-500'
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div
                            className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                              isCorrectAnswer
                                ? 'bg-green-500 text-white'
                                : isUserAnswer
                                ? 'bg-red-500 text-white'
                                : 'bg-white border-2 border-gray-300'
                            }`}
                          >
                            {isCorrectAnswer || isUserAnswer ? (
                              isCorrectAnswer ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <X className="w-4 h-4" />
                              )
                            ) : (
                              <span className="text-xs text-gray-500">
                                {String.fromCharCode(65 + index)}
                              </span>
                            )}
                          </div>
                          <p className="flex-1 text-gray-800">{answer}</p>
                        </div>
                        {isCorrectAnswer && (
                          <div className="absolute -top-3 right-0 z-10">
                            <span className="inline-flex items-center px-1.5 py-0 rounded text-xs bg-green-100 text-green-700 border border-green-300 whitespace-nowrap shadow-sm">
                              ✓ Đáp án đúng
                            </span>
                          </div>
                        )}
                        {isUserAnswer && !isCorrectAnswer && (
                          <div className="absolute -top-3 right-0 z-10">
                            <span className="inline-flex items-center px-1.5 py-0 rounded text-xs bg-red-100 text-red-700 border border-red-300 whitespace-nowrap shadow-sm">
                              ✗ Của bạn
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-20 pt-16">
      {/* Header - Sticky with compact mode (positioned below AppHeader) */}
      <div style={{ top: `${stickyTopValue}px` }} className={`sticky z-40 bg-white shadow-lg border-b border-green-100 rounded-lg transition-all duration-200 ${
        isHeaderCompact ? 'py-2' : 'py-4'
      }`}>
        <div className={`transition-all duration-200 ${isHeaderCompact ? 'px-3' : 'px-6'}`}>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="min-w-0">
              <h2 className={`text-green-800 transition-all duration-200 font-semibold ${
                isHeaderCompact ? 'text-sm' : 'text-xl'
              }`}> <h2 className="text-green-800">Thi thử</h2></h2>
              <p className={`text-gray-600 transition-all duration-200 ${
                isHeaderCompact ? 'hidden' : 'text-xs'
              }`}>
              <p className="text-gray-600">Đã trả lời {answered} trên {randomQuestions.length} câu hỏi</p> 
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {/* Timer Display */}
              <div className={`flex items-center space-x-1 rounded-lg border transition-all duration-200 ${
                timeLeft <= 300 
                  ? 'bg-red-50 border-red-200' 
                  : timeLeft <= 600
                  ? 'bg-yellow-50 border-yellow-200'
                  : 'bg-green-50 border-green-200'
              } ${isHeaderCompact ? 'px-2 py-1' : 'px-3 py-1.5'}`}>
                <span className={`transition-all duration-200 font-medium ${
                  timeLeft <= 300 
                    ? 'text-red-700' 
                    : timeLeft <= 600
                    ? 'text-yellow-700'
                    : 'text-green-700'
                } ${isHeaderCompact ? 'text-xs' : 'text-sm'}`}>
                  {isHeaderCompact ? '⏳' : '⏱️'} {formatTime(timeLeft)}
                </span>
              </div>
              
              <div className={`bg-green-50 rounded-lg border border-green-200 transition-all duration-200 ${
                isHeaderCompact ? 'px-2 py-1' : 'px-3 py-1.5'
              }`}>
                <span className={`text-green-700 font-medium transition-all duration-200 ${
                  isHeaderCompact ? 'text-xs' : 'text-sm'
                }`}>
                  {answered}/{randomQuestions.length}
                </span>
              </div>
            </div>
          </div>

          {/* Time Progress Bar */}
          <div className={`w-full rounded-full overflow-hidden transition-all duration-200 ${
            isHeaderCompact ? 'h-1 mt-2' : 'h-2 mt-3'
          }`} style={{ backgroundColor: '#e5e7eb' }}>
            <div
              className={`h-full rounded-full transition-all duration-200 ${
                timeLeft <= 300 
                  ? 'bg-red-500' 
                  : timeLeft <= 600
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
              }`}
              style={{
                width: `${(timeLeft / (20 * 60)) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6 px-4 mt-6">
        {randomQuestions.map((question, qIndex) => {
          const isAnswered = selectedAnswers[qIndex] !== null;
          const selectedIndex = selectedAnswers[qIndex];

          return (
            <div
              key={question.id}
              id={`question-${qIndex}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100"
            >
              {/* Question Header */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 px-6 py-4 border-b border-green-200">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center font-semibold text-lg">
                    {qIndex + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 text-lg leading-relaxed font-bold" style={{ fontWeight: 900 }}>{question.question}</p>
                  </div>
                </div>
              </div>

              {/* Question Image */}
              {question.image && (
                <div className="px-6 py-4 border-b border-green-100 bg-gray-50">
                  <ImageWithFallback
                    src={question.image}
                    alt={`Question ${question.id}`}
                    className="max-w-full h-auto rounded-lg border border-gray-300"
                  />
                </div>
              )}

              {/* Answers */}
              <div className="p-6 space-y-3">
                {question.answers.map((answer, index) => {
                  const isSelected = selectedIndex === index;
                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(qIndex, index)}
                      className={`w-full text-left rounded-lg p-4 transition-all duration-200 border-2 ${
                        isSelected
                          ? 'bg-green-50 border-green-500 shadow-md'
                          : 'bg-gray-50 border-gray-200 hover:border-green-300 hover:bg-green-50'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                            isSelected
                              ? 'bg-green-500 border-green-500 text-white'
                              : 'bg-white border-gray-300 text-gray-500'
                          }`}
                        >
                          {isSelected ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <span className="text-xs">
                              {String.fromCharCode(65 + index)}
                            </span>
                          )}
                        </div>
                        <p className={isSelected ? 'text-green-900' : 'text-gray-700'}>
                          {answer}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit Button */}
      <div id="submit-button" className="flex items-center justify-center px-4 scroll-mt-24 gap-3 flex-wrap">
        {answered === randomQuestions.length && (
          <button
            onClick={handleSubmit}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Nộp bài kiểm tra
          </button>
        )}
        {answered < randomQuestions.length && (
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-2">
              Bạn còn {randomQuestions.length - answered} câu chưa trả lời
            </p>
            <button
              onClick={handleSubmit}
              className="px-8 py-3 rounded-lg bg-gray-400 text-white hover:bg-gray-500 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Nộp bài (Các câu chưa trả lời sẽ được tính sai)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
