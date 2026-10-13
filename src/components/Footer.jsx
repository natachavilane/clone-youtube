import SidebarComponent from "./sidebar/SidebarComponent";
import { navItems } from "../data";
function Footer() {
return(
    <div className="fixed bottom-0 left-0  z-50 bg-white lg:hidden flex justify-around border w-full [&>a]:w-19">
        {navItems.map((item) =>(
            <SidebarComponent
                key={item.label} {...item}
                styleLabel="text-xs"
            />
        ))}

    
        <SidebarComponent
            image="/assets/image/iconnoir/abonnements.svg"     // mobile : flèche simple
            label="Abonnements"
            to="/abonnements"
             className="lg:flex-row-reverse justify-end"
             styleLabel="text-xs"
        />

        <SidebarComponent 
            image="/assets/image/profileUser.svg" 
            label="Vous" to="/vous" 
            styleLabel="text-xs"
        />


   
    </div>
    

);
}
export default Footer;