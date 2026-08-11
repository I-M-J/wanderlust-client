import NavLink from "./NavLink";
import Image from "next/image";
import logoImg from "@/assets/Wanderlast.png";
import { Person } from '@gravity-ui/icons';
import { Avatar, Button } from "@heroui/react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import UserNavbar from "./UserNavbar";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "My Bookings", href: "/my-bookings" },
    { name: "Admin", href: "/add-destination" },
]

const Navbar = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    })

    const user = session?.user;

    console.log(session);
    return (
        <nav className="relative p-4">
            <div className="flex items-center justify-start gap-4 sm:justify-between px-6 py-4 bg-white">
                <ul className="hidden lg:flex flex-1 gap-4 ">
                    {
                        navLinks.map(navLink => (
                            <li key={navLink.name} className="font-medium leading-6 text-black-0c0"><NavLink navLink={navLink} /></li>
                        ))
                    }
                </ul>

                <div className="lg:hidden">
                    <MobileMenu navLinks={navLinks} />
                </div>

                <Image src={logoImg} alt="Wanderlast" height="auto" width="auto" className="w-40.5 h-auto object-contain" />

                <div className="hidden sm:flex flex-1 justify-end items-center gap-8">
                    {user
                        ? (<>
                            <Avatar>
                                <Avatar.Image alt={user.name} src={user.image} referrerPolicy="no-referrer" />
                                <Avatar.Fallback>
                                    {user.name
                                        ? (user.name.charAt(0) + user.name.split(" ")[1]?.charAt(0) || "").toUpperCase()
                                        : "U"
                                    }
                                </Avatar.Fallback>
                            </Avatar>

                            <UserNavbar />
                        </>)
                        : (<>
                            <Button className="bg-transparent text-black-c0 h-fit p-0 hover:scale-105 hover:text-teal-015 transition duration-300">
                                <Person />
                                Profile
                            </Button>

                            <Link href="/login" className="bg-transparent text-black-c0 h-fit p-0 hover:scale-105 hover:text-teal-015 transition duration-300">
                                Login
                            </Link>

                            <Link href="/signup" className="bg-transparent text-black-c0 h-fit p-0 hover:scale-105 hover:text-teal-015 transition duration-300">
                                Sign Up
                            </Link>
                        </>)
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;