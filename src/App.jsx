import Navbar from "./components/layout/Navbar";
import Video from "./components/video/Video";
import Sidebar from "./components/sidebar/Sidebar";
import SidebarMobile from "./components/sidebar/SidebarMobile";
import Menubar from "./components/video/Menubar";
// import Menubar from "./components/Menubar";
import Footer from "./components/layout/Footer";
import { useState } from "react";



function App() {
    // menuactif est utilise par deux composant video et menubar 
    // donc on le initaialise ou le remonte dans le composant parent commun et faire
    // puis le redescendre aux deux enfants via des props. Ça s'appelle "lifting state up" (remonter l'état).
    const [menuactif, setMenuactif] = useState("Tout");
    const [sidebarOuvert, setsidebarOuvert] = useState(false);
    const [sidebarMobileOuvert, setSidebarMobileOuvert] = useState(false);
    console.log("sidebarMobileOuvert", sidebarMobileOuvert);

    return (
        <div className="h-screen w-full">
            <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[minmax(0,1fr)]">

                <Navbar onMenuClick={() => setsidebarOuvert(!sidebarOuvert)}/>

                <SidebarMobile ouvert={sidebarMobileOuvert} fermer={() => setSidebarMobileOuvert(false)}/>   

                {/* main */}

                <div className="md:grid grid-cols-[auto_minmax(0,1fr)]">
                    {/* composant sudebar */}
                    <div className="">
                        <Sidebar ouvert={sidebarOuvert}/>
                    </div>
                    {/* composant video et menubar */}

                    <div className="">

                        <Menubar
                            menuactif={menuactif} 
                            setMenuactif={setMenuactif} 
                            sidebarMobileClick={() => setSidebarMobileOuvert(!sidebarMobileOuvert)}
                         
                        />

                        <main className="border border-red-500">
                            <Video menuactif={menuactif}/>
                        </main>
                    </div>

                    {/* composant footer */}
                    
                </div>

                {/* footer */}

                <Footer/>
                
            </div>


            

        </div>

        
    );
}

export default App;