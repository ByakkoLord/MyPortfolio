function Header() {
    return (
        <section className='flex justify-between w-full h-24 items-center'>
            <div className="flex w-full"><img src='https://via.placeholder.com/70' alt='Logo'/></div>
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