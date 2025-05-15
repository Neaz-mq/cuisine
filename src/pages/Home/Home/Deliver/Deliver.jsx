import React from "react";

const Deliver = () => {
  return (
    <div className="relative bg-white  px-8 md:px-16 lg:px-32 -mt-12 mb-24">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Text Content */}
        <div className="space-y-6 ml-8">
          <h2 className="text-4xl md:text-5xl  text-[#33856D] space-y-4 flex flex-col">
            <span>We Deliver</span>
            <span>Food Within</span>
            <span className="text-[#FF4C15]">30 Min ⏰</span>
          </h2>

          <p className="text-[#CCCCCC] max-w-md text-sm">
            When I research companies online, I don’t just want to hear the company’s pitch; I want to hear from its customers. That’s where customer testimonials come into play. But what makes some testimonials so much better than others?
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-[#FF4C15] text-white px-6 py-3 flex items-center">
              <img src="/order.svg" alt="" className="w-4 h-4 mr-2" />
              Order Now
            </button>
            <button className="border border-[#707070] text-[#FF4C15] hover:bg-orange-50 px-6 py-3 flex items-center ">
               <img src="/download.svg" alt="" className="w-4 h-4 mr-2" />
              Download Apps
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center relative">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1747282614/young-smiling-courier-guy-red-uniform-sitting-scooter-holding-paper-bag-saying-hello-white-wall_haw6vn.png"
            alt="Delivery Guy"
            className="object-contain h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Deliver;




