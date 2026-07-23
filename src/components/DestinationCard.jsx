import { ArrowUpRight } from "@gravity-ui/icons"
import { MdOutlineCalendarToday, MdOutlineLocationOn } from "react-icons/md"

const DestinationCard = ({ dest }) => {
    return (
        <div className="group flex flex-col gap-4 h-full">
            {/* Card Image */}
            <div className="relative overflow-hidden aspect-5/3 bg-gray-f8">
                <img
                    src={dest.imageUrl || "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80"}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                // onError={(e) => {
                //     e.target.src = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80";
                // }}
                />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-sm font-semibold text-black flex items-center gap-1 shadow-sm rounded-none">
                    <span>4.5</span>
                    <svg className="w-3.5 h-3.5 fill-black" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
                    </svg>
                </div>
            </div>

            {/* Details Container */}
            <div className="flex flex-col gap-2 flex-1">
                {/* Location Row */}
                <div className="flex items-center gap-1 text-gray-6c text-sm">
                    <MdOutlineLocationOn className="w-4.5 h-4.5 text-gray-6c shrink-0" />
                    <span>{dest.country}</span>
                </div>

                {/* Name & Price Row */}
                <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-xl text-black-c0 leading-snug group-hover:text-teal-15 transition-colors">
                        {dest.name}
                    </h3>
                    <div className="text-right shrink-0">
                        <span className="font-bold text-xl text-black-c0">${dest.price}</span>
                        <span className="text-xs text-gray-6c">/Person</span>
                    </div>
                </div>

                {/* Duration Row */}
                <div className="flex items-center gap-1.5 text-gray-6c text-sm">
                    <MdOutlineCalendarToday className="w-4.5 h-4.5 text-gray-6c shrink-0" />
                    <span>{dest.duration}</span>
                </div>

                {/* Book Now Link */}
                <div className="mt-auto">
                    <a
                        href={`/destinations/${dest._id}`}
                        className="inline-flex items-center gap-1.5 text-teal-15 hover:text-teal-600 font-bold text-sm tracking-wider uppercase border-b border-teal-15/30 pb-0.5 hover:border-teal-600 transition-colors"
                    >
                        BOOK NOW
                        <ArrowUpRight className="w-4.5 h-4.5" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DestinationCard
