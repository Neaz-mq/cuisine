import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../pages/Shared/TopBar/TopBar';
import Navbar from '../pages/Shared/Navbar/Navbar';
// import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Top Bar */}
            <TopBar />

            {/* Main Content with Navbar */}
            <div className="flex flex-1">
                {/* Sidebar Navigation */}
                <div className="sticky top-44  h-fit w-20 z-40">
                    <Navbar />
                </div>

                {/* Page Content */}
                <div className="flex-1 ml-20">
                    <Outlet />
                </div>
            </div>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default Main;
