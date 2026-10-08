import { listVideo, navItems, MenuVous,MenuAutesContenu,MenuExplorer } from "../../data";
import SidebarComponent from "./SidebarComponent";
import ListAbonnement from "../ListAbonnement";
import { useState } from "react";


function Sidebar(){
    // ici on va ecouter element pour savoir si il est ouvert ou ferme avec un usestate
    const [menuvoushover , setmenuvousHover] = useState(false);
    const [menuabonnementhover , setmenuabonnementHover] = useState(false);

    const [voirPlus, setVoirPlus] = useState(false);
    /*
    ici on veut afficher que 3 element du menu epxlorer par defaut 
    on va creer un bouton voirplus si on cique sur le bouton les autres menu s'affiche
    on utilise le hooks useState pour ecouter le bouton 
    */
    const elementaffichesMenuExplorer = voirPlus ? MenuExplorer : MenuExplorer.slice(0, 3);
    const elementsaffichesMenuAbonnement = voirPlus ? listVideo : listVideo.slice(0, 3);
    console.log("la valeur est" , elementsaffichesMenuAbonnement);
     console.log("la valeur de liste video est" , listVideo);

    return(
        <div className="hidden md:block w-18 px-1 lg:px-0 lg:w-64 bg-white sticky top-16 max-h-[calc(100vh-4rem)] lg:overflow-y-auto z-50 sb h-screen">
            <nav>
                <ul className="py-2 lg:mx-5">
                    {/* Menu acceuil et short */}
                    
                    <div className="lg:border-b border-gray-500">
                        {navItems.map((item) =>(
                            <SidebarComponent
                                key={item.label} {...item}
                             />
                        ))}
                    </div>

                    {/* MENU ABONNEMNTS */}
                    <div className="border relative"
                        onMouseEnter={() => setmenuabonnementHover(true)}
                        onMouseLeave={() => setmenuabonnementHover(false)}
                    >

                        {/* Menu version tablette */}
                        <div className="">
                            <SidebarComponent
                                image="/assets/image/iconnoir/abonnements.svg"     // mobile : flèche simple
                                imageDesktop="/assets/image/iconnoir/iconleft.svg" // desktop : flèche vers le bas (ex: pour un menu déroulant)
                                label="Abonnements"
                                to="/abonnements"
                                className="lg:flex-row-reverse justify-end"
                            />
                        </div>

                        {/* Menu version tablette au hover la liste s'affiche */}
                        <div className={`lg:hidden ${menuabonnementhover ? "absolute z-[9999] w-52 shadow-2xl bg-white left-17  top-0 rounded-lg" : "hidden"} `}>
                            <p className="text-black ml-4 pt-4 font-bold text-lg ">Abonnements</p>
                            {elementsaffichesMenuAbonnement.map((chaine) => (
                                <ListAbonnement 
                                    key={chaine.id}
                                    logochaine={chaine.logochaine}
                                    channel={chaine.channel}
                                    to={`/channel/${chaine.id}`}
                                    className="flex flex-row"
                                />
                            ))}
                            <button onClick={() => setVoirPlus(!voirPlus)} className="w-full flex items-center gap-6 px-4 py-[0.6rem] rounded-lg  hover:bg-[#D9D9D9] hover:font-semibold text-[#0F0F0F] text-sm">
                                <i className={`fa-solid ${voirPlus ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                <span>{voirPlus ? "Moins" : "Plus"}</span>
                            </button>
                        </div>

                        {/* Menu liste abonnements  version desktop*/}

                        <div className="hidden lg:block">
                            {elementsaffichesMenuAbonnement.map((chaine) => (
                                <ListAbonnement 
                                    key={chaine.id}
                                    logochaine={chaine.logochaine}
                                    channel={chaine.channel}
                                    to={`/channel/${chaine.id}`}
                                    
                                />
                            ))}

                            <button onClick={() => setVoirPlus(!voirPlus)} className="w-full flex items-center gap-6 px-4 py-[0.6rem] rounded-lg  hover:bg-[#D9D9D9] hover:font-semibold text-[#0F0F0F] text-sm">
                                <i className={`fa-solid ${voirPlus ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                <span>{voirPlus ? "Moins" : "Plus"}</span>
                            </button>
                        </div>

                    </div>

                    {/* MENU VOUS */}
                    <div 
                        onMouseEnter={() => setmenuvousHover(true)}
                        onMouseLeave={() => setmenuvousHover(false)}
                    >
                        {/* Menu Vous version tablette*/}
                        <div className="lg:border-t border-gray-500">
                            <SidebarComponent 
                                image="/assets/image/profileUser.svg" 
                                imageDesktop="/assets/image/iconnoir/iconleft.svg"
                                label="Vous" to="/vous" 
                                className="lg:flex-row-reverse justify-end"
                            />
                        </div>
                        
                        {/* Menu Vous version tablette au hover du menu la liste s'affiche */}
                    
                        <div className={`lg:hidden ${menuvoushover ? "absolute block z-[9999] w-52 shadow-2xl bg-white left-17 -top-18  rounded-lg" : "hidden"} `}>
                            <p className="text-black ml-4 pt-4 font-bold text-lg ">Vous</p>
                            {MenuVous.map((menu)=>
                                <SidebarComponent
                                    key={menu.label} {...menu}
                                    className="flex flex-row gap-4"
                                    
                                />
                            )}
                        </div>

                        {/* Menu Vous version desktop */}
                        <div className="md:hidden lg:block">
                            {MenuVous.map((menu)=>
                                <SidebarComponent
                                    key={menu.label} {...menu}
                                    className="flex flex-row gap-4" 
                                />
                            )}
                        </div>

                    </div>
                 
                   
                   {/* Menu Autres contenu */}
                   
                    <div className="hidden lg:block">
                        <p className="px-3 text-lg font-bold">Autres contenus Youtube</p>
                        {MenuAutesContenu.map((contenu) =>
                            <SidebarComponent
                                key={contenu.label} {...contenu}
                            />
                        )}
                    </div>    
                
                   {/* Menu Explorer */}
                    <div className="hidden lg:block">
                        <p className="px-3 text-lg font-bold">Explorer</p>
                        {elementaffichesMenuExplorer.map((explorer) =>
                            <SidebarComponent
                                key={explorer.label} {...explorer}
                            />
                        )}
                        {/* affichage du composant voir plus */}
                        {/* <ButtonVoirPlus Onclick={() => setVoirPlus(!voirPlus)}/> */}

                        <button onClick={() => setVoirPlus(!voirPlus)} className="w-full flex items-center gap-6 px-4 py-[0.6rem] rounded-lg  hover:bg-[#D9D9D9] hover:font-semibold text-[#0F0F0F] text-sm">
                            <i className={`fa-solid ${voirPlus ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                            <span>{voirPlus ? "Moins" : "Plus"}</span>
                        </button>
                       
                    </div>
                </ul>   
            </nav>
        </div>
    
    );
}
export default Sidebar;