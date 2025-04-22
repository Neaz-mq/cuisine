import React from 'react';

const Awards = () => {
  return (
    <div className="relative w-full overflow-hidden  3xl:min-h-[1800px] 2xl:min-h-[1700px] xl:min-h-[1600px]">
      {/* Background Image (ultra large green semi-circle) */}
      <div className="flex items-center justify-center absolute left-1/2 3xl:bottom-0 2xl:bottom-20 xl:bottom-0 z-0 3xl:w-[720%] 2xl:w-[300%] xl:w-[70%] translate-x-[-50%] 3xl:h-[1330px] 2xl:h-[1110px] xl:h-[1600px] ">
        <img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1744793095/Ellipse_2_m5jepq.png"
          alt="Background"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Foreground Image (Chef) */}
      <div className="flex items-center justify-center absolute left-1/2 3xl:top-[50%] 2xl:top-[50%] xl:top-[38%] z-10 translate-x-[-50%] translate-y-[-104%]">
        <img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1744793493/chef_j9jlya.png"
          alt="Awards"
          className="3xl:w-[1100px] 2xl:w-[880px] xl:w-[650px] max-w-none"
        />
      </div>

      {/* Centered Specialty Image */}
      <div className="relative flex justify-start 3xl:justify-center 2xl:w-[1100px] xl:w-[1000px] xl:ml-36 2xl:ml-32  3xl:w-full 3xl:ml-0">
        <img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1744863980/Specialty_c98mbf.png"
          alt="Specialty"
          className="3xl:-mt-1 2xl:mt-32 xl:mt-0"
        />
      </div>
      <div className="absolute 3xl:top-48 2xl:top-64 xl:top-48 left-1/2 3xl:-translate-x-[520px] 2xl:-translate-x-[420px] xl:-translate-x-[310px] z-50">
        <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1744793790/Group_253_oyljhb.png" className='3xl:w-full 2xl:w-full xl:w-32' alt="" />
      </div>

      {/* Green Food */}
      <div className="absolute 3xl:top-72 2xl:top-[25rem] xl:top-[15rem] left-1/2 3xl:-translate-x-[320px] 2xl:-translate-x-[240px] xl:-translate-x-[180px] z-50">
        <span className='text-[#a9a2a2] text-lg'>Green</span> <span className='text-[#CCCCCC] text-lg'>Food</span>
      </div>

      {/* Healthy Food */}
      <div className="absolute 3xl:top-[33rem] 2xl:top-[35rem] xl:top-[25rem] left-1/2 3xl:-translate-x-[520px] 2xl:-translate-x-[420px] xl:-translate-x-[380px] z-50">
        <span className='text-[#CCCCCC] text-lg'>Healthy</span> <span className='text-[#a9a2a2] text-lg'>Food</span>
      </div>

      <div className="absolute 3xl:top-[37rem] 2xl:top-[37rem]  xl:top-[26rem] left-1/2 3xl:-translate-x-[500px] 2xl:-translate-x-[400px] xl:-translate-x-[330px]   z-50">
      <img className='opacity-20 blur-sm' src="/Ellipse 9.svg" alt="" />

      </div>

      {/* Experiences Tag */}


      <div className="inline-flex items-center absolute 3xl:top-44 2xl:top-72 xl:top-40  left-1/2 3xl:-translate-x-[300px] 2xl:-translate-x-[250px] xl:-translate-x-[230px] z-50 rounded-full border border-gray-600 px-4 py-2 gap-2 ">
        <img src="/year.png" alt="" />
        <span class="text-sm font-medium text-[#FF4C15]">experiences</span>
      </div>

      {/* 24/7 Open (top right) */}
      <div className="absolute 3xl:top-48 2xl:top-64 xl:top-36 left-1/2 3xl:translate-x-[200px] 2xl:translate-x-[160px] xl:translate-x-[120px]  text-gray-800 px-3 py-1 text-lg z-50">
        <span className='text-[#FF4C15] font-bold'>24/7</span> <span className='text-[#2C6252]'>open</span>
      </div>

      {/* 5 Star Rating */}
      <div class="absolute 3xl:top-72 2xl:top-[22rem] xl:top-[15rem] left-1/2 3xl:translate-x-[100px] 2xl:translate-x-[100px] xl:translate-x-[70px] bg-white rounded-full border border-gray-400 shadow-md py-1 px-3 text-yellow-400 text-base">
        ★★★★★
      </div>


      {/* Live Kitchen */}
      <div className="absolute 3xl:top-64 2xl:top-80 xl:top-48 left-1/2 3xl:translate-x-[360px] 2xl:translate-x-[270px] xl:translate-x-[180px] bg-white text-gray-800 px-3 py-1 rounded-full text-[26px]">
        <span className='text-[#FF4C15] font-bold'> Live</span> <span className='font-bold'>kitchen</span>
        <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1744868965/Mask_Group_3_zd2ur0.png" className='mt-2 w-40' alt="" />
      </div>

      {/* Organic Food */}
      <div className="absolute 3xl:top-96 2xl:top-[28rem] xl:top-[19rem] left-1/2 3xl:translate-x-[210px] 2xl:translate-x-[140px] xl:translate-x-[90px] px-3 py-1 text-lg">
        <span className='font-bold text-[#a9a2a2]'> Organic</span> <span className='text-[#CCCCCC] ' >Food</span>
      </div>

    </div>
  );
};

export default Awards;
