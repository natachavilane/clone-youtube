import { MenuFiltres } from "../data";
import { useRef } from "react";

function Menubar ({menuactif, setMenuactif}){
    
    const scrollRef = useRef(null);

    const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

    const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

    return(
        <div className="sticky top-16 bg-black z-40">
            <div className="flex items-center relative">
                <button onClick={scrollLeft} className="absolute left-0 z-10 bg-white shadow rounded-full w-8 h-8">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <div ref={scrollRef} className=" py-2 flex gap-4 text-black overflow-x-auto scrollbar-hide">
                    {MenuFiltres.map((filtre, index) =>
                    <button key={index} className={`px-3 py-1 rounded-sm text-sm font-semibold whitespace-nowrap ${
                        menuactif === filtre ? "bg-white text-black" : "text-white"
                    }`}
                    onClick={() => setMenuactif(filtre)}
                    >

                    {filtre}
                    </button>

                )}
                </div> 
                <button onClick={scrollRight} className="absolute right-0 z-10 bg-white shadow rounded-full w-8 h-8">
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>

        </div>
    );
}
export default Menubar;