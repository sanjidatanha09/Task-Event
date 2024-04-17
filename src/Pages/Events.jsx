/* eslint-disable no-unused-vars */
import React from 'react';
import './Css/Events.css'
import img1 from "../../public/Image/Rectangle 16.png"
import img2 from "../../public/Image/Rectangle 16-1.png"
import img3 from "../../public/Image/Rectangle 16-2.png"
import Host from "../../public/Image/Group 29.png"
import Watch from "../../public/Image/Group.png"

const Events = () => {
    return (
        <div className='w-[95%] md:w-[100%] mx-auto'>

            <div className='mt-10'>
                <h1 className='font-bold  text-black text-center text-4xl'>Events</h1>
                <div className='grid grid-cols-3 md:flex justify-center gap-1 md:gap-5 mt-5 md:items-start  items-center w-[90%] mx-auto md:w-full'>
                    <p className="font-medium text-base text-black hover-element text-center">All</p>
                    <p className='font-medium text-base text-black hover-element'>For You</p>
                    <p className='font-medium text-base text-black hover-element'>This Day</p>
                    <p className='font-medium text-base text-black hover-element'>This Week</p>
                    <p className='font-medium text-base text-black hover-element'>Music</p>
                    <p className='font-medium text-base text-black hover-element text-center'>Union</p>

                </div>
                <div className='mt-5 flex flex-col lg:flex-row items-center justify-between gap-4'>

                    <div className="card md:w-[100%] lg:w-[30%] bg-base-100 shadow-xl gap-2">
                        <div className='relative'>
                            <img src={img2} alt="Shoes" className='p-3 w-full  border-b border-dashed h-[270px]' />
                            <p className='bg-violet-600 absolute top-5 left-5 bottom-6 w-[60px] h-[35px] text-center pt-1 text-white font-medium rounded-lg '>Online</p>
                            <p className='bg-violet-600 absolute top-5 right-5 bottom-6 w-[70px] h-[35px] text-center pt-1 text-white font-medium rounded-lg '>Favorite</p>
                        </div>
                        <div className="mt-3 pl-3">
                            <div className='flex justify-between pr-4'>

                                <div>
                                    <div className='flex justify-between items-start'>

                                        <p className='bg-violet-600 w-[55px] h-[30px] text-center pt-1 text-white font-medium rounded-lg text-sm mb-2 '>Music</p>
                                    </div>
                                    <div className='mb-2'>
                                        <h1 className='text-sm font-medium'>Celebrity Convention Hall</h1>
                                    </div>
                                    <h1 className='text-lg font-bold mb-2'>Roufian HSC-24 Rag Day</h1>
                                </div>
                                <div className='bg-white shadow-xl p-2 rounded-lg flex flex-col w-[78px] h-[80px]'>
                                    <p className='text-center text-xs'>Apr</p>
                                    <p className=' text-center text-violet-600 font-bold text-base'>20</p>
                                    <p className='text-xs font-medium'>10.00 PM</p>
                                </div>
                            </div>
                            <div className="pb-4 flex justify-between">
                                <button className='bg-violet-600 w-[80px] h-[30px] text-center py-1 text-white font-medium rounded-lg text-xs '>See Ticket</button>
                                <div className='flex  bg-white shadow-lg mx-auto w-[80px]'>
                                    <p className=' text-violet-600 font-bold pl-5 text-lg'>20</p>
                                    <p className='font-medium text-[8px]'>Seat  <br />left</p>

                                </div>
                                <button className='text-violet-600 w-[120px] h-[30px] text-center py-1  font-medium rounded-lg md:text-base lg:text-base xl:text-lg '>See Ticket</button>


                            </div>
                        </div>
                    </div>
                    <div className="card md:w-[100%] lg:w-[30%] bg-base-100 shadow-xl gap-2">
                        <div className='relative'>
                            <img src={img1} alt="Shoes" className='p-3 w-full  border-b border-dashed h-[270px]' />
                            <p className='bg-violet-600 absolute top-5 left-5 bottom-6 w-[60px] h-[35px] text-center pt-1 text-white font-medium rounded-lg '>Online</p>
                            <p className='bg-violet-600 absolute top-5 right-5 bottom-6 w-[70px] h-[35px] text-center pt-1 text-white font-medium rounded-lg '>Favorite</p>
                        </div>
                        <div className="mt-3 pl-3">
                            <div className='flex justify-between pr-4'>

                                <div>
                                    <div className='flex justify-between items-start'>

                                        <p className='bg-violet-600 w-[55px] h-[30px] text-center pt-1 text-white font-medium rounded-lg text-sm mb-2 '>Music</p>
                                    </div>
                                    <div className='mb-2'>
                                        <h1 className='text-sm font-medium'>Celebrity Convention Hall</h1>
                                    </div>
                                    <h1 className='text-lg font-bold mb-2'>Roufian HSC-24 Rag Day</h1>
                                </div>
                                <div className='bg-white shadow-xl p-2 rounded-lg flex flex-col w-[78px] h-[80px]'>
                                    <p className='text-center text-xs'>Apr</p>
                                    <p className=' text-center text-violet-600 font-bold text-base'>20</p>
                                    <p className='text-xs font-medium'>10.00 PM</p>
                                </div>
                            </div>
                            <div className="pb-4 flex justify-between">
                                <button className='bg-violet-600 w-[80px] h-[30px] text-center py-1 text-white font-medium rounded-lg text-xs '>See Ticket</button>
                                <div className='flex  bg-white shadow-lg mx-auto w-[80px]'>
                                    <p className=' text-violet-600 font-bold pl-5 text-lg'>20</p>
                                    <p className='font-medium text-[8px]'>Seat  <br />left</p>

                                </div>
                                <button className='text-violet-600 w-[120px] h-[30px] text-center py-1  font-medium rounded-lg md:text-base lg:text-base xl:text-lg '>See Ticket</button>


                            </div>
                        </div>
                    </div>
                    <div className="card md:w-[100%] lg:w-[30%] bg-base-100 shadow-xl gap-2">
                        <div className='relative'>
                            <img src={img3} alt="Shoes" className='p-3 w-full  border-b border-dashed h-[270px]' />
                            <p className='bg-violet-600 absolute top-5 left-5 bottom-6 w-[60px] h-[35px] text-center pt-1 text-white font-medium rounded-lg '>Online</p>
                            <p className='bg-violet-600 absolute top-5 right-5 bottom-6 w-[70px] h-[35px] text-center pt-1 text-white font-medium rounded-lg '>Favorite</p>
                        </div>
                        <div className="mt-3 pl-3">
                            <div className='flex justify-between pr-4'>

                                <div>
                                    <div className='flex justify-between items-start'>

                                        <p className='bg-violet-600 w-[55px] h-[30px] text-center pt-1 text-white font-medium rounded-lg text-sm mb-2 '>Music</p>
                                    </div>
                                    <div className='mb-2'>
                                        <h1 className='text-sm font-medium'>Celebrity Convention Hall</h1>
                                    </div>
                                    <h1 className='text-lg font-bold mb-2'>Roufian HSC-24 Rag Day</h1>
                                </div>
                                <div className='bg-white shadow-xl p-2 rounded-lg flex flex-col w-[78px] h-[80px]'>
                                    <p className='text-center text-xs'>Apr</p>
                                    <p className=' text-center text-violet-600 font-bold text-base'>20</p>
                                    <p className='text-xs font-medium'>10.00 PM</p>
                                </div>
                            </div>
                            <div className="pb-4 flex justify-between">
                                <button className='bg-violet-600 w-[80px] h-[30px] text-center py-1 text-white font-medium rounded-lg text-xs '>See Ticket</button>
                                <div className='flex  bg-white shadow-lg mx-auto w-[80px]'>
                                    <p className=' text-violet-600 font-bold pl-5 text-lg'>20</p>
                                    <p className='font-medium text-[8px]'>Seat  <br />left</p>

                                </div>
                                <button className='text-violet-600 w-[120px] h-[30px] text-center py-1  font-medium rounded-lg md:text-base lg:text-base xl:text-lg '>See Ticket</button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bg-gradient-to-r from-cyan-500 to-blue-500 */}

            {/* 2nd part */}

            <div className='flex flex-col lg:flex-row mt-10 gap-2 bg-violet-600 rounded-3xl justify-between items-start'> 

                <div className='w-[100%] lg:w-[50%]'>
                    <img className='lg:p-10 lg:w-[90%] mx-auto h-[400px]' src={Host} alt="" />
                </div>
                <div className=' text-white w-[100%] lg:w-[50%] mx-auto relative'>
                    <h1 className='px-5 md:px-10 pt-10 font-bold text-xl pb-4 w-full mx-auto'>Host Your Event Easily & Automatedly With Us</h1>
                    <h5 className='px-10 text-base font-bold pb-4'>We Provide The Best Event Ticketing & Management Solutions</h5>

                    <div className='px-10 flex items-start pb-2'>
                        <img src="https://i.ibb.co/4TbJQ7V/pngtree-checkmark-right-icon-tick-circle-png-image-4647427.png" alt="" className='rounded-full w-[20px]' />
                        <p className='text-sm pl-2'>Host your Event With Easy Steps!</p>

                    </div>
                    <div className='px-10 flex  items-start pb-2'>
                        <img src="https://i.ibb.co/4TbJQ7V/pngtree-checkmark-right-icon-tick-circle-png-image-4647427.png" alt="" className='rounded-full w-[20px]' />
                        <p className='text-sm pl-2'>Automated Payment System & Ticket Will Be Sent To Mall!</p>

                    </div>
                    <div className='px-10 flex items-start pb-2'>
                        <img src="https://i.ibb.co/4TbJQ7V/pngtree-checkmark-right-icon-tick-circle-png-image-4647427.png" alt="" className='rounded-full w-[20px]' />
                        <p className='text-sm pl-2'>Access To Registration And Transaction Reports</p>

                    </div>

                    <div className='px-10 flex items-start pb-24 md:pb-3'>
                        <img src="https://i.ibb.co/4TbJQ7V/pngtree-checkmark-right-icon-tick-circle-png-image-4647427.png" alt="" className='rounded-full w-[20px]' />
                        <p className='text-sm pl-2'>Send Bulk Personalized Mail With Attachments.</p>

                    </div>
                    <div className='w-[140px] md:w-[200px] lg:w-[300px] absolute top-50 bottom-0 md:top-12 lg:top-28 right-0 p-0 '>

                        <img className='w-[100%]  text-end ' src={Watch} alt="" />

                    </div>
                    
                </div>
              

            </div>

        </div>
    );
};

export default Events;