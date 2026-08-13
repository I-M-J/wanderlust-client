import { MdOutlineCalendarToday, MdOutlineConfirmationNumber, MdCheckCircle, MdCancel, MdOutlineHourglassEmpty } from "react-icons/md";
import { Eye, TrashBin } from "@gravity-ui/icons";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import BookingCancelAlert from "@/components/BookingCancelAlert";

// ─── Static mock data ────────────────────────────────────────────────────────
// const MOCK_BOOKINGS = [
//     {
//         _id: "b1",
//         destinationName: "Bali Paradise",
//         country: "Indonesia",
//         imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
//         price: 1299,
//         departureDate: "2026-05-15",
//         status: "confirmed",
//         destinationId: "d1",
//     },
//     {
//         _id: "b2",
//         destinationName: "Santorini Sunsets",
//         country: "Greece",
//         imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
//         price: 2149,
//         departureDate: "2026-07-22",
//         status: "confirmed",
//         destinationId: "d2",
//     },
//     {
//         _id: "b3",
//         destinationName: "Venice & Italian Riviera",
//         country: "Italy",
//         imageUrl: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&w=800&q=80",
//         price: 1849,
//         departureDate: "2026-09-10",
//         status: "pending",
//         destinationId: "d3",
//     },
//     {
//         _id: "b4",
//         destinationName: "Tokyo Neon Dreams",
//         country: "Japan",
//         imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
//         price: 2599,
//         departureDate: "2026-04-03",
//         status: "cancelled",
//         destinationId: "d4",
//     },
// ];

// ─── Status badge config ──────────────────────────────────────────────────────
// const STATUS_CONFIG = {
//     confirmed: {
//         label: "Confirmed",
//         icon: MdCheckCircle,
//         className: "text-emerald-600 bg-emerald-50 border border-emerald-200",
//         iconClass: "text-emerald-500",
//     },
//     pending: {
//         label: "Pending",
//         icon: MdOutlineHourglassEmpty,
//         className: "text-amber-600 bg-amber-50 border border-amber-200",
//         iconClass: "text-amber-500",
//     },
//     cancelled: {
//         label: "Cancelled",
//         icon: MdCancel,
//         className: "text-red-500 bg-red-50 border border-red-200",
//         iconClass: "text-red-400",
//     },
// };

// ─── Helper ───────────────────────────────────────────────────────────────────
function formatDate(dateStr) {
    try {
        return new Date(dateStr).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    } catch {
        return dateStr;
    }
}

// ─── Booking Card ─────────────────────────────────────────────────────────────
function BookingCard({ booking }) {
    // const { label, icon: StatusIcon, className, iconClass } = STATUS_CONFIG[booking.status] ?? STATUS_CONFIG.pending;

    return (
        <div className="group flex flex-col md:flex-row gap-0 bg-white border border-white-ee shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            {/* Destination Image */}
            <div className="relative w-full md:w-64 shrink-0 aspect-video overflow-hidden bg-gray-f8">
                <img
                    src={booking.imageUrl}
                    alt={booking.destinationName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Card Body */}
            <div className="flex flex-col md:flex-row flex-1 gap-4 p-4">
                {/* Info block */}
                <div className="flex flex-col gap-2.5 flex-1">
                    {/* Status badge */}
                    {/* <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 w-fit ${className}`}>
                        <StatusIcon className={`w-3.5 h-3.5 ${iconClass}`} />
                        {label}
                    </span> */}

                    {/* Destination name */}
                    <h2 className="text-xl font-bold text-black-c0 leading-snug">
                        {booking.destinationName}
                    </h2>

                    {/* Meta rows */}
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-gray-6c text-sm">
                            <MdOutlineCalendarToday className="w-4 h-4 shrink-0" />
                            <span>
                                Departure:{" "}
                                <span className="font-medium text-black-c0">{formatDate(booking.departureDate)}</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-6c text-sm">
                            <MdOutlineConfirmationNumber className="w-4 h-4 shrink-0" />
                            <span>
                                Booking ID:{" "}
                                <span className="font-medium text-black-c0 text-xs">{booking._id}</span>
                            </span>
                        </div>
                    </div>

                    {/* Price */}
                    <p className="text-2xl font-bold text-teal-15 mt-1">
                        ${booking.price.toLocaleString()}
                    </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-row gap-2.5 items-start md:items-end md:justify-center shrink-0">
                    {/* {booking.status !== "cancelled" && (
                        <button
                            id={`cancel-booking-${booking._id}`}
                            disabled
                            className="inline-flex w-22 justify-center items-center gap-1.5 border border-red-300 text-red-500 px-2 py-2 text-sm font-semibold cursor-not-allowed opacity-80"
                        >
                            <TrashBin className="w-4 h-4" />
                            Cancel
                        </button>
                    )} */}

                    {console.log(booking.destinationName)}

                    <BookingCancelAlert destinationName={booking.destinationName} bookingId={booking._id} />

                    <Link
                        href={`/destinations/${booking.destinationId}`}
                        id={`view-booking-${booking._id}`}
                        className="inline-flex w-22 justify-center items-center gap-1.5 bg-teal-15 hover:bg-teal-600 text-white px-2 py-2 text-sm font-semibold transition-colors"
                    >
                        <Eye className="w-4 h-4" />
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
}

// ─── Empty state ──────────────────────────────────────────────────────────────
function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-f8 flex items-center justify-center mb-6 border border-white-ee">
                <MdOutlineCalendarToday className="w-9 h-9 text-gray-b6" />
            </div>
            <h2 className="text-xl font-bold text-black-c0 mb-2">No bookings yet</h2>
            <p className="text-gray-6c text-sm mb-6 max-w-xs">
                You have not made any travel bookings yet. Start exploring destinations and plan your next adventure!
            </p>
            <Link
                href="/destinations"
                className="inline-flex items-center gap-2 bg-teal-15 hover:bg-teal-600 text-white font-semibold px-6 py-3 text-sm uppercase tracking-wider transition-colors"
            >
                Explore Destinations
            </Link>
        </div>
    );
}

// ─── Stats bar ────────────────────────────────────────────────────────────────
function StatsBar({ bookings }) {
    const confirmed = bookings.filter((b) => b.status === "confirmed").length;
    const pending = bookings.filter((b) => b.status === "pending").length;
    const cancelled = bookings.filter((b) => b.status === "cancelled").length;

    const stats = [
        { label: "Total Bookings", value: bookings.length, accent: "text-black-c0" },
        { label: "Confirmed", value: confirmed, accent: "text-emerald-600" },
        { label: "Pending", value: pending, accent: "text-amber-500" },
        { label: "Cancelled", value: cancelled, accent: "text-red-500" },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white-ee border border-white-ee mb-8">
            {stats.map((stat) => (
                <div key={stat.label} className="bg-white px-5 py-4 flex flex-col gap-0.5">
                    <span className={`text-2xl font-bold ${stat.accent}`}>{stat.value}</span>
                    <span className="text-xs text-gray-6c font-semibold uppercase tracking-wider">{stat.label}</span>
                </div>
            ))}
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
const MyBookingsPage = async () => {
    const session = await auth.api.getSession({ headers: await headers() });

    console.log(session);

    const user = session?.user;

    console.log(user);

    const res = await fetch(`http://localhost:5000/bookings/${user.id}`);

    const bookings = await res.json();

    console.log(bookings);

    return (
        <section className="px-4 sm:px-6 lg:px-8 pt-10 pb-20">
            <div className="max-w-5xl mx-auto">
                {/* Page header */}
                <div className="mb-8 pb-6 border-b border-white-ee">
                    <h1 className="text-3xl sm:text-4xl font-bold text-black-c0 mb-1">My Bookings</h1>
                    <p className="text-gray-6c text-sm">Manage and view your upcoming travel plans</p>
                </div>

                {bookings.length === 0 ? (
                    <EmptyState />
                ) : (
                    <>
                        <StatsBar bookings={bookings} />

                        <div className="flex flex-col gap-4">
                            {bookings.map((booking) => (
                                <BookingCard key={booking._id} booking={booking} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default MyBookingsPage;