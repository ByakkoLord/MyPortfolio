import { useState } from "react"

function Footer(){

    const stop = "fa-brands fa-react text-3xl primaryColor"
    const play = "fa-brands fa-react text-3xl fa-bounce primaryColor"
    const [icon, setIcon] = useState(stop)

    function mouseEnter(){
        setIcon(play)
    }
    function mouseLeave(){
        setIcon(stop)
    }

    

    return(
        <section className="flex md:flex-row flex-col items-center justify-around pt-3 pb-3">
            <div className="flex items-center">
                <span className="text-lg pr-2 text-white">Made with</span><a href="https://react.dev" target="blank"><i onMouseLeave={mouseLeave} onMouseEnter={mouseEnter} className={icon}></i></a>
            </div>
            <div className="md:w-auto w-5/6">
                <span className="text-lg text-center pr-2 text-white">Copyright © 2023 by Guilherme Fonseca da Costa | All Rights Reserved</span>
            </div>
            <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}} className="mt-5 md:mt-0 hover:bg-slate-600 transition-all flex items-center justify-center rounded-md primaryColor text-3xl w-12 h-12 borderArrow"><i className="fa-solid fa-arrow-right fa-rotate-270"></i></button>
        </section>
    )
}

export default Footer