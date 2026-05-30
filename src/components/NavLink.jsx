"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ navLink }) => {
    const pathName = usePathname();

    const isActive = navLink.href == pathName;

    return (
        <Link href={navLink.href}>
            {navLink.name}
        </Link>
    );
};

export default NavLink;