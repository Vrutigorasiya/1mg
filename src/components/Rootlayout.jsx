import  { useState, useEffect } from "react";
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
        <div className="flex h-[100vh]">
            <Navbar isOpen={isSidebarOpen} onSidebarToggle={handleSidebarToggle} />
            <div className={!isSidebarOpen ? `h-full w-full md:max-w-[calc(100%-80px)]` : `h-full w-full md:max-w-[calc(100%-250px)]`}>
                <Header onSidebarToggle={handleSidebarToggle} />
                <main className="overflow-y-auto h-[calc(100%-70px)]">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Rootlayout;
