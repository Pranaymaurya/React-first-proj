import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import{motion} from 'framer-motion'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const active="py-3 px-3  hover:text-gray-900 text-black  p-3 bg-blue-500 rounded-lg"
    const inactive="py-5 px-3 text-gray-700 hover:text-gray-900"
    return (
        <motion.div initial={{y:-30}}
        animate={{y:0}} transition={{duration:0.5}}>
        <nav className="bg-white shadow-lg justify-between content-between">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* Logo */}
                        <div>
                            <a href="#" className="flex items-center py-5 px-2 text-gray-700">
                                <svg className="h-6 w-6 mr-1 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.633 0 3 1.367 3 3s-1.367 3-3 3-3-1.367-3-3 1.367-3 3-3zm0 10a7 7 0 110-14 7 7 0 010 14zm0-18a9 9 0 100 18 9 9 0 000-18z" />
                                </svg>
                                <span className="font-bold">Brand</span>
                            </a>
                        </div>
                        {/* Primary Navbar items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <NavLink to="" className={({isActive})=>(isActive ?  active:inactive)}>Home</NavLink>
                            <NavLink to="/about"className={({isActive})=>(isActive ?  active:inactive)}>About</NavLink>
                            
                            <a href="/service" className={({isActive})=>(isActive ?  active:inactive)}>Services</a>
                            <NavLink to="/contact" className={({isActive})=>(isActive ?  active:inactive)}>Contact</NavLink>
                        </div>
                    </div>
                    {/* Secondary Navbar items */}
                    <div className="hidden md:flex items-center space-x-1">
                    <button class="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-blue-400  group hover:bg-blue-400 transition duration-300 ease-in-out">
 <span class="font-medium text-[#333] group-hover:text-white">Login</span>
</button>

<button class="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-blue-400  group hover:bg-blue-400 transition duration-300 ease-in-out">
<span class="font-medium text-[#333] group-hover:text-white">Sign-up</span></button>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
                            <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
                <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Services</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
            </div>
        </nav>
        </motion.div>
    );
};

export default Navbar;
