import { NavLink } from "react-router-dom"

function MenuLink ({to, label}){
    return(
        <NavLink to={to}>
            <div className="px-6 text-[15px]">
                
                <span>{label}</span>
            </div>
        </NavLink>
    );
}
export default MenuLink