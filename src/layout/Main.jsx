import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../pages/Shared/Topbar/Topbar';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;