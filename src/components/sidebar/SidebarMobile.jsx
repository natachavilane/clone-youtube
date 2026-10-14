import { MenuAutesContenu,MenuExplorer } from "../../data";
import SidebarComponent from "./SidebarComponent";


function SidebarMobile ({ouvert ,fermer}) {
    return(

        <div>
            {ouvert &&(
                <div className="fixed inset-0 bg-black/50 z-[60] lg:hidden" onClick={fermer}>

                    <aside className="fixed top-0 left-0 h-full w-64 bg-white z-[70] overflow-y-auto lg:hidden">
                        <div className="px-4">
                            <img  className=" w-20 h-15" src="/assets/image/iconnoir/logoYoutube.svg" alt="" />
                        </div>

                        <div className="pb-2">
                            {MenuExplorer.map((explorerMenu) =>(
                                <SidebarComponent
                                    key={explorerMenu.label}
                                    {...explorerMenu}
                                    className="flex flex-row text-sm gap-3"
                                
                                />
                            ))}
                        </div>

                        <div className="border-t border-gray-500 pt-2">
                            {MenuAutesContenu.map((contenuAutre)=>(
                                <SidebarComponent
                                    key={contenuAutre.label}
                                    {...contenuAutre}
                                    className="flex flex-row text-sm gap-3"
                                
                                />


                            ))}
                        </div>
                        <div className="absolute bottom-4 ">
                            <p className="px-3 text-[0.6rem] text-gray-500 sticky top-0 bottom-0 ">Regles de confidentialite . Conditions d'utilisation</p>

                        </div>
                    </aside>

                </div>
            )}
        </div>

  
    );
    
}
export default SidebarMobile;