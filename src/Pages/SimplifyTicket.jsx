/* eslint-disable no-unused-vars */
import React from 'react';
import Bkash from "../../public/Image/image 9.png"
import Nagad from "../../public/Image/Group 40.png"
import Rocket from "../../public/Image/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo_1-removebg-preview.png"

const SimplifyTicket = () => {
    return (
        <div className='mt-16 mb-16'>
            <div>
                <h1 className='text-center font-bold text-2xl lg:text-4xl'>Automated QR Scanner</h1>
                <p className='text-center font-medium text-xl mt-2 w-[70%] mx-auto text-violet-400'>Scan & Verify The Attendees Directly By Out QR Scanning  Solution</p>

                <button className='px-8 pt-2 text-white font-bold flex items-center justify-center pb-24 md:pb-3 bg-violet-500 rounded-lg text-lg  mx-auto mt-3'>
                    <img src="https://i.ibb.co/4TbJQ7V/pngtree-checkmark-right-icon-tick-circle-png-image-4647427.png" alt="" className='rounded-full w-[20px]' />
                    <p className=' pl-2'>Secure Payment With</p>
                </button>
            </div>

            <div className='xl:relative w-[70%] mx-auto lg:ml-64 hidden xl:block'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='h-[427px] pt-32'>
                        <div className='bg-[#A020F0] mt-8 rounded-t-2xl  text-center w-[300px] h-[300px] relative border-white border-r-8'>
                            <div className='absolute top-3 text-center left-28 w-[66px] h-[12px] bg-white rounded-md '>

                            </div>
                            <img src={Rocket} className='absolute top-32 right-9  text-center w-[150px]' alt="" />
                        </div>

                    </div>

                    <div className='h-[427px] pt-32'>
                        <div className='bg-[#A020F0] mt-8 rounded-t-2xl  text-center w-[200px] h-[300px]'>

                        </div>

                    </div>

                    <div className='h-[427px] pt-32'>
                        <div className='bg-[#af5810c9] mt-8 rounded-t-2xl  text-center w-[300px] h-[300px] relative '>
                            <div className='absolute top-3 text-center left-28 w-[66px] h-[12px] bg-white rounded-md '>

                            </div>
                            <img src={Nagad} className='absolute top-24 left-20  text-center w-[80px]' alt="" />
                        </div>

                    </div>

                </div>
                <div className='lg:absolute top-1 left-64'>
                    <div className='bg-[#e6329e] mt-8 rounded-t-2xl  text-center w-[300px] h-[427px] relative border-white border-x-4 shadow-2xl'>
                        <div className='absolute top-3 text-center left-28 w-[66px] h-[12px] bg-white rounded-md '>

                        </div>
                        <img src={Bkash} className='absolute top-48 left-20  text-center w-[150px]' alt="" />
                    </div>

                </div>

              

            </div>
           
            

          
            
        </div>
    );
};

export default SimplifyTicket;