import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const storedState = localStorage.getItem("sidebarOpen") === "true";
        setIsSidebarOpen(storedState);
    }, []);

    useEffect(() => {
        localStorage.setItem("sidebarOpen", isSidebarOpen);
    }, [isSidebarOpen]);

    const handleSidebarToggle = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="w-full flex h-screen">
            <Navbar isOpen={isSidebarOpen} onSidebarToggle={handleSidebarToggle} />
            <div className="flex-1 h-full">
                <Header onSidebarToggle={handleSidebarToggle} />
                <main className="overflow-y-auto h-[calc(100%-70px)]">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Rootlayout;
