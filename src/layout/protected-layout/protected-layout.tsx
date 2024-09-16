import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideNavbarComponent } from "src/components/sidenavbar/sidenavbar";

export const ProtectedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <div
        className={`fixed top-0 left-0 h-[100vh] bg-gray-800 transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 lg:w-[266px] lg:block`}
      >
        <SideNavbarComponent />
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-gray-800 text-white fixed top-4 left-4 z-50"
        >
          {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
        </button>
      </div>

      <div
        className='flex-1 p-[10px] sm:p-[38px] bg-gray-0 h-full'
      >
        <Outlet />
      </div>
    </div>
  );
};
