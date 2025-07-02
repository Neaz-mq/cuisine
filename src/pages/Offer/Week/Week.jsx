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
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321319/Mask_Group_34_mtkkiw.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748322031/Mask_Group_38_xhbv7y.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321038/Mask_Group_35_csn6xf.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321078/Mask_Group_37_fqhmcm.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748320998/Mask_Group_36_gbjtya.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321962/Mask_Group_39_emmfxr.png",
  ],
  1: [ // Monday
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748320998/Mask_Group_36_gbjtya.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321962/Mask_Group_39_emmfxr.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321038/Mask_Group_35_csn6xf.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321078/Mask_Group_37_fqhmcm.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321319/Mask_Group_34_mtkkiw.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748322031/Mask_Group_38_xhbv7y.png",
  ],
  2: [ // Tuesday
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748062201/pngegg_-_2025-05-10T162941.070_l0cowy.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748060806/pngegg_98_himcvk.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748060318/pngegg_2_e2f6jx.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748060880/pngegg_99_qo0dd8.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748062060/pngegg_-_2025-05-10T162558.555_qajswo.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748146220/pngegg_70_kfw3ly.png",
  ],
  3: [ // Wednesday
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321038/Mask_Group_35_csn6xf.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321078/Mask_Group_37_fqhmcm.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748320998/Mask_Group_36_gbjtya.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321319/Mask_Group_34_mtkkiw.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321962/Mask_Group_39_emmfxr.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748322031/Mask_Group_38_xhbv7y.png",
  ],
  4: [ // Thursday
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748062060/pngegg_-_2025-05-10T162558.555_qajswo.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748060806/pngegg_98_himcvk.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748060318/pngegg_2_e2f6jx.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748060880/pngegg_99_qo0dd8.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748062201/pngegg_-_2025-05-10T162941.070_l0cowy.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748146220/pngegg_70_kfw3ly.png",
  ],
  5: [ // Friday
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321962/Mask_Group_39_emmfxr.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321038/Mask_Group_35_csn6xf.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321078/Mask_Group_37_fqhmcm.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748321319/Mask_Group_34_mtkkiw.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748322031/Mask_Group_38_xhbv7y.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748320998/Mask_Group_36_gbjtya.png",
  ],
  6: [ // Saturday
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748060806/pngegg_98_himcvk.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748060318/pngegg_2_e2f6jx.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748060880/pngegg_99_qo0dd8.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748062201/pngegg_-_2025-05-10T162941.070_l0cowy.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748062060/pngegg_-_2025-05-10T162558.555_qajswo.png",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748146220/pngegg_70_kfw3ly.png",
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
  const images = imageSets[todayIndex] || []; // fallback to empty array if no images set

  return (
    <Container>
      <div className=" flex flex-col 3xl:mt-20 2xl:mt-20 3xl:px-12 2xl:px-0">
        {/* Header */}
        <div className="bg-[#3D6A5D] text-white p-4 flex justify-between items-center 3xl:ml-6 2xl:ml-4">
          <h1 className="text-2xl font-bold ml-8">Don't Miss This Week's Delights</h1>
          <span className="mr-[4.5rem]">* Authority suggested food</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row p-8 relative">
          {/* Left: 3 Days */}
          <div className="lg:w-1/2 flex flex-col justify-center items-start  3xl:space-y-20 3xl:-mt-[12rem] 2xl:space-y-20 2xl:-mt-[12rem] z-10">
            {threeDayWindow.map((dayObj) => {
              const isToday = dayObj.index === todayIndex;
              return (
                <div key={dayObj.name} className="relative flex items-start">
                  <div className="w-1 bg-gray-400 h-24 mr-4 opacity-70"></div>
                  <div>
                    <h2 className={`text-7xl font-extrabold mb-2 ${isToday ? "text-[#FF4C15]" : "text-[#F6F6F6] opacity-70"}`}>
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
          <div className="lg:w-1/2 relative min-h-[850px] flex items-center justify-center 3xl:mt-40 3xl:left-2 2xl:mt-36 2xl:left-2">
            {images.map((url, index) => (
              <div
                key={index}
                className={`absolute overflow-hidden ${
                  index === 0 ? "3xl:top-4 3xl:left-[8%] 3xl:w-40 3xl:h-52 2xl:top-4 2xl:left-[4%] 2xl:w-40 2xl:h-52 z-30" :
                  index === 1 ? "3xl:top-[4.5rem] 3xl:left-[35%] 3xl:w-40 3xl:h-52 2xl:top-[4.5rem] 2xl:left-[35%] 2xl:w-40 2xl:h-52 -translate-x-1/2 -translate-y-36 z-20 opacity-10" :
                  index === 2 ? "3xl:top-4 3xl:left-[38%] 3xl:w-64 3xl:h-52 2xl:top-4 2xl:left-[38%] 2xl:w-64 2xl:h-52 z-10" :
                  index === 3 ? "3xl:top-[16rem] 3xl:left-[38%] 3xl:w-40 3xl:h-52 2xl:top-[16rem] 2xl:left-[38%] 2xl:w-40 2xl:h-52 z-10" :
                  index === 4 ? "top-[16rem] 3xl:-left-[4%] 2xl:-left-[10.3%] w-60 h-48 opacity-15 z-30" :
                  "top-[20rem] 3xl:left-[24%] 2xl:left-[24%] w-36 h-52 z-40"
                }`}
              >
                <img src={url} alt={`dish-${index}`} className="w-full h-full object-cover" />
              </div>
            ))}

            {/* Customer Service Card */}
            <div className="absolute bottom-4 3xl:right-6 2xl:-right-8 p-6 max-w-xs text-left z-40 top-[26.5%]">
              <h3 className="text-lg font-bold text-[#2C6252] mb-2">
                Outstanding <br /> <span className="font-normal">Customer Service</span>
              </h3>
              <p className="text-xs text-[#CCCCCC]">
                Our staff is dedicated <br /> to providing warm and <br /> attentive service, <br /> making sure that
              </p>
            </div>

            {/* 50% Text */}
            <div className="absolute 3xl:right-[0rem] 2xl:-right-[4.2rem] 3xl:top-[14%] 2xl:top-[10%] transform 3xl:-translate-y-1/2 2xl:-translate-y-1/2 rotate-90 text-[#FF4C15] text-7xl font-extrabold opacity-70 z-0">
              50%
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Week;
