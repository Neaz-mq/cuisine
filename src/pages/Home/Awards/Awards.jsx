import React from 'react';

const Awards = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-[1800px] 3xl:-mt-0 2xl:-mt-40 xl:-mt-28">
      {/* Background Image (ultra large green semi-circle) */}
      <div className="absolute left-1/2 lg:bottom-0 xl:bottom-36 2xl:bottom-20 3xl:bottom-0 z-0 w-[80%]  translate-x-[-50%] lg:h-[1500px] xl:h-[1400px] 2xl:h-[1120px] 3xl:h-[1330px] flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1744793095/Ellipse_2_m5jepq.png"
          alt="Background"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Foreground Image (Chef) */}
      <div className="absolute left-1/2 lg:top-[33%] xl:top-[38%] 2xl:top-[50%] 3xl:top-[50%] z-10 translate-x-[-50%] translate-y-[-104%] flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1744793493/chef_j9jlya.png"
          alt="Awards"
          className="lg:w-[550px] xl:w-[650px] 2xl:w-[820px] 3xl:w-[1100px] max-w-none"
        />
      </div>

      {/* Centered Specialty Image */}
      <div className="relative flex justify-start lg:ml-32 xl:ml-36 2xl:ml-32 3xl:ml-0 lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px] 3xl:w-full 3xl:justify-center">
        <img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1744863980/Specialty_c98mbf.png"
          alt="Specialty"
          className="lg:mt-0 xl:mt-24 2xl:mt-52 3xl:-mt-1"
        />
      </div>
      <div className="absolute left-1/2 lg:top-32 xl:top-64 2xl:top-[21rem] 3xl:top-48 z-50 lg:-translate-x-[270px] xl:-translate-x-[310px] 2xl:-translate-x-[420px] 3xl:-translate-x-[520px]">
        <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1744793790/Group_253_oyljhb.png" className='lg:w-20 xl:w-32 2xl:w-44 3xl:w-full' alt="" />
      </div>

      {/* Green Food */}
      <div className="absolute left-1/2 lg:top-[12rem] xl:top-[20rem] 2xl:top-[31rem] 3xl:top-72 z-50 lg:-translate-x-[190px] xl:-translate-x-[180px] 2xl:-translate-x-[260px] 3xl:-translate-x-[320px]">
        <span className='text-[#a9a2a2] text-lg'>Green</span> <span className='text-[#CCCCCC] text-lg'>Food</span>
      </div>

      {/* Healthy Food */}
      <div className="absolute left-1/2 lg:top-[18rem] xl:top-[28rem] 2xl:top-[40rem] 3xl:top-[33rem] z-50 lg:-translate-x-[360px] xl:-translate-x-[380px] 2xl:-translate-x-[450px] 3xl:-translate-x-[520px]">
        <span className='text-[#CCCCCC] text-lg'>Healthy</span> <span className='text-[#a9a2a2] text-lg'>Food</span>
      </div>

      <div className="absolute left-1/2 lg:top-[20rem] xl:top-[34rem] 2xl:top-[42rem] 3xl:top-[37rem] z-50 lg:-translate-x-[330px] xl:-translate-x-[420px] 2xl:-translate-x-[400px] 3xl:-translate-x-[500px] ">
      <img className='opacity-20 blur-sm' src="/Ellipse 9.svg" alt="" />
      </div>

      {/* Experiences Tag */}
      <div className="inline-flex items-center absolute left-1/2 lg:top-24 xl:top-60 2xl:top-80 3xl:top-44 z-50 rounded-full border border-gray-600 px-4 py-2 gap-2 lg:-translate-x-[210px] xl:-translate-x-[220px] 2xl:-translate-x-[250px] 3xl:-translate-x-[300px]">
        <img src="/year.png" alt="" />
        <span className="text-sm font-medium text-[#FF4C15]">experiences</span>
      </div>

      {/* 24/7 Open (top right) */}
      <div className="absolute left-1/2 lg:top-16 xl:top-[13.5rem] 2xl:top-80 3xl:top-48 text-gray-800 px-3 py-1 text-lg z-50 lg:translate-x-[60px] xl:translate-x-[120px] 2xl:translate-x-[160px] 3xl:translate-x-[200px]">
        <span className='text-[#FF4C15] font-bold'>24/7</span> <span className='text-[#2C6252]'>open</span>
      </div>

      {/* 5 Star Rating */}
      <div className="absolute left-1/2 lg:top-[9rem] xl:top-[19rem] 2xl:top-[26rem] 3xl:top-72 bg-white rounded-full border border-gray-400 shadow-md py-1 px-3 text-yellow-400 text-base z-50 lg:translate-x-[30px] xl:translate-x-[70px] 2xl:translate-x-[100px] 3xl:translate-x-[100px]">
        ★★★★★
      </div>

      {/* Live Kitchen */}
      <div className="absolute left-1/2 lg:top-24 xl:top-64 2xl:top-[23.5rem] 3xl:top-64 bg-white text-gray-800 px-3 py-1 rounded-full text-[26px] z-50 lg:translate-x-[130px] xl:translate-x-[180px] 2xl:translate-x-[270px] 3xl:translate-x-[360px]">
        <span className='text-[#FF4C15] font-bold'> Live</span> <span className='font-bold'>kitchen</span>
        <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1744868965/Mask_Group_3_zd2ur0.png" className='mt-2 w-40' alt="" />
      </div>

      {/* Organic Food */}
      <div className="absolute left-1/2 lg:top-[13rem] xl:top-[23rem] 2xl:top-[31rem] 3xl:top-96 px-3 py-1 text-lg z-50 lg:translate-x-[65px] xl:translate-x-[90px] 2xl:translate-x-[140px] 3xl:translate-x-[210px]">
        <span className='font-bold text-[#a9a2a2]'> Organic</span> <span className='text-[#CCCCCC]'>Food</span>
      </div>
    </div>
  );
};

export default Awards;