'use client';

import { useRouter } from 'next/navigation';
import { MdOutlineEdit, MdDeleteOutline, MdSave } from 'react-icons/md';
import {
    Modal,
    Button,
    TextField,
    Input,
    Label,
    Select,
    ListBox,
    TextArea,
    FieldError
} from "@heroui/react";

const CATEGORIES = [
    "Beach", "Mountain", "City", "Adventure", "Cultural", "Luxury",
];

const DestinationActions = ({ id, destination }) => {
    const router = useRouter();

    const handleDelete = () => {
        const confirmed = window.confirm(`Are you sure you want to delete "${destination?.name}"?`);
        if (confirmed) {
            alert('Destination deleted successfully! (Simulated)');
            router.push('/destinations');
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const updatedDestination = Object.fromEntries(formData.entries());

        // Parse price to number
        if (updatedDestination.price !== undefined) {
            updatedDestination.price = Number(updatedDestination.price);
        }

        // try {
        //     const res = await fetch(`http://localhost:5000/destinations/${id}`, {
        //         method: 'PUT',
        //         headers: {
        //             'content-type': 'application/json',
        //         },
        //         body: JSON.stringify(updatedDestination),
        //     });

        //     if (res.ok) {
        //         alert('Travel package updated successfully!');
        //         close();
        //         router.refresh();
        //     } else {
        //         alert('Failed to update travel package.');
        //     }
        // } catch (error) {
        //     console.error('Error updating destination:', error);
        //     alert('Failed to update travel package.');
        // }

        const res = await fetch(`http://localhost:5000/destinations/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedDestination)
            }
        )

        const data = await res.json();

        console.log(data);
    };

    return (
        <div className="flex items-center gap-3">
            <Modal>
                {/* Edit Button Trigger */}
                <Button
                    className="flex items-center gap-1.5 px-4 py-2 border border-white-ee bg-transparent hover:bg-gray-f8 text-black-c0 transition-colors font-semibold text-sm rounded-none cursor-pointer"
                >
                    <MdOutlineEdit className="w-4.5 h-4.5 text-black-c0" />
                    Edit
                </Button>

                {/* Edit Modal Backdrop, Container and Dialog using dot-notation anatomy */}
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="outline-none rounded-none w-full max-w-3xl bg-white shadow-2xl border border-white-ee p-10 flex flex-col gap-6">
                            <Modal.Header className="relative">
                                {/* Header */}
                                <Modal.Heading className="text-2xl font-bold text-black-c0">
                                    Update Travel Package
                                </Modal.Heading>
                                <p className="text-sm text-gray-6c mt-1 font-normal">
                                    Make changes to the travel package details below
                                </p>

                                <Modal.CloseTrigger className="text-gray-6c hover:text-black-c0 cursor-pointer p-1 absolute -top-3 -right-3 bg-transparent">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </Modal.CloseTrigger>
                            </Modal.Header>

                            <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-6">
                                {/* Body */}
                                <Modal.Body className="flex flex-col gap-5 max-h-[50vh] overflow-y-auto pr-2 scrollbar">
                                    {/* Destination Name (No label above the input box as per mockup) */}
                                    <TextField name="name" className="flex flex-col" defaultValue={destination?.name}>
                                        <Input className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white placeholder:text-base px-3 py-2 w-full focus:outline-none" placeholder="Bali Paradise" />
                                        <FieldError className="text-red-500 text-sm mt-1" />
                                    </TextField>

                                    <div className="flex flex-col md:flex-row gap-5">
                                        <TextField name="country" className="flex-1 flex flex-col" defaultValue={destination?.country}>
                                            <Label className="font-semibold text-base leading-6 text-black-c0 mb-2">
                                                Country
                                            </Label>
                                            <Input className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white placeholder:text-base px-3 py-2 w-full focus:outline-none" placeholder="Indonesia" />
                                            <FieldError className="text-red-500 text-sm mt-1" />
                                        </TextField>

                                        <Select
                                            name="category"
                                            className="flex-1 flex flex-col"
                                            placeholder="Select a category"
                                            defaultValue={destination?.category}
                                        >
                                            <Label className="font-semibold text-base leading-6 text-black-c0 mb-2">
                                                Category
                                            </Label>
                                            <Select.Trigger className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white flex justify-between items-center px-3 py-2 text-left w-full focus:outline-none">
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover className="rounded-none bg-white border border-white-ee/93 shadow-lg">
                                                <ListBox className="p-0">
                                                    {CATEGORIES.map((cat) => (
                                                        <ListBox.Item key={cat} id={cat} textValue={cat} className="p-2.5 hover:bg-gray-f8 focus:bg-gray-f8 cursor-pointer rounded-none outline-none">
                                                            {cat}
                                                        </ListBox.Item>
                                                    ))}
                                                </ListBox>
                                            </Select.Popover>
                                            <FieldError className="text-red-500 text-sm mt-1" />
                                        </Select>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-5">
                                        <TextField name="price" className="flex-1 flex flex-col" defaultValue={destination?.price}>
                                            <Label className="font-semibold text-base leading-6 text-black-c0 mb-2">
                                                Price (USD)
                                            </Label>
                                            <Input type="number" min="0" className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white placeholder:text-base px-3 py-2 w-full focus:outline-none" placeholder="e.g., 1299" />
                                            <FieldError className="text-red-500 text-sm mt-1" />
                                        </TextField>

                                        <TextField name="duration" className="flex-1 flex flex-col" defaultValue={destination?.duration}>
                                            <Label className="font-semibold text-base leading-6 text-black-c0 mb-2">
                                                Duration
                                            </Label>
                                            <Input className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white placeholder:text-base px-3 py-2 w-full focus:outline-none" placeholder="e.g., 7 Days/6 Nights" />
                                            <FieldError className="text-red-500 text-sm mt-1" />
                                        </TextField>
                                    </div>

                                    <TextField name="departureDate" className="flex flex-col" defaultValue={destination?.departureDate}>
                                        <Label className="font-semibold text-base leading-6 text-black-c0 mb-2">
                                            Departure Date
                                        </Label>
                                        <Input type="date" className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white px-3 py-2 w-full focus:outline-none" />
                                        <FieldError className="text-red-500 text-sm mt-1" />
                                    </TextField>

                                    <TextField name="imageUrl" className="flex flex-col" defaultValue={destination?.imageUrl}>
                                        <Label className="font-semibold text-base leading-6 text-black-c0 mb-2">
                                            Image URL
                                        </Label>
                                        <Input type="url" className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white placeholder:text-base px-3 py-2 w-full focus:outline-none" placeholder="https://example.com/image.jpg" />
                                        <FieldError className="text-red-500 text-sm mt-1" />
                                    </TextField>

                                    <TextField name="description" className="flex flex-col" defaultValue={destination?.description}>
                                        <Label className="font-semibold text-base leading-6 text-black-c0 mb-2">
                                            Description
                                        </Label>
                                        <TextArea rows={5} className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white placeholder:text-base px-3 py-2 w-full focus:outline-none" placeholder="Describe the travel experience..." />
                                        <FieldError className="text-red-500 text-sm mt-1" />
                                    </TextField>
                                </Modal.Body>

                                {/* Footer */}
                                <Modal.Footer className="flex justify-end items-center gap-3 pt-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        slot='close'
                                        className="border border-red-200 text-red-500 hover:bg-red-50 px-5 py-2 rounded-none font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
                                    >
                                        <MdDeleteOutline size={18} />
                                        Cancel
                                    </Button>

                                    <Button
                                        type="submit"
                                        className="bg-teal-15 hover:bg-teal-600 text-white px-5 py-2 rounded-none font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
                                    >
                                        <MdSave size={18} />
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </form>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>

            {/* Cancel (Delete) Button is outside the Modal block */}
            <button
                onClick={handleDelete}
                className="flex items-center gap-1.5 px-4 py-2 border border-red-200 text-red-500 hover:bg-red-50 transition-colors font-semibold text-sm rounded-none cursor-pointer"
            >
                <MdDeleteOutline className="w-4.5 h-4.5 text-red-500" />
                Cancel
            </button>
        </div >
    );
};

export default DestinationActions;
