import footerLogo from "@/assets/Wanderlast-1.png"
import { ArrowUpRight } from "@gravity-ui/icons";
import { Button, InputGroup } from "@heroui/react";
import Image from "next/image";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const footer = () => {
    return (
        <footer className="px-4 sm:px-6 lg:px-8 pt-30 pb-8 bg-black-c0">
            <div className="max-w-7xl mx-auto">
                <div className="mb-15">
                    <Image src={footerLogo} alt="Wanderlast" height="auto" weight="auto" className="w-auto h-15" />

                    <p className="text-gray-b6">Your gateway to extraordinary travel experiences around the world.</p>
                </div>

                <div className="flex flex-col gap-8 lg:flex-row justify-between mb-14">
                    <div>
                        <h3 className="text-xl text-white mb-2">NEWSLETTER</h3>

                        <p className="text-sm leading-5 text-gray-b6 mb-4">Subscribe for exclusive travel deals and inspiration.</p>

                        <InputGroup className="rounded-none bg-[#373737]">
                            <InputGroup.Input className="w-full max-w-[280px] text-gray-6c" placeholder="Enter email" />
                            <InputGroup.Suffix className="pr-0">
                                <Button isIconOnly aria-label="Copy" size="sm" variant="ghost">
                                    <ArrowUpRight className="size-4 text-white" />
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                    </div>

                    <div>
                        <h3 className="text-xl text-white mb-3">QUICK LINKS</h3>

                        <ul className="text-gray-b6 text-lg space-y-2">
                            <li><a href="">Home</a></li>
                            <li><a href="">Destinations</a></li>
                            <li><a href="">My Bookings</a></li>
                            <li><a href="">My Profile</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl text-white mb-3">SUPPORT</h3>

                        <ul className="text-gray-b6 text-lg space-y-2">
                            <li><a href="">Help Center</a></li>
                            <li><a href="">Terms of Services</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl text-white mb-3">CONTACT US</h3>

                        <ul className="text-gray-b6 text-lg space-y-2">
                            <li><a href="">786 901 1622</a></li>
                            <li><a href="">info@wandarland.com</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="border-white/10 mb-5"/>

                <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <p className="text-sm leading-4 text-gray-b6">© 2026 Wanderlust. All rights reserved.</p>

                    <div className="text-white flex gap-8">
                        <FaXTwitter />

                        <FaLinkedin />

                        <FaInstagram />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default footer;