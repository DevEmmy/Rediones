import { HiOutlineHome, HiOutlineBell, HiOutlineMail, HiOutlineUserGroup } from "react-icons/hi";
import User from "../Globals/User";



const nav = [
    {
        id: 1,
        icon: <HiOutlineHome/>,
        title : "Home",
    },
    {
        id: 2,
        icon: <HiOutlineBell />,
        title: "Notifications",
    },
    {
        id: 3,
        icon: <HiOutlineMail />,
        title: "Messages",
    },
    {
        id: 4,
        icon: <HiOutlineUserGroup />,
        title: "Friends"
    },
    {
        id: 5,
        icon: <User />,
        title: "User"
    }
]

export default nav;