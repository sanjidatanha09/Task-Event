/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './Navbar';
import Banner from '../Pages/Banner';
import Events from '../Pages/Events';
import QRScanner from '../Pages/QRScanner';
import SimplifyTicket from '../Pages/SimplifyTicket';

const Home = () => {
    return (
        <div className=' w-full md:w-[95%] lg:w-[70%] md:mx-auto mx-2'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Events></Events>
            <QRScanner></QRScanner>
            <SimplifyTicket></SimplifyTicket>
            
        </div>
    );
};

export default Home;