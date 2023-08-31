function Header() {
    

    return (
        <section className='flex fixed bg-transparent justify-between w-full h-24 items-center'>
            <div className="flex w-full"><i id="logo_icon" className="hover:cursor-pointer hover:scale-110 transition-all fa-solid fa-power-off primaryColor text-5xl ml-12"/></div>
            <nav className="flex w-full justify-end">
                <ul className="flex justify-between primaryColor text-2xl font-extrabold">
                    <li onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-white cursor-pointer pr-6">Home</li>
                    <a href="#Tecnologies"><li className="transition-all hover:text-white cursor-pointer pr-6">Tech</li></a>
                    <a href="#Projects"><li className="transition-all hover:text-white cursor-pointer pr-6">Projects</li></a>
                    <a href="#About"><li className="transition-all hover:text-white cursor-pointer pr-6">About</li></a>
                </ul>
            </nav>
        </section>
    )
}

export default Header