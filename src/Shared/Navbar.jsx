/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/events">Events</NavLink></li>
        <li><NavLink to="/about">About us</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div className=''>
            <div className="navbar ">
                <div className="navbar-start bg-violet-500 lg:w-[18%] lg:rounded-lg">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='bg-violet-500 lg:rounded-md text-white w-[100%] mx-auto text-center font-bold h-[50px] '>
                        <h1 className="w-full lg:rounded-md  pt-2 px-2 text-xl ">EventHost</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex  lg:w-[67%] lg:justify-center lg:items-center bg-violet-500 lg:rounded-lg h-[50px]">
                    <ul className=" flex justify-between items-center text-white md:gap-4 lg:gap-5 px-1 ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex items-center justify-end h-[50px] lg:rounded-md gap-2 lg:w-[15%] bg-violet-500 pr-4">
                    <div className="dropdown dropdown-end pt-1">
                        <div tabIndex={0} role="button" className=" avatar border rounded-full">
                            <div className="w-8 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/R9s24M5/download.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <img src="https://i.ibb.co/BfBtcXD/Group-7.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;