"use client"

import { Bars, CircleXmark, Person } from "@gravity-ui/icons";
import { useState } from "react";
import NavLink from "./NavLink";
import { Button } from "@heroui/react";

const MobileMenu = ({ navLinks }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black-0c0 flex items-end"
            >
                {
                    isOpen
                        ? (
                            <CircleXmark height={24} width={24} />
                        )
                        : (
                            <Bars height={24} width={24} />
                        )
                }
            </button>

            {
                isOpen
                && (
                    <div className="absolute top-full left-0 right-0 flex flex-col gap-4 bg-white px-6 py-4">
                        {
                            navLinks.map((navLink) => (
                                <NavLink key={navLink.name} navLink={navLink} />
                            ))
                        }

                        <div className="flex flex-col gap-4 sm:hidden">
                            <Button className="bg-transparent text-black-c0 h-fit justify-start p-0">
                                <Person /> Profile
                            </Button>
                            <Button className="bg-transparent text-black-c0 h-fit justify-start p-0">
                                Login
                            </Button>
                            <Button className="bg-transparent text-black-c0 h-fit justify-start p-0">
                                Sign Up
                            </Button>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default MobileMenu;