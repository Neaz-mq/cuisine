import { Link } from "react-router-dom";
import Container from "../../../components/Container";

const Picks = () => {
    return (
        <Container>

            {/* Top Section */}
            <div className="3xl:px-12 3xl:ml-7 3xl:-mt-2 3xl:mb-44 2xl:px-0 2xl:ml-6 2xl:-mt-2 2xl:mb-44 xl:px-6 xl:ml-7 xl:-mt-2 xl:mb-44 ">
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    <div className="bg-[#FFFAF8] p-6 md:p-16 ">
                        <h2 className="text-3xl 3xl:text-4xl 2xl:text-4xl xl:text-3xl font-semibold text-[#2C6252]   3xl:mb-4  2xl:mb-4  xl:mb-6">
                            Chef's Weekly Picks <br /> <span className="text-[#FF4C15] leading-relaxed  font-normal">- Just for You!</span>
                        </h2>
                        <p className="text-sm  text-[#2C6252] 3xl:mb-6 2xl:mb-6 xl:mb-14">
                            Management reserves the right to modify or cancel the <br /> offer without prior notice.
                        </p>
                       <Link to="/menu">
                        <button className="bg-[#FF4C15]  text-white font-semibold py-2 px-6">
                            Order Now &gt;
                        </button>
                       </Link>
                        <div className="flex justify-end -mt-28 ml-44">
                            {/* Image of Chicken Nuggets and Fries */}
                            <img
                                src="https://res.cloudinary.com/dxohwanal/image/upload/v1750063830/pngegg_58_muaisk.png" // Replace with your actual image path
                                alt="Chicken Nuggets and Fries"
                                className="rounded-lg w-full max-w-lg object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column (Enjoy unbeatable deals & Don't Miss This Week's Delights) */}
                    <div className="space-y-8">
                        {/* Enjoy unbeatable deals with us */}
                        <div className="bg-[#F8F8F8]  p-6 md:p-8  flex items-center">
                            <div className="w-1/3 pr-4">
                                <img
                                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1750064469/pngegg_60_paxfnc.png" // Replace with your actual image path
                                    alt="Grilled Meat"
                                    className="rounded-lg w-full object-cover"
                                />
                            </div>
                            <div className="w-2/3">
                                <h3 className="3xl:text-2xl 2xl:text-2xl xl:text-xl font-semibold text-[#2C6252] mb-2">
                                    Enjoy unbeatable <br /> deals with us
                                </h3>
                                <p className="3xl:text-sm 2xl:text-sm xl:text-[10px] text-[#BCB1AD]">
                                    Whether you're craving a hearty meal, a sweet treat, or a refreshing coffee—our weekly offers have.
                                </p>
                            </div>
                        </div>

                        {/* Don't Miss This Week's Delights */}
                        <div className="bg-[#2C6252] p-6 md:p-8  text-white flex items-center">
                            <div className="w-2/3 pr-4">
                                <h3 className="3xl:text-2xl 2xl:text-2xl xl:text-xl font-semibold mb-2">
                                    Don't Miss This Week's <br /> Delights
                                </h3>
                                <p className="3xl:text-sm 2xl:text-sm xl:text-[10px] mb-4 text-[#BCB1AD]">
                                    Whether you're craving a hearty meal, a sweet treat, or a refreshing coffee
                                </p>
                                <a href="#" className="3xl:text-sm 2xl:text-sm xl:text-[10px] text-white underline hover:no-underline">
                                    learn more
                                </a>
                            </div>
                            <div className="w-1/3 flex justify-end">
                                <img
                                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1750064994/Mask_Group_44_jlddtq.png" // Replace with your actual image path
                                    alt="Pizza"
                                    className=" w-full object-cover relative top-12 left-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Chef's Weekly Picks - Bottom Section (UPDATED to place text on the right) */}
                <div className=" py-8 md:py-12">
                    <div className="flex flex-col md:flex-row md:items-start md:space-x-8 mb-6"> {/* Use flex for horizontal layout on medium screens and up */}
                        {/* Left: Chef's Weekly Picks title with horizontal line */}
                        <div className="flex items-center flex-shrink-0 mb-4 md:mb-0 md:w-1/3">
                            <h2 className="text-3xl font-semibold text-[#2C6252] whitespace-nowrap">Chef's Weekly Picks </h2>
                            <div className="flex-grow border-b border-[#D4D4D4] ml-10 hidden md:block"></div>
                        </div>

                        {/* Right: Text content */}
                        <div className="md:w-2/3 -mt-3 ">
                            <p className="text-sm text-[#BCB1AD] leading-relaxed mb-4 ml-36">
                                Cheesy Bites Pizza Return: Pizza Hut has reintroduced its popular Cheesy Bites Pizza for a limited time. This large, one-topping pizza features a crust made of 28 pull-apart, cheese-filled bites, perfect for dipping 50% Off Online Orders.
                            </p>
                            <p className="text-sm text-[#FF4C15] leading-relaxed ml-36"> {/* Adjusted color to red-500 for the Domino's offer */}
                                Domino's is offering 50% off all menu-priced pizzas ordered online from March 17 to 23, 2025. Customers can choose from any size pizza with any type. <a href="#" className="text-[#FF4C15] underline hover:no-underline">Learn more.</a>
                            </p>
                        </div>
                    </div>

                    {/* Product Grid (Original product grid remains) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 ">
                        {/* Product Card 1 */}
                        <div className="relative bg-[#E9EFED] overflow-hidden p-6  ">
                            <div className="p-4">
                                <p className="font-semibold text-[#FF4C15]">Cheesy</p>
                                <p className="font-semibold text-[#FF4C15]">Crust Deluxe</p>
                                <p className="mt-6 text-xs text-[#2D6252]">Our menu is carefully crafted by expert
                                    chefs only </p>
                            </div>


                            <div className="p-4">
                                <p className="3xl:text-2xl 2xl:text-xl xl:text-lg font-semibold text-white -mt-4 3xl:whitespace-nowrap">Crispy Garden Glory</p>
                                <p className="text-2xl font-bold text-gray-900 mt-3">- $10.99</p>
                            </div>

                            <img
                                src="https://res.cloudinary.com/dxohwanal/image/upload/v1750068539/pngegg_51_uh0wtk.png" // Replace with actual image path
                                alt="Crispy Chicken Burger"
                                className="w-full  object-cover mt-6 "
                            />

                            <div className="absolute right-8 top-72 bg-[#2B6050] text-white rounded-full  w-20 h-20 flex flex-col items-center justify-center">
                                <span className="text-lg font-bold leading-tight">30%</span>
                                <span className="text-lg font-medium">off</span>
                            </div>

                        </div>

                        {/* Product Card 2 */}
                        <div className="relative bg-[#E9EFED] overflow-hidden p-4 ">
                            <div className="p-4">
                                <p className="font-semibold text-[#FF4C15]">Cheesy</p>
                                <p className="font-semibold text-[#FF4C15]">Crust Deluxe</p>
                                <p className="mt-6 text-xs text-[#2D6252]">Our menu is carefully crafted by expert
                                    chefs only</p>
                            </div>

                              <div className="p-4">
                                <p className="3xl:text-2xl 2xl:text-xl xl:text-lg  font-semibold text-white -mt-4">Crispy Garden Glory</p>
                                <p className="text-2xl font-bold text-gray-900 mt-3">- $10.99</p>
                            </div>
                            <img
                                src="https://res.cloudinary.com/dxohwanal/image/upload/v1750069731/pngegg_57_pp0xjv.png" // Replace with actual image path
                                alt="Shrimp Fritters"
                                 className="w-full  object-cover mt-4 "
                            />
                              <div className="absolute right-6 top-72 bg-[#FF4C15] text-white rounded-full  w-20 h-20 flex flex-col items-center justify-center">
                                <span className="text-lg font-bold leading-tight">10%</span>
                                <span className="text-lg font-medium">off</span>
                            </div>
                           
                           
                        </div>

                        {/* Product Card 3 */}
                        <div className="relative bg-[#E9EFED] overflow-hidden p-4">
                            <div className="p-4">
                               <p className="font-semibold text-[#FF4C15]">Cheesy</p>
                                <p className="font-semibold text-[#FF4C15]">Crust Deluxe</p>
                                <p className="mt-6 text-xs text-[#2D6252]">Our menu is carefully crafted by expert
                                    chefs only</p>
                            </div>
                              <div className="p-4">
                                <p className="3xl:text-2xl 2xl:text-xl xl:text-lg font-semibold text-white -mt-4">Crispy Garden Glory</p>
                                <p className="text-2xl font-bold text-gray-900 mt-3">- $10.99</p>
                            </div>
                            <img
                                src="https://res.cloudinary.com/dxohwanal/image/upload/v1750070674/pngegg_53_o3eh9m.png" // Replace with actual image path
                                alt="Shrimp Fritters"
                                 className="w-full  object-cover mt-20 "
                            />
                           <div className="absolute right-6 top-72 bg-[#2B6050] text-white rounded-full  w-20 h-20 flex flex-col items-center justify-center">
                                <span className="text-lg font-bold leading-tight">36%</span>
                                <span className="text-lg font-medium">off</span>
                            </div>
                        </div>

                        {/* Product Card 4 */}
                        <div className="relative bg-[#E9EFED] overflow-hidden p-4">
                            <div className="p-4">
                                 <p className="font-semibold text-[#FF4C15]">Cheesy</p>
                                <p className="font-semibold text-[#FF4C15]">Crust Deluxe</p>
                                <p className="mt-6 text-xs text-[#2D6252]">Our menu is carefully crafted by expert
                                    chefs only</p>
                            </div>
                            <div className="p-4">
                                <p className="3xl:text-2xl 2xl:text-xl xl:text-lg font-semibold text-white -mt-4">Crispy Garden Glory</p>
                                <p className="text-2xl font-bold text-gray-900 mt-3">- $10.99</p>
                            </div>
                              <img
                                src="https://res.cloudinary.com/dxohwanal/image/upload/v1750070975/pngegg_61_kdlgnr.png" // Replace with actual image path
                                alt="Shrimp Fritters"
                                 className="w-full  object-cover "
                            />
                            
                           <div className="absolute right-6 top-72 bg-[#FF4C15] text-white rounded-full  w-20 h-20 flex flex-col items-center justify-center">
                                <span className="text-lg font-bold leading-tight">45%</span>
                                <span className="text-lg font-medium">off</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Picks;

