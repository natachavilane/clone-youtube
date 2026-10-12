import { NavLink } from "react-router-dom";
import { getNavLinkClass } from "../../utils/Stylenav";




function SidebarComponent({image, imageDesktop, label, to, className= ""}){
    return(
        <NavLink to={to} className={getNavLinkClass}>
            <div className={`flex flex-col items-center w-full gap-1  lg:py-0 lg:flex-row lg:gap-5 my-2 ${className}`}>
                {/* icon afficher en version mobile */}
                
                <img src={image} alt="" className={`w-6 h-6  lg:hidden`}/>
    
                {/* icon afficher en version desktop
                ||signifie si image imageDesktop n'est pas fournie il prend l'image*/}

                <img src={imageDesktop || image} alt=""  className={`w-6 h-6  hidden lg:block`}/>
                <span className="text-[10px] lg:text-sm">{label}</span>

            </div>
        </NavLink>
      
    );
}
export default SidebarComponent;