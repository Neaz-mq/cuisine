import { useEffect, useState, useRef, memo, useMemo } from 'react';
import { ChevronRight, ShoppingCart } from 'lucide-react';
import Container from '../../../components/Container';
import { Link } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const AnalogClock = memo(() => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const radius = 20;
    const center = radius;
    const sec = time.getSeconds() * 6;
    const min = time.getMinutes() * 6 + time.getSeconds() * 0.1;
    const hour = ((time.getHours() % 12) / 12) * 360 + time.getMinutes() * 0.5;

    const renderTicks = () => {
        return Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = center + (radius - 2) * Math.sin(angle);
            const y1 = center - (radius - 2) * Math.cos(angle);
            const x2 = center + (radius - 4) * Math.sin(angle);
            const y2 = center - (radius - 4) * Math.cos(angle);
            return (
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
        });
    };

    return (
        <svg
            viewBox="0 0 40 40"
            className="h-4 w-4 md:h-5 md:w-5 drop-shadow-sm 3xl:ml-0 2xl:ml-0 xl:ml-2 lg:ml-2"
        >
            <defs>
                <radialGradient id="clockGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#D2F1E5" />
                </radialGradient>
            </defs>
            <circle
                cx={center}
                cy={center}
                r={radius - 1}
                stroke="#2C6252"
                strokeWidth="1.5"
                fill="url(#clockGradient)"
            />
            {renderTicks()}
            <line
                x1={center}
                y1={center}
                x2={center + (radius - 10) * Math.sin((hour * Math.PI) / 180)}
                y2={center - (radius - 10) * Math.cos((hour * Math.PI) / 180)}
                stroke="#2C6252"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1={center}
                y1={center}
                x2={center + (radius - 6) * Math.sin((min * Math.PI) / 180)}
                y2={center - (radius - 6) * Math.cos((min * Math.PI) / 180)}
                stroke="#2C6252"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
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
            <circle cx={center} cy={center} r="1.5" fill="#FF4C15" />
        </svg>
    );
});

