import Container from "../../../../components/Container";

const Deliver = () => {
  return (
    <Container>
      <div className="relative bg-white px-8 3xl:px-3 2xl:px-2 xl:px-2 lg:px-7 3xl:mt-20 2xl:mt-20 xl:mt-32 lg:mt-32 mb-44">
        {/* Main Grid */}
        <div className="grid grid-cols-1 3xl:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
          {/* Left Text Content */}
          <div className="space-y-6 3xl:ml-14 2xl:ml-4 xl:ml-12 lg:-ml-5 3xl:-mt-0 2xl:-mt-6 xl:-mt-10 lg:-mt-8">
            <h2 className="text-4xl 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl text-[#33856D] 3xl:space-y-4 2xl:space-y-4 xl:space-y-4 lg:space-y-0 flex flex-col">
              <span>We Deliver</span>
              <span>Food Within</span>
              <span className="text-[#FF4C15]">30 Min ⏰</span>
            </h2>

            <p className="text-[#CCCCCC] max-w-md 3xl:text-sm 2xl:text-[11px] xl:text-[10px] lg:text-[9px] mt-2">
              When I research companies online, I don’t just want to hear the company’s pitch; I want to hear from its customers. That’s where customer testimonials come into play. But what makes some testimonials so much better than others?
            </p>

            {/* Buttons */}
            <div className="flex space-x-4 mt-20">
              <button className="bg-[#FF4C15] text-white 3xl:px-6 3xl:py-3 2xl:px-4 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 flex items-center 3xl:text-[17px] 2xl:text-[17px] xl:text-[17px] lg:text-[10px] whitespace-nowrap">
                <img src="/order.svg" alt="" className="w-4 h-4 mr-2" />
                Order Now
              </button>
              <button className="border border-[#707070] text-[#FF4C15] hover:bg-orange-50 3xl:px-6 3xl:py-3 2xl:px-4 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-0 flex items-center 3xl:text-[17px] 2xl:text-[17px] xl:text-[17px]  lg:text-[10px] whitespace-nowrap">
                <img src="/download.svg" alt="" className="w-4 h-4 mr-2" />
                Download Apps
              </button>
            </div>
          </div>

          {/* Right Image with Background */}
          <div
            className="flex justify-end relative 3xl:-left-4 2xl:-left-2 xl:-left-6 lg:left-2"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dxohwanal/image/upload/v1747286119/Group_532_yxgunv.png')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <div className="3xl:-ml-44 3xl:-mt-52 2xl:-ml-56 2xl:-mt-48 xl:-ml-56 xl:-mt-48 lg:-ml-60 lg:-mt-48">
              <img
                src="https://res.cloudinary.com/dxohwanal/image/upload/v1747282614/young-smiling-courier-guy-red-uniform-sitting-scooter-holding-paper-bag-saying-hello-white-wall_haw6vn.png"
                alt="Delivery Guy"
                className="object-contain h-auto w-full 3xl:-ml-32 2xl:-ml-8 xl:-ml-4 lg:ml-4"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Deliver;


