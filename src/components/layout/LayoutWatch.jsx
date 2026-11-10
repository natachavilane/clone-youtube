import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function LayoutWatch() {
     return (
        <div className="h-screen w-full">
            <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[minmax(0,1fr)]">
                <Navbar onMenuClick={() => setSidebarOuvert(!sidebarOuvert)} />
                <div>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    ); 
}

export default LayoutWatch;