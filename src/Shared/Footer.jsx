/* eslint-disable no-unused-vars */
import React from 'react';
import Bkash from "../../public/Image/image 9.png"
import Nagad from "../../public/Image/Group 40.png"
import Rocket from "../../public/Image/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo_1-removebg-preview.png"

const Footer = () => {
    return (
        <div className='bg-violet-600 my-10 py-20'>
            <footer className="flex justify-between items-start gap-2 className=' w-full md:w-[95%] lg:w-[75%] md:mx-auto mx-2 '">
                <nav className='w-[46%]'>
                    <div className='w-1/2'>
                        <h6 className=" text-4xl font-medium text-white mb-2 ">EventHost</h6>
                        <p className='font-medium text-base text-white'>IDEA Project ,ICT Tower (10th Floor),Plot:E-14X,Agargaon, Dhaka - 1207 02222-222222, 01111111111</p>

                    </div>

                </nav>
                <nav className='w-[18%] '>
                    <div className='font-medium text-base text-white'>Home</div>
                    <div className='flex flex-col '>
                        <a className="font-medium text-base text-white">Events</a>
                        <a className='font-medium text-base text-white'>About Us</a>
                        <a className='font-medium text-base text-white'>Contact</a>

                    </div>

                </nav>
                <nav className='w-[18%]'>
                    <h6 className='font-medium text-base text-white'>Event Dashboard</h6>
                    <div className='flex flex-col'>
                        <a className='font-medium text-base text-white'>Terms & Condition</a>
                        <a className='font-medium text-base text-white'>Privacy & Refund Policy</a>

                    </div>


                </nav>
                <nav className='w-[18%]'>
                    <h6 className='font-medium text-base text-white mb-2'>Follow Us</h6>
                    <div className="grid grid-flow-col gap-4">

                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white "><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>

                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white "><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>

                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-white "><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>




            </footer>
            <hr className=' w-full md:w-[95%] lg:w-[75%] md:mx-auto mx-2 mt-16' />

            <footer className="footer items-center py-4 className=' w-full md:w-[95%] lg:w-[75%] md:mx-auto mx-2'">

                <div className='flex items-center'>
                    <h1 className='text-white font-medium text-lg'>Pay With</h1>
                    <img className='w-[60px]' src={Bkash} alt="" />
                    <img className='w-[30px] h-[20px]' src={Nagad} alt="" />
                    <img className='w-[50px]' src={Rocket} alt="" />

                </div>

                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">

                    <aside className="items-center grid-flow-col">
                        <p className='text-white'>© 2023 TickHost &
                            <a className='underline px-2' href=""> UVTR</a>
                            .All right reserved</p>
                    </aside>

                </nav>

            </footer>
        </div>
    );
};

export default Footer;