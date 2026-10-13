

function Navbar({onMenuClick}) {
    return (
        <header className="h-16 sticky top-0 z-50 text-white flex justify-between items-center px-4 py-2 bg-black">


            <div className="relative flex items-center gap-3">
                <button onClick={onMenuClick}>
                    <i className="text-xl fa-solid fa-bars"></i>
                </button>

                <div>
                    <img className="w-30 h-15" src="/assets/image/youtube.svg" alt="logoyoutube" />
                    <span className="text-gray-500 absolute top-3 left-[8.8rem] text-[0.6rem] font-bold">SN</span>
                </div>
            </div>

            {/* mobile */}
            <button className="md:hidden">
                <i className="text-lg fa-solid fa-magnifying-glass"></i>
            </button>

            {/* Desktop */}
            <div className="hidden md:flex flex-1 max-w-sm lg:max-w-xl border border-gray-600 flex items-center rounded-full overflow-hidden">
                <input className="rounded-l-lg w-full outline-0 py-2 px-4 bg-[#121212]" type="search" name="" id="" placeholder="Rechercher"/>
                <button className="bg-[#1A1A1A] px-5 py-2 rounded-r-4xl">
                     <i className="text-lg fa-solid fa-magnifying-glass"></i>
                </button>
                
            </div>
            <div className="flex items-center gap-5">
                <i className="text-2xl fa-regular fa-bell"></i>
                <button className="w-10 h-10 borde-2 border-gray-500 rounded-full bg-white">

                </button>
            </div>
        </header>
   
  );

}

export default Navbar;
