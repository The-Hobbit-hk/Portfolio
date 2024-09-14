import React from 'react'

function Experience() {
  return (
    <>
        <div className='py-8 scroll-mt-20' id='experience'>
            <h2 className='sm:text-3xl text-2xl font-[600] mb-4 md:text-left text-center'>
                Experience
            </h2>
            <div className='grid gap-5'>
                <div className='rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#282828]'>
                    <div className='flex lg:flex-row flex-col justify-between'>
                        <p className='text-xl font-[500]'>Shrisoft System Solutions - Software Developer</p>
                        <p>Oct 2022 - June 2024</p>
                    </div>
                </div>
                <div className='rounded-xl p-4 bg-[#E9E9E9] dark:bg-[#282828]'>
                    <div className='flex lg:flex-row flex-col justify-between'>
                        <p className='text-xl font-[500]'>SoftwareGen Technologies - Frontend Developer</p>
                        <p>July 2024 - Present</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Experience
