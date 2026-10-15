import SidebarMobile from "./components/sidebar/SidebarMobile";
import { useState } from "react";
import { Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";


function App() {
    // menuactif est utilise par deux composant video et menubar 
    // donc on le initaialise ou le remonte dans le composant parent commun et faire
    // puis le redescendre aux deux enfants via des props. Ça s'appelle "lifting state up" (remonter l'état).
    const [menuactif, setMenuactif] = useState("Tout");
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
                            menuactif={menuactif} 
                            setMenuactif={setMenuactif} 
                            sidebarMobileClick={() => setSidebarMobileOuvert(!sidebarMobileOuvert)}                           
                        />
                    }/>  

                    <Route path="/abonnements" element={
                                
                        <h1>je suis la page abonnements</h1>
                                
                    }/>

                </Route>
            </Routes>
        </>        
    );
}

export default App;