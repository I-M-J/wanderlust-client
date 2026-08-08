'use client';

import Link from "next/link";
import { Button, FieldError, Input, Label, TextField } from "@heroui/react";
import { LuUser, LuMail, LuLock, LuImage } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        console.log(userData);

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
        });

        if (data) {
            router.push("/");
        }

        if (error) {
            // toast
            alert("Error: " + error.message);
        }

    };

    return (
        <section className="bg-gray-f8 min-h-[calc(100vh-120px)] py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
            {/* Header section */}
            <div className="text-center mb-8 max-w-md mx-auto">
                <h1 className="text-4xl sm:text-5xl font-serif text-black-c0 tracking-tight font-normal">
                    Welcome Back
                </h1>

                <p className="text-gray-6c mt-2.5 text-base font-normal">
                    Resume your adventure with Wanderlust
                </p>
            </div>

            {/* Form Card */}
            <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 sm:p-10 border border-white-ee/93 shadow-sm w-full max-w-115 mx-auto">
                {/* Email Address */}
                <TextField name="email" className="w-full flex flex-col">
                    <Label className="font-medium text-sm text-black-c0 mb-2">
                        Email Address
                    </Label>
                    <div className="relative flex items-center">
                        <LuMail className="absolute left-3.5 text-gray-400 w-4.5 h-4.5 pointer-events-none z-10" />
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-10 pr-4 py-3 bg-gray-f8 border border-white-ee/93 text-sm text-black-c0 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:border-teal-15 rounded-none shadow-none"
                        />
                    </div>

                    <FieldError />
                </TextField>

                {/* Password */}
                <TextField name="password" className="w-full flex flex-col">
                    <Label className="font-medium text-sm text-black-c0 mb-2">
                        Password
                    </Label>

                    <div className="relative flex items-center">
                        <LuLock className="absolute left-3.5 text-gray-400 w-4.5 h-4.5 pointer-events-none z-10" />
                        <Input
                            type="password"
                            placeholder="Create a password"
                            className="w-full pl-10 pr-4 py-3 bg-gray-f8 border border-white-ee/93 text-sm text-black-c0 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:border-teal-15 rounded-none shadow-none"
                        />
                    </div>

                    <FieldError />
                </TextField>

                {/* Submit Button */}
                <div className="pt-2">
                    <Button
                        type="submit"
                        className="w-full bg-teal-15 hover:bg-teal-600 text-white font-medium py-3.5 px-4 text-sm rounded-none transition-colors cursor-pointer flex items-center justify-center"
                    >
                        Sign In
                    </Button>
                </div>

                {/* Divider */}
                <div className="relative flex items-center justify-center my-4">
                    <hr className="flex-1 border-t border-white-ee/93" />
                    <span className="shrink-0 px-3 text-xs text-gray-6c font-normal">
                        Or continue with
                    </span>
                    <hr className="flex-1 border-t border-white-ee/93" />
                </div>

                {/* Google Signup Button */}
                <Button
                    type="button"
                    className="w-full bg-white hover:bg-gray-50 text-black-c0 border border-gray-200 font-medium py-3 px-4 text-sm rounded-none transition-colors cursor-pointer flex items-center justify-center gap-2.5"
                >
                    <FcGoogle className="w-5 h-5 shrink-0" />
                    <span>Sign Up With Google</span>
                </Button>

                {/* Sign In Link */}
                <p className="text-center text-sm text-gray-6c pt-2">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-teal-15 font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default LoginPage;
