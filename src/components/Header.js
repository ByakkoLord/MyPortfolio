function Header() {
    return (
        <section className='flex fixed bg-transparent justify-between w-full h-24 items-center'>
            <div className="flex w-full"><i id="logo_icon" className="fa-solid fa-power-off primaryColor text-5xl ml-12"/></div>
            <nav className="flex w-full justify-end">
                <ul className="flex justify-between primaryColor text-2xl font-extrabold">
                    <li className="pr-6">Home</li>
                    <li className="pr-6">Tech</li>
                    <li className="pr-6">Projects</li>
                    <li className="pr-6">About</li>
                    <li className="pr-6">Contact</li>
                </ul>
            </nav>
        </section>
    )
}

export default Header