import Container from "../../../components/Container";

// Define FoodCard component for individual food item display
const FoodCard = ({ item }) => (
    <div className="bg-[#F8F8F8] overflow-hidden flex flex-col  p-6"> {/* Added rounded-xl and shadow-lg */}
        <div className="w-full 3xl:h-60 2xl:h-60 xl:h-60 lg:h-36 overflow-hidden "> {/* Added rounded-md */}
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x240/CCCCCC/FFFFFF?text=Image+Not+Found" }} // Placeholder on error
            />
        </div>
        <div className="flex flex-col flex-grow mt-6">
            <h3 className="text-xl font-semibold text-[#2C6252] leading-tight mb-1">
                {item.title}
            </h3>
            <p className="text-xs text-[#CCCCCC] mb-4 flex-grow mt-2">
                {item.desc}
            </p>
            <div className="flex justify-between items-center mt-auto">
                <span className="3xl:text-3xl 2xl:text-3xl xl:text-3xl lg:text-2xl font-bold text-[#2C6252]">
                    ${item.price} <span className="text-lg text-[#B9B9B9] relative top-2 left-1 font-semibold">/ pcs</span>
                </span>
                <button className="bg-[#2C6252] text-white p-2 focus:outline-none focus:ring-2 focus:ring-[#2C6252] focus:ring-opacity-50"> {/* Added rounded-full, hover effect */}
                    {/* Placeholder for the add icon, you can use an SVG or another icon library */}
                   <img src="/Path 2764.svg" alt="Add" />
                </button>
            </div>
        </div>
    </div>
);

// Data for the weekly food offers
const weeklyFoodData = [
    {
        id: 1,
        title: "Crispy Chicken Wings",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 10,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750225749/Mask_Group_28_xk4xjk.png",
    },
    {
        id: 2,
        title: "Santa's Stuffed Mushrooms",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 12,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750227110/Mask_Group_28_o3zjoz.png", // Placeholder image
    },
    {
        id: 3,
        title: "Classic Roast Brew",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 14,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png", // Reusing coffee image
    },
    {
        id: 4,
        title: "Cheesy Crust Deluxe",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 16,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png", // Placeholder image
    },
];

const Weekly = () => {
    return (
       
       <Container>
        
        <div className="px-4 sm:px-6 3xl:px-[3.5rem] 2xl:px-4 xl:px-14 lg:px-1 3xl:ml-2 3xl:mt-28">
            <div className="py-16 3xl:mb-32 2xl:mb-40 xl:mb-40 lg:mb-24 "> 
                {/* Section Header */}
                <div className="mb-10 text-center md:text-left">
                    <h2 className="3xl:text-4xl 2xl:text-4xl xl:text-3xl lg:text-2xl  font-semibold text-[#2C6252] mb-2">
                        Our Signature<span className="font-bold ml-2">Foods</span>
                    </h2>
                    <p className="3xl:text-lg 2xl:text-lg xl:text-sm text-[#B9B9B9]">
                        Discover anything you need, the easy way
                    </p>
                </div>

                {/* Main Offer Image and Text */}
                <div className="relative w-full h-[400px] bg-cover bg-center  overflow-hidden mb-16"
                    style={{ backgroundImage: "url('https://res.cloudinary.com/dxohwanal/image/upload/v1750229832/Mask_Group_30_g2huve.png')" }} // Example background image
                >
                    <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[#2C6252] bg-opacity-90 flex items-center justify-center p-8 md:rounded-bl-none text-white text-lg font-medium text-center md:text-left shadow-lg">
                        <p className="max-w-md">
                            Whether you're craving a hearty meal, a sweet treat, or a refreshing coffee—<span className="text-[#FF4D00]">our signature foods</span> have something for everyone.
                        </p>
                    </div>
                </div>

                {/* Food Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 3xl:gap-10 2xl:gap-10 xl:gap-10 lg:gap-4">
                    {weeklyFoodData.map((item) => (
                        <FoodCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
        </Container>
    );
};

export default Weekly;
