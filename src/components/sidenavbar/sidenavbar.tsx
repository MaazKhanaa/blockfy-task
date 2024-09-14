import { ProfileComponent } from "./profile";
import { SideNavComponent } from "./sidenav";
import { useSideNavbarComponent } from "./use-sidenavbar";




export const SideNavbarComponent = () => {


  const {} = useSideNavbarComponent();


  return (

    <div className="p-[24px]">
       <ProfileComponent />
       <SideNavComponent />
    </div>
  )
}
