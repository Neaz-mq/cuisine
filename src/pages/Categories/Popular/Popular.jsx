import { useState, useEffect } from 'react';
import Container from '../../../components/Container';

const Popular = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(
      now.getTime() +
      7 * 24 * 60 * 60 * 1000 +
      9 * 60 * 60 * 1000 +
      5 * 60 * 1000 +
      39 * 1000
    );
    return targetDate.getTime();
  };

  const [targetTime, setTargetTime] = useState(calculateTimeLeft());
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setTargetTime(calculateTimeLeft());
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const formatTime = (value) => String(value).padStart(2, '0');

  const foodItems = [
    {
      id: 1,
      title: "Classic Roast Brew",
      desc: "Our menu is carefully crafted by expert chefs who bring creativity",
      price: 12,
      image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
    },
    {
      id: 2,
      title: "Cheesy Crust Deluxe",
      desc: "Our menu is carefully crafted by expert chefs who bring creativity",
      price: 12,
      image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png",
    },
    {
      id: 3,
      title: "Classic Roast Brew",
      desc: "Our menu is carefully crafted by expert chefs who bring creativity",
      price: 12,
      image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
    },
    {
      id: 4,
      title: "Cheesy Crust Deluxe",
      desc: "Our menu is carefully crafted by expert chefs who bring creativity",
      price: 12,
      image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png",
    },
  ];

  return (
    <Container>
      <div className="px-4 md:px-8 lg:px-14 -mt-12 mb-52">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-[#2C6252] mb-4 md:mb-0">
            Our Most Popular Item
          </h1>
          <div className="flex items-center text-[#FF4C15] text-sm font-medium">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            **Authority suggested food list
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
          {/* Left Countdown Section */}
          <div className="relative overflow-hidden flex flex-col justify-end aspect-[3/4] min-h-[48rem] w-full">
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1750236294/Mask_Group_33_oso3cc.png"
              alt="Weekly best sales products"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
            <div className="relative z-20 text-white bg-[#FF4C15] p-10 bottom-36 mx-6 ">
              <span className="inline-block text-white text-xl font-semibold px-3 py-1 mb-3 -ml-3">
                Only online order
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                Weekly best sales products
              </h2>
              <div className="flex space-x-3 mb-6">
                {[['DAY', timeLeft.days], ['HRS', timeLeft.hours], ['MIN', timeLeft.minutes], ['SEC', timeLeft.seconds]].map(([label, val]) => (
                  <div key={label} className="flex flex-col items-center justify-center bg-yellow-500  p-2 w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                    <span className="text-2xl sm:text-3xl font-bold font-mono">{formatTime(val)}</span>
                    <span className="text-xs sm:text-sm">{label}</span>
                  </div>
                ))}
              </div>
              <button className="bg-[#2C6252] text-white px-6 py-3 font-bold text-lg hover:scale-105 transition-all">
                Order Now
              </button>
            </div>
          </div>

          {/* Right Food Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {foodItems.map((item) => (
              <div key={item.id} className="bg-[#F8F8F8] p-4 flex flex-col">
                <div className="w-full h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow mt-6">
                  <h3 className="text-xl font-semibold text-[#2C6252] mb-1">{item.title}</h3>
                  <p className="text-xs text-[#CCCCCC] mb-4">{item.desc}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-2xl font-bold text-[#2C6252]">
                      ${item.price}
                      <span className="text-lg text-[#B9B9B9] ml-1 font-semibold">/ pcs</span>
                    </span>
                    <button className="bg-[#2C6252] text-white p-2">
                      <img src="/Path 2764.svg" alt="Add" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Popular;
