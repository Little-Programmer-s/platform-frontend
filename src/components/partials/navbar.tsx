function Navbar() {
    return (
        <nav className='c-space flex items-center justify-center mt-9 absolute w-full'>
            <ul className='nav-ul bg-gradient-to-r from-midnight to-storm w-full md:w-fit p-4 border-slate-900 border rounded-2xl'>
                <li className='nav-li'><a href="">About</a></li>
                <li className='nav-li'><a href="">Project</a></li>
                <li className='nav-li'><a href="">Testimonials</a></li>
                <li className='nav-li'><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar