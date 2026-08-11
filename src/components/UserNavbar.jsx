'use client'

import { Button } from "@heroui/react";
import { LuLogOut } from "react-icons/lu";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";



const UserNavbar = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/");
                },
            },
        });
    }

    return <>
        <Button onClick={handleSignOut} className="bg-transparent text-black-c0 h-fit p-0 hover:scale-105 hover:text-teal-015 transition duration-300">
            <LuLogOut />
            Sign Out
        </Button>
    </>
}

export default UserNavbar;