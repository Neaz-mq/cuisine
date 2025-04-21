import React from 'react';

const Awards = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-[1600px] 3xl:min-h-[1800px]">
      {/* Background Image (ultra large green semi-circle) */}
      <div className="flex items-center justify-center absolute left-1/2 bottom-0  z-0 w-[720%] translate-x-[-50%] h-[1330px]">
        <img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1744793095/Ellipse_2_m5jepq.png"
          alt="Background"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Foreground Image (Chef) */}
      <div className="flex items-center justify-center absolute left-1/2 top-[50%] z-10 translate-x-[-50%] translate-y-[-104%]">
        <img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1744793493/chef_j9jlya.png"
          alt="Awards"
          className="w-[1100px] max-w-none"
        />
      </div>

      {/* Centered Specialty Image */}
      <div className="relative flex justify-start 3xl:justify-center">
        <img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1744863980/Specialty_c98mbf.png"
          alt="Specialty"
          className="-mt-2"
        />
      </div>
      <div className="absolute top-48 left-1/2 -translate-x-[520px] z-50">
        <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1744793790/Group_253_oyljhb.png" alt="" />
      </div>

      {/* Green Food */}
      <div className=" absolute top-72 left-1/2 -translate-x-[320px] z-50">
        <span className='text-[#a9a2a2] text-lg'>Green</span> <span className='text-[#CCCCCC] text-lg'>Food</span>
      </div>

      {/* Healthy Food */}
      <div className="absolute top-[33rem] left-1/2 -translate-x-[520px] z-50">
        <span className='text-[#CCCCCC] text-lg'>Healthy</span> <span className='text-[#a9a2a2] text-lg'>Food</span>
      </div>

      <div className="absolute top-[37rem] left-1/2 -translate-x-[500px] z-50">
      <img className='opacity-20 blur-sm' src="/Ellipse 9.svg" alt="" />

      </div>

      {/* Experiences Tag */}


      <div className="inline-flex items-center absolute top-44 left-1/2 -translate-x-[300px] z-50 rounded-full border border-gray-600 px-4 py-2 gap-2">
        <img src="/year.png" alt="" />
        <span class="text-sm font-medium text-[#FF4C15]">experiences</span>
      </div>

      {/* 24/7 Open (top right) */}
      <div className="absolute top-48 left-1/2 translate-x-[200px] bg-white text-gray-800 px-3 py-1 text-lg z-50">
        <span className='text-[#FF4C15] font-bold'>24/7</span> <span className='text-[#2C6252]'>open</span>
      </div>

      {/* 5 Star Rating */}
      <div class="absolute top-72 left-1/2 translate-x-[100px] bg-white rounded-full border border-gray-400 shadow-md py-1 px-3 text-yellow-400 text-base">
        ★★★★★
      </div>


      {/* Live Kitchen */}
      <div className="absolute top-64 left-1/2 translate-x-[360px] bg-white text-gray-800 px-3 py-1 rounded-full text-[26px]">
        <span className='text-[#FF4C15] font-bold'> Live</span> <span className='font-bold'>kitchen</span>
        <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1744868965/Mask_Group_3_zd2ur0.png" className='mt-2 w-40' alt="" />
      </div>

      {/* Organic Food */}
      <div className="absolute top-96 left-1/2 translate-x-[210px] px-3 py-1 text-lg">
        <span className='font-bold text-[#a9a2a2]'> Organic</span> <span className='text-[#CCCCCC] ' >Food</span>
      </div>

    </div>
  );
};

export default Awards;
