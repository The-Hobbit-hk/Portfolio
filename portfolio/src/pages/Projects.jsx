import React from 'react'

function Projects() {
    return ( 
        <>
            <div className='mt-16' id='exp'>
                <h2 className='sm:text-3xl text-2xl font-[600] mb-4'>
                    Projects
                </h2>
                <div className='grid 2xl:grid-cols-3 gap-5'>
                    <div className='rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#282828] flex flex-col gap-5'>
                        <img src="movie-watchlist.png" alt="Movie Watchlist" width='100%' className='rounded-xl h-[180px]' />
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
                            <div className='mt-1 flex gap-3'>
                                <img src="reactjs.png" alt="React JS" width='30px' />
                                <img src="redux-toolkit.png" alt="Redux Toolkit" width='30px' />
                                <img src="js.png" alt="Javascript" width='30px' />
                                <img src="firebase.png" alt="Firebase" width='30px' />
                                <img src="tailwind.png" alt="Tailwind" width='30px' />
                                <img src="html.png" alt="HTML" width='30px' />
                                <img src="css.png" alt="CSS" width='30px' />
                            </div>
                            <p className='mt-5'>
                            Developed a movie watchlist app using React JS, Redux Toolkit, Tailwind CSS, Firebase, and the OMDB API. Boosted user engagement by 20% with search functionality and personalized watchlists. Improved app functionality by 25% and enhanced performance with Firebase, reducing data retrieval time by 30%. Efficient state management and seamless email-based login were achieved using Redux Toolkit.
                            </p>
                        </div>
                    </div>
                    <div className='rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#282828] flex flex-col gap-5'>
                        <img src="oneshop.png" alt="Oneshop" width='100%' className='rounded-xl h-[180px]' />
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
                            <div className='mt-1 flex gap-3'>
                                <img src="js.png" alt="Javascript" width='30px' />
                                <img src="tailwind.png" alt="Tailwind" width='30px' />
                                <img src="html.png" alt="HTML" width='30px' />
                                <img src="css.png" alt="CSS" width='30px' />
                            </div>
                            <p className='mt-5'>
                            Developed an e-commerce website with a clean, intuitive UI optimized for all devices. Implemented key features like special offers, order management, and personalized user experiences. Enhanced navigation with intuitive menu options and a comprehensive profile section, leading to a 50-60% increase in usability and engagement.
                            </p>
                        </div>
                    </div>
                    <div className='rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#282828] flex flex-col gap-5'>
                        <img src="oneshop.png" alt="Oneshop" width='100%' className='rounded-xl h-[180px]' />
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-xl font-[600]'>NoteIt</p>
                                <p>Frontend and Backend Development</p>
                            </div>
                        </div>
                        <div>
                            <p>Tech Stack</p>
                            <div className='mt-1 flex gap-3'>
                                <img src="php.png" alt="PHP" width='30px' />
                                <img src="js.png" alt="Javascript" width='30px' />
                                <img src="bootstrap.png" alt="Bootstrap" width='30px' />
                                <img src="html.png" alt="HTML" width='30px' />
                                <img src="css.png" alt="CSS" width='30px' />
                                <img src="mysql.png" alt="Mysql" width='30px' />
                            </div>
                            <p className='mt-5'>
                            Developed a frontend interface using HTML, CSS, and Bootstrap, backed by PHP and MySQL for secure, efficient data access, reducing frontend loading time by 30-40%. Streamlined login/signup for personalized notes, to-dos, and event planning features. Enhanced user experience with an in-built calculator and categorized notes, reducing app switching by 20%.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects