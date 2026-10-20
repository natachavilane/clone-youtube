import { listVideo, navItems, MenuVous,MenuAutesContenu,MenuExplorer, MenuBarPrimaire, MenuBarSegondaire } from "../../data";
import SidebarComponent from "./SidebarComponent";
import ListAbonnement from "./ListAbonnement";
import MenuLink from "./MenuLink";
import { useState } from "react";

function Sidebar ({ouvert}){
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
   
    
    return(
        <div 
        className=
        {`hidden lg:block ${ouvert ? "w-60 overflow-y-auto" : "w-18"} bg-white sticky top-16 max-h-[calc(100vh-4rem)] py-2 z-50 sb h-screen`}>

            {ouvert ? (
                <nav className="">
                    <ul className="py-2">
                        {/* Menu acceuil et short */}
                        
                        <div className="lg:border-b border-gray-500 pb-2 px-3">
                            
                            {navItems.map((item) =>(
                                <SidebarComponent
                                    key={item.label} {...item}
                                    className="flex flex-row gap-4"
                                />
                            ))}
                        </div>

                        {/* MENU ABONNEMNTS */}
                        <div className="py-2 px-3">

                            {/* Menu version tablette */}
                            <div className="">
                                <SidebarComponent
                                    imageMenuOuvert="/assets/image/iconnoir/iconleft.svg" // desktop : flèche vers le bas (ex: pour un menu déroulant)
                                    label="Abonnements"
                                    to="/abonnements"
                                    className="lg:flex-row-reverse justify-end gap-2"
                                />
                            </div>

                            {/* Menu liste abonnements  version desktop*/}

                            <div className="">
                                {elementsaffichesMenuAbonnement.map((chaine) => (
                                    <ListAbonnement 
                                        key={chaine.id}
                                        logochaine={chaine.logochaine}
                                        channel={chaine.channel}
                                        to={`/channel/${chaine.id}`}
                                        
                                    />
                                ))}
                                <div className="">
                                    <button onClick={() => setVoirPlus(!voirPlus)} className="w-full flex items-center gap-6 py-[0.6rem] px-4 rounded-lg  hover:bg-[#D9D9D9] hover:font-semibold text-[#0F0F0F] text-sm">
                                        <i className={`fa-solid ${voirPlus ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                        <span>{voirPlus ? "Moins" : "Plus"}</span>
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* MENU VOUS */}
                        <div  className="lg:border-y border-gray-500 py-2 px-3 ">
                            {/* Menu Vous version tablette*/}
                            <div className="">
                                <SidebarComponent 
                                    imageMenuOuvert="/assets/image/iconnoir/iconleft.svg"
                                    label="Vous" to="/vous" 
                                    className="lg:flex-row-reverse justify-end gap-1 "
                                />
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
                    
                    {/* Menu Explorer */}
                        <div className="hidden lg:block py-2 px-3">
                            <p className="px-3 text-[1rem] font-bold">Explorer</p>
                            {elementaffichesMenuExplorer.map((explorer) =>
                                <SidebarComponent
                                    key={explorer.label} {...explorer}
                                    className="flex flex-row gap-4"
                                />
                            )}
                            {/* affichage du composant voir plus */}
                            {/* <ButtonVoirPlus Onclick={() => setVoirPlus(!voirPlus)}/> */}
                            <div className="">
                                <button onClick={() => setVoirPlus(!voirPlus)} className="w-full flex items-center gap-6 px-4 py-[0.6rem] rounded-lg  hover:bg-[#D9D9D9] hover:font-semibold text-[#0F0F0F] text-sm">
                                    <i className={`fa-solid ${voirPlus ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                    <span>{voirPlus ? "Moins" : "Plus"}</span>
                                </button>
                            </div>
                        </div>

                        {/* Menu Autres contenu */}
                    
                        <div className="hidden lg:block border-y border-gray-500 py-2 px-3">
                            <p className="text-[1rem] font-bold whitespace-nowrap px-3 py-2">Autres contenus Youtube</p>
                            {MenuAutesContenu.map((contenu) =>
                                <SidebarComponent
                                    key={contenu.label} {...contenu}
                                    className="flex flex-row gap-4"
                                />
                            )}
                        </div> 

                        {/* Signalements */}
                        <div className="py-3 px-3">
                            <SidebarComponent
                                imageMenuOuvert="/assets/image/iconSignalement.svg" // desktop : flèche vers le bas (ex: pour un menu déroulant)
                                label="Signalements"
                                to="/reporthistory"
                                className="flex flex-row gap-4"
                            />
                        </div>

                        {/* lien */}
                        <div className="border-t border-gray-600 pt-3 px-3">

                            <div className="px-3 flex flex-wrap">
                                {MenuBarPrimaire.map((lien) =>
                                    <MenuLink 
                                        key={lien.label}
                                        {...lien}
                                    />  
                                )}
                            </div>

                            <div className="px-3 mt-3">
                                {MenuBarSegondaire.map((lienSegondaire) =>
                                    <MenuLink 
                                        key={lienSegondaire.label}
                                        {...lienSegondaire}
                                    />  
                                )}
                            </div>

                            <p className="text-xs px-3 py-3 text-gray-500">@ 2026 Cloner par Fatima Vilane</p>
                        </div>

                    
                    </ul>   
                </nav>
            ) 

            : (
                // Menu par defaut
            <div className="mx-1" >

                {/* MENU ACCEUIL ET SHORT */}
                <div className="[&>a]:py-2">
                    {navItems.map((item) =>(
                        <SidebarComponent
                            key={item.label} {...item}
                            styleLabel="text-[10px]"
                           
                        />
                    ))}
                </div>

                {/* MENU ABONNENEMTS ET VOUS */}
                <div className="">
                    <div className=""
                        onMouseEnter={() => setmenuabonnementHover(true)} 
                        onMouseLeave={() => setmenuabonnementHover(false)}>
                        <div className="[&>a]:py-2">
                            <SidebarComponent
                                image="/assets/image/iconnoir/abonnements.svg"     // mobile : flèche simple
                                label="Abonnements"
                                to="/abonnements"
                                styleLabel="text-[10px]"
                              
                            />
                        </div>
                        
                        <div className={`${menuabonnementhover ? "absolute z-[9999] w-52 shadow-2xl bg-white left-17  top-0 rounded-lg" : "hidden"} `}>
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
                            <button onClick={() => setVoirPlus(!voirPlus)} className="w-full flex items-center gap-6 px-4 border py-[0.6rem] rounded-lg  hover:bg-[#D9D9D9] hover:font-semibold text-[#0F0F0F] text-sm">
                                <i className={`fa-solid ${voirPlus ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                <span>{voirPlus ? "Moins" : "Plus"}</span>
                            </button>
                        </div>
                    </div>

                    {/* MENU VOUS */}

                    <div onMouseEnter={() => setmenuvousHover(true)} onMouseLeave={() => setmenuvousHover(false)}>
                        {/* Menu Vous version tablette*/}
                        <div className="[&>a]:py-2">
                            <SidebarComponent 
                                image="/assets/image/profileUser.svg"
                                label="Vous" to="/vous" 
                                styleLabel="text-[10px]"
                            />
                        </div>
                            
                        {/* Menu Vous version tablette au hover du menu la liste s'affiche */}
                        
                        <div className={`${menuvoushover ? "absolute block z-[9999] w-52 shadow-2xl bg-white left-17 -top-18  rounded-lg" : "hidden"} `}>
                            <p className="text-black ml-4 pt-4 font-bold text-lg ">Vous</p>
                            {MenuVous.map((menu)=>
                                <SidebarComponent
                                    key={menu.label} {...menu}
                                    className="flex flex-row gap-4"
                                />
                            )}
                        </div>

                    </div>

                </div>
            </div>
            )}


        </div>




    );
}
export default Sidebar;