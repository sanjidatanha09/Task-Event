/* eslint-disable no-unused-vars */
import React from 'react';
import click from "../../public/Icon/click (1) 1.png"
import Time from "../../public/Icon/click.png"
import Access from "../../public/Icon/check 1.png"
import Mail from "../../public/Icon/Vector-1.png"


const QRScanner = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-center font-bold text-2xl lg:text-4xl'>Automated QR Scanner</h1>
            <p className='text-center font-medium text-xl mt-2 w-[70%] mx-auto text-violet-400'>Scan & Verify The Attendees Directly By Out QR Scanning  Solution</p>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mx-auto  w-[70vw] mt-10'>

                <div className='border shadow-xl border-violet-300 bg-[#d3dfe9] w-[270px] rounded-lg p-3 mx-auto'>
                    <img src={click} className='w-[50px] bg-white p-2 rounded-full' alt="" />
                    <h1 className='text-2xl font-bold'>One Click</h1>
                    <p className='font-medium text-gray-500 pt-2'> QR Verification System</p>

                </div>

                <div className='border shadow-xl border-violet-300 bg-[#d3dfe9] w-[270px] rounded-lg p-3  mx-auto'>
                    <img src={Time} className='w-[50px] bg-white p-2 rounded-full' alt="" />
                    <h1 className='text-2xl font-bold'>One Time</h1>
                    <p className='font-medium text-gray-500 pt-2'> QR Code</p>

                </div>

                <div className='border shadow-xl border-violet-300 bg-[#d3dfe9] w-[270px] rounded-lg p-3  mx-auto'>
                    <img src={click} className='w-[50px] bg-white p-2 rounded-full' alt="" />
                    <h1 className='text-2xl font-bold'>Easy Access</h1>
                    <p className='font-medium text-gray-500 pt-2'> Lorem Ipsum Access</p>

                </div>
                <div className='border shadow-xl border-violet-300 bg-[#d3dfe9] w-[270px] rounded-lg p-3  mx-auto'>
                    <img src={click} className='w-[50px] bg-white p-2 rounded-full' alt="" />
                    <h1 className='text-2xl font-bold'>Mail</h1>
                    <p className='font-medium text-gray-500 pt-2'> Send Bulk Personalized Mail With Attachments</p>

                </div>

            </div>


        </div>
    );
};

export default QRScanner;