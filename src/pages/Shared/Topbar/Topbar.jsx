import { useEffect, useState } from 'react';
import { ChevronRight, ShoppingCart } from 'lucide-react';
import Container from '../../../components/Container';

const AnalogClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const radius = 20;
    const center = radius;
    const sec = time.getSeconds() * 6;
    const min = time.getMinutes() * 6 + time.getSeconds() * 0.1;
    const hour = ((time.getHours() % 12) / 12) * 360 + time.getMinutes() * 0.5;

    const renderTicks = () => {
        const ticks = [];
        for (let i = 0; i < 12; i++) {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = center + (radius - 2) * Math.sin(angle);
            const y1 = center - (radius - 2) * Math.cos(angle);
            const x2 = center + (radius - 4) * Math.sin(angle);
            const y2 = center - (radius - 4) * Math.cos(angle);
            ticks.push(
                <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#44B78B"
                    strokeWidth="1"
                    strokeLinecap="round"
                />
            );
        }
        return ticks;
    };

    return (
        <svg viewBox="0 0 40 40" className="h-4 w-4 md:h-5 md:w-5 drop-shadow-sm  3xl:ml-0 2xl:ml-0 xl:ml-2 lg:ml-2">
            {/* Outer circle */}
            <circle
                cx={center}
                cy={center}
                r={radius - 1}
                stroke="#2C6252"
                strokeWidth="1.5"
                fill="url(#clockGradient)"
            />

            {/* Gradient background */}
            <defs>
                <radialGradient id="clockGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#D2F1E5" />
                </radialGradient>
            </defs>

            {renderTicks()}

            {/* Hour hand */}
            <line
                x1={center}
                y1={center}
                x2={center + (radius - 10) * Math.sin((hour * Math.PI) / 180)}
                y2={center - (radius - 10) * Math.cos((hour * Math.PI) / 180)}
                stroke="#2C6252"
                strokeWidth="2"
                strokeLinecap="round"
            />
            {/* Minute hand */}
            <line
                x1={center}
                y1={center}
                x2={center + (radius - 6) * Math.sin((min * Math.PI) / 180)}
                y2={center - (radius - 6) * Math.cos((min * Math.PI) / 180)}
                stroke="#2C6252"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            {/* Second hand with glow */}
            <line
                x1={center}
                y1={center}
                x2={center + (radius - 4) * Math.sin((sec * Math.PI) / 180)}
                y2={center - (radius - 4) * Math.cos((sec * Math.PI) / 180)}
                stroke="#FF4C15"
                strokeWidth="1"
                strokeLinecap="round"
                style={{ filter: 'drop-shadow(0 0 1px #FF4C15)' }}
            />

            {/* Center dot */}
            <circle cx={center} cy={center} r="1.5" fill="#FF4C15" />
        </svg>
    );
};

