import style from './Header.module.css'
import { useState, useEffect, useRef } from 'react'

function Header() {
    const [show, setShow] = useState(false)
    

    
    
    return (
        <section className='flex fixed bg-transparent justify-between w-full h-24 items-center'>
            <div className="flex w-full"><i id="logo_icon" className="hover:cursor-pointer hover:scale-110 transition-all fa-solid fa-power-off primaryColor text-5xl ml-12"/></div>
            <nav className="flex w-full justify-end">
                <i onClick={() => {setShow(!show)}} className={`lg:hidden
                ${show ? style.headerButtonAnimation : style.headerButtonAnimation2} text-3xl transition-all mr-10 rounded-full flex items-center justify-center w-12 h-12 primaryColor fa-solid fa-bars`}></i>
                <ul className={`md:static md:flex-row md:w-96 md:h-auto md:top-auto md:bg-transparent md:right-auto
                  ${show ? style.headerAnimation : style.headerAnimation2} absolute flex flex-col justify-evenly items-center w-36 primaryColor font-bold text-2xl top-0 -right-36 bg-slate-700 h-56`}>
                    <li onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-white cursor-pointer">Home</li>
                    <a href="#Tecnologies"><li className="transition-all hover:text-white cursor-pointer">Tech</li></a>
                    <a href="#Projects"><li className="transition-all hover:text-white cursor-pointer">Projects</li></a>
                    <a href="#About"><li className="transition-all hover:text-white cursor-pointer">About</li></a>
                </ul>
            </nav>
        </section>
    )
}

export default Header

//flex flex-col justify-between primaryColor text-2xl font-extrabold