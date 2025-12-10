import { questions } from '../data/questions';
import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function StudyMode() {

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-green-100">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-green-800">Học bài</h2>
            <p className="text-gray-600">Học qua tất cả các câu hỏi trong bộ đề và xem câu trả lời đúng</p>
          </div>
          <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
            <span className="text-gray-700">
              Tổng: 500 câu
            </span>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="grid gap-6">
        {questions.map((q) => (
          <div
            key={q.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100"
          >
            {/* Question Header */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 px-6 py-4 border-b border-green-200">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center">
                  {q.id}
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 text-2xl leading-relaxed" style={{fontWeight: 750}}>{q.question}</p>
                </div>
              </div>
            </div>

            {/* Question Image */}
            {q.image && (
              <div className="px-6 py-4 border-b border-green-100 bg-gray-50">
                <ImageWithFallback
                  src={q.image}
                  alt={`Question ${q.id}`}
                  className="max-w-full h-auto rounded-lg border border-gray-300"
                />
              </div>
            )}

            {/* Answers */}
            <div className="p-6 space-y-3">
              {q.answers.map((answer, index) => {
                const isCorrect = index === q.correctAnswer;
                return (
                  <div
                    key={index}
                    className={`relative rounded-lg p-4 transition-all duration-200 ${
                      isCorrect
                        ? 'bg-green-50 border-2 border-green-500 shadow-sm'
                        : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                          isCorrect
                            ? 'bg-green-500 text-white'
                            : 'bg-white border-2 border-gray-300'
                        }`}
                      >
                        {isCorrect ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <span className="text-xs text-gray-500">
                            {String.fromCharCode(65 + index)}
                          </span>
                        )}
                      </div>
                      <p
                        className={`flex-1 ${
                          isCorrect ? 'text-green-900' : 'text-gray-700'
                        }`}
                      >
                        {answer}
                      </p>
                    </div>
                    {isCorrect && (
                      <div className="absolute -top-3 right-0 z-10">
                        <span className="inline-flex items-center px-1.5 py-0 rounded text-xs bg-green-100 text-green-700 border border-green-300 whitespace-nowrap shadow-sm">
                          ✓ Đáp án đúng
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
