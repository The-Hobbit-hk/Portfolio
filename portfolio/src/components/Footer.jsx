import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className='md:px-40 px-5 py-10 pt-20 md:text-left text-center font-inter dark:text-neutral-300 text-[#343434] flex md:flex-row flex-col items-center gap-5'>
                <p className='text-sm'>Coded in Cursor. Built with JS and JAVA. Deployed with Vercel.</p>
                <div className='flex gap-2'>
                    <a href="https://www.linkedin.com/in/harshvardhan-kale-9197a01b4/" target='_blank' className='group rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/10'>
                        <FaLinkedinIn className='text-lg text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-[#eeeeee] ' />
                    </a>
                    <a href="https://github.com/The-Hobbit-hk" target='_blank' className='group rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/10'>
                        <FaGithub className='text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-[#eeeeee] text-lg' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer
