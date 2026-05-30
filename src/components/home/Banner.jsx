import Image from "next/image";
import bannerBg from "@/assets/Banner.png"
import Navbar from "../Navbar";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
    return (
        <section className="relative">
            <Image src={bannerBg} alt="Banner" fill className="object-cover" />

            <div className="absolute inset-0"></div>

            <Navbar />

            <div className="relative flex h-full flex-col items-center justify-center text-center max-w-lg md:max-w-3xl mx-auto mt-25.5 mb-25.5">
                <h1 className="text-7xl xl:text-8xl text-white mb-3">Discover Your Next Adventure</h1>

                <p className="text-xl leading-8 text-white-ed mb-10">Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.</p>

                <div className="flex gap-4">
                    <Link href="#" className="button h-fit py-4 px-6 bg-teal-15 text-white rounded-none font-medium text-base leading-6 gap-6">
                        EXPLORE NOW
                        <FaArrowRight />
                    </Link>

                    <Link href="#" className="button h-fit py-4 px-6 bg-white/40 text-white rounded-none font-medium text-base leading-6">
                        VIEW DESTINATION
                    </Link>
                </div>
            </div>

            <div className="relative bg-linear-to-b from-[#666666]/0 to-black/40 bg-white/40 text-white flex justify-between w-full divide-x border-t border-white">
                <div className="flex-1 px-6 py-4">
                    <h3 className="font-medium text-xl mb-2">Location</h3>

                    <p className="text-sm">Address, City or Zip</p>
                </div>

                <div className="flex-1 px-6 py-4">
                    <h3 className="font-medium text-xl mb-2">Date/Duration</h3>

                    <p className="text-sm">Anytime/3 Days</p>
                </div>

                <div className="flex-1 px-6 py-4">
                    <h3 className="font-medium text-xl mb-2">Budget</h3>

                    <p className="text-sm">$0-$3000</p>
                </div>

                <div className="flex-1 px-6 py-4">
                    <h3 className="font-medium text-xl mb-2">People</h3>

                    <p className="text-sm">5-10</p>
                </div>

                <div className="w-50">
                    <Link href="#" className="button bg-teal-15 w-full h-full rounded-none font-semibold text-xl">Search</Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;