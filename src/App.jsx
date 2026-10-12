import Navbar from "./components/Navbar";
import Video from "./components/video/Video";
import Sidebar from "./components/sidebar/Sidebar";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import { useState } from "react";



function App() {
    // menuactif est utilise par deux composant video et menubar 
    // donc on le initaialise ou le remonte dans le composant parent commun et faire
    // puis le redescendre aux deux enfants via des props. Ça s'appelle "lifting state up" (remonter l'état).
    const [menuactif, setMenuactif] = useState("Tout");

    return (
        <div className="h-screen w-full">
            <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[minmax(0,1fr)]">

            <Navbar/>

                <div className="md:grid grid-cols-[auto_minmax(0,1fr)] gap-2">
                    {/* composant sudebar */}
                    <div className="">
                        <Sidebar/>
                    </div>
                    {/* composant video et menubar */}
                    <div className="">
                        <Menubar menuactif={menuactif} setMenuactif={setMenuactif}/>
                        <main className="border border-red-500">
                            <Video menuactif={menuactif}/>
                        </main>
                    </div>

                    {/* composant footer */}
                    
                        <Footer/>
                </div>

                
            </div>

        </div>
    );
}

export default App;