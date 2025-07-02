import { Link } from "react-router-dom";
import Container from "../../../components/Container";

const Spend = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 3xl:gap-16 2xl:gap-16 xl:gap-16 lg:gap-16 py-16 mb-28">
        {/* Left: Image Section */}
        <div className="w-full  flex justify-center 3xl:-ml-14 2xl:-ml-20 xl:-ml-10 lg:-ml-20">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1750220026/Image_65_tjh3jt.png" // Replace with your own hosted image if needed
            alt="Couple Spending Time"
            className="w-[90%] max-w-md lg:max-w-full h-auto"
          />
        </div>

        {/* Right: Text Section */}
        <div className="w-full  text-center lg:text-left mt-10 3xl:ml-36 2xl:ml-20 xl:ml-16">
          <h2 className="text-4xl 3xl:text-6xl 2xl:text-6xl xl:text-5xl lg:text-4xl font-bold text-[#2C6252] leading-relaxed">
            If you spend <br />
            <span className="text-[#2C6252] leading-relaxed">special time</span>
          </h2>
          <p className="text-[#D7D7D7] text-sm 3xl:text-base 2xl:text-base xl:text-sm lg:text-xs mt-4 max-w-md">
            Enjoy unbeatable deals every week at Flavors & Feast! Whether you're
            craving a hearty meal, a sweet treat, or a refreshing coffee—
          </p>
         <Link to="/order"> 
           <button className="mt-6 px-6 py-3 bg-[#FA4A0C] text-white font-semibold">
            Checkout Menu
          </button>
         
         </Link>
        </div>
      </div>
    </Container>
  );
};

export default Spend;
