import { AiOutlineDashboard } from 'react-icons/ai';
import { FaRegChartBar } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { GrAnalytics } from "react-icons/gr";
import { MdOutlineInventory2 } from "react-icons/md";

export const sidenavbarData = [
    {
        menuText: 'Dashboard',
        menuLink: '/dashboard',
        menuIcon: AiOutlineDashboard
      },
      {
        menuText: 'Products',
        menuLink: '',
        menuIcon: FaRegChartBar
      },
      {
        menuText: 'Notifications',
        menuLink: '',
        menuIcon: GoBell
      },
      {
        menuText: 'Analytics',
        menuLink: '',
        menuIcon: GrAnalytics
      },
      {
        menuText: 'Inventory',
        menuLink: '',
        menuIcon: MdOutlineInventory2
      },
]