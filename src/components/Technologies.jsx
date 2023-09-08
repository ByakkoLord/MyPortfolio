function Technologies({icon, name}) {
    return(
        <>
         <div className="toolactive hover:cursor-pointer hover:scale-110 transition-all flex justify-center items-center  quaternaryColor shadow-md shadow-black roundedPers1">
            <i className={icon}/>
            <span className="tooltip items-center pl-4 pr-4 h-11  bg-slate-600 text-white rounded-xl">{name}</span>
         </div>   
        </>
    )
}

export default Technologies