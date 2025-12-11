import { useState } from 'react';
import { Question } from '../data/questions';
import { candQuestions250 } from '../data/cand-questions250';
import { candQuestions } from '../data/cand-questions';
import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function StudyMode() {
  const [selectedLevel, setSelectedLevel] = useState<'A' | 'B' | null>(null);
  const [studyQuestions, setStudyQuestions] = useState<Question[]>([]);

  const handleSelectLevel = (level: 'A' | 'B') => {
    setSelectedLevel(level);
    setStudyQuestions(level === 'A' ? candQuestions250 : candQuestions);
  };

  if (!selectedLevel) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-white shadow-lg rounded-xl p-6 border border-green-100">
          <h2 className="text-green-800 text-xl font-semibold mb-4">Hãy chọn hạng bằng lái:</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <button
              className="w-full text-left p-4 rounded-lg border border-green-200 bg-green-50 hover:bg-green-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 shadow-sm"
              onClick={() => handleSelectLevel('A')}
            >
              <h3 className="font-semibold text-green-800 mb-1">Hạng A</h3>
              <p className="text-gray-700 text-sm">(dành cho mô tô)</p>
            </button>
            <button
className="w-full text-left p-4 rounded-lg border border-blue-200 bg-blue-50 hover:bg-blue-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 shadow-sm"
              onClick={() => handleSelectLevel('B')}
            >
              <h3 className="font-semibold text-blue-800 mb-1">Hạng B</h3>
              <p className="text-gray-700 text-sm">(dành cho ô tô)</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-green-100">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-green-800">Học bài</h2>
            <p className="text-gray-600">Học qua tất cả các câu hỏi trong bộ đề và xem câu trả lời đúng</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
              <span className="text-gray-700">
                Tổng: {studyQuestions.length} câu
              </span>
            </div>
            <button
              onClick={() => {
                setSelectedLevel(null);
                setStudyQuestions([]);
              }}
              className="px-4 py-2 rounded-lg bg-green-100 text-green-700 border border-green-300 hover:bg-green-200 transition-all duration-200 font-medium"
            >
              Đổi hạng
            </button>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="grid gap-6">
        {studyQuestions.map((q: Question) => (
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
              <div className="px-6 py-4 border-b border-green-100 bg-gray-50 flex justify-center">
                <ImageWithFallback
                  src={q.image}
                  alt={`Question ${q.id}`}
                  className="max-w-full h-auto rounded-lg border border-gray-300"
                />
              </div>
            )}

            {/* Answers */}
            <div className="p-6 space-y-3">
              {q.answers.map((answer: string, index: number) => {
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
