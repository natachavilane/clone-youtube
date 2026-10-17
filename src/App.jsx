import SidebarMobile from "./components/sidebar/SidebarMobile";
import { useState } from "react";
import { Routes, Route  } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Abonnements from "./pages/Abonnements";
import Shorts from "./pages/Shorts";
import Wacth from "./pages/Watch";
import Chaine from "./pages/Chaine";
import NotFound from "./pages/NotFound";


function App() {
    // menuactif est utilise par deux composant video et menubar 
    // donc on le initaialise ou le remonte dans le composant parent commun et faire
    // puis le redescendre aux deux enfants via des props. Ça s'appelle "lifting state up" (remonter l'état).
    const [sidebarMobileOuvert, setSidebarMobileOuvert] = useState(false);
    console.log("sidebarMobileOuvert", sidebarMobileOuvert);

    return (
        <>
            <SidebarMobile 
                ouvert={sidebarMobileOuvert}
                fermer={() => setSidebarMobileOuvert(false)}
            />   
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={
                        <Home 
                        sidebarMobileClick={() => setSidebarMobileOuvert(!sidebarMobileOuvert)}/>
                    }/>  

                    <Route path="/abonnements" element={<Abonnements/>}/>
                    <Route path="/short" element={<Shorts/>}/>
                    <Route path="/watch/:id" element={<Wacth/>}/>
                    <Route path="/channel/:id" element={<Chaine/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>        
    );
}

export default App;