/* eslint-disable no-unused-vars */
import React from 'react';
import './Css/Events.css'
import img1 from "../../public/Image/Rectangle 16.png"
import img2 from "../../public/Image/Rectangle 16-1.png"
import img3 from "../../public/Image/Rectangle 16-2.png"
import Host from "../../public/Image/Group 29.png"

const Events = () => {
    return (
        <>

            <div className='mt-10'>
                <h1 className='font-bold  text-black text-center text-4xl'>Events</h1>
                <div className='flex justify-center gap-5 mt-5 items-start'>
                    <p className="font-medium text-base text-black hover-element">All</p>
                    <p className='font-medium text-base text-black hover-element'>For You</p>
                    <p className='font-medium text-base text-black hover-element'>This Day</p>
                    <p className='font-medium text-base text-black hover-element'>This Week</p>
                    <p className='font-medium text-base text-black hover-element'>Music</p>
                    <p className='font-medium text-base text-black hover-element'>Union</p>

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

            <div className=''> 

                <div>
                    <img src={Host} alt="" />
                </div>
                <div>
                    <h1>Host Your Event Easily & Automatedly With Us</h1>
                    <h5>We Provide The Best Event Ticketing & Management Solutions</h5>
                </div>

            </div>

        </>
    );
};

export default Events;