import React from 'react'

function Figma() {
  return (
    <>
        <div className='py-8 scroll-mt-20' id='figma'>
            <h2 className='text-2xl font-[600] mb-4 md:text-left text-center'>
                Figma Designs
            </h2>
            <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
                <div>
                    <a href="https://www.figma.com/design/G8LfQZyvzMCXX61SOgUWf1/Login-Page?node-id=0-1&t=F7RMRisNHITuxSWP-1" target='_blank' className='block bg-[#E9E9E9] hover:bg-black/20 dark:bg-[#232323] dark:hover:bg-[#fff]/10 p-4 rounded-xl transition-all duration-300 cursor-pointer'>
                        <div className='flex flex-col items-start gap-5'>
                            <img src="loginpage.png" alt="Movie Watchlist" className='rounded-xl h-44 object-cover w-[100%]' />
                            <p className='font-semibold'>Login Page</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://www.figma.com/design/0zf9TToldsLohxkAKqI1zr/Game?node-id=0-1&t=xKfNJaYYgW5CjYJh-1" target='_blank' className='block bg-[#E9E9E9] hover:bg-black/20 dark:bg-[#232323] dark:hover:bg-[#fff]/10 p-4 rounded-xl transition-all duration-300 cursor-pointer'>
                        <div className='flex flex-col items-start gap-5'>
                            <img src="thegamehub.png" alt="Movie Watchlist" className='rounded-xl h-44 object-cover w-[100%]' />
                            <p className='font-semibold'>Game Landing Page</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Figma
