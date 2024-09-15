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
            <nav className='flex justify-center py-10 sm:px-40 items-center font-inter sticky top-0 bg-white dark:bg-[#181818] transition-all duration-300 z-[100]'>
                <div className='space-x-3 md:inline-block hidden'>
                    <a href="#" className='px-5 py-2 rounded-full text-neutral-700 dark:text-[#cfcfcf] hover:bg-black/10 dark:hover:bg-white/10'>
                        Home
                    </a>
                    <a href="#experience" className='px-5 py-2 rounded-full text-neutral-700 dark:text-[#cfcfcf] hover:bg-black/10 dark:hover:bg-white/10'>
                        Experience
                    </a>
                    <a href="#projects" className='px-5 py-2 rounded-full text-neutral-700 dark:text-[#cfcfcf] hover:bg-black/10 dark:hover:bg-white/10'>
                        Projects
                    </a>
                    <a href="#contact" className='px-5 py-2 rounded-full text-neutral-700 dark:text-[#cfcfcf] hover:bg-black/10 dark:hover:bg-white/10'>
                        Contact
                    </a>
                </div>
                <div className='absolute flex md:right-5 items-center gap-3'>
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
                <div className='md:hidden absolute right-5'>
                    <span className="material-symbols-outlined bg-white/10 rounded-full p-2 cursor-pointer text-[#eeeeee]">
                        menu
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Header
