// src/components/BlogModal.tsx

import React from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import { useLanguage } from "../hooks/useLanguage";

interface Blog {
  date: string;
  tag: string;
  img: string;
  title: string;
  content: React.ReactNode;
}

interface BlogModalProps {
  open: boolean;
  onClose: () => void;
  blog: Blog | null;
}

export default function BlogModal({ open, onClose, blog }: BlogModalProps) {
  const { t } = useLanguage();
  
  if (!open || !blog) return null;

  // Función para cerrar modal al hacer clic en el backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div 
      className="fixed inset-0 z-[9999] bg-black/50 dark:bg-black/70 flex justify-center items-center overflow-auto backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-900/95 dark:border dark:border-pink-500/20 dark:shadow-2xl dark:shadow-pink-500/10 rounded-2xl shadow-2xl w-full max-w-3xl relative animate-fade-in backdrop-blur-md max-h-[90vh] overflow-y-auto">
        {/* Efecto de luz de fondo en modo dark */}
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-pink-900/5 dark:via-transparent dark:to-purple-900/5 rounded-2xl pointer-events-none"></div>
        
        {/* Header con botón cerrar mejorado */}
        <div className="sticky top-0 bg-white dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-pink-500/20 rounded-t-2xl p-6 pb-4 z-20">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-400 dark:hover:from-pink-600 dark:hover:to-pink-500 text-gray-600 dark:text-gray-300 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-pink-500/30 group hover:scale-110"
            aria-label={t('modal.close')}
          >
            <FaTimes className="text-lg group-hover:text-white transition-colors duration-300" />
          </button>
          
          {/* Fecha y categoría en el header */}
          <div className="text-sm text-pink-500 dark:text-pink-400 font-semibold mb-2 pr-12">
            {blog.date} • {blog.tag}
          </div>
          {/* Título en el header */}
          <h1 className="font-bold text-2xl lg:text-3xl dark:text-gray-100 mb-2 pr-12 leading-tight">
            {blog.title}
          </h1>
        </div>
        
        <div className="relative z-10 p-6 pt-4">
          {/* Imagen principal */}
          <div className="w-full aspect-video rounded-xl bg-gray-100 dark:bg-gray-800/50 dark:border dark:border-pink-500/20 mb-6 flex items-center justify-center overflow-hidden shadow-lg">
            <img
              src={blog.img}
              alt={blog.title}
              className="object-cover w-full h-full dark:brightness-90 dark:contrast-110"
              onError={e => (e.currentTarget.src = "https://placehold.co/800x450/ec4899/ffffff?text=Blog+Image")}
            />
          </div>
          
          {/* Contenido del blog */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-base lg:text-lg">
              {blog.content}
            </div>
          </div>
          
          {/* Footer del modal */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-pink-500/20">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {t('modal.shareText')}
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-400 dark:from-pink-600 dark:to-pink-500 text-white rounded-lg font-semibold shadow-md dark:shadow-pink-500/30 hover:from-pink-600 hover:to-pink-500 dark:hover:from-pink-700 dark:hover:to-pink-600 transition-all duration-300 hover:scale-105"
              >
                {t('modal.close')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Usar createPortal para renderizar el modal directamente en el body
  return createPortal(modalContent, document.body);
}
