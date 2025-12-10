import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { StudyMode } from './components/StudyMode';
import { TestMode } from './components/TestMode';
import { Home, BookOpen, FileCheck } from 'lucide-react';
import miniLogo from './assets/logo/mini_logo.png';

type Mode = 'home' | 'study' | 'test';

export default function App() {
  const [mode, setMode] = useState<Mode>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={miniLogo} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-green-800">TRUNG TÂM DN&ĐTLX</h1>
                <p className="text-xs text-gray-500">TRƯỜNG CAO ĐẲNG AN NINH NHÂN DÂN 1</p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => setMode('home')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  mode === 'home'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">Trang Chủ</span>
              </button>

              <button
                onClick={() => setMode('study')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  mode === 'study'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span className="hidden sm:inline">Học tập</span>
              </button>
              
              <button
                onClick={() => setMode('test')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  mode === 'test'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <FileCheck className="w-5 h-5" />
                <span className="hidden sm:inline">Kiểm tra</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {mode === 'home' && <HomePage />}
        {mode === 'study' && <StudyMode />}
        {mode === 'test' && <TestMode />}
      </main>
    </div>
  );
}