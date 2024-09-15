import React from 'react'

function Contact() {
  return (
        <>
            <div className='py-8 scroll-mt-20' id='contact'>
                <h2 className='text-2xl font-[600] mb-4 md:text-left text-center'>
                    Contact
                </h2>
                <div className='grid xl:grid-cols-2 justify-center'>
                    <div className='flex items-center sm:text-3xl text-xl'>
                        <a href="" className='flex items-center group dark:hover:bg-[#232323] hover:bg-black/10 rounded-xl sm:p-10 transition-all duration-300 p-3 sm:mb-0 mb-4'>
                            <p>omkarbokil22@gmail.com</p>
                            <span class="material-symbols-outlined p-3 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                                arrow_outward
                            </span>
                        </a>
                    </div>
                    <div>
                        <form className='flex flex-col p-3'>
                            <div className='mb-4'>
                                <input type="text" id='contact-name' className='bg-transparent outline-none border-b dark:border-white border-[#b2b2b2] p-1 w-[100%]' placeholder='Enter Name Here'/>
                            </div>
                            <div className='mb-4'>
                                <input type="email" id='contact-email' className='bg-transparent outline-none border-b dark:border-white border-[#b2b2b2] p-1 w-[100%]' placeholder='Enter Email Here' />
                            </div>
                            <div className='mb-4'>
                                <textarea type="text" id='contact-description' className='bg-transparent outline-none border-b dark:border-white border-[#b2b2b2] p-1 resize-none w-[100%]' placeholder='Add your description here' rows='4'></textarea>
                            </div>
                            <div className='text-right'>
                                <button className='border rounded-xl px-5 py-2 dark:hover:bg-white dark:hover:text-[#343434] hover:bg-black hover:text-white hover:border-black transition-all duration-300 dark:border-white border-[#b2b2b2]'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
