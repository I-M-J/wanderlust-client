'use client';

import { FieldError, Input, Label, ListBoxItem, TextField, Select, ListBox, TextArea, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdDeleteOutline, MdOutlineSaveAlt } from 'react-icons/md';

// // ─── Framework ───────────────────────────────────────────────────────────────
// import { useActionState, useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// // ─── HeroUI primitives ────────────────────────────────────────────────────────
// import {
//     Button,
//     FieldError,
//     Input,
//     Label,
//     ListBox,
//     ListBoxItem,
//     Select,
//     TextArea,
//     TextField,
// } from '@heroui/react';

// // ─── Icons ────────────────────────────────────────────────────────────────────


// // ─── Local ────────────────────────────────────────────────────────────────────
// import { addDestination, initialState } from './actions';
// import { CATEGORIES } from './schema';


// // =============================================================================
// // Page
// // =============================================================================

// export default function AddDestinationPage() {
//     // ── State ─────────────────────────────────────────────────────────────────
//     // `state`      → current { success, errors, message } returned by the action
//     // `formAction` → pass this to <form action={...}>
//     // `isPending`  → true while the server action is executing
//     const [state, formAction, isPending] = useActionState(addDestination, initialState);
//     const router = useRouter();

//     // `formKey` is incremented on success to fully remount the form, which
//     // resets every field — including React-Aria-controlled ones like Select.
//     const [formKey, setFormKey] = useState(0);

//     useEffect(() => {
//         if (state.success === true) {
//             setFormKey((k) => k + 1);
//         }
//     }, [state.success]);

//     // Shorthand so each field can write  errors.name  instead of
//     // state.errors?.name — keeps JSX tidy.
//     const errors = state.errors ?? {};

//     // ── Render ────────────────────────────────────────────────────────────────
//     return (
//         <section className="flex-1 px-4 py-10">
//             <div className="max-w-3xl mx-auto">

//                 {/* Page heading */}
//                 <div className="mb-8">
//                     <h2 className="text-2xl font-bold text-black-c0 tracking-tight">
//                         Add New Travel Package
//                     </h2>
//                     <p className="mt-1 text-sm text-gray-6c">
//                         Fill in the details below to list a new travel destination.
//                     </p>
//                 </div>

//                 {/* Form card */}
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">

//                     {/* Status banner — hidden until the action returns */}
//                     {state.message && (
//                         <div
//                             role="alert"
//                             aria-live="polite"
//                             className={`mb-6 px-4 py-3 rounded-lg text-sm font-medium border ${
//                                 state.success
//                                     ? 'bg-teal-50 border-teal-15/40 text-teal-700'
//                                     : 'bg-red-50 border-red-200 text-red-600'
//                             }`}
//                         >
//                             {state.message}
//                         </div>
//                     )}

//                     {/*
//                      * key={formKey}  → remounts the form on success, resetting all fields.
//                      * action={...}   → wires the form to the server action via useActionState.
//                      */}
//                     <form key={formKey} action={formAction} noValidate className="space-y-5">

//                         {/* ── Destination Name ────────────────────────────── */}
//                         <TextField
//                             name="name"
//                             isRequired
//                             isInvalid={!!errors.name}
//                             fullWidth
//                         >
//                             <Label isRequired>Destination Name</Label>
//                             <Input placeholder="Bali Paradise" />
//                             <FieldError>{errors.name?.[0]}</FieldError>
//                         </TextField>

//                         {/* ── Country + Category (two columns) ────────────── */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

//                             <TextField
//                                 name="country"
//                                 isRequired
//                                 isInvalid={!!errors.country}
//                                 fullWidth
//                             >
//                                 <Label isRequired>Country</Label>
//                                 <Input placeholder="Indonesia" />
//                                 <FieldError>{errors.country?.[0]}</FieldError>
//                             </TextField>

