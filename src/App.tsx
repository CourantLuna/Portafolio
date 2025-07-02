import ProfileSidebar from "./components/ProfileSideBar";
import AppBar from "./components/AppBar";
import TabsPanel from "./components/TabsPanel";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen w-full bg-gradient-to-br from-pink-100 via-violet-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Efecto de luz de fondo en modo dark */}
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-pink-900/10 dark:via-purple-900/5 dark:to-violet-900/10 pointer-events-none"></div>
        
        <AppBar />
        
        <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center lg:p-4 relative z-10">
          <div className="flex flex-col lg:flex-row w-full justify-center items-stretch gap-16 lg:my-20 lg:max-w-[1400px]">
            {/* Sidebar sticky solo en desktop */}
            <div className="w-full lg:w-[30%] flex justify-center items-start">
              <div className="w-full sticky top-8 self-start">
                <ProfileSidebar />
              </div>
            </div>
            {/* Main content scrollable */}
            <div className="w-full lg:mt-30 lg:w-[70%] flex justify-end items-start">
              <TabsPanel />
            </div>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}
