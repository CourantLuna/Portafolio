import { useState } from "react";
import ProfileTabs from "./ProfileTabs";
import TabPanel from "./TabPanel";
import Home from "./Home";
import Resume from "./Resume";
import Works from "./Works";
import Blogs from "./Blogs";
import Contact from "./Contact";


export default function TabsPanel() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full  flex flex-col items-center pb-16 ">
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabPanel>
        {activeTab === 0 && <Home />}
        {activeTab === 1 && <Resume />}
        {activeTab === 2 && <Works />}
        {activeTab === 3 && <Blogs />}
        {activeTab === 4 && <Contact  />}

        {/* ...otros tabs */}
      </TabPanel>
    </div>
  );
}
