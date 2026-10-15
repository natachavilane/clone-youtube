import Navbar from "./Navbar"
import Sidebar from "../sidebar/Sidebar"
import Footer from "./Footer"
import { useState } from "react"
import { Outlet } from "react-router-dom"

function Layout() {

const [sidebarOuvert, setSidebarOuvert] = useState(false);

    return (
        <div className="h-screen w-full">
            <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[minmax(0,1fr)]">
                
                <Navbar onMenuClick={() => setSidebarOuvert(!sidebarOuvert)} />

                <div className="md:grid grid-cols-[auto_minmax(0,1fr)]">
                    <div>
                        <Sidebar ouvert={sidebarOuvert} />
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );    
    
}
export default Layout;