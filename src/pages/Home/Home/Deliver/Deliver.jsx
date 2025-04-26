import React from "react";

const Deliver = () => {
  return (
    <div className="relative bg-white py-16 px-8 md:px-16 lg:px-32">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight">
            We Deliver <br /> Food Within <br />
            <span className="text-orange-500">30 Min ⏰</span>
          </h2>

          <p className="text-gray-400 max-w-md text-sm">
            When I research companies online, I don't just want to hear the company's pitch; 
            I want to hear from its customers. That's where customer testimonials come into play. 
            But what makes some testimonials so much better than others?
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold shadow">
              Order Now
            </button>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-md font-semibold shadow">
              Download Apps
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center relative">
          <img
            src="https://images.unsplash.com/photo-1606813904784-1c8c587f8bc1"
            alt="Delivery Guy"
            className="object-contain h-auto w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Deliver;
