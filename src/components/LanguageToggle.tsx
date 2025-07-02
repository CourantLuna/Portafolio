// src/components/LanguageToggle.tsx
import { useLanguage } from '../hooks/useLanguage';

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-16 h-10 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-pink-500/20 shadow-sm dark:shadow-pink-500/10 transition-all duration-300 hover:scale-105 flex items-center justify-between px-1"
      aria-label={t('language.toggle')}
    >
      {/* Slider */}
      <div
        className={`absolute w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 dark:from-pink-600 dark:to-pink-500 shadow-md dark:shadow-pink-500/30 transition-all duration-300 flex items-center justify-center transform ${
          language === 'es' ? 'translate-x-0' : 'translate-x-6'
        }`}
      >
        {/* Bandera activa */}
        <span className="text-white text-xs font-bold">
          {language === 'es' ? '🇪🇸' : '🇺🇸'}
        </span>
      </div>
      
      {/* Banderas fijas */}
      <div className="flex items-center justify-between w-full px-1 relative z-10">
        <span 
          className={`text-lg transition-all duration-300 ${
            language === 'es' ? 'opacity-0' : 'opacity-60 hover:opacity-100'
          }`}
        >
          🇪🇸
        </span>
        <span 
          className={`text-lg transition-all duration-300 ${
            language === 'en' ? 'opacity-0' : 'opacity-60 hover:opacity-100'
          }`}
        >
          🇺🇸
        </span>
      </div>
      
      {/* Tooltip opcional */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {language === 'es' ? 'Cambiar a English' : 'Switch to Español'}
      </div>
    </button>
  );
}
