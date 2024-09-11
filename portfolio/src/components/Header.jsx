import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";


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
            <nav className='flex justify-between p-5 sm:px-40 items-center font-sora'>
                <div className='flex items-center gap-5'>
                    <img src="/profile.jpg" alt="Profile Picture" width='100px' className='aspect-square object-cover rounded-full sm:w-[100px] w-[60px]' />
                    <div>
                    <h1 class="sm:text-3xl text-xl tracking-wide text-nowrap font-[500] dark:text-[#eeeeee] text-neutral-700">
                        Omkar Bokil<span class="text-[#fdca40] sm:text-5xl text-xl">.</span>
                    </h1 >
                    <h3 class="sm:text-lg text-sm text-center md:text-left dark:text-[#eeeeee] text-neutral-700">
                        Frontend Developer
                    </h3>
                    </div>
                </div>
                <div className='space-x-3 lg:flex items-center hidden'>
                    <a href="#" className='px-5 py-2 rounded-full text-neutral-700 dark:text-[#cfcfcf] hover:bg-black/10 dark:hover:bg-white/10'>
                        Home
                    </a>
                    <a href="#exp" className='px-5 py-2 rounded-full text-neutral-700 dark:text-[#cfcfcf] hover:bg-black/10 dark:hover:bg-white/10'>
                        Experience
                    </a>
                    <a href="#" className='px-5 py-2 rounded-full text-neutral-700 dark:text-[#cfcfcf] hover:bg-black/10 dark:hover:bg-white/10'>
                        Projects
                    </a>
                    <div className='group rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer'>
                        <FaLinkedinIn className='text-lg text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-[#eeeeee] ' />
                    </div>
                    <div className='group rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer'>
                        <FaGithub className='text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-[#eeeeee] text-lg' />
                    </div>
                    <div className='group rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer' onClick={handleThemeChange}>
                        <MdOutlineDarkMode className='text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-[#eeeeee] text-xl' />
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
