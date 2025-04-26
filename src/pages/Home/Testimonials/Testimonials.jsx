import React from "react";

const Testimonials = () => {
  return (
    <div className="relative bg-white py-16 px-8 md:px-16 lg:px-32">
      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left content */}
        <div>
          <h2 className="text-4xl font-bold text-green-900 leading-tight">
            Customer Testimonial <br />
            <span className="text-orange-500">Examples</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-md">
            When I research companies online, I don't just want to hear the
            company's pitch; I want to hear from its customers. That's where
            customer testimonials come into play. But what makes some
            testimonials so much better than others?
          </p>
        </div>

        {/* Right image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
            alt="People eating"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          {/* Carousel dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* Card 1 */}
        <div className="bg-green-900 text-white p-8 rounded-md shadow-md">
          <h4 className="text-lg font-semibold mb-4">— Emily R.</h4>
          <p className="text-sm">
            "The food was absolutely delicious, and the service was top-notch!
            The ambiance made our dinner even more special. Highly recommend!"
          </p>
          {/* Icons or badges */}
          <div className="flex space-x-2 mt-4">
            <span className="w-6 h-6 bg-white rounded-full"></span>
            <span className="w-6 h-6 bg-white rounded-full"></span>
            <span className="w-6 h-6 bg-white rounded-full"></span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-orange-200 p-8 rounded-md shadow-md">
          <h4 className="text-lg font-semibold text-green-900 mb-4">— James T.</h4>
          <p className="text-sm text-gray-700">
            "I've been coming here for years, and the quality has never changed.
            Fresh ingredients, amazing flavors, and a welcoming staff. A must-visit!"
          </p>
          {/* Icons */}
          <div className="flex space-x-2 mt-4">
            <span className="w-6 h-6 bg-green-500 rounded-full"></span>
            <span className="w-6 h-6 bg-orange-400 rounded-full"></span>
            <span className="w-6 h-6 bg-white border rounded-full"></span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border border-orange-200 p-8 rounded-md shadow-md">
          <h4 className="text-lg font-semibold text-green-900 mb-4">— Sophia M.</h4>
          <p className="text-sm text-gray-700">
            "From the moment we walked in, we were treated like family. The dishes
            were flavorful and beautifully presented. 10/10!"
          </p>
          {/* Icons */}
          <div className="flex space-x-2 mt-4">
            <span className="w-6 h-6 bg-orange-500 rounded-full"></span>
            <span className="w-6 h-6 bg-green-500 rounded-full"></span>
            <span className="w-6 h-6 bg-white border rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
