import React from 'react'
import { FaGithub } from "react-icons/fa";

function Projects() {
    return ( 
        <>
            <div className='py-8 scroll-mt-20' id='projects'>
                <h2 className='text-2xl font-[600] mb-4 md:text-left text-center'>
                    Projects
                </h2>
                <div className='grid gap-5'>
                    <a href="https://movie-watchlist-black.vercel.app/" target='_blank'>
                        <div className='rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#232323] dark:hover:bg-[#162032]/50 hover:bg-[#fdca40] transition-all duration-300 cursor-pointer flex xl:flex-row flex-col xl:items-center gap-5 group'>
                            <img src="movie-watchlist.png" alt="Movie Watchlist" className='rounded-xl xl:w-[25%] md:w-[40%] w-[100%]' />
                            <div className='grid gap-3 w-[100%]'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <p className='text-lg'>Movie Watchlist</p>
                                        <p className='text-sm'>Frontend and Backend Development</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <a href="https://github.com/omkarbokil/MovieWatchlist" target='_blank' className='group rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/10'>
                                            <FaGithub className='text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-[#eeeeee] text-lg' />
                                        </a>
                                        <a href="https://movie-watchlist-black.vercel.app/" target='_blank'>
                                            <span class="material-symbols-outlined p-3 cursor-pointer text-neutral-700 dark:text-[#cfcfcf] dark:hover:text-blue-500 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                                                arrow_outward
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className='mt-1 flex gap-2 flex-wrap *:dark:bg-white/10 *:bg-black/10 *:px-3 *:py-1 *:rounded-full *:text-sm *:text-[#666666] *:dark:text-neutral-300'>
                                        <div><p>React</p></div>
                                        <div><p>Redux</p></div>
                                        <div><p>Javascript</p></div>
                                        <div><p>Tailwind CSS</p></div>
                                        <div><p>HTML</p></div>
                                        <div><p>CSS</p></div>
                                        <div><p>Firebase</p></div>
                                    </div>
                                </div>
                                    <p className='text-sm'>
                                    A movie watchlist app where users can create and remove watchlists, add or remove movies, and search for any movie.
                                    </p>
                            </div>
                        </div>
                    </a>
                    <a href="https://one-shop-psi.vercel.app/" target='_blank'>
                    <div className='rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#232323] dark:hover:bg-[#162032]/50 hover:bg-[#fdca40] transition-all duration-300 cursor-pointer flex xl:flex-row flex-col xl:items-center gap-5 group'>
                            <img src="oneshop.png" alt="Movie Watchlist" width='50%' className='rounded-xl xl:w-[25%] md:w-[40%] w-[100%]' />
                            <div className='grid gap-3 w-[100%]'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <p className='text-lg'>Oneshop</p>
                                        <p className='text-sm'>Frontend Development</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <a href="https://github.com/omkarbokil/OneShop" target='_blank' className='group rounded-full p-3 hover:bg-black/10 dark:hover:bg-white/10'>
                                            <FaGithub className='text-neutral-700 dark:text-[#cfcfcf] dark:group-hover:text-[#eeeeee] text-lg' />
                                        </a>
                                        <a href="https://movie-watchlist-black.vercel.app/" target='_blank'>
                                            <span class="material-symbols-outlined p-3 cursor-pointer text-neutral-700 dark:text-[#cfcfcf] dark:hover:text-blue-500 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                                                arrow_outward
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className='mt-1 flex gap-2 flex-wrap *:dark:bg-white/10 *:bg-black/10 *:px-3 *:py-1 *:rounded-full *:text-sm *:text-[#666666] *:dark:text-neutral-300'>
                                        <div><p>Javascript</p></div>
                                        <div><p>Tailwind CSS</p></div>
                                        <div><p>HTML</p></div>
                                        <div><p>CSS</p></div>
                                    </div>
                                </div>
                                    <p className='text-sm'>
                                    An e-commerce website with a clean, responsive UI, featuring offers, order management, and personalized user experiences.
                                    </p>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className='rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#232323] dark:hover:bg-[#162032]/50 hover:bg-[#fdca40] transition-all duration-300 cursor-pointer flex xl:flex-row flex-col xl:items-center gap-5 group'>
                            <img src="noteit.png" alt="Note It" width='50%' className='rounded-xl xl:w-[25%] md:w-[40%] w-[100%]' />
                            <div className='grid gap-3 w-[100%]'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <p className='text-lg'>NoteIt</p>
                                        <p className='text-sm'>Frontend and Backend Development</p>
                                    </div>
                                    <div>
                                        <a href="#">
                                            <span class="material-symbols-outlined p-3 cursor-pointer text-neutral-700 dark:text-[#cfcfcf] dark:hover:text-blue-500 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                                                arrow_outward
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className='mt-1 flex gap-2 flex-wrap *:dark:bg-white/10 *:bg-black/10 *:px-3 *:py-1 *:rounded-full *:text-sm *:text-[#666666] *:dark:text-neutral-300'>
                                        <div><p>PHP</p></div>
                                        <div><p>Javascript</p></div>
                                        <div><p>Bootstrap</p></div>
                                        <div><p>HTML</p></div>
                                        <div><p>CSS</p></div>
                                        <div><p>MySQL</p></div>
                                    </div>
                                </div>
                                    <p className='text-sm'>
                                    Notes Management web app with features for creating and managing notes, to-dos, along with additional in-built tools.
                                    </p>
                            </div>
                        </div>
                    </a>
                    <a href="https://chromewebstore.google.com/detail/quick-word-meaning/cfgkgnlgekkdnhmehpdkebflakhjibkg?utm_source=ext_app_menu" target='_blank'>
                    <div className='rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#232323] dark:hover:bg-[#162032]/50 hover:bg-[#fdca40] transition-all duration-300 cursor-pointer flex xl:flex-row flex-col xl:items-center gap-5 group'>
                            <img src="qwm.png" alt="Quick Word Meaning" width='50%' className='rounded-xl xl:w-[25%] md:w-[40%] w-[100%]' />
                            <div className='grid gap-3 w-[100%]'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <p className='text-lg'>Quick Word Meaning | Chrome Extension</p>
                                        <p className='text-sm'>Frontend and Backend Development</p>
                                    </div>
                                    <div>
                                        <a href="https://chromewebstore.google.com/detail/quick-word-meaning/cfgkgnlgekkdnhmehpdkebflakhjibkg?utm_source=ext_app_menu" target='_blank'>
                                            <span class="material-symbols-outlined p-3 cursor-pointer text-neutral-700 dark:text-[#cfcfcf] dark:hover:text-blue-500 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                                                arrow_outward
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className='mt-1 flex gap-2 flex-wrap *:dark:bg-white/10 *:bg-black/10 *:px-3 *:py-1 *:rounded-full *:text-sm *:text-[#666666] *:dark:text-neutral-300'>
                                        <div><p>React</p></div>
                                        <div><p>Chrome Extension API</p></div>
                                        <div><p>Javascript</p></div>
                                        <div><p>Tailwind CSS</p></div>
                                        <div><p>HTML</p></div>
                                        <div><p>CSS</p></div>
                                    </div>
                                </div>
                                    <p className='text-sm'>
                                    Chrome extension enabling instant word lookup by double-clicking a word on the current webpage.
                                    </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Projects