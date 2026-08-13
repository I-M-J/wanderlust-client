"use client"

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";

const BookingCancelAlert = ({ bookingId, destinationName }) => {
    const router = useRouter();

    console.log(bookingId, destinationName);

    const handleCancelBooking = async () => {
        const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            }
        });

        if (res.ok) {
            const data = await res.json();

            console.log(data);

            router.refresh();

            toast.success("Booking cancelled successfully");
        }
    };

    return (
        <AlertDialog>
            <Button
                className="inline-flex w-22 justify-center items-center gap-1.5 border border-red-300 text-red-500 bg-white hover:bg-red-50 rounded-none px-2 py-2 text-sm font-semibold cursor-pointer opacity-80"
            >
                <TrashBin className="w-4 h-4" />
                Cancel
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="outline-none rounded-none w-full max-w-lg bg-white shadow-2xl border border-white-ee p-8 flex flex-col gap-6 relative">
                        <AlertDialog.CloseTrigger className="text-gray-400 hover:text-black-c0 cursor-pointer p-1 absolute top-4 right-4 bg-transparent transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </AlertDialog.CloseTrigger>

                        <AlertDialog.Header className="flex flex-row items-center justify-start gap-3.5 p-0 border-none">
                            <AlertDialog.Icon className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 p-0 border-none">
                                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </AlertDialog.Icon>
                            <AlertDialog.Heading className="text-xl font-bold text-black-c0 m-0 text-left">
                                Cancel Travel Package
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body className="p-0 border-none mt-2 text-left">
                            <p className="text-sm text-gray-6c leading-relaxed font-normal">
                                Are you sure you want to cancel <span className="font-semibold text-black-c0">&quot;{destinationName}&quot;</span>? This action cannot be undone.
                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer className="flex flex-row justify-end gap-3 p-0 border-none mt-2">
                            <Button
                                slot="close"
                                className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-500 hover:text-gray-700 px-6 py-2.5 rounded-none font-semibold text-sm cursor-pointer transition-colors"
                            >
                                Go Back
                            </Button>
                            <Button
                                onClick={handleCancelBooking}
                                slot="close"
                                className="flex items-center gap-1.5 px-6 py-2.5 bg-[#EF4444] hover:bg-red-600 text-white font-semibold text-sm rounded-none cursor-pointer transition-colors"
                            >
                                <MdDeleteOutline size={18} />
                                Cancel Package
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}

export default BookingCancelAlert;