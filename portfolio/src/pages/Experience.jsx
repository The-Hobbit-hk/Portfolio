import React from 'react'

function Experience() {
  return (
    <>
        <div className='py-8 scroll-mt-20' id='experience'>
            <h2 className='text-2xl font-[600] mb-4 md:text-left text-center'>
                Experience
            </h2>
            <div className='grid gap-5'>
                <div className='rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#232323]'>
                    <div className='flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5'>
                        <p className='text-md overflow-hidden'>
                        Junior Full Stack Developer • <span className='font-semibold'>Axonator</span><br/>
                            <small>July 2024 - Present</small>
                        </p>
                        <div className='mt-1 flex gap-2 flex-wrap *:dark:bg-white/10 *:bg-black/10 *:px-3 *:py-1 *:rounded-full *:text-sm'>
                            
                            <div><p>Javascript</p></div>
                            <div><p>JAVA</p></div>
                            <div><p>SQL</p></div>
                            <div><p>HTML & CSS</p></div>
                        </div>
                    </div>
                </div>
                <div className='rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#232323]'>
                    <div className='flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5'>
                        <p className='text-md'>
                        Software Engineer Intern • <span className='font-semibold'>Axonator</span><br/>
                            <small>January 2024 - June 2024</small>
                            {/* <small>Oct 2022 - Present</small> */}
                        </p>
                        <div className='mt-1 flex gap-2 flex-wrap *:dark:bg-white/10 *:bg-black/10 *:px-3 *:py-1 *:rounded-full *:text-sm'>
                            
                            <div><p>Javascript</p></div>
                            <div><p>JAVA</p></div>
                            
                            <div><p>HTML & CSS</p></div>
                            
                            <div><p>SQL</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Experience
