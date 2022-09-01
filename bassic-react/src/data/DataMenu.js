import { AiFillSetting } from "react-icons/ai";
import { MdDashboard,MdPayment } from "react-icons/md";
import { FaClipboardList,FaFileInvoiceDollar,FaPeopleArrows } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { BsFillPeopleFill,BsFillPersonLinesFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
const DataMenu = [
  {
    icon: <MdDashboard />,
    title: "Dashboard ",
    path: "/Dashboard",
  },
  {
    icon: <RiServiceFill />,
    title: "Service ",
    path: "/Service",
  },
  {
    icon: <FaClipboardList />,
    title: "Order ",
    path: "/Order",
  },
  {
    icon: <MdPayment />,
    title: "Payment ",
    path: "/Payment",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Invoice ",
    path: "/Invoice",
  },
  {
    icon: <BsFillPeopleFill />,
    title: "Customer ",
    path: "/Customer",
  },
  {
    icon: <FaPeopleArrows />,
    title: "Partner ",
    path: "/Partner",
  },
  {
    icon: <BsFillPersonLinesFill />,
    title: "Employee ",
    path: "/Employee",
  },

  {
    icon: <AiFillSetting />,
    title: "Setting ",
    path: "/Setting",
  },

  {
    icon: <FiLogOut />,
    title: "Log out ",
    path: "/Logout ",
  },


];
export default DataMenu;
