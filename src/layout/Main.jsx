import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../pages/Shared/TopBar/TopBar';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Outlet></Outlet>
            <Navbar></Navbar>
           
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;