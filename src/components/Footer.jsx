import SidebarComponent from "./sidebar/SidebarComponent";
import { navItems } from "../data";
function Footer() {
return(
    <div className="fixed bottom-0 left-0  z-50 bg-white md:hidden flex justify-around border w-full [&>a]:w-16">
        {navItems.map((item) =>(
            <SidebarComponent
                key={item.label} {...item}
            />
        ))}

    
        <SidebarComponent
            image="/assets/image/iconnoir/abonnements.svg"     // mobile : flèche simple
            label="Abonnements"
            to="/abonnements"
             className="lg:flex-row-reverse justify-end"
        />

        <SidebarComponent 
            image="/assets/image/profileUser.svg" 
            label="Vous" to="/vous" 
        />


   
    </div>
    

);
}
export default Footer;