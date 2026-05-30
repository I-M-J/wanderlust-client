import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import logoImg from "@/assets/Wanderlast.png";
import { Person } from '@gravity-ui/icons';
import { Button } from "@heroui/react";
import MobileMenu from "./MobileMenu";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "My Bookings", href: "/my-bookings" },
    { name: "Admin", href: "/admin" },
]

const Navbar = () => {
    return (
        <nav className="relative p-4">
            <div className="flex items-center justify-start gap-4 sm:justify-between px-6 py-4 bg-white">
                <ul className="hidden lg:flex flex-1 gap-8 ">
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
                    <Button className="bg-transparent text-black-c0 h-fit p-0 hover:scale-105 hover:text-teal-015 transition duration-300">
                        <Person />
                        Profile
                    </Button>

                    <Button className="bg-transparent text-black-c0 h-fit p-0 hover:scale-105 hover:text-teal-015 transition duration-300">
                        Login
                    </Button>

                    <Button className="bg-transparent text-black-c0 h-fit p-0 hover:scale-105 hover:text-teal-015 transition duration-300">
                        Sign Up
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;