const Buffet = () => {
    return (

       <div className='container mx-auto'>
         <div className="mb-36 z-50 3xl:mt-28 2xl:mt-20 xl:mt-16 lg:mt-14"> {/* Adjust padding as needed */}
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div
                    className="text-center mb-10 relative bg-[url('https://res.cloudinary.com/dxohwanal/image/upload/v1747026768/Buffet_lhk7ax.png')] bg-no-repeat bg-contain bg-center w-full h-[20rem] -mt-52"
                >
                     </div>
                  <div>
                      <span className="bg-[#FF4C15] text-white py-1 px-4 rounded-full flex items-center justify-center transform -rotate-[5deg] w-fit mx-auto relative -mt-[15rem]">
                        <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-2">
                            <img src="/svg.png" className="w-3 h-3" alt="Services Icon" />
                        </div>
                        <div className="text-center">
                            <span className="text-xs">
                                Delicious <span className="font-thin">(Food)</span>
                            </span>
                        </div>
                    </span>
                    <h2 className="3xl:text-5xl 2xl:text-4xl xl:text-3xl lg:text-2xl font-semibold text-[#2C6252] relative mt-8 text-center">
                        Buffet for signature food
                    </h2>
                  </div>
               


                {/* Food Cards Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-4 3xl:gap-12 2xl:gap-20 xl:gap-14 lg:gap-10 mb-12 3xl:mt-20 2xl:mt-16 xl:mt-14 lg:mt-12 3xl:px-32 2xl:px-52 xl:px-36 lg:px-20">
                    {/* Food Card 1 */}
                    <div className="bg-[#FFFAF8] overflow-hidden relative"> {/* Added relative for absolute positioning */}
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1747027495/Mask_Group_7_ezrscz.png" // Placeholder image
                            alt="Grilled Lamb Chops"
                            className="w-full h-52 object-cover mb-3"
                        />
                        <span className="absolute top-2 right-2 bg-[#FFCA46] text-xs px-2 py-1 text-[#F6F6F6] font-medium flex items-center">
                            <div className=" rounded-full w-4 h-4 flex items-center justify-center mr-1">
                                <img src="/svg.svg" className="w-3 h-3" alt="Food Icon" /> {/* Replace with your food icon path */}
                            </div>
                            Food Available
                        </span>
                        <div className="p-4">
                            <div className="flex items-center mb-3">
                                {/* Star Rating */}
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <defs>
                                        <clipPath id="half-star">
                                            <rect x="0" y="0" width="10" height="20" />
                                        </clipPath>
                                    </defs>
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" clipPath="url(#half-star)" />

                                </svg>
                                <span className="text-[#CCCCCC] 3xl:text-base 2xl:text-base xl:text-base lg:text-[10px] font-semibold">(4.5 Rating)</span>
                            </div>
                            <h3 className="text-lg font-semibold text-[#2C6252] mb-4">
                                Grilled Lamb Chops -
                            </h3>
                            <p className="text-[#AAAAAA] 3xl:text-sm 2xl:text-sm xl:text-[12px] lg:text-[11px] mb-4">
                                Succulent, spice-rubbed lamb chops grilled to perfection with fresh greens.
                            </p>
                            <button className="bg-[#FF4C15] text-white py-2 px-4  text-sm font-semibold hover:bg-[#E64310] mb-4">
                                Learn more
                            </button>
                        </div>
                    </div>
                    {/* Food Card 2 */}
                    <div className="bg-[#FFFAF8] overflow-hidden relative"> {/* Added relative */}
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1747027615/Mask_Group_8_o6fhcq.png" // Placeholder image
                            alt="Grilled Steak"
                            className="w-full h-52  object-cover mb-3"
                        />
                        <span className="absolute top-2 right-2 bg-[#FFCA46] text-xs px-2 py-1 text-[#F6F6F6] font-medium flex items-center">
                            <div className=" rounded-full w-4 h-4 flex items-center justify-center mr-1">
                                <img src="/svg.svg" className="w-3 h-3" alt="Food Icon" /> {/* Replace with your food icon path */}
                            </div>
                            Food Available
                        </span>
                        <div className="p-4">
                            <div className="flex items-center mb-3">
                                {/* Star Rating */}
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <span className="text-[#CCCCCC] 3xl:text-base 2xl:text-base xl:text-base lg:text-[10px]  font-semibold">(5.0 Rating)</span>
                            </div>
                            <h3 className="text-lg font-semibold text-[#2C6252] mb-4">
                                Grilled Super Steak -
                            </h3>
                            <p className="text-[#AAAAAA] 3xl:text-sm 2xl:text-sm xl:text-[12px] lg:text-[11px] mb-3">
                                Tender and juicy steak grilled to your liking, served with your choice of sides.
                            </p>
                            <button className="bg-[#FF4C15] text-white py-2 px-4  text-sm font-semibold hover:bg-[#E64310] mb-4">
                                Learn more
                            </button>
                        </div>
                    </div>
                    {/* Food Card 3 */}
                    <div className="bg-[#FFFAF8]   overflow-hidden relative"> {/* Added relative */}
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1747027686/Mask_Group_9_b1ncuh.png" // Placeholder image
                            alt="Pan-Seared Salmon Fillet"
                            className="w-full h-52 object-cover mb-3"
                        />
                        <span className="absolute top-2 right-2 bg-[#FFCA46] text-xs px-2 py-1 text-[#F6F6F6] font-medium flex items-center">
                            <div className=" rounded-full w-4 h-4 flex items-center justify-center mr-1">
                                <img src="/svg.svg" className="w-3 h-3" alt="Food Icon" /> {/* Replace with your food icon path */}
                            </div>
                            Food Available
                        </span>
                        <div className="p-4">
                            <div className="flex items-center mb-3">
                                {/* Star Rating */}
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-gray-300 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9.586l-1.707 1.707-1.414-1.414L7.586 8.5 5.879 6.793l1.414-1.414L8.5 7.586 10 5.879l1.414 1.414L11.414 8.5l1.707-1.707 1.414 1.414L12.414 9.586l1.707 1.707-1.414 1.414L11.414 10.414l-1.707 1.707-1.414-1.414L8.5 11.414 6.793 13.121l1.414 1.414L9.586 12.414 10 14.121l.414-1.707 1.414-1.414L11.414 11.414l1.707-1.707 1.414 1.414L12.414 13.121l-1.707-1.707-1.414 1.414L10.414 11.414l-1.707-1.707 1.414-1.414L9.586 8.5z"
                                    clipRule="evenodd" /></svg>


                                <span className="text-[#CCCCCC] 3xl:text-base 2xl:text-base xl:text-base lg:text-[10px]  font-semibold">(4.0 Rating)</span>
                            </div>
                            <h3 className="text-lg font-semibold text-[#2C6252] mb-3">
                                Pan-Seared Steak -
                            </h3>
                            <p className="text-[#AAAAAA] 3xl:text-sm 2xl:text-sm xl:text-[12px] lg:text-[11px] mb-4">
                                Flaky salmon fillet pan-seared to perfection, served with lemon sauce.
                            </p>
                            <button className="bg-[#FF4C15] text-white py-2 px-4  text-sm font-semibold hover:bg-[#E64310] mb-4">
                                Learn more
                            </button>
                        </div>
                    </div>
                    {/* Food Card 4 */}
                    <div className="bg-[#FFFAF8] overflow-hidden relative"> {/* Added relative */}
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1747027737/Mask_Group_10_mzcepf.png" // Placeholder image
                            alt="Vegetarian Pasta"
                            className="w-full h-52 object-cover mb-3"
                        />
                        <span className="absolute top-2 right-2 bg-[#FFCA46] text-xs px-2 py-1 text-[#F6F6F6] font-medium flex items-center">
                            <div className=" rounded-full w-4 h-4 flex items-center justify-center mr-1">
                                <img src="/svg.svg" className="w-3 h-3" alt="Food Icon" /> {/* Replace with your food icon path */}
                            </div>
                            Food Available
                        </span>
                        <div className="p-4">
                            <div className="flex items-center mb-3">
                                {/* Star Rating */}
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                                <span className="text-[#CCCCCC] 3xl:text-base 2xl:text-base xl:text-base lg:text-[10px] font-semibold">(5.0 Rating)</span>
                            </div>
                            <h3 className="text-lg font-semibold text-[#2C6252] mb-3">
                                Special Sandwitch -
                            </h3>
                            <p className="text-[#AAAAAA] 3xl:text-sm 2xl:text-sm xl:text-[12px] lg:text-[11px] mb-3">
                                Delicious vegetarian pasta with fresh vegetables and a flavorful sauce.
                            </p>
                            <button className="bg-[#FF4C15] text-white py-2 px-4  text-sm font-semibold hover:bg-[#E64310] mb-4">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Image Section */}
                <div className="flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden 3xl:px-32 2xl:px-7 xl:px-1 lg:px-2 ">
                    {/* Left Text */}
                    <div className="flex flex-col justify-center bg-white px-6 py-10 w-full md:w-1/3 z-50">
                        <h2 className="text-[#2C6252] 2xl:text-3xl 3xl:text-4xl xl:text-2xl lg:text-xl  3xl:-ml-4 2xl:ml-40 xl:ml-[7.6rem] lg:ml-12  ">
                            Deep <br /> Blue <br />
                            Delights
                        </h2>
                    </div>

                    {/* Right Image with overlay text */}
                    <div className="relative 3xl:w-full 2xl:w-[80rem] xl:w-[65rem] lg:w-[65rem]  h-72 ">
                        {/* Background Image */}
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1747031825/Mask_Group_57_qgijfs.png"
                            alt="Deep Blue Delights Buffet"
                            className="3xl:w-full 2xl:w-[49.7rem] xl:w-[45.4rem] lg:w-[40rem] h-full object-cover"
                        />

                        <div className="flex justify-between items-end h-full">
                            {/* Overlay Description (Left Side) */}
                            <div className="absolute bottom-24 left-4 text-white p-4 text-sm max-w-[300px] rounded-md z-20">
                                Succulent, spice-rubbed lamb chops grilled to perfection and served with fresh greens.
                            </div>


                            <img className="absolute -bottom-16 left-96 w-full h-[32rem] z-20" src="https://res.cloudinary.com/dxohwanal/image/upload/v1747034204/Buffet_qtw3le.png" alt="" />
                        </div>


                    </div>

                </div>

            </div>
        </div>
       </div>

    );
};

export default Buffet;
