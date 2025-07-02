// src/components/LanguageToggle.tsx
import { useLanguage } from '../hooks/useLanguage';
import spainFlag from '../assets/spain-flag.svg';
import usaFlag from '../assets/usa-flag.svg';

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <div className="relative group flex items-center gap-3">
      {/* EN Label */}
      <span 
        className={`text-sm font-bold transition-all duration-300 ${
          language === 'en' 
            ? 'text-slate-900 dark:text-slate-100' 
            : 'text-slate-400 dark:text-slate-500'
        }`}
      >
        EN
      </span>

      <button
        onClick={toggleLanguage}
        className="relative w-16 h-8 rounded-full border border-slate-300 dark:border-slate-600 transition-all duration-300 hover:scale-105 overflow-hidden"
        style={{
          boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.15), inset 0 -1px 3px rgba(255, 255, 255, 0.1)'
        }}
        aria-label={t('language.toggle')}
      >
        {/* Background flags */}
        <div className="absolute inset-0"
         
        
        >
          {/* Spanish flag background - when ES is active */}
          <div className={`absolute inset-0 transition-all duration-300 overflow-hidden ${
            language === 'es' ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}>
            <img 
              src={spainFlag} 
              alt="Spain flag" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* USA flag background - when EN is active */}
          <div className={`absolute inset-0 transition-all duration-300 overflow-hidden ${
            language === 'en' ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}>
            <img 
              src={usaFlag} 
              alt="USA flag" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Sliding circle */}
        <div
          className={`absolute top-[1.5px] w-7 h-7 rounded-full bg-white transition-all duration-300 ease-out transform z-20 ${
            language === 'es' ? 'translate-x-8.5' : 'translate-x-0.5'
          }`}
          style={{
            boxShadow: '0px 1px 3px 4px rgba(0,0,0,0.18) inset, 0px 2px 40px 10px rgba(0,0,0,0.88)',
            WebkitBoxShadow: '0px 0px 6px 3px rgba(0,0,0,0.18) inset, 0px 2px 60px 15px rgba(0,0,0,0.88)',
            MozBoxShadow: '5px 2px 4px px rgba(0,0,0,0.18) inset, 0px 2px 80px 20px rgba(0,0,0,0.88)'
          }}
        >
        </div>
      </button>

      {/* ES Label */}
      <span 
        className={`text-sm font-bold transition-all duration-300 ${
          language === 'es' 
            ? 'text-slate-900 dark:text-slate-100' 
            : 'text-slate-400 dark:text-slate-500'
        }`}
      >
        ES
      </span>

      {/* Tooltip */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-900 dark:bg-slate-700 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
        {language === 'es' ? 'Cambiar a English' : 'Switch to Español'}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-slate-700 rotate-45"></div>
      </div>
    </div>
  );
}
