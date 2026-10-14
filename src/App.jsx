import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import SidebarMobile from "./components/sidebar/SidebarMobile";
import Footer from "./components/layout/Footer";
import { useState } from "react";
import { Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";


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

                    <Routes>
                        <Route path="/" element={
                           <Home
                                menuactif={menuactif} 
                                setMenuactif={setMenuactif} 
                                sidebarMobileClick={() => setSidebarMobileOuvert(!sidebarMobileOuvert)}                           
                           />
                        }/>  

                        <Route path="/abonnements" element={
                            
                            <h1>je suis la page abonnements</h1>
                            
                        }
                        />
                    </Routes>


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