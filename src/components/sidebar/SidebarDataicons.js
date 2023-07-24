

import { FaTh, FaRegChartBar } from "react-icons/fa";
import { BiSolidHome } from "react-icons/bi";

const menu = [
    {
        title: "Dashboard",
        icon: <FaTh />,
        path: "/dashboard",
    },
    {
        title: "Home",
        icon: <BiSolidHome />,
        path: "/home",
    },
    {
        title: "Account",
        icon: <FaRegChartBar />,
        path: "/account"
    },

];

export default menu;