import Container from "../../../components/Container";

const Spend = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16 py-16 mb-28">
        {/* Left: Image Section */}
        <div className="w-full  flex justify-center 3xl:-ml-16">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1750220026/Image_65_tjh3jt.png" // Replace with your own hosted image if needed
            alt="Couple Spending Time"
            className="w-[90%] max-w-md lg:max-w-full h-auto"
          />
        </div>

        {/* Right: Text Section */}
        <div className="w-full  text-center lg:text-left mt-10 3xl:ml-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#2C6252] leading-relaxed">
            If you spend <br />
            <span className="text-[#2C6252] leading-relaxed">special time</span>
          </h2>
          <p className="text-[#D7D7D7] text-sm lg:text-base mt-4 max-w-md">
            Enjoy unbeatable deals every week at Flavors & Feast! Whether you're
            craving a hearty meal, a sweet treat, or a refreshing coffee—
          </p>
          <button className="mt-6 px-6 py-3 bg-[#FA4A0C] text-white font-semibold">
            Please checkout
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Spend;
