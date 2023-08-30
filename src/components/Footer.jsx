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
        <section className="flex items-center justify-around pt-3 pb-3">
            <div className="flex items-center">
                <span className="text-lg pr-2 text-white">Made with</span><a href="https://react.dev"><i onMouseLeave={mouseLeave} onMouseEnter={mouseEnter} className={icon}></i></a>
            </div>
            <div>
                <span className="text-lg pr-2 text-white">Copyright © 2023 by Guilherme Fonseca da Costa | All Rights Reserved</span>
            </div>
            <button className="flex items-center justify-center rounded-md primaryColor text-3xl w-12 h-12 borderArrow"><i className="fa-solid fa-arrow-right fa-rotate-270"></i></button>
        </section>
    )
}

export default Footer