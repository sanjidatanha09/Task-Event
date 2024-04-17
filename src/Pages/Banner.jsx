/* eslint-disable no-unused-vars */
import React from 'react';
import banner from "../../public/Image/Rectangle 8.png"

const Banner = () => {
    return (
        <div>

            <div className="carousel w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl mt-10">

                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={banner} className="w-[95%] mx-auto md:w-[100%] rounded-3xl" />
                    <div className="absolute flex items-center  h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-3xl">
                        <div className='text-white space-y-3 pl-24 w-[300px] md:w-[500px]  lg:w-[70%] my-10 '>
                            <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>CMA Fest</h1>
                            <p className='text-sm md:text-lg lg:text-xl pb-8'>Make Memories That Will Last A Lifetime.See Your Favorite Artists Live At CMA Fest!</p>

                            <div className='flex gap-4 mt-5 text-white'>
                                <button className='btn bg-[#A020F0] text-white text-xs lg:text-xl'>Get Ticket</button>
                                <button className='btn bg-ghost text-white  btn-outline text-xs  lg:text-xl'>Explore All Events</button>

                            </div>

                        </div>
                    </div>

                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                        <a href="#slide2" className=" bg-white text-white w-[10px] h-[10px] rounded-full"></a>
                        <a href="#slide2" className=" bg-white text-white w-[10px] h-[10px] rounded-full"></a>
                        <a href="#slide2" className=" bg-white text-white w-[10px] h-[10px] rounded-full"></a>
                    </div>

                </div>



                












            </div>
        </div>
    );
};

export default Banner;