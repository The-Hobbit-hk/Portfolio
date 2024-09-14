import React from 'react'

function Projects() {
    return ( 
        <>
            <div className='py-8 mb-40 scroll-mt-20' id='projects'>
                <h2 className='sm:text-3xl text-2xl font-[600] mb-4 md:text-left text-center'>
                    Projects
                </h2>
                <div className='grid lg:grid-cols-3 gap-5'>
                    <div className='rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#282828] flex flex-col gap-5'>
                        <img src="movie-watchlist.png" alt="Movie Watchlist" width='100%' className='rounded-xl w-[100%]' />
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-xl font-[600]'>Movie Watchlist</p>
                                <p>Frontend and Backend Development</p>
                            </div>
                            <div>
                                <a href="https://movie-watchlist-black.vercel.app/" target='_blank'>
                                    <span class="material-symbols-outlined p-3 cursor-pointer text-neutral-700 dark:text-[#cfcfcf] dark:hover:text-blue-500 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-all duration-100">
                                        open_in_new
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <p>Tech Stack</p>
                            <div className='mt-1 flex gap-2 flex-wrap *:dark:bg-white/10 *:bg-black/10 *:px-3 *:py-1 *:rounded-full *:text-sm'>
                                <div><p>React JS</p></div>
                                <div><p>Redux</p></div>
                                <div><p>Javascript</p></div>
                                <div><p>Tailwind CSS</p></div>
                                <div><p>HTML</p></div>
                                <div><p>CSS</p></div>
                            </div>
                            <p className='mt-5'>
                            Developed a movie watchlist app where users can create and remove watchlists, add or remove movies, and search for any movie.
                            </p>
                        </div>
                    </div>
                    <div className='rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#282828] flex flex-col gap-5'>
                        <img src="oneshop.png" alt="Oneshop" width='100%' className='rounded-xl w-[100%]' />
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-xl font-[600]'>Oneshop</p>
                                <p>Frontend Development</p>
                            </div>
                            <div>
                                <a href="https://one-shop-psi.vercel.app/" target='_blank'>
                                    <span class="material-symbols-outlined p-3 cursor-pointer text-neutral-700 dark:text-[#cfcfcf] dark:hover:text-blue-500 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-all duration-100">
                                        open_in_new
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <p>Tech Stack</p>
                            <div className='mt-1 flex gap-2 flex-wrap *:dark:bg-white/10 *:bg-black/10 *:px-3 *:py-1 *:rounded-full *:text-sm'>
                                <div><p>Javascript</p></div>
                                <div><p>Tailwind CSS</p></div>
                                <div><p>HTML</p></div>
                                <div><p>CSS</p></div>
                            </div>
                            <p className='mt-5'>
                            Developed an e-commerce website with a clean, responsive UI, featuring special offers, order management, and personalized user experiences.
                            </p>
                        </div>
                    </div>
                    <div className='rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#282828] flex flex-col gap-5'>
                        <img src="oneshop.png" alt="Oneshop" width='100%' className='rounded-xl w-[100%]' />
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-xl font-[600]'>NoteIt</p>
                                <p>Frontend and Backend Development</p>
                            </div>
                        </div>
                        <div>
                            <p>Tech Stack</p>
                            <div className='mt-1 flex gap-2 flex-wrap *:dark:bg-white/10 *:bg-black/10 *:px-3 *:py-1 *:rounded-full *:text-sm'>
                                <div><p>PHP</p></div>
                                <div><p>Javascript</p></div>
                                <div><p>Bootstrap</p></div>
                                <div><p>MySQL</p></div>
                                <div><p>HTML</p></div>
                                <div><p>CSS</p></div>
                            </div>
                            <p className='mt-5'>
                            Developed a notes app with features for creating and managing notes, organizing to-dos, and event planning, along with additional in-built tools.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects