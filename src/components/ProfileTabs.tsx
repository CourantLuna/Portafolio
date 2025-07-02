// src/components/ProfileTabs.tsx

interface ProfileTabsProps {
  activeTab: number;
  setActiveTab: (idx: number) => void;
}

// Puedes cambiar los iconos SVG o usar react-icons/fontawesome si prefieres.
const tabs = [
  {
    label: "Inicio",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M9 21V9h6v12" />
      </svg>
    ),
  },
  {
    label: "Curriculum",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" />
        <path d="M9 10h6" stroke="currentColor" strokeLinecap="round" />
        <path d="M9 14h6" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Trabajos",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4 7V4a1 1 0 011-1h3m7 0h3a1 1 0 011 1v3M4 7h16m-8 0v13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Blogs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" />
        <path d="M8 4v16M16 4v16" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Contacto",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" />
        <path d="M3 6l9 6 9-6" stroke="currentColor" />
      </svg>
    ),
  },
];

export default function ProfileTabs({ activeTab, setActiveTab }: ProfileTabsProps) {
  return (
    <div className="hidden lg:block w-full flex justify-end">
      <div className="bg-white dark:bg-gray-900/90 dark:border dark:border-pink-500/20 dark:shadow-2xl dark:shadow-pink-500/10 rounded-3xl px-8 py-8 flex gap-4 shadow-lg backdrop-blur-sm">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(idx)}
            className={`flex flex-col items-center gap-1 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105
              ${
                activeTab === idx
                  ? "bg-gradient-to-r from-pink-500 to-pink-400 dark:from-pink-600 dark:to-pink-500 text-white shadow-lg dark:shadow-pink-500/30 font-bold"
                  : "bg-gray-50 dark:bg-gray-800/50 dark:border dark:border-pink-500/10 text-slate-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 dark:hover:shadow-lg dark:hover:shadow-pink-500/20"
              }
            `}
          >
            {tab.icon}
            <span className="text-xs mt-1">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
