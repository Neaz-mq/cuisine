import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../pages/Shared/TopBar/TopBar';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className="flex flex-col">
            {/* Top Bar */}
            <div className="">
                <TopBar />
            </div>
            
            <div className="flex flex-1">
                {/* Sidebar Navigation */}
                <div className="fixed w-20 bg-white z-40">
                    <Navbar />
                </div>

                {/* Main Content */}
                <div className="flex-1 ml-20">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Main;