const TopBar = () => {
    const [time, setTime] = useState(new Date());
    const [isKitchenOpen, setIsKitchenOpen] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date();
            setTime(currentTime);

            // Restaurant open from 10 AM to 8 PM (local time)
            const currentHour = currentTime.getHours();
            if (currentHour >= 10 && currentHour < 20) {
                setIsKitchenOpen(true);
            } else {
                setIsKitchenOpen(false);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    });

    return (
        <div className="flex items-center justify-center overflow-hidden ">
            <Container>
                <div className="flex flex-col sm:flex-row items-center bg-white px-4 sm:px-6 text-gray-700 text-sm relative z-0 3xl:ml-0  ">
                    {/* Background Image */}
                    <img
                        src="https://res.cloudinary.com/dxohwanal/image/upload/v1742451276/Group_22_fwl6sw.png"
                        alt="Group 22"
                        className="w-full sm:w-auto h-auto sm:h-[12rem] md:h-[18rem] lg:h-[22rem] xl:h-[23rem] 2xl:h-[24rem] 3xl:h-[25rem] -mt-48 sm:-mt-[6rem]  3xl:-mt-[13rem] 2xl:-mt-[13rem] xl:-mt-[13rem] lg:-mt-[13rem] sm:ml-0 3xl:ml-16 lg:-ml-12 md:-ml-4"
                    />

                    {/* Content */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:-ml-2 3xl:-ml-12 2xl:-ml-14 xl:-ml-14 lg:-ml-14 -mt-2 sm:-mt-10 ml-5 ">
                        {/* Order Label */}
                        <span className="text-[#E4E4E4] mr-0  3xl:ml-0 2xl:ml-0 xl:ml-0 lg:ml-0 text-base sm:text-sm md:text-sm 3xl:text-[20px] 2xl:text-[18px] xl:text-[17px] lg:text-[12px] md:text-[12px] mb-2 sm:mb-0 lg:whitespace-nowrap">
                            Online place order
                        </span>

                        {/* Order Button */}
                        <a href="/order">
                            <button className="bg-[#FF4C15] text-white text-sm md:text-base 3xl:text-[20px] 2xl:text-[18px] xl:text-[17px]  lg:text-[12px] md:text-[12px] px-2 md:px-3 py-1 md:py-2 rounded-sm flex items-center font-semibold mb-2 sm:mb-0 lg:whitespace-nowrap 3xl:ml-4 3xl:mr-1 2xl:ml-4 2xl:mr-1 xl:ml-4 xl:mr-1 lg:ml-4 lg:mr-1 ">
                                Order Now
                                <ChevronRight className="ml-1 text-white" size={16} md:size={20} />
                            </button>
                        </a>

                        {/* Divider */}
                        <div className="hidden sm:block">
                            <div className="flex items-center mx-0 sm:mx-1 md:mx-2 mb-2 sm:mb-0">
                                <div className="h-3 w-[1px] md:w-[2px] md:h-4 bg-gray-400 mx-1 md:mx-2"></div>
                            </div>
                        </div>

                        {/* Kitchen Availability */}
                        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 mr-0 sm:mr-2 md:mr-4 mb-2 sm:mb-0 lg:whitespace-nowrap">
                            <img
                                src={isKitchenOpen ? "/kitchen.svg" : "/kitchen-unavailable.svg"}
                                alt="Kitchen status"
                                className="h-4 w-4 md:h-5 md:w-5"
                            />
                            <span
                                className={`text-sm 3xl:text-base 2xl:text-base xl:text-base lg:text-[12px] font-semibold ${isKitchenOpen ? 'text-[#2C6252]' : 'text-[#FF4C15]'
                                    }`}
                            >
                                {isKitchenOpen ? 'Kitchen available' : 'Kitchen unavailable'}
                            </span>
                        </div>

                        {/* Dynamic Clock */}
                        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 mr-0 sm:mr-2 md:mr-4 mb-2 sm:mb-0 lg:whitespace-nowrap  3xl:ml-2 2xl:ml-2">
                            <AnalogClock />
                            <span className="text-sm 3xl:text-base 2xl:text-base xl:text-base lg:text-[12px]  text-[#2C6252]  font-semibold 3xl:ml-0 2xl:ml-4">{formattedTime}</span>
                        </div>


                        {/* Cart Icon with Circular Background and Badge (Modern Style) */}
                        <div className="relative ml-6">
                            <a href="/carts">
                                <div className="relative w-9 h-9 rounded-full bg-white border border-[#FF4C15] flex items-center justify-center shadow-[0_1px_4px_rgba(0,0,0,0.1)] transition duration-200 hover:scale-105">
                                    {/* Trendy Lucide Cart Icon */}
                                    <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-[#FF4C15]" strokeWidth={2.2} />

                                    {/* Badge */}
                                    <div className="absolute -top-1.5 -right-1.5 bg-[#FF4C15] text-white text-[10px] md:text-[11px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-md border-2 border-white">
                                        0
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>

                    {/* Bottom Line */}
                    {/* <div className="3xl:w-36 2xl:w-24 xl:w-20 lg:w-20 h-[1px] md:h-[1.5px] bg-[#FF4C15] ml-0 sm:ml-1 md:ml-2 overflow-hidden"></div> */}
                </div>

            </Container >
        </div >
    );
};

export default TopBar;
