import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { StudyMode } from './components/StudyMode';
import { TestMode } from './components/TestMode';
import { Home, BookOpen, FileCheck, LogOut } from 'lucide-react';
import miniLogo from './assets/logo/mini_logo.png';

type Mode = 'home' | 'study' | 'test';

export default function App() {
  const [mode, setMode] = useState<Mode>('home');
  const [isAppHeaderCompact, setIsAppHeaderCompact] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setMode('home');
    navigate('/');
  };

  const handleAppHeaderCompactChange = (isCompact: boolean) => {
    setIsAppHeaderCompact(isCompact);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Navigation Bar - Compact on Test Mode */}
      <nav className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-200 ${
        isAppHeaderCompact ? 'h-14' : 'h-16'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className={`flex items-center justify-between h-full transition-all duration-200 ${
            isAppHeaderCompact ? 'gap-2' : 'gap-4'
          }`}>
            {/* Logo Section */}
            <div className={`flex items-center transition-all duration-200 ${
              isAppHeaderCompact ? 'space-x-1' : 'space-x-2'
            }`}>
              <div className={`bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center overflow-hidden transition-all duration-200 ${
                isAppHeaderCompact ? 'w-8 h-8' : 'w-10 h-10'
              }`}>
                <img src={miniLogo} alt="Logo" className="h-full w-auto max-w-full object-contain" />
              </div>
              {!isAppHeaderCompact && (
                <div>
                  <h1 className="text-green-800 text-sm font-semibold ">TRUNG TÂM DN&ĐTLX</h1>
                  <p className="text-xs text-gray-400">TRƯỜNG CAO ĐẲNG AN NINH NHÂN DÂN 1</p>
                </div>
              )}
            </div>
            
            {/* Navigation + Logout */}
            <div className={`flex items-center gap-2 transition-all duration-200 ${
              isAppHeaderCompact ? 'gap-1.5' : 'space-x-2'
            }`}>
              <div className={`flex gap-1 transition-all duration-200 ${
                isAppHeaderCompact ? 'gap-1' : 'space-x-2'
              }`}>
              <button
                onClick={() => setMode('home')}
                className={`flex items-center space-x-2 rounded-lg transition-all duration-200 ${
                  mode === 'home'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } ${isAppHeaderCompact ? 'px-1.5 py-1' : 'px-3 py-1.5'}`}
                title="Trang Chủ"
              >
                <Home className={`${isAppHeaderCompact ? 'w-3 h-3' : 'w-4 h-4'}`} />
                {!isAppHeaderCompact && <span className="hidden sm:inline text-sm">Trang Chủ</span>}
              </button>

              <button
                onClick={() => setMode('study')}
                className={`flex items-center space-x-2 rounded-lg transition-all duration-200 ${
                  mode === 'study'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } ${isAppHeaderCompact ? 'px-1.5 py-1' : 'px-3 py-1.5'}`}
                title="Học tập"
              >
                <BookOpen className={`${isAppHeaderCompact ? 'w-3 h-3' : 'w-4 h-4'}`} />
                {!isAppHeaderCompact && <span className="hidden sm:inline text-sm">Học tập</span>}
              </button>
              
              <button
                onClick={() => setMode('test')}
                className={`flex items-center space-x-2 rounded-lg transition-all duration-200 ${
                  mode === 'test'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } ${isAppHeaderCompact ? 'px-1.5 py-1' : 'px-3 py-1.5'}`}
                title="Kiểm tra"
              >
                <FileCheck className={`${isAppHeaderCompact ? 'w-3 h-3' : 'w-4 h-4'}`} />
                {!isAppHeaderCompact && <span className="hidden sm:inline text-sm">Kiểm tra</span>}
              </button>
              </div>

              <button
                onClick={handleLogout}
                className={`flex items-center space-x-2 rounded-lg transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200 ${
                  isAppHeaderCompact ? 'px-1.5 py-1' : 'px-3 py-1.5'
                }`}
                title="Đăng xuất"
              >
                <LogOut className={`${isAppHeaderCompact ? 'w-3 h-3' : 'w-4 h-4'}`} />
                {!isAppHeaderCompact && <span className="hidden sm:inline text-sm">Đăng xuất</span>}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {mode === 'home' && <HomePage />}
        {mode === 'study' && <StudyMode />}
        {mode === 'test' && <TestMode onAppHeaderCompactChange={handleAppHeaderCompactChange} appHeaderCompact={isAppHeaderCompact} />}
      </main>
    </div>
  );
}