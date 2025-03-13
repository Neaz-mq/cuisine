import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../pages/Shared/Topbar/Topbar';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;