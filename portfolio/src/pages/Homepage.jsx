import React from 'react'
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Figma from './Figma';

function Homepage() {
    return (
        <>
            <div className='md:px-40 px-5 text-left md:mt-10 dark:text-neutral-300 text-[#343434] font-inter'>
                <div className='grid lg:grid-cols-2 gap-5'>
                    <div>
                        <div className='md:gap-5 gap-3 items-center flex flex-col md:items-start md:text-left text-center '>
                            <img src="/me.jpg.jpg" alt="Profile Picture" width='100px' className='aspect-square object-cover rounded-full sm:w-[150px] w-[100px] p-1 border dark:border-neutral-300 border-[#343434] shadow-lg hover:scale-x-[-1] transition-all duration-300' />
                            <div>
                                <h1 class="sm:text-3xl text-2xl tracking-wide text-nowrap font-[500]">
                                    Harshvardhan Kale<span class="text-[#fdca40] sm:text-5xl text-2xl"></span>
                                </h1 >
                                <h3 class="text-lg text-left">
                                    Full Stack Developer
                                </h3>
                            </div>
                        </div>
                        <div className='mt-5 md:text-left text-center'>
                            <p className='md:text-lg  tracking-wide'>
                            Innovative and results-driven Full Stack Developer with hands-on expertise in Java, Angular, .NET, and MySQL. Proven track record of delivering high-performance, user-centric applications while driving efficiency, security, and seamless API integrations. Passionate about turning ideas into impactful digital solutions.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='md:grid xl:grid-cols-3 sm:grid-cols-2 gap-3 *:bg-[#E9E9E9] *:dark:bg-[#232323] *:rounded-xl *:flex *:items-center *:w-[100%] *:h-[100%] *:sm:justify-center *:justify-between *:px-5 *:transition-all *:duration-300 hidden'>
                            <div className='xl:col-span-2 skill-react'>
                                <img src="/JAVA.png" alt="" width='100px' className='p-4'/>
                                <p className='pr-5'>JAVA</p>
                            </div>
                            {/* <div className="skill-redux">
                                <img src="/redux-toolkit.png" alt="" width='100px' className='p-4'/>
                                <p className='pr-5'>Redux</p>
                            </div> */}
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
                            {/* <div className="skill-bootstrap">
                                <img src="/bootstrap.png" alt="" width='100px' className='p-4'/>
                                <p className='pr-5'>Bootstrap</p>
                            </div> */}
                            <div className='xl:col-span-2 skill-tailwind'>
                                <img src="/ANGULAR.png" alt="" width='100px' className='p-4'/>
                                <p className='pr-5'>Angular</p>
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
                    <div className='md:hidden'>
                        <div className='flex gap-2 flex-wrap justify-center'>
                            <div className='skill-react'>
                                <img src="/reactjs.png" alt="" width='100px' className='p-4 min-w-[100px] min-h-[100px]'/>
                            </div>
                            {/* <div className="skill-redux">
                                <img src="/redux-toolkit.png" alt="" width='100px' className='p-4 min-w-[100px] min-h-[100px]'/>
                            </div> */}
                            <div className="skill-javascript">
                                <img src="/js.png" alt="" width='100px' className='p-4 min-w-[100px] min-h-[100px]'/>
                               </div>
                            <div className="skill-html">
                                <img src="/html.png" alt="" width='100px' className='p-4 min-w-[100px] min-h-[100px]'/>
                            </div>
                            <div className="skill-css">
                                <img src="/css.png" alt="" width='100px' className='p-4 min-w-[100px] min-h-[100px]'/>
                            </div>
                            {/* <div className="skill-bootstrap">
                                <img src="/bootstrap.png" alt="" width='100px' className='p-4 min-w-[100px] min-h-[100px]'/>
                              </div> */}
                            <div className='skill-tailwind'>
                                <img src="/tailwind.png" alt="" width='100px' className='p-4 min-w-[100px] min-h-[100px]'/>
    
                            </div>
                            <div className='skill-firebase'>
                                <img src="/firebase.png" alt="" width='100px' className='p-4 min-w-[100px] min-h-[100px]'/>
                             </div>
                            <div className="skill-mysql">
                                <img src="/mysql.png" alt="" width='100px' className='p-4 min-w-[100px] min-h-[100px]'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid animate-bounce text-center mt-16 justify-center'>
                    <a href="#experience">
                        <span class="material-symbols-outlined p-3 text-neutral-500 border rounded-full dark:border-neutral-700 border-neutral-300 cursor-pointer">
                            keyboard_arrow_down
                        </span>
                    </a>
                </div>
                {/* Experience */}
                <Experience />
                {/* Projects */}
                <Projects />
                {/* Figma */}
                <Figma />
                {/* Contact */}
                <Contact />
            </div>
        </>
    )
}

export default Homepage
