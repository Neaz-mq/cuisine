import { useLocation } from 'react-router-dom'; 

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu'},
    { name: 'Signature Food', path: '/signature-food'},
    { name: 'Our Chefs', path: '/chefs' }
];

const Navbar = () => {
    const location = useLocation(); 

    return (
        <div className="sticky flex flex-col items-center w-20 p-4 z-20 3xl:-mt-[8rem] 2xl:-mt-[8rem] xl:-mt-[7rem] lg:-mt-[7rem] md:-mt-[4rem] sm:-mt-[4rem]">
            {/* Cuisine Section */}
            <a href="/">
                <div className="absolute left-0 top-0 3xl:w-32 2xl:w-28 xl:w-24 lg:w-20 bg-[#2C6252] flex flex-col items-center py-4">
                    <img src="/logo.svg" alt="Cuisine Logo" className="3xl:h-6 2xl:h-5 w-auto 3xl:ml-20 2xl:ml-14 xl:ml-10 lg:ml-10" />
                    <span className="3xl:text-lg 2xl:text-[15px] xl:text-base lg:text-base font-bold text-white mt-4 3xl:ml-20 2xl:ml-14 xl:ml-10 lg:ml-10" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                        Cuisine
                    </span> 
                </div>
            </a>

            {/* Navbar Links */}
            <div className="flex flex-col 3xl:space-y-6 2xl:space-y-4 w-full items-center 3xl:mt-44 2xl:mt-36 3xl:ml-32 2xl:ml-[5.8rem] xl:ml-[3.8rem] lg:ml-[2.8rem]">
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.path}
                        className={`3xl:text-[15px] 2xl:text-[13px] xl:text-sm lg:text-sm flex flex-row-reverse items-center space-x-1 ${
                            location.pathname === item.path ? 'text-[#2C6252]' : 'text-[#CCCCCC] hover:text-[#2C6252]'
                        }`}
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Book Table Button */}
            <button className="bg-[#FF4C15] flex flex-col items-center 3xl:py-4 3xl:px-3 2xl:py-3 2xl:px-3 w-full 3xl:ml-32 2xl:ml-24 xl:ml-16 lg:ml-12 3xl:mt-10 2xl:mt-6" >
              <a href="/table">
                  <span className="3xl:text-[18px] 2xl:text-[15px] xl:text-[16px] lg:text-[14px] font-bold text-white" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    Book a Table
                </span>
                <img src="/table.svg" alt="Table Icon" className="3xl:h-5 2xl:h-4 w-auto 3xl:mt-4 2xl:mt-3" style={{ writingMode: 'vertical-rl' }} />
              </a>
            </button>
        </div>
    );
};

export default Navbar;

