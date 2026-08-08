import { Button } from "@heroui/react";
import { LuLogOut } from "react-icons/lu";

const UserNavbar = ({ user }) => {
    return <>
        <Button className="bg-transparent text-black-c0 h-fit p-0 hover:scale-105 hover:text-teal-015 transition duration-300">
            <LuLogOut />
            Sign Out
        </Button>
    </>
}

export default UserNavbar;