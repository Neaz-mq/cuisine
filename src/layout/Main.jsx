import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import TopBar from '../pages/Shared/Topbar/Topbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen" >

            {/* Top Bar */}
            <TopBar />

            {/* Main Content with Navbar */}
            <div className="flex flex-1">
                <div className="sticky top-44 h-fit w-20 z-40">
                    <Navbar />
                </div>

                <div className="flex-1 ml-20">
                    <Outlet />
                </div>
            </div>

            {/* Footer */}
            <Footer />

            {/* ✅ ToastContainer should be here so it's active everywhere */}
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
        </div>
    );
};

export default Main;
