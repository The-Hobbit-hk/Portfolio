import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Header() {

    let path = useLocation();
    let pathname = path.pathname;

    let handleThemeChange = () => {
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark')
        }else{
            document.documentElement.classList.add('dark');
        }
    }

    return (
        <>
            <nav className='flex justify-between p-5 sm:px-20 items-center font-sora'>
                <div className='flex items-center gap-5'>
                    <img src="/profile.jpg" alt="Profile Picture" width='100px' className='aspect-square object-cover rounded-full sm:w-[100px] w-[60px]' />
                    <div>
                    <h1 class="sm:text-3xl text-xl tracking-wide text-nowrap font-[500] text-[#eeeeee]">
                        Omkar Bokil<span class="text-[#fdca40] sm:text-5xl text-xl">.</span>
                    </h1 >
                    <h3 class="sm:text-lg text-sm text-center md:text-left text-[#eeeeee]">
                        Frontend Developer
                    </h3>
                    </div>
                </div>
                <div className='space-x-3 lg:flex items-center hidden'>
                    <NavLink to='home' className={({isActive}) => isActive || pathname === '/' ? 'text-[#eeeeee] font-[600] hover:bg-white/10 rounded-full px-5 py-2' : 'text-[#7f8082] hover:bg-white/10 rounded-full px-5 py-2'}>
                        Home
                    </NavLink>
                    <NavLink to='experience' className={({isActive}) => isActive || pathname === '/' ? 'text-[#eeeeee] font-[600] hover:bg-white/10 rounded-full px-5 py-2' : 'text-[#7f8082] hover:bg-white/10 rounded-full px-5 py-2'}>
                        Experience
                    </NavLink>
                    <NavLink to='projects' className={({isActive}) => isActive || pathname === '/' ? 'text-[#eeeeee] font-[600] hover:bg-white/10 rounded-full px-5 py-2' : 'text-[#7f8082] hover:bg-white/10 rounded-full px-5 py-2'}>
                        Projects
                    </NavLink>
                    <div className='group rounded-full p-3 hover:bg-white/10 cursor-pointer'>
                        <FaLinkedinIn className='text-[#7f8082] group-hover:text-[#eeeeee] text-lg' />
                    </div>
                    <div className='group rounded-full p-3 hover:bg-white/10 cursor-pointer'>
                        <FaGithub className='text-[#7f8082] group-hover:text-[#eeeeee] text-lg' />
                    </div>
                    <div className='group rounded-full p-3 hover:bg-white/10 cursor-pointer' onClick={handleThemeChange}>
                        <MdOutlineDarkMode className='text-[#7f8082] group-hover:text-[#eeeeee] text-xl' />
                    </div>
                </div>
                <div className='lg:hidden'>
                    <span className="material-symbols-outlined bg-white/10 rounded-full p-2 cursor-pointer text-[#eeeeee]">
                        menu
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Header
