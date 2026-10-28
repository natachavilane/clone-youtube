import { NavLink } from "react-router-dom";
import { getNavLinkClass } from "../../utils/Stylenav";




function SidebarComponent({image, imageMenuOuvert, label, to, className= "", styleLabel= ""}){
    return(
        <NavLink to={to} className={getNavLinkClass}>
            <div className={`flex flex-col items-center gap-1 px-3 w-full py-2 ${className}`}>
                <img src={image || imageMenuOuvert} alt="" className={`w-6 h-6`}/>
                <span className={`${styleLabel}`}>{label}</span>
            </div>
        </NavLink>

// style du composant le navlink au clic du bouton 
        // <NavLink to={to} className={getNavLinkClass}>
        //     <div className={`flex flex-col items-center w-full gap-1  lg:py-0 lg:flex-row lg:gap-5 my-2 ${className}`}>
                
                
        //         <img src={image} alt="" className={`w-6 h-6  lg:hidden`}/>
    
               

        //         <img src={imageDesktop || image} alt=""  className={`w-6 h-6  hidden lg:block`}/>
        //         <span className="text-[10px] lg:text-sm">{label}</span>

        //     </div>
        // </NavLink>
      
    );
}
export default SidebarComponent;