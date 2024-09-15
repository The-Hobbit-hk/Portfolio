import {React, useState} from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode  } from "react-icons/md";


function Header() {

    let [themeIcon, setThemeIcon] = useState(true);
    let [showMenu, setShowMenu] = useState(false);
    let [top, setTop] = useState('-top-96');

    let handleThemeChange = () => {
        if(document.documentElement.classList.contains('dark')){
            setThemeIcon(false);
            document.documentElement.classList.remove('dark')
        }else{
            setThemeIcon(true);
            document.documentElement.classList.add('dark');
        }
    }

    let handleMenu = () => {
        setShowMenu(!showMenu);
        setTop(showMenu ? '-top-96' : 'top-20');
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
                    <a href="https://www.linkedin.com/in/omkarbokil/" target='_blank' className='group rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/10'>
                        <FaLinkedinIn className='text-lg text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-[#eeeeee] ' />
                    </a>
                    <a href="https://github.com/omkarbokil" target='_blank' className='group rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/10'>
                        <FaGithub className='text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-[#eeeeee] text-lg' />
                    </a>
                    <div className='group rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer' onClick={handleThemeChange}>
                        {
                            themeIcon ?
                            <MdOutlineDarkMode className='text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-[#eeeeee] text-xl' />
                            :
                            <MdOutlineLightMode className='text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-[#eeeeee] text-xl' />
                        }
                    </div>
                </div>
                <div className='md:hidden absolute right-5'>
                    <span className="material-symbols-outlined rounded-full p-2 cursor-pointer dark:bg-[#232323] bg-[#E9E9E9] dark:text-neutral-300 text-[#343434]" onClick={handleMenu}>
                        menu
                    </span>
                </div>
                <div className={`absolute right-5 ${top} transition-all duration-300`}>
                    <div className='space-y-3 flex flex-col transition-all duration-300'>
                        <a href="#" onClick={handleMenu}>
                            <p className='px-5 py-2 font-[500] rounded-lg space-y-3 bg-[#fdca40] text-[#323232]'>
                                Home
                            </p>
                        </a>
                        <a href="#experience" onClick={handleMenu}>
                            <p className='px-5 py-2 font-[500] rounded-lg space-y-3 bg-[#fdca40] text-[#323232]'>Experience</p>
                        </a>
                        <a href="#projects" onClick={handleMenu}>
                            <p className='px-5 py-2 font-[500] rounded-lg space-y-3 bg-[#fdca40] text-[#323232]'>Projects</p>
                        </a>
                        <a href="#contact" onClick={handleMenu}>
                            <p className='px-5 py-2 font-[500] rounded-lg space-y-3 bg-[#fdca40] text-[#323232]'>Contact</p>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
