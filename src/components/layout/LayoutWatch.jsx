import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "../sidebar/Sidebar";

function LayoutWatch() {
    const [sidebarOuvert, setSidebarOuvert] = useState(false);
   return (
    <>
        {sidebarOuvert && (
            <>
                <div
                    className="fixed inset-0 bg-black/50 z-[60]"
                    onClick={() => setSidebarOuvert(false)}
                />
                <div className="fixed top-16 z-[70]">
                    <Sidebar ouvert={true} />
                </div>
            </>
        )}

        <div className="h-screen w-full">
            <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[minmax(0,1fr)]">
                <Navbar onMenuClick={() => setSidebarOuvert(!sidebarOuvert)} />
                <div>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    </>
);
}

export default LayoutWatch;