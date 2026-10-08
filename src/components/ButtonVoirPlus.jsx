function ButtonVoirPlus({onClick}) {
    return(
        <div className={`flex items-center gap-6 px-4 py-[0.5rem] rounded-lg  hover:bg-[#D9D9D9] hover:font-semibold text-[#0F0F0F] `} >
            <i class="fa-solid fa-chevron-down"></i>
            <button onClick={onClick} className="text-sm">Plus</button>
        </div>
    )
}
export default ButtonVoirPlus