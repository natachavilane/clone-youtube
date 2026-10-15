import Video from "../components/video/Video"
import Menubar from "../components/video/Menubar"

function Home ({menuactif, setMenuactif, sidebarMobileClick}) {
    console.log("Home reçoit :", menuactif, setMenuactif);
    return(
        <div>
            <Menubar
                menuactif={menuactif} 
                setMenuactif={setMenuactif} 
                sidebarMobileClick={sidebarMobileClick}
            />
            <main className="border border-red-500">
                <Video menuactif={menuactif}/>
            </main>           

        </div>
        
    );
    
}
export default Home;