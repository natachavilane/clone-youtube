import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "../sidebar/Sidebar";

function LayoutWatch() {
    const [sidebarOuvert, setSidebarOuvert] = useState(false);
     return (
        <div className="h-screen w-full">
            <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[minmax(0,1fr)]">
                <Navbar onMenuClick={() => setSidebarOuvert(!sidebarOuvert)}/>

                {sidebarOuvert && (
                    <div onClick={()=> setSidebarOuvert(false)} className="fixed inset-0 bg-black/50 z-[60]">
                        <Sidebar ouvert={true}
                        className="fixed top-16 left-0 z-[70]"
                        />
                    </div>
                )}

                <div>
                    <Outlet />
                </div>
                
                <Footer />
            </div>
        </div>
    ); 
}

export default LayoutWatch;