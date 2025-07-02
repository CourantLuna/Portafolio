import { useState, useEffect } from "react";
import ProfileTabs from "./ProfileTabs";
import TabPanel from "./TabPanel";
import MobileSheet from "./MobileSheet";
import Home from "./Home";
import Resume from "./Resume";
import Works from "./Works";
import Blogs from "./Blogs";
import Contact from "./Contact";

// Define los tabs disponibles
const tabs = [
  { id: 0, label: "Inicio", component: Home },
  { id: 1, label: "Curriculum", component: Resume },
  { id: 2, label: "Trabajos", component: Works },
  { id: 3, label: "Blogs", component: Blogs },
  { id: 4, label: "Contacto", component: Contact },
];

export default function TabsPanel() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);
  const [mobileActiveTab, setMobileActiveTab] = useState(0);

  // Escuchar eventos de navegación mobile desde AppBar
  useEffect(() => {
    const handleMobileNavigation = (event: CustomEvent) => {
      const { tabIndex } = event.detail;
      setMobileActiveTab(tabIndex);
      setMobileSheetOpen(true);
    };

    window.addEventListener('openMobileSheet', handleMobileNavigation as EventListener);

    return () => {
      window.removeEventListener('openMobileSheet', handleMobileNavigation as EventListener);
    };
  }, []);

  const closeMobileSheet = () => {
    setMobileSheetOpen(false);
  };

  // Obtener componente activo para mobile
  const MobileActiveComponent = tabs.find(tab => tab.id === mobileActiveTab)?.component || Home;
  const mobileTabLabel = tabs.find(tab => tab.id === mobileActiveTab)?.label || "Inicio";

  return (
    <>
      <div className="w-full max-w-4xl flex flex-col items-center pb-16">
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabPanel>
          {activeTab === 0 && <Home />}
          {activeTab === 1 && <Resume />}
          {activeTab === 2 && <Works />}
          {activeTab === 3 && <Blogs />}
          {activeTab === 4 && <Contact />}
        </TabPanel>
      </div>

      {/* Mobile Sheet para navegación */}
      <MobileSheet
        isOpen={mobileSheetOpen}
        onClose={closeMobileSheet}
        title={mobileTabLabel}
      >
        <MobileActiveComponent />
      </MobileSheet>
    </>
  );
}
