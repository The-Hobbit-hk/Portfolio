import React from 'react'
import emailjs from 'emailjs-com';
import { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function Contact() {

    let [contact, setContact] = useState({});
    let [isSubmit, setSubmit] = useState(false);
    let [spinnerColor, setSpinnerColor] = useState();
    let [message, setMessage] = useState(false);
    let [error, setError] = useState();

    let htmlDoc = document.documentElement.classList;
    let htmlClass = Array.from(htmlDoc);
    

    let handleChange = (e) => {
        setContact((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    let handleSend = async (e) => {
        e.preventDefault();

        if(htmlClass.includes('dark')){
            setSpinnerColor('black');
        }else{
            setSpinnerColor('white');
        }

        setSubmit(true);

        emailjs.send(
            'service_portfolio_gmail',
            'template_6jonmef',
            contact,
            '9f5RYiuRfj601TjTk'
        ).then(
            (res) => {
                setSubmit(false);
                handleMessage();
            },
            (error) => {
                alert('Failed to send email: ' + error.text);
            }
        )
    }

    let handleMessage = () => {
        setMessage(true);

        emailjs.send(
            'service_portfolio_gmail',
            'template_2thx7pq',
            contact,
            '9f5RYiuRfj601TjTk'
        ).then(
            (res) => {
                setError(null);
            },
            (error) => {
                alert('Failed to send email: ' + error.text);
            }
        )

        setTimeout(() => {
            setMessage(false);
        }, 10000);
    }

  return (
        <>
            <div className='py-8 scroll-mt-20' id='contact'>
                <h2 className='text-2xl font-[600] mb-4 md:text-left text-center'>
                    Contact
                </h2>
                <div className='grid xl:grid-cols-2 justify-center'>
                    <div className='flex items-center sm:text-3xl text-[17px]'>
                        <a href="mailto:omkar.frontenddev@gmail.com" className='flex items-center group dark:hover:bg-[#232323] hover:bg-black/10 rounded-xl sm:p-10 transition-all duration-300 p-3 sm:mb-0 mb-4'>
                            <p>omkar.frontenddev@gmail.com</p>
                            <span class="material-symbols-outlined p-3 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                                arrow_outward
                            </span>
                        </a>
                    </div>
                    <div>
                        <form action='submit' onSubmit={handleSend} className='flex flex-col p-3'>
                            <div className='mb-4'>
                                <input type="text" id='contact-name' name='name' className='inp bg-transparent outline-none border-b dark:border-white border-[#b2b2b2] p-1 w-[100%]' placeholder='Enter Name Here' onChange={handleChange} />
                            </div>
                            <div className='mb-4'>
                                <input type="email" id='contact-email' name='email' className='bg-transparent outline-none border-b dark:border-white border-[#b2b2b2] p-1 w-[100%]' placeholder='Enter Email Here' onChange={handleChange} required/>
                            </div>
                            <div className='mb-4'>
                                <textarea type="text" id='contact-description' name='description' className='bg-transparent outline-none border-b dark:border-white border-[#b2b2b2] p-1 resize-none w-[100%]' placeholder='Add your message here' rows='4' onChange={handleChange}></textarea>
                            </div>
                            <div className='flex flex-col gap-5 items-start relative'>
                                <button className='border rounded-lg px-5 py-2 dark:bg-white dark:text-[#343434] bg-black text-white transition-all duration-300 dark:border-white border-[#b2b2b2] flex items-center w-32 h-11 justify-center'>
                                    {
                                        isSubmit ? 
                                        <ClipLoader
                                        color={spinnerColor}
                                        size={20}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                        />
                                        :
                                        'Submit'
                                    }
                                </button>
                                <div className='absolute top-14'>
                                    {
                                        message ?
                                        <p className='rounded-xl text-sm dark:text-white text-black'>Thank you for your message. I will get back to you soon.</p>
                                        :
                                        ''
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
