import ProfileSidebar from "./components/ProfileSideBar";
import AppBar from "./components/AppBar";
import TabsPanel from "./components/TabsPanel";

export default function App() {
  return (
<div className="relative min-h-screen w-full bg-gradient-to-br from-pink-100 via-violet-50 to-blue-50">
      <AppBar />
<div className="min-h-screen w-full flex flex-col lg:flex-row justify-center bg-gradient-to-br from-pink-100 via-violet-50 to-blue-50 lg:p-4">
      <div className=" flex flex-col lg:flex-row w-full  justify-center items-stretch gap-16 lg:my-20 lg:max-w-[1400px] ">
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

    
  );
}