const TopBar = memo(() => {
    const [time, setTime] = useState(new Date());
    const [isKitchenOpen, setIsKitchenOpen] = useState(true);
    const { cartCount } = useCart();
    const ampmRef = useRef(time.getHours() >= 12 ? 'PM' : 'AM');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime(now);

            const currentAMPM = now.getHours() >= 12 ? 'PM' : 'AM';
            if (ampmRef.current !== currentAMPM) {
                ampmRef.current = currentAMPM;
            }

            setIsKitchenOpen(now.getHours() >= 10 && now.getHours() < 20);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Memoize formatted time without AM/PM to prevent flickering
    const formattedTime = useMemo(() => {
        return time
            .toLocaleTimeString(undefined, {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            })
            .replace(/ (AM|PM)/, '');
    }, [time]);

    return (
        <div className="flex items-center justify-center overflow-hidden">
            <Container>
                <div className="flex flex-col sm:flex-row items-center bg-white px-4 sm:px-6 text-gray-700 text-sm relative z-0 3xl:-ml-0 2xl:-ml-0 xl:-ml-0 lg:-ml-10">
                    <img
                        src="https://res.cloudinary.com/dxohwanal/image/upload/v1752050762/Group_22_fhiuuw.png"
                        alt="Group 22"
                        loading="lazy"
                        onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/600x400?text=Image';
                        }}
                        className="w-full sm:w-auto h-auto sm:h-[12rem] md:h-[18rem] lg:h-[20rem] xl:h-[23rem] 2xl:h-[24rem] 3xl:h-[25rem] -mt-48 sm:-mt-[6rem] 3xl:-mt-[13rem] 2xl:-mt-[13rem] xl:-mt-[13rem] lg:-mt-[13rem] sm:ml-0 3xl:ml-16 lg:-ml-12 md:-ml-4"
                    />
                    <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:-ml-2 3xl:-ml-12 2xl:-ml-14 xl:-ml-14 lg:-ml-14 -mt-2 sm:-mt-10 ml-5 relative">
                        <span className="text-[#E4E4E4] mr-0 text-base sm:text-sm md:text-sm 3xl:text-[20px] 2xl:text-[18px] xl:text-[17px] lg:text-[14px] md:text-[12px] mb-2 sm:mb-0 whitespace-nowrap">
                            Online place order
                        </span>
                        <a href="/order">
                            <button className="bg-[#FF4C15] text-white text-sm md:text-base 3xl:text-[20px] 2xl:text-[18px] xl:text-[17px] lg:text-[14px] md:text-[12px] px-2 md:px-3 py-1 md:py-2 rounded-sm flex items-center font-semibold mb-2 sm:mb-0 hover:scale-105 transition-transform whitespace-nowrap ml-3">
                                Order Now
                                <ChevronRight className="ml-1 text-white" size={16} />
                            </button>
                        </a>
                        <div className="mx-1 md:mx-2 mb-2 sm:mb-0">
                            <div className="h-3 w-[1px] md:w-[2px] md:h-4 bg-gray-400 ml-2" />
                        </div>
                        <div className="flex items-center space-x-2 md:space-x-4 mr-0 sm:mr-2 md:mr-4 mb-2 sm:mb-0 ml-2">
                            <img
                                src={isKitchenOpen ? '/kitchen.svg' : '/kitchen-unavailable.svg'}
                                alt="Kitchen status"
                                loading="lazy"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://placehold.co/20x20?text=X';
                                }}
                                className="h-4 w-4 md:h-5 md:w-5"
                            />
                            <span
                                className={`3xl:text-[16px] 2xl:text-[15px] xl:text-[15px] lg:text-[13px] font-semibold whitespace-nowrap ${isKitchenOpen ? 'text-[#2C6252]' : 'text-[#FF4C15]'
                                    }`}
                            >
                                {isKitchenOpen ? 'Kitchen available' : 'Kitchen unavailable'}
                            </span>
                        </div>
                        <div className="flex items-center space-x-1 md:space-x-4 mr-2 mb-2 sm:mb-0 ml-2">
                            <AnalogClock />
                            <div className="inline-flex items-baseline 3xl:min-w-[100px] 2xl:min-w-[90px] xl:min-w-[80px] lg:min-w-[50px] justify-end">
                                <span
                                    className="3xl:text-[16px] 2xl:text-[15px] xl:text-[15px] lg:text-[13px] text-[#2C6252] font-semibold whitespace-nowrap [font-variant-numeric:tabular-nums]"
                                    style={{ minWidth: '82px', display: 'inline-block', fontVariantNumeric: 'tabular-nums' }}
                                >
                                    {formattedTime}
                                </span>
                                <span className="text-[#2C6252] font-semibold text-[12px] md:text-[13px] lg:text-[13px] xl:text-[15px] 2xl:text-[15px] 3xl:text-[16px] 3xl:-ml-2 2xl:-ml-3 xl:-ml-4 lg:-ml-6">
                                    {ampmRef.current}
                                </span>
                            </div>



                        </div>

                        {/* Cart */}
                        <div className="ml-auto mb-2 sm:mb-0 relative">
                            <Link to="/carts">
                                <div className="relative w-9 h-9 rounded-full bg-white border border-[#FF4C15] flex items-center justify-center shadow-[0_1px_4px_rgba(0,0,0,0.1)] hover:scale-105 3xl:right-24 2xl:right-10 xl:-right-4 lg:-right-14 transition-transform">
                                    <ShoppingCart
                                        className="w-4 h-4 md:w-5 md:h-5 text-[#FF4C15]"
                                        strokeWidth={2.2}
                                    />
                                    <div className="absolute -top-1.5 -right-1.5 bg-[#FF4C15] text-white text-[10px] md:text-[11px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-md border-2 border-white">
                                        {cartCount}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
});

export default TopBar;
