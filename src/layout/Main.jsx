import { Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy load heavy components
const Navbar = lazy(() => import('../pages/Shared/Navbar/Navbar'));
const Footer = lazy(() => import('../pages/Shared/Footer/Footer'));
const TopBar = lazy(() => import('../pages/Shared/Topbar/Topbar'));

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <Suspense fallback={<div className="h-12" />} >
        <TopBar />
      </Suspense>

      {/* Main Content with Navbar */}
      <div className="flex flex-1">
        <div className="sticky top-44 h-fit w-20 z-40">
          <Suspense fallback={<div className="h-full w-20 bg-gray-100 animate-pulse" />} >
            <Navbar />
          </Suspense>
        </div>

        <div className="flex-1 ml-20">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Suspense fallback={<div className="h-20" />} >
        <Footer />
      </Suspense>

      {/* ToastContainer */}
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
    </div>
  );
};

export default Main;
