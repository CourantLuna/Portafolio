// src/components/MobileSheet.tsx
import { useEffect } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";

interface MobileSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function MobileSheet({ isOpen, onClose, title, children }: MobileSheetProps) {
  // Prevenir scroll del body cuando el sheet está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup al desmontar
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Manejar swipe down para cerrar
  let startY = 0;
  let currentY = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    startY = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    currentY = e.touches[0].clientY;
    const diff = currentY - startY;
    
    // Solo permitir swipe down desde la parte superior
    const target = e.currentTarget as HTMLElement;
    if (diff > 0 && target.scrollTop === 0) {
      target.style.transform = `translateY(${Math.min(diff * 0.5, 100)}px)`;
    }
  };

  const handleTouchEnd = () => {
    const diff = currentY - startY;
    
    if (diff > 100) { // Si arrastró más de 100px hacia abajo
      onClose();
    } else {
      // Volver a la posición original
      const sheet = document.getElementById('mobile-sheet');
      if (sheet) {
        sheet.style.transform = 'translateY(0)';
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-[9999] bg-black/50 dark:bg-black/70 backdrop-blur-sm">
      {/* Backdrop */}
      <div 
        className="absolute inset-0" 
        onClick={onClose}
      />
      
      {/* Sheet */}
      <div
        id="mobile-sheet"
        className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900/95 rounded-t-3xl shadow-2xl dark:shadow-pink-500/20 border-t border-gray-200 dark:border-pink-500/20 animate-slide-up max-h-[90vh] overflow-hidden backdrop-blur-md"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Handle bar para indicar que se puede arrastrar */}
        <div className="flex justify-center p-2">
          <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-pink-500/20">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Botón de deslizar hacia abajo */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label="Deslizar hacia abajo"
            >
              <FaChevronDown className="text-sm" />
            </button>
            
            {/* Botón de cerrar */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-all duration-300"
              aria-label="Cerrar"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="overflow-y-auto flex-1 p-4" style={{ maxHeight: 'calc(90vh - 120px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
