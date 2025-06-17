import Container from "../../../components/Container";

const Spend = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16 py-16">
        {/* Left: Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1718610623/spend-time_couple.png" // Replace with your own hosted image if needed
            alt="Couple Spending Time"
            className="w-[90%] max-w-md lg:max-w-full h-auto"
          />
        </div>

        {/* Right: Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1E3D34] leading-tight">
            If you spend <br />
            <span className="text-[#FA4A0C]">special time</span>
          </h2>
          <p className="text-gray-400 text-sm lg:text-base mt-4 max-w-md">
            Enjoy unbeatable deals every week at Flavors & Feast! Whether you're
            craving a hearty meal, a sweet treat, or a refreshing coffee—
          </p>
          <button className="mt-6 px-6 py-3 bg-[#FA4A0C] text-white font-semibold rounded">
            Please checkout
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Spend;
