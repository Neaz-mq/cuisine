import { useState } from "react";
import Container from "../../../components/Container";
import { FaMugHot } from "react-icons/fa";
import { PiPizzaBold } from "react-icons/pi";
import { GiCutDiamond, GiMushroom } from "react-icons/gi";

const foodData = [
    {
        id: 1,
        title: "Crispy Fried Chicken",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 14,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750225749/Mask_Group_28_xk4xjk.png",
        category: "Signature",
    },
    {
        id: 2,
        title: "Crispy Fried Chicken",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 14,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750225749/Mask_Group_28_xk4xjk.png",
        category: "Signature",
    },
    {
        id: 3,
        title: "Crispy Fried Chicken",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 14,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750225749/Mask_Group_28_xk4xjk.png",
        category: "Signature",
    },
    {
        id: 4,
        title: "Crispy Fried Chicken",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 14,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750225749/Mask_Group_28_xk4xjk.png",
        category: "Signature",
    },
    {
        id: 5,
        title: "Crispy Fried Chicken",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 14,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750225749/Mask_Group_28_xk4xjk.png",
        category: "Signature",
    },
    {
        id: 6,
        title: "Crispy Fried Chicken",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 14,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750225749/Mask_Group_28_xk4xjk.png",
        category: "Signature",
    },
    {
        id: 7,
        title: "Crispy Fried Chicken",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 14,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750225749/Mask_Group_28_xk4xjk.png",
        category: "Signature",
    },
    {
        id: 8,
        title: "Stuffed Mushrooms",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 10,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750227110/Mask_Group_28_o3zjoz.png",
        category: "Mushroom",
    },
    {
        id: 9,
        title: "Stuffed Mushrooms",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 10,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750227110/Mask_Group_28_o3zjoz.png",
        category: "Mushroom",
    },
    {
        id: 10,
        title: "Stuffed Mushrooms",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 10,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750227110/Mask_Group_28_o3zjoz.png",
        category: "Mushroom",
    },
    {
        id: 11,
        title: "Stuffed Mushrooms",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 10,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750227110/Mask_Group_28_o3zjoz.png",
        category: "Mushroom",
    },
    {
        id: 12,
        title: "Stuffed Mushrooms",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 10,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750227110/Mask_Group_28_o3zjoz.png",
        category: "Mushroom",
    },
    {
        id: 13,
        title: "Stuffed Mushrooms",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 10,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750227110/Mask_Group_28_o3zjoz.png",
        category: "Mushroom",
    },
    {
        id: 14,
        title: "Stuffed Mushrooms",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 10,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750227110/Mask_Group_28_o3zjoz.png",
        category: "Mushroom",
    },
    {
        id: 15,
        title: "Cappuccino",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 12,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
        category: "Coffee",
    },
    {
        id: 16,
        title: "Cappuccino",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 12,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
        category: "Coffee",
    },
    {
        id: 17,
        title: "Cappuccino",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 12,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
        category: "Coffee",
    },
    {
        id: 18,
        title: "Cappuccino",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 12,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
        category: "Coffee",
    },
    {
        id: 19,
        title: "Cappuccino",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 12,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
        category: "Coffee",
    },
    {
        id: 20,
        title: "Cappuccino",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 12,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
        category: "Coffee",
    },
    {
        id: 21,
        title: "Cappuccino",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 12,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
        category: "Coffee",
    },
    {
        id: 22,
        title: "Pepperoni",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 16,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png",
        category: "Pizza",
    },
    {
        id: 23,
        title: "Pepperoni",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 16,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png",
        category: "Pizza",
    },
    {
        id: 24,
        title: "Pepperoni",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 16,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png",
        category: "Pizza",
    },
    {
        id: 25,
        title: "Pepperoni",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 16,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png",
        category: "Pizza",
    },
    {
        id: 26,
        title: "Pepperoni",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 16,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png",
        category: "Pizza",
    },
    {
        id: 27,
        title: "Pepperoni",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 16,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png",
        category: "Pizza",
    },
    {
        id: 28,
        title: "Pepperoni",
        desc: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 16,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png",
        category: "Pizza",
    },
];

const tabs = [
    { name: "Signature", icon: <GiCutDiamond size={18} /> },
     { name: "Mushroom", icon: <GiMushroom size={18} /> },
    { name: "Coffee", icon: <FaMugHot size={18} /> },
    { name: "Pizza", icon: <PiPizzaBold size={18} /> },
];

const Category = () => {
    const [activeTab, setActiveTab] = useState("Coffee");

    const filteredItems = foodData.filter((item) => item.category === activeTab);

    return (
        <Container>
            <div className="3xl:px-14 2xl:px-4 xl:px-14 3xl:mb-40 2xl:mb-32 xl:mb-36 mt-6">
                <h2 className="text-3xl font-semibold text-[#1D4B3F] mb-10">
                    Delicious<span className="font-bold ml-2">Foods</span>
                </h2>

                <div className="flex justify-start gap-6 mb-10 flex-wrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`flex items-center gap-2 px-6 py-2  border 
                    ${activeTab === tab.name ? "bg-[#FF4C15] text-white" : "bg-gray-100 text-gray-500"}
                    font-medium text-sm transition-all`}
                        >
                            {tab.icon}
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* First 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {filteredItems.slice(0, 3).map((item) => (
                        <FoodCard key={item.id} item={item} />
                    ))}
                </div>

                {/* Next up to 4 Cards (only if available, max 7 total) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {filteredItems.slice(3, 7).map((item) => (
                        <FoodCard key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </Container>
    );
};

const FoodCard = ({ item }) => (
    <div className="bg-[#F8F8F8] overflow-hidden flex flex-col p-6">
        <div className="w-full h-60 overflow-hidden">
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
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
                <span className="text-3xl font-bold text-[#2C6252]">
                    ${item.price} <span className="text-lg text-[#B9B9B9] relative top-2 left-1 font-semibold">/ pcs</span>
                </span>
                <button className="bg-[#2C6252] text-white p-2 focus:outline-none focus:ring-2 focus:ring-[#2C6252] focus:ring-opacity-50">
                    <img src="/Path 2764.svg" alt="Add" />
                </button>
            </div>
        </div>
    </div>
);

export default Category;
