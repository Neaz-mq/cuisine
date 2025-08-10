import Container from "../../../components/Container";

const daysOfWeek = [
  { name: "Sunday", offer: "- Buy 1 Get 1 Free on all Pizzas" },
  { name: "Monday", offer: "- 50% OFF on all Pasta Dishes" },
  { name: "Tuesday", offer: "- Free Dessert with any Main Course" },
  { name: "Wednesday", offer: "- 30% OFF on all Burgers" },
  { name: "Thursday", offer: "- Buy 1 Get 1 Free on Nachos" },
  { name: "Friday", offer: "- 20% OFF on all Set Menus" },
  { name: "Saturday", offer: "- Free Wedges with any Main Course" },
];

// Image sets by weekday index (0=Sunday, 1=Monday, ..., 6=Saturday)
const imageSets = {
  0: [ // Sunday
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124288/offer5_uemicz.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124388/offer6_s6eui8.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124492/offer7_rqv65z.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124622/offer8_sdthfe.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124722/offer9_t9bjvu.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124936/offer10_yaohib.webp",

  ],
  1: [ // Monday
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124388/offer6_s6eui8.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124622/offer8_sdthfe.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124936/offer10_yaohib.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124492/offer7_rqv65z.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124722/offer9_t9bjvu.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124288/offer5_uemicz.webp"
  ],
  2: [ // Tuesday
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124288/offer5_uemicz.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124388/offer6_s6eui8.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124492/offer7_rqv65z.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124622/offer8_sdthfe.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124722/offer9_t9bjvu.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124936/offer10_yaohib.webp",
  ],
  3: [ // Wednesday
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124388/offer6_s6eui8.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124622/offer8_sdthfe.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124936/offer10_yaohib.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124492/offer7_rqv65z.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124722/offer9_t9bjvu.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124288/offer5_uemicz.webp"
  ],
  4: [ // Thursday
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124492/offer7_rqv65z.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124388/offer6_s6eui8.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124722/offer9_t9bjvu.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124288/offer5_uemicz.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124936/offer10_yaohib.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124622/offer8_sdthfe.webp",
  ],
  5: [ // Friday
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124288/offer5_uemicz.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124388/offer6_s6eui8.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124492/offer7_rqv65z.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124622/offer8_sdthfe.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124722/offer9_t9bjvu.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124936/offer10_yaohib.webp",
  ],
  6: [ // Saturday
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124388/offer6_s6eui8.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124622/offer8_sdthfe.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124936/offer10_yaohib.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124492/offer7_rqv65z.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124722/offer9_t9bjvu.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752124288/offer5_uemicz.webp",
  ],
};

const getThreeDayWindow = (days, todayIndex) => {
  const threeDays = [];
  for (let i = 0; i < 3; i++) {
    const index = (todayIndex + i) % 7;
    threeDays.push({ ...days[index], index });
  }
  return threeDays;
};

const Week = () => {
  const todayIndex = new Date().getDay();
  const threeDayWindow = getThreeDayWindow(daysOfWeek, todayIndex);
  const images = imageSets[todayIndex] || []; 

  return (
    <Container>
      <div className="flex flex-col 3xl:mt-52 2xl:mt-48 xl:mt-40 lg:mt-36 md:mt-36 sm:mt-36 3xl:px-12 2xl:px-0 xl:px-6 lg:px-6 md:px-0 sm:px-6 overflow-hidden md:-ml-8 sm:-ml-8 3xl:-ml-0 2xl:-ml-0 xl:-ml-0 lg:-ml-0">
        {/* Header */}
        <div className="bg-[#3D6A5D] text-white p-4 flex justify-between items-center 3xl:ml-6 2xl:ml-4 xl:ml-4 lg:-ml-8 md:-ml-8 sm:-ml-8">
          <h1 className="3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-sm sm:text-xl font-bold ml-8">Don't Miss This Week's Delights</h1>
          <span className="3xl:mr-[4.5rem] 2xl:mr-[4.5rem] xl:mr-[4.5rem] lg:mr-[3rem] md:mr-[3rem] sm:mr-[3rem] 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-sm sm:text-xl">* Authority suggested food</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row p-8 relative ">
          {/* Left: 3 Days */}
          <div className="lg:w-1/2 flex flex-col justify-center items-start 3xl:space-y-20 3xl:-mt-[12rem] 2xl:space-y-20 xl:space-y-20 lg:space-y-20 md:space-y-140 sm:space-y-20 2xl:-mt-[12rem] xl:-mt-[13rem] lg:-mt-[20rem] md:mt-[4rem] sm:-mt-[20rem] z-10 3xl:-ml-0 2xl:-ml-0 xl:-ml-0 lg:-ml-14 md:-ml-8">
            {threeDayWindow.map((dayObj) => {
              const isToday = dayObj.index === todayIndex;
              return (
                <div key={dayObj.name} className="relative flex items-start">
                  <div className="w-1 bg-gray-400 h-24 mr-4 opacity-70"></div>
                  <div>
                    <h2 className={`3xl:text-7xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-4xl sm:text-4xl font-extrabold mb-2 ${isToday ? "text-[#FF4C15]" : "text-[#F6F6F6] opacity-70"}`}>
                      {dayObj.name}
                    </h2>
                    <p className={`text-lg ml-0 ${isToday ? "text-[#2C6252]" : "text-[#E1E1E1]"}`}>
                      {dayObj.offer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Image Layout */}
          <div className="lg:w-1/2 relative min-h-[850px] flex items-center justify-center 3xl:mt-40 3xl:left-2 xl:left-2 2xl:mt-36 xl:mt-36 lg:mt-28 md:mt-32 sm:mt-28 2xl:left-2 lg:left-12 md:left-12 sm:left-12 ">
            {images.map((url, index) => (
              <div
                key={index}
                className={`absolute overflow-hidden ${index === 0 ? "3xl:top-4 3xl:left-[8%] 3xl:w-40 3xl:h-52 2xl:top-4 2xl:left-[4%] 2xl:w-40 2xl:h-52 xl:top-4 xl:left-[0%] xl:w-40 xl:h-52 lg:top-4 lg:left-[3%] lg:w-28 lg:h-40 md:top-4 md:left-[12%] md:w-28 md:h-40 sm:top-4 sm:left-[3%] sm:w-28 sm:h-40 z-30" :
                    index === 1 ? "3xl:top-[4.5rem] 3xl:left-[35%] 3xl:w-40 3xl:h-52 2xl:top-[4.5rem] 2xl:left-[35%] 2xl:w-40 2xl:h-52 xl:top-[4.5rem] xl:left-[35%] xl:w-40 xl:h-52 lg:top-[4.5rem] lg:left-[35%] lg:w-32 lg:h-40 md:top-[4.5rem] md:left-[35%] md:w-32 md:h-40 sm:top-[4.5rem] sm:left-[35%] sm:w-32 sm:h-40 -translate-x-1/2 -translate-y-36 z-20 opacity-10" :
                      index === 2 ? "3xl:top-4 3xl:left-[38%] 3xl:w-64 3xl:h-52 2xl:top-4 2xl:left-[38%] 2xl:w-64 2xl:h-52 xl:top-4 xl:left-[38%] xl:w-64 xl:h-52 lg:top-4 lg:left-[38%] lg:w-44 lg:h-40 md:top-4 md:left-[38%] md:w-44 md:h-40 sm:top-4 sm:left-[38%] sm:w-44 sm:h-40 z-10" :
                        index === 3 ? "3xl:top-[16rem] 3xl:left-[38%] 3xl:w-40 3xl:h-52 2xl:top-[16rem] 2xl:left-[38%] 2xl:w-40 2xl:h-52 z-10 xl:top-[16rem] xl:left-[38%] xl:w-40 xl:h-52 lg:top-[12rem] lg:left-[38%] lg:w-32 lg:h-44 md:top-[12rem] md:left-[38%] md:w-32 md:h-44 sm:top-[12rem] sm:left-[38%] sm:w-32 sm:h-44" :
                          index === 4 ? "3xl:top-[16rem] 2xl:top-[16rem] xl:top-[16rem] lg:top-[12rem] md:top-[12rem] sm:top-[12rem]  3xl:-left-[4%] 2xl:-left-[10.3%] xl:-left-[17%] lg:-left-[10.2%] md:left-[3%] sm:-left-[10.2%] 3xl:w-60 3xl:h-48 2xl:w-60 2xl:h-48 xl:w-60 xl:h-48 lg:w-40 lg:h-44 md:w-40 md:h-44 sm:w-40 sm:h-44 opacity-15 z-30" :
                            "3xl:top-[20rem] 2xl:top-[20rem] xl:top-[20rem] lg:top-[20rem] 3xl:left-[24%] 2xl:left-[24%] xl:left-[22%] lg:left-[18%] md:left-[24%] sm:left-[18%] 3xl:w-36 3xl:h-52 2xl:w-36 2xl:h-52 xl:w-36 xl:h-52 lg:w-32 lg:h-40 md:w-32 md:h-40 sm:w-32 sm:h-40 z-40"
                  }`}
              >
                <img src={url} alt={`dish-${index}`} className="w-full h-full object-cover" />
              </div>
            ))}

            {/* Customer Service Card */}
            <div className="absolute bottom-4 3xl:right-6 2xl:-right-8 xl:-right-12 lg:-right-16 md:right-10 sm:-right-16 p-6 max-w-xs text-left z-40 3xl:top-[26.5%] 2xl:top-[26.5%] xl:top-[26.5%] lg:top-[19%] md:top-[19.5%] sm:top-[19%]">
              <h3 className="3xl:text-lg 2xl:text-lg xl:text-base lg:text-[13px] md:text-[13px] sm:text-[13px] font-bold text-[#2C6252] mb-2">
                Outstanding <br /> <span className="font-normal">Customer Service</span>
              </h3>
              <p className="3xl:text-xs 2xl:text-xs xl:text-[10px] lg:text-[10px] md:text-[10px] sm:text-[10px] text-[#CCCCCC]">
                Our staff is dedicated <br /> to providing warm and <br /> attentive service, <br /> making sure that
              </p>
            </div>

            {/* 50% Text */}
            <div className="absolute 3xl:right-[0rem] 2xl:-right-[4.2rem] xl:-right-[4rem] lg:-right-[3rem] md:right-[4rem] sm:-right-[3rem] 3xl:top-[14%] 2xl:top-[10%] xl:top-[9%] lg:top-[5%] md:top-[5%] sm:top-[5%] transform 3xl:-translate-y-1/2 2xl:-translate-y-1/2 xl:-translate-y-1/2 rotate-90 text-[#FF4C15] 3xl:text-7xl 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-5xl font-extrabold opacity-70 z-0">
              50%
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Week;