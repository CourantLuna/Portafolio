import { useState } from "react";
import ProfileTabs from "./ProfileTabs";
import TabPanel from "./TabPanel";
import Home from "./Home";


export default function TabsPanel() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full  flex flex-col items-center pb-16 ">
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabPanel>
          {activeTab === 0 && <Home />}

        {activeTab === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-3">Resume</h2>
            <p className="text-gray-600">Contenido del Resume: experiencia, estudios...</p>
          </div>
        )}
        {/* ...otros tabs */}
      </TabPanel>
    </div>
  );
}
