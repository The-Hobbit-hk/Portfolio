import React from 'react'
import Experience from './Experience';
import Projects from './Projects';

function Homepage() {
    return (
        <>
            <div className='md:px-40 px-10 text-left md:mt-10 dark:text-neutral-300 text-[#343434] font-sora'>
                <div className='grid lg:grid-cols-2 gap-4'>
                    <div>
                        <div className='md:gap-5 gap-3 items-center flex flex-col md:items-start md:text-left text-center '>
                            <img src="/profile.jpg" alt="Profile Picture" width='100px' className='aspect-square object-cover rounded-full sm:w-[150px] w-[100px] p-1 border dark:border-neutral-300 border-[#343434] shadow-lg hover:scale-x-[-1] transition-all duration-300' />
                            <div>
                                <h1 class="sm:text-3xl text-2xl tracking-wide text-nowrap font-[500]">
                                    Omkar Bokil<span class="text-[#fdca40] sm:text-5xl text-2xl">.</span>
                                </h1 >
                                <h3 class="text-lg text-left">
                                    Frontend Web Developer
                                </h3>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl tracking-wide'>
                                With expertise in React JS, Javascript, HTML, CSS, Tailwind CSS, Bootstrap and SQL. I craft responsive, dynamic web applications. I deliver seamless user experiences while ensuring robust, scalable backend solutions.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='grid xl:grid-cols-3 sm:grid-cols-2 gap-3 *:bg-[#E9E9E9] *:dark:bg-[#282828] *:rounded-xl *:flex *:items-center *:w-[100%] *:h-[100%] *:sm:justify-center *:justify-between *:px-5 *:transition-all *:duration-300'>
                            <div className='xl:col-span-2 skill-react'>
                                <img src="/reactjs.png" alt="" width='100px' className='p-4'/>
                                <p className='pr-5'>React JS</p>
                            </div>
                            <div className="skill-redux">
                                <img src="/redux-toolkit.png" alt="" width='100px' className='p-4'/>
                                <p className='pr-5'>Redux</p>
                            </div>
                            <div className="skill-javascript">
                                <img src="/js.png" alt="" width='100px' className='p-4'/>
                                <p className='pr-5'>Javascript</p>
                            </div>
                            <div className="skill-html">
                                <img src="/html.png" alt="" width='100px' className='p-4'/>
                                <p className='pr-5'>HTML</p>
                            </div>
                            <div className="skill-css">
                                <img src="/css.png" alt="" width='100px' className='p-4'/>
                                <p className='pr-5'>CSS</p>
                            </div>
                            <div className="skill-bootstrap">
                                <img src="/bootstrap.png" alt="" width='100px' className='p-4'/>
                                <p className='pr-5'>Bootstrap</p>
                            </div>
                            <div className='xl:col-span-2 skill-tailwind'>
                                <img src="/tailwind.png" alt="" width='100px' className='p-4'/>
                                <p className='pr-5'>Tailwind CSS</p>
                            </div>
                            <div className='xl:col-span-2 skill-firebase'>
                                <img src="/firebase.png" alt="" width='100px' className='p-4'/>
                                <p className='pr-5'>Firebase</p>
                            </div>
                            <div className="skill-mysql">
                                <img src="/mysql.png" alt="" width='100px' className='p-4'/>
                                <p className='pr-5'>MySQL</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid animate-bounce text-center mt-16 justify-center'>
                    <a href="#exp">
                        <span class="material-symbols-outlined p-3 text-neutral-500 border rounded-full dark:border-neutral-700 border-neutral-300 cursor-pointer">
                            keyboard_arrow_down
                        </span>
                    </a>
                </div>
                {/* Experience */}
                <Experience />
                {/* Projects */}
                <Projects />
            </div>
        </>
    )
}

export default Homepage