//                             {/*
//                              * HeroUI Select is built on React Aria Components.
//                              * The `name` prop creates a hidden <input> so the
//                              * selected value is included in FormData on submit.
//                              */}
//                             <Select
//                                 name="category"
//                                 placeholder="Select a category"
//                                 isRequired
//                                 isInvalid={!!errors.category}
//                                 fullWidth
//                             >
//                                 <Label isRequired>Category</Label>
//                                 <Select.Trigger>
//                                     <Select.Value />
//                                     <Select.Indicator />
//                                 </Select.Trigger>
//                                 <Select.Popover>
//                                     <ListBox>
//                                         {CATEGORIES.map((cat) => (
//                                             <ListBoxItem key={cat} id={cat}>
//                                                 {cat}
//                                             </ListBoxItem>
//                                         ))}
//                                     </ListBox>
//                                 </Select.Popover>
//                                 <FieldError>{errors.category?.[0]}</FieldError>
//                             </Select>

//                         </div>

//                         {/* ── Price + Duration (two columns) ──────────────── */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

//                             <TextField
//                                 name="price"
//                                 isRequired
//                                 isInvalid={!!errors.price}
//                                 fullWidth
//                             >
//                                 <Label isRequired>Price (USD)</Label>
//                                 <Input type="number" min="0" placeholder="e.g., 1299" />
//                                 <FieldError>{errors.price?.[0]}</FieldError>
//                             </TextField>

//                             <TextField
//                                 name="duration"
//                                 isInvalid={!!errors.duration}
//                                 fullWidth
//                             >
//                                 <Label>Duration</Label>
//                                 <Input placeholder="e.g., 7 Days / 6 Nights" />
//                                 <FieldError>{errors.duration?.[0]}</FieldError>
//                             </TextField>

//                         </div>

//                         {/* ── Departure Date ──────────────────────────────── */}
//                         <TextField
//                             name="departureDate"
//                             isInvalid={!!errors.departureDate}
//                             fullWidth
//                         >
//                             <Label>Departure Date</Label>
//                             <Input type="date" />
//                             <FieldError>{errors.departureDate?.[0]}</FieldError>
//                         </TextField>

//                         {/* ── Image URL ───────────────────────────────────── */}
//                         <TextField
//                             name="imageUrl"
//                             isInvalid={!!errors.imageUrl}
//                             fullWidth
//                         >
//                             <Label>Image URL</Label>
//                             <Input
//                                 type="url"
//                                 placeholder="https://example.com/image.jpg"
//                             />
//                             <FieldError>{errors.imageUrl?.[0]}</FieldError>
//                         </TextField>

//                         {/* ── Description ─────────────────────────────────── */}
//                         {/*
//                          * TextArea lives inside a TextField, which provides the
//                          * accessibility + validation context (Label, FieldError).
//                          */}
//                         <TextField
//                             name="description"
//                             isRequired
//                             isInvalid={!!errors.description}
//                             fullWidth
//                         >
//                             <Label isRequired>Description</Label>
//                             <TextArea
//                                 rows={5}
//                                 placeholder="Describe the travel experience…"
//                             />
//                             <FieldError>{errors.description?.[0]}</FieldError>
//                         </TextField>

//                         {/* ── Form actions ────────────────────────────────── */}
//                         <div className="flex justify-end items-center gap-3 pt-2">

//                             <Button
//                                 type="button"
//                                 variant="outline"
//                                 onPress={() => router.back()}
//                                 className="border-red-300 text-red-500 hover:bg-red-50"
//                             >
//                                 <MdDeleteOutline size={18} />
//                                 Cancel
//                             </Button>

//                             <Button
//                                 type="submit"
//                                 isDisabled={isPending}
//                                 className="bg-teal-15 text-white hover:bg-teal-600"
//                             >
//                                 <MdOutlineSaveAlt size={18} />
//                                 {isPending ? 'Saving…' : 'Add Travel Package'}
//                             </Button>

//                         </div>

//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// }

export const CATEGORIES = [
    "Beach", "Mountain", "City", "Adventure", "Cultural", "Luxury",
]

const AddDestinationPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const destination = Object.fromEntries(formData.entries());

        console.log(destination);

        const res = await fetch("http://localhost:5000/destination", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(destination),
        })

        const data = await res.json();

        console.log(data);
    }



    return (
        <section className="py-20 px-4 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl lg:text-7xl text-black-c0 mb-22 text-center lg:text-left">Add New Travel Package</h2>

                <form onSubmit={onSubmit} className="max-w-4xl mx-auto shadow border border-white-ee/93 p-10" action="">
                    <TextField name="name" className="mb-5" isRequired>
                        <Label className="font-medium text-lg leading-6 text-black-c0 mb-2">Destination Name</Label>

                        <Input className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white placeholder:text-lg" placeholder="Bali Paradise" />

                        <FieldError />
                    </TextField>

                    <div className="flex flex-col md:flex-row gap-5 mb-5">
                        <TextField name="country" className="flex-1" isRequired>
                            <Label className="font-medium text-lg leading-6 text-black-c0 mb-2">Country</Label>

                            <Input className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white placeholder:text-lg" placeholder="Indonesia" />

                            <FieldError />
                        </TextField>

                        <Select name="category" className="flex-1" isRequired placeholder="Select a category" >
                            <Label className="font-medium text-lg leading-6 text-black-c0 mb-2">Category</Label>

                            <Select.Trigger className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>

                            <Select.Popover className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none">
                                <ListBox className="p-0">
                                    {
                                        CATEGORIES.map((cat) => (
                                            <ListBox.Item key={cat} id={cat} textValue={cat} className="focus:bg-white rounded-none">
                                                <ListBox.ItemIndicator />
                                                {cat}
                                            </ListBox.Item>
                                        ))
                                    }
                                </ListBox>
                            </Select.Popover>

                            <FieldError />
                        </Select>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 mb-5">
                        <TextField name="price" className="flex-1" isRequired>
                            <Label className="font-medium text-lg leading-6 text-black-c0 mb-2">Price</Label>

                            <Input type="number" min="0" placeholder="1299" className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white" />

                            <FieldError></FieldError>
                        </TextField>

                        <TextField name="duration" className="flex-1" isRequired>
                            <Label className="font-medium text-lg leading-6 text-black-c0 mb-2">Duration</Label>

                            <Input className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white placeholder:text-lg" placeholder="7 Days/6 Nights" />

                            <FieldError></FieldError>
                        </TextField>
                    </div>

                    <TextField name="departureDate" className="mb-5" isRequired>
                        <Label className="font-medium text-lg leading-6 text-black-c0 mb-2">Departure Date</Label>

                        <Input type="date" className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white" />

                        <FieldError></FieldError>
                    </TextField>

                    <TextField name="imageUrl" className="mb-5" isRequired>
                        <Label className="font-medium text-lg leading-6 text-black-c0 mb-2">Image URL</Label>

                        <Input type="url" className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white placeholder:text-lg" placeholder="https://example.com/image.jpg" />

                        <FieldError></FieldError>
                    </TextField>

                    <TextField name="description" className="mb-10" isRequired>
                        <Label className="font-medium text-lg leading-6 text-black-c0 mb-2">Description</Label>

                        <TextArea rows={5} className="rounded-none bg-gray-f8 border border-white-ee/93 shadow-none focus:bg-white placeholder:text-lg" placeholder="Describe the travel experience..." />

                        <FieldError></FieldError>
                    </TextField>

                    <div className="flex justify-end items-center gap-3 pt-2 flex-wrap">
                        <Button
                            type="button"
                            variant="outline"
                            onPress={() => router.back()}
                            className="border-red-300 text-red-500 hover:bg-red-50 rounded-none font-medium leading-6"
                        >
                            <MdDeleteOutline size={18} />
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            className="bg-teal-15 text-white hover:bg-teal-600 rounded-none py-4 px-6 font-medium leading-6 text-base"
                        >
                            <MdOutlineSaveAlt size={18} />
                            Add Travel Package
                        </Button>
                    </div>

                </form>
            </div>
        </section>
    );
}

export default AddDestinationPage;