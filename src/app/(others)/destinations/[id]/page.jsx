import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowBack, MdOutlineLocationOn, MdOutlineCalendarToday, MdStar } from "react-icons/md";
import DestinationActions from "@/components/DestinationActions";
import BookingWidget from "@/components/BookingWidget";

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;

    // let destination = null;
    // let error = null;

    // try {
    //     const res = await fetch(`http://localhost:5000/destinations/${id}`, { cache: 'no-store' });
    //     if (res.ok) {
    //         destination = await res.json();
    //     } else {
    //         error = "Destination not found";
    //     }
    // } catch (e) {
    //     console.error("Error fetching destination:", e);
    //     error = "Failed to fetch destination details";
    // }

    // if (error || !destination) {
    //     return (
    //         <section className="px-4 sm:px-6 lg:px-8 py-20 text-center">
    //             <div className="max-w-md mx-auto">
    //                 <h2 className="text-2xl font-bold text-black-c0 mb-4">{error || "Destination not found"}</h2>
    //                 <Link href="/destinations" className="text-teal-15 font-semibold hover:underline">
    //                     &larr; Back to Destinations
    //                 </Link>
    //             </div>
    //         </section>
    //     );
    // }

    // const defaultImage = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80";

    const res = await fetch(`http://localhost:5000/destinations/${id}`);

    const destination = await res.json();

    return (
        <section className="px-4 sm:px-6 lg:px-8 pt-10 pb-20">
            <div className="max-w-7xl mx-auto">
                {/* Header Row */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white-ee">
                    <Link
                        href="/destinations"
                        className="inline-flex items-center gap-2 text-gray-6c hover:text-black-c0 transition-colors font-semibold text-sm uppercase tracking-wider"
                    >
                        <MdOutlineArrowBack className="w-5 h-5" />
                        Back to Destinations
                    </Link>

                    <DestinationActions id={id} destination={destination} />
                </div>

                {/* Banner Image Container */}
                <div className="relative w-full aspect-21/9 sm:aspect-16/7 md:aspect-3/1 overflow-hidden bg-gray-f8 mb-10 border border-white-ee">
                    <Image
                        src={destination.imageUrl || defaultImage}
                        alt={destination.name}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
                    {/* Left Column (Details) */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-gray-6c text-sm font-semibold uppercase tracking-wider">
                            <MdOutlineLocationOn className="w-5 h-5 text-gray-6c shrink-0" />
                            <span>{destination.country}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl font-bold text-black-c0 leading-tight">
                            {destination.name}
                        </h1>

                        {/* Rating and Duration info */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-black-c0 font-semibold">
                            <div className="flex items-center gap-1">
                                <MdStar className="w-5 h-5 text-teal-15 shrink-0" />
                                <span>4.9</span>
                                <span className="text-gray-6c font-normal">(234 reviews)</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-6c">
                                <MdOutlineCalendarToday className="w-4.5 h-4.5 text-gray-6c shrink-0" />
                                <span>{destination.duration}</span>
                            </div>
                        </div>

                        <hr className="border-white-ee my-4" />

                        {/* Overview */}
                        <div>
                            <h2 className="font-bold text-black-c0 mb-4 uppercase tracking-wider text-sm lg:text-base">
                                Overview
                            </h2>
                            <p className="text-gray-6c leading-relaxed text-base whitespace-pre-line">
                                {destination.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Column (Booking Widget) */}
                    <div className="lg:col-span-1">
                        <BookingWidget
                            price={destination.price}
                            departureDate={destination.departureDate}
                            destinationName={destination.name}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DestinationDetailsPage;
