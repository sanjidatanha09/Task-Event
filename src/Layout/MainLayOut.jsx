/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const MainLayOut = () => {
    return (
        <div >
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;