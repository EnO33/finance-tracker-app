"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
    const { user, isLoaded } = useUser();

    return (
        <div className="space-y-2 mb-4">
            <h2 className="text-2xl lg:text-4xl text-white font-medium">
                Welcome back {user?.username} 👋
            </h2>
            <p className="text-sm lg:text-base text-[#89b6fd]">This is yout Financial Overview Report</p>
        </div>
    )
}