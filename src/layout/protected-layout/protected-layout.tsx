import { Outlet } from "react-router-dom";
import { SideNavbarComponent } from "src/components/sidenavbar/sidenavbar";


export const ProtectedLayout = () => {
  return (
    <div className="flex">
      <div className="w-[266px] h-full">
       <SideNavbarComponent />
      </div>

      <div className="w-full h-full bg-gray-0 p-[38px]">
        <Outlet />
      </div>

    </div>
  )
}
