import Video from "../components/video/Video"
import Menubar from "../components/video/Menubar"
import { useState } from "react";

function Home ({sidebarMobileClick}) {
    const [menuactif, setMenuactif] = useState("Tout");
    return(
        <div>
            <Menubar
                menuactif={menuactif} 
                setMenuactif={setMenuactif} 
                sidebarMobileClick={sidebarMobileClick}
            />
            <main className="">
                <Video menuactif={menuactif}/>
            </main>           

        </div>
        
    );
    
}
export default Home;