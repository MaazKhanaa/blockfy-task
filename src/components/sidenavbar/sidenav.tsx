import { NavLink } from "react-router-dom";
import { sidenavbarData } from "./sidenavbar.data";
import { useSideNavbarComponent } from "./use-sidenavbar";
import { IoIosLogOut } from "react-icons/io";

export const SideNavComponent = () => {
  const {
    handleLogout
  } = useSideNavbarComponent();

  return (
    <div className="flex flex-col justify-between">
      <ul className="mt-4">
        {sidenavbarData.map((item, index) => (
          <li key={index} className="my-2">
            <NavLink
              to={item.menuLink}
              className={({ isActive }) =>
                `flex gap-3 items-center p-3 rounded-[8px] ${
                  isActive ? 'bg-primary text-white' : 'bg-white text-black'
                }`
              }
            >
              <span>{<item.menuIcon />}</span>
              <span>{item.menuText}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="">
        <button onClick={handleLogout} className="flex items-center gap-3"><span><IoIosLogOut /></span> Logout</button>
      </div>
    </div>
  );
};
