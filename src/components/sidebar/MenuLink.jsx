import { NavLink } from "react-router-dom"

function MenuLink ({to, label}){
    return(
        <NavLink to={to}>
            <div className="mr-2 text-sm text-gray-600">
                <span className="">{label}</span>
            </div>
        </NavLink>
    );
}
export default MenuLink