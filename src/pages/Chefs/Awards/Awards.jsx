import { motion as Motion } from 'framer-motion';
import Container from "../../../components/Container";

const Awards = () => {
  return (
    <Container>
      <div className="relative overflow-hidden min-h-[1800px] 3xl:-mt-12 2xl:-mt-12 xl:-mt-20 lg:-mt-0 3xl:right-10 2xl:right-20 xl:right-20 lg:right-20">

        {/* Foreground Image (Chef) */}
        <div className="absolute left-1/2 lg:top-[33%] xl:top-[44%] 2xl:top-[50%] 3xl:top-[54%] z-10 3xl:translate-x-[-50%] 2xl:translate-x-[-50%] xl:translate-x-[-48%] lg:translate-x-[-48%] translate-y-[-104%] flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1752057824/chef1_aauap9.webp"
            alt="Award-winning chef with culinary excellence"
            className="lg:w-[820px] 2xl:w-[1100px] xl:w-[950px] 3xl:w-[1250px] max-w-none"
          />
        </div>

        {/* Centered Specialty Image */}
        <div className="relative flex justify-start lg:ml-32 2xl:ml-32 xl:ml-32 3xl:ml-0 lg:w-[600px] xl:w-[1100px] 2xl:w-[1100px] 3xl:w-full 3xl:justify-center">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1744863980/Specialty_c98mbf.png"
            alt="Our food specialty display"
            className="lg:mt-36 xl:mt-52 2xl:mt-52 3xl:-mt-1"
          />
        </div>

        {/* Floating Badge Icon */}
        <Motion.div
          className="absolute 3xl:left-28 2xl:left-16 xl:left-20 lg:left-14 lg:top-[5rem] xl:top-[12rem] 2xl:top-[13rem] 3xl:top-48 z-50"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1744793790/Group_253_oyljhb.png"
            className="lg:w-32 xl:w-44 2xl:w-44 3xl:w-full rounded-full"
            alt="Award badge"
          />
        </Motion.div>

        {/* Green Food */}
        <div className="absolute left-1/2 lg:top-[14rem] xl:top-[21rem] 2xl:top-[22rem] 3xl:top-[24rem] z-50 lg:-translate-x-[210px] xl:-translate-x-[260px] 2xl:-translate-x-[300px] 3xl:-translate-x-[360px]">
          <span className='text-[#a9a2a2] 3xl:text-lg 2xl:text-lg xl:text-lg lg:text-[12px]'>Green</span> <span className='text-[#CCCCCC] 3xl:text-lg 2xl:text-lg xl:text-lg lg:text-[12px]'>Food</span>
        </div>

        {/* Healthy Food */}
        <div className="absolute left-1/2 lg:top-[20rem] xl:top-[28rem] 2xl:top-[36rem] 3xl:top-[33rem] z-50 lg:-translate-x-[320px] xl:-translate-x-[400px] 2xl:-translate-x-[440px] 3xl:-translate-x-[520px]">
          <span className='text-[#CCCCCC] 3xl:text-lg 2xl:text-lg xl:text-lg lg:text-[12px]'>Healthy</span> <span className='text-[#a9a2a2] 3xl:text-lg 2xl:text-lg xl:text-lg lg:text-[12px]'>Food</span>
        </div>

        {/* Decorative Blur Element */}
        <div className="absolute left-1/2 lg:top-[28rem] xl:top-[42rem] 2xl:top-[42rem] 3xl:top-[37rem] z-50 lg:-translate-x-[330px] xl:-translate-x-[400px] 2xl:-translate-x-[400px] 3xl:-translate-x-[500px]">
          <img className='opacity-20 blur-sm' src="/Ellipse 9.svg" alt="Decorative ellipse blur" />
        </div>

        {/* Experiences Tag */}
        <Motion.div
          className="absolute 3xl:left-[24rem] 2xl:left-[18rem] xl:left-[17rem] lg:left-[14rem] lg:top-[4rem] xl:top-[11rem] 2xl:top-44 3xl:top-36 z-50 rounded-full 3xl:px-4 3xl:py-2 2xl:px-4 2xl:py-2 xl:px-4 xl:py-2 lg:px-4 lg:py-1 lg:-translate-x-[150px] xl:-translate-x-[250px] 2xl:-translate-x-[250px] 3xl:-translate-x-[300px] 3xl:w-36 2xl:w-36 xl:w-36 lg:w-24"
          style={{ border: "2px solid #4B5563" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="inline-flex items-center justify-center gap-2 w-full h-full">
            <img src="/year.png" className="3xl:w-4 2xl:w-4 xl:w-4 lg:w-3" alt="Years of experience badge" />
            <span className="3xl:text-sm 2xl:text-sm xl:text-[12px] lg:text-[10px] font-medium text-[#FF4C15]">
              experiences
            </span>
          </div>
        </Motion.div>

        {/* 24/7 Open */}
        <div className="absolute left-1/2 lg:top-[2rem] xl:top-[11rem] 2xl:top-52 3xl:top-48 text-gray-800 px-3 py-1 text-lg z-50 lg:translate-x-[160px] xl:translate-x-[180px] 2xl:translate-x-[200px] 3xl:translate-x-[200px]">
          <span className='text-[#FF4C15] font-bold 3xl:text-lg 2xl:text-lg xl:text-lg lg:text-[14px]'>24/7</span> <span className='text-[#2C6252] 3xl:text-lg 2xl:text-lg xl:text-lg lg:text-[12px]'>open</span>
        </div>

        {/* 5 Star Rating */}
        <Motion.div
          className="absolute 3xl:right-[34rem] 2xl:right-[25rem] xl:right-[22rem] lg:right-[16rem] lg:top-[9rem] xl:top-[16rem] 2xl:top-[18rem] 3xl:top-72 bg-white rounded-full border border-gray-400 shadow-md py-1 px-3 text-yellow-400 text-base z-50 lg:translate-x-[30px] xl:translate-x-[100px] 2xl:translate-x-[100px] 3xl:translate-x-[100px]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          ★★★★★
        </Motion.div>

        {/* Live Kitchen */}
        <Motion.div
          className="absolute left-1/2 lg:top-[7rem] xl:top-[15rem] 2xl:top-[16rem] 3xl:top-64 text-gray-800 px-3 py-1 rounded-full text-[26px] z-50 lg:translate-x-[290px] xl:translate-x-[320px] 2xl:translate-x-[350px] 3xl:translate-x-[430px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="relative inline-flex flex-col items-center">
            <Motion.div className="inline-flex items-center gap-1">
              <Motion.span
                className="text-[#FF4C15] font-bold 3xl:text-2xl 2xl:text-2xl xl:text-xl lg:text-base"
                animate={{ textShadow: ["0 0 10px #FF4C15", "0 0 0px #FF4C15", "0 0 10px #FF4C15"] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                Live
              </Motion.span>
              <Motion.span
                className="font-bold 3xl:text-2xl 2xl:text-2xl xl:text-xl lg:text-base"
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                kitchen
              </Motion.span>
            </Motion.div>
            <Motion.img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1744868965/Mask_Group_3_zd2ur0.png"
              className="mt-2 3xl:w-40 2xl:w-40 xl:w-32 lg:w-24"
              alt="Live kitchen photo"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <Motion.div
              className="absolute -top-6 w-8 h-8 bg-transparent"
              animate={{ y: [-5, -25], opacity: [0.4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
            >
              <div className="w-full h-full rounded-full bg-white blur-sm opacity-40" />
            </Motion.div>
          </div>
        </Motion.div>

        {/* Organic Food */}
        <div className="absolute left-1/2 lg:top-[13rem] xl:top-[27rem] 2xl:top-[24rem] 3xl:top-96 px-3 py-1 text-lg z-50 lg:translate-x-[160px] xl:translate-x-[170px] 2xl:translate-x-[190px] 3xl:translate-x-[210px]">
          <span className='font-bold text-[#a9a2a2] 3xl:text-lg 2xl:text-lg xl:text-lg lg:text-[11px]'>Organic</span> <span className='text-[#CCCCCC] 3xl:text-lg 2xl:text-lg xl:text-lg lg:text-[11px]'>Food</span>
        </div>
      </div>

      {/* Quality | Profitability | Consistency */}
      <div className="absolute left-1/2 3xl:top-[52rem] 2xl:top-[48rem] xl:top-[41rem] lg:top-[35rem] translate-x-[-45%] z-50 w-full 3xl:max-w-[1220px] 2xl:max-w-[1110px] xl:max-w-[950px] lg:max-w-[850px]">
        <div className="grid grid-cols-3 text-white font-bold text-center 3xl:text-4xl 2xl:text-4xl xl:text-4xl lg:text-3xl divide-x divide-[#CCCCCC] bg-[#406D5B] overflow-hidden 3xl:px-24 3xl:py-24 2xl:px-20 2xl:py-20 xl:px-16 xl:py-16 lg:px-12 lg:py-12 3xl:-ml-6 2xl:-ml-10 xl:-ml-10">
          <div className="py-4">Quality</div>
          <div className="py-4">Profitability</div>
          <div className="py-4">Consistency</div>
        </div>
      </div>
    </Container>
  );
};

export default Awards;
