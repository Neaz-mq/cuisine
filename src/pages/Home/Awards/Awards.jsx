const Awards = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-[1800px] 3xl:-mt-0 2xl:-mt-40 xl:-mt-28 lg:-mt-44">
      {/* Background Image (ultra large green semi-circle) */}
      <div className="absolute left-1/2 lg:bottom-[28.5rem] xl:bottom-80 2xl:bottom-20 3xl:bottom-0 z-0 w-[80%]  translate-x-[-50%] lg:h-[900px] xl:h-[1000px] 2xl:h-[1120px] 3xl:h-[1330px] flex items-center justify-center">
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
          className="lg:w-[420px] xl:w-[620px] 2xl:w-[820px] 3xl:w-[1100px] max-w-none"
        />
      </div>

      {/* Centered Specialty Image */}
      <div className="relative flex justify-start lg:ml-32 xl:ml-36 2xl:ml-32 3xl:ml-0 lg:w-[900px] xl:w-[1000px] 2xl:w-[1100px] 3xl:w-full 3xl:justify-center">
        <img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1744863980/Specialty_c98mbf.png"
          alt="Specialty"
          className="lg:mt-36 xl:mt-24 2xl:mt-52 3xl:-mt-1"
        />
      </div>
      <div className="absolute left-1/2 lg:top-80 xl:top-64 2xl:top-[21rem] 3xl:top-48 z-50 lg:-translate-x-[210px] xl:-translate-x-[310px] 2xl:-translate-x-[420px] 3xl:-translate-x-[520px]">
        <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1744793790/Group_253_oyljhb.png" className='lg:w-20 xl:w-32 2xl:w-44 3xl:w-full' alt="" />
      </div>

      {/* Green Food */}
      <div className="absolute left-1/2 lg:top-[25rem] xl:top-[20rem] 2xl:top-[31rem] 3xl:top-72 z-50 lg:-translate-x-[140px] xl:-translate-x-[180px] 2xl:-translate-x-[260px] 3xl:-translate-x-[320px]">
        <span className='text-[#a9a2a2] 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[12px]'>Green</span> <span className='text-[#CCCCCC] 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[12px]'>Food</span>
      </div>

      {/* Healthy Food */}
      <div className="absolute left-1/2 lg:top-[27rem] xl:top-[28rem] 2xl:top-[40rem] 3xl:top-[33rem] z-50 lg:-translate-x-[240px] xl:-translate-x-[380px] 2xl:-translate-x-[450px] 3xl:-translate-x-[520px]">
        <span className='text-[#CCCCCC] 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[12px]'>Healthy</span> <span className='text-[#a9a2a2] 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[12px]'>Food</span>
      </div>

      <div className="absolute left-1/2 lg:top-[28rem] xl:top-[34rem] 2xl:top-[42rem] 3xl:top-[37rem] z-50 lg:-translate-x-[330px] xl:-translate-x-[380px] 2xl:-translate-x-[400px] 3xl:-translate-x-[500px]">
        <img className='opacity-20 blur-sm' src="/Ellipse 9.svg" alt="" />
      </div>

      {/* Experiences Tag */}
      <div className="inline-flex items-center absolute left-1/2 lg:top-[19rem] xl:top-60 2xl:top-80 3xl:top-44 z-50 rounded-full border border-gray-600 px-4 py-2 3xl:gap-2 2xl:gap-2 xl:gap-2 lg:gap-1 lg:-translate-x-[150px] xl:-translate-x-[205px] 2xl:-translate-x-[250px] 3xl:-translate-x-[300px] 3xl:w-36 2xl:w-36 xl:w-32 lg:w-24">
        <img src="/year.png" className='3xl:w-4 2xl:w-4 xl:w-4 lg:w-3' alt="" />
        <span className="3xl:text-sm 2xl:text-sm xl:text-[12px] lg:text-[8px] font-medium text-[#FF4C15]">experiences</span>
      </div>

      {/* 24/7 Open (top right) */}
      <div className="absolute left-1/2 lg:top-72 xl:top-[14rem] 2xl:top-80 3xl:top-48 text-gray-800 px-3 py-1 text-lg z-50 lg:translate-x-[40px] xl:translate-x-[80px] 2xl:translate-x-[160px] 3xl:translate-x-[200px]">
        <span className='text-[#FF4C15] font-bold 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[12px]'>24/7</span> <span className='text-[#2C6252] 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[12px]'>open</span>
      </div>

      {/* 5 Star Rating */}
      <div className="absolute left-1/2 lg:top-[21.5rem] xl:top-[19rem] 2xl:top-[26rem] 3xl:top-72 bg-white rounded-full border border-gray-400 shadow-md py-1 px-3 text-yellow-400 text-base z-50 lg:translate-x-[30px] xl:translate-x-[70px] 2xl:translate-x-[100px] 3xl:translate-x-[100px]">
        ★★★★★
      </div>

      {/* Live Kitchen */}
      <div className="absolute left-1/2 lg:top-72 xl:top-[16rem] 2xl:top-[23.5rem] 3xl:top-64  text-gray-800 px-3 py-1 rounded-full text-[26px] z-50 lg:translate-x-[120px] xl:translate-x-[180px] 2xl:translate-x-[270px] 3xl:translate-x-[360px]">
        <span className='text-[#FF4C15] font-bold 3xl:text-2xl 2xl:text-2xl xl:text-xl lg:text-base'> Live</span> <span className='font-bold 3xl:text-2xl 2xl:text-2xl xl:text-xl lg:text-base'>kitchen</span>
        <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1744868965/Mask_Group_3_zd2ur0.png" className='mt-2 3xl:w-40 2xl:w-40 xl:w-32 lg:w-24' alt="" />
      </div>

      {/* Organic Food */}
      <div className="absolute left-1/2 lg:top-[24rem] xl:top-[23rem] 2xl:top-[31rem] 3xl:top-96 px-3 py-1 text-lg z-50 lg:translate-x-[55px] xl:translate-x-[90px] 2xl:translate-x-[140px] 3xl:translate-x-[210px]">
        <span className='font-bold text-[#a9a2a2] 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[11px]'> Organic</span> <span className='text-[#CCCCCC] 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[11px]'>Food</span>
      </div>
    </div>
  );
};

export default Awards;