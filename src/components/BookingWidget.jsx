'use client';

import { ArrowUpRight } from "@gravity-ui/icons";
import { DateField, Description, Label } from "@heroui/react";
import { MdCheck } from "react-icons/md";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const BookingWidget = ({ destination }) => {
    const { price, _id, destinationName, imageUrl, country } = destination;

    console.log(destination);

    const { data: session, error } = authClient.useSession();
    const user = session?.user;

    console.log(user);

    const [departureDate, setDepartureDate] = useState(null);

    console.log(new Date(departureDate));

    const handleBooking = async () => {
        // alert(`Booking request for "${destinationName}" on ${formatDate(departureDate)} submitted!`);

        if (!user) {
            return;
        }

        const bookingData = {
            userId: user.id,
            userName: user.name,
            userImage: user.image,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDate: new Date(departureDate),
        }

        const res = await fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bookingData),
        })

        console.log(res);

        const data = await res.json();

        console.log(data);

        toast.success("Booking request submitted successfully");
    };

    // const formatDate = (dateStr) => {
    //     if (!dateStr) return "";
    //     try {
    //         const parts = dateStr.split('-');
    //         if (parts.length === 3) {
    //             return `${parts[1]}/${parts[2]}/${parts[0]}`; // MM/DD/YYYY
    //         }
    //         return dateStr;
    //     } catch (e) {
    //         return dateStr;
    //     }
    // };

    return (
        <div className="border border-white-ee bg-white p-6 shadow-sm flex flex-col h-fit">
            {/* Price section */}
            <div className="mb-6">
                <span className="block text-xs uppercase tracking-wider text-gray-6c font-semibold mb-1">
                    Starting from
                </span>
                <span className="text-4xl font-bold text-teal-15 block">
                    ${price}
                </span>
                <span className="block text-xs text-gray-6c font-medium mt-1">
                    per person
                </span>
            </div>

            {/* Date display box */}
            {/* <div className="bg-gray-f8 border border-white-ee px-4 py-3.5 text-center mb-6 font-semibold text-black-c0 text-base rounded-none select-all">
                {formatDate(departureDate) || "Date not specified"}
            </div> */}

            <DateField
                className="mb-6"
                name="date"
                value={departureDate}
                onChange={setDepartureDate}
            >
                <Label className="font-medium text-sm text-black-c0">Departure Date</Label>

                <DateField.Group className="bg-gray-f8 border border-white-ee font-semibold text-black-c0 text-base rounded-none select-all shadow-none">
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>

                <Description>Enter a date from today onwards</Description>
            </DateField>

            {/* Book Now Button */}
            <button
                onClick={handleBooking}
                className="w-full bg-teal-15 hover:bg-teal-600 text-white font-bold py-4 px-6 text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-colors rounded-none cursor-pointer"
            >
                Book Now
                <ArrowUpRight className="w-4.5 h-4.5" />
            </button>

            {/* Trust checklist */}
            <ul className="mt-6 space-y-3.5">
                <li className="flex items-start gap-2.5 text-sm text-gray-6c font-semibold">
                    <MdCheck className="w-5 h-5 text-teal-15 shrink-0" />
                    <span>Free cancellation up to 7 days</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-6c font-semibold">
                    <MdCheck className="w-5 h-5 text-teal-15 shrink-0" />
                    <span>Travel insurance included</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-6c font-semibold">
                    <MdCheck className="w-5 h-5 text-teal-15 shrink-0" />
                    <span>24/7 customer support</span>
                </li>
            </ul>
        </div>
    );
};

export default BookingWidget;
