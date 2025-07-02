import React from "react";

interface TabPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function TabPanel({ children, className = "" }: TabPanelProps) {
  return (
    <section
      className={`w-full mx-auto bg-white dark:bg-gray-900/90 dark:border dark:border-pink-500/20 dark:shadow-2xl dark:shadow-pink-500/10 lg:rounded-3xl shadow-2xl px-12 py-12 flex flex-col items-center relative z-10 mt-6 backdrop-blur-sm ${className}`}
      style={{ minHeight: "300px" }}
    >
      {/* Efecto de luz de fondo en modo dark */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-pink-900/5 dark:via-transparent dark:to-purple-900/5 rounded-3xl pointer-events-none"></div>
      
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
