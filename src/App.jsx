import SidebarMobile from "./components/sidebar/SidebarMobile";
import { useState } from "react";
import { Routes, Route  } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Abonnements from "./pages/Abonnements";
import Shorts from "./pages/Shorts";
import Wacth from "./pages/Watch";
import Chaine from "./pages/Chaine";
import Search from "./pages/Search"; 
import NotFound from "./pages/NotFound";


function App() {
    const [sidebarMobileOuvert, setSidebarMobileOuvert] = useState(false);
    

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
                    <Route path="/search" element={<Search/>}/>
                </Route>
            </Routes>
        </>        
    );
}

export default App;