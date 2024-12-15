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
                    <a href="https://www.figma.com/proto/Nb02tD9rGb12XiNIi1xKAC/kforkraft?node-id=1-3&t=sA8CRp56xQeCsq7L-1" target='_blank' className='block bg-[#E9E9E9] hover:bg-black/20 dark:bg-[#232323] dark:hover:bg-[#fff]/10 p-4 rounded-xl transition-all duration-300 cursor-pointer'>
                        <div className='flex flex-col items-start gap-5'>
                            <img src="kforkraft.png" alt="Movie Watchlist" className='rounded-xl h-44 object-cover w-[100%]' />
                            <p className='font-semibold'>Kraft Website</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://www.figma.com/proto/3h0bDb7aBd4vnkXFBOiQuZ/Aurora-Silver?node-id=1-20&t=s7rb3ppt0G9TuioC-1" target='_blank' className='block bg-[#E9E9E9] hover:bg-black/20 dark:bg-[#232323] dark:hover:bg-[#fff]/10 p-4 rounded-xl transition-all duration-300 cursor-pointer'>
                        <div className='flex flex-col items-start gap-5'>
                            <img src="aurora-silver.png" alt="Movie Watchlist" className='rounded-xl h-44 object-cover w-[100%]' />
                            <p className='font-semibold'>Aurora Silver</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://www.figma.com/proto/0zf9TToldsLohxkAKqI1zr/Game?node-id=1-2&t=mYaF5jFqLo71jQ1s-1" target='_blank' className='block bg-[#E9E9E9] hover:bg-black/20 dark:bg-[#232323] dark:hover:bg-[#fff]/10 p-4 rounded-xl transition-all duration-300 cursor-pointer'>
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
