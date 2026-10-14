import { NavLink } from "react-router-dom";
import { getNavLinkClass } from "../../utils/Stylenav";


function listAbonnemnet({to, logochaine, channel, className=""}){
    return(
        <NavLink to={to} className={getNavLinkClass}>
            <div className={`lg:flex items-center gap-4 py-2 px-3 ${className}`}>
                <img className="w-6 h-6 rounded-full" src={logochaine} alt={channel} />
                <span className="">{channel}</span>
            </div>
        </NavLink>
    );
}
export default listAbonnemnet;