import { useState, useContext } from "react";
import { motion as Motion } from "framer-motion";
import Container from "../../../components/Container";
import { FaMugHot } from "react-icons/fa";
import { PiPizzaBold } from "react-icons/pi";
import { GiCutDiamond, GiMushroom } from "react-icons/gi";
import { CartContext } from "../../../context/CartContext";
import { toast } from "react-toastify";

const foodData = [
    {
        id: 1,
        title: "Crispy Fried Chicken",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 14,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750225749/Mask_Group_28_xk4xjk.png",
        category: "Signature",
    },
    {
        id: 2,
        title: "Crispy Chicken",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 12,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750225749/Mask_Group_28_xk4xjk.png",
        category: "Signature",
    },
    {
        id: 3,
        title: "Crispy Hot Chicken",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 10,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750225749/Mask_Group_28_xk4xjk.png",
        category: "Signature",
    },
    {
        id: 4,
        title: "Fried Chicken",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 8,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750225749/Mask_Group_28_xk4xjk.png",
        category: "Signature",
    },
    {
        id: 5,
        title: "Normal Fried Chicken",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 6,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750225749/Mask_Group_28_xk4xjk.png",
        category: "Signature",
    },
    {
        id: 6,
        title: "Average Fried Chicken",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 4,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750225749/Mask_Group_28_xk4xjk.png",
        category: "Signature",
    },
    {
        id: 7,
        title: "Thai Fried Chicken",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 2,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750225749/Mask_Group_28_xk4xjk.png",
        category: "Signature",
    },
    {
        id: 8,
        title: "Mozila Mushrooms",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 16,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750227110/Mask_Group_28_o3zjoz.png",
        category: "Mushroom",
    },
    {
        id: 9,
        title: "Donald Mushrooms",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 14,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750227110/Mask_Group_28_o3zjoz.png",
        category: "Mushroom",
    },
    {
        id: 12,
        title: "Sticky Mushrooms",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 10,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750227110/Mask_Group_28_o3zjoz.png",
        category: "Mushroom",
    },
    {
        id: 11,
        title: "Mehoniz Mushrooms",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 10,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750227110/Mask_Group_28_o3zjoz.png",
        category: "Mushroom",
    },
    {
        id: 12,
        title: "Italian Mushrooms",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 9,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750227110/Mask_Group_28_o3zjoz.png",
        category: "Mushroom",
    },
    {
        id: 13,
        title: "Hot Mushrooms",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 6,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750227110/Mask_Group_28_o3zjoz.png",
        category: "Mushroom",
    },
    {
        id: 14,
        title: "Normal Mushrooms",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 4,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750227110/Mask_Group_28_o3zjoz.png",
        category: "Mushroom",
    },
    {
        id: 15,
        title: "Cappuccino Creamy",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 14,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
        category: "Coffee",
    },
    {
        id: 16,
        title: "Cappuccino Coffee",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 13,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
        category: "Coffee",
    },
    {
        id: 17,
        title: "Cappuccino Italian",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 12,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
        category: "Coffee",
    },
    {
        id: 18,
        title: "Cappuccino Mozila",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 11,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
        category: "Coffee",
    },
    {
        id: 19,
        title: "Cappuccino Cup",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 10,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
        category: "Coffee",
    },
    {
        id: 20,
        title: "Cappuccino Brazilian",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 8,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
        category: "Coffee",
    },
    {
        id: 21,
        title: "Cappuccino Latte",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 7,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750223554/Mask_Group_31_g0a4u5.png",
        category: "Coffee",
    },
    {
        id: 22,
        title: "Pepperoni Pizza" ,
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 26,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png",
        category: "Pizza",
    },
    {
        id: 23,
        title: "Pepperoni Mojito",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 22,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png",
        category: "Pizza",
    },
    {
        id: 24,
        title: "Pepperoni Deluxe",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 20,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png",
        category: "Pizza",
    },
    {
        id: 25,
        title: "Pepperoni Supreme",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 18,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png",
        category: "Pizza",
    },
    {
        id: 26,
        title: "Pepperoni Special",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 16,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png",
        category: "Pizza",
    },
    {
        id: 27,
        title: "Pepperoni Fieasta",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 14,
        image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750226948/Mask_Group_32_tntr4o.png",
        category: "Pizza",
    },
    {
        id: 28,
        title: "Pepperoni Normal",
        description: "Our menu is carefully crafted by expert chefs who bring creativity",
        price: 12,
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const Category = () => {
  const [activeTab, setActiveTab] = useState("Coffee");
  const { addToCart, cartItems } = useContext(CartContext);

  const filteredItems = foodData.filter((item) => item.category === activeTab);

  return (
    <Container>
      <div className="3xl:px-14 2xl:px-4 xl:px-14 lg:px-0 3xl:mb-40 2xl:mb-32 xl:mb-36 lg:mb-28 mt-6">
        <Motion.h2
          className="3xl:text-3xl 2xl:text-3xl xl:text-3xl lg:text-2xl font-semibold text-[#1D4B3F] mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Delicious<span className="font-bold ml-2">Foods</span>
        </Motion.h2>

        <div className="flex justify-start gap-6 mb-10 flex-wrap">
          {tabs.map((tab, i) => (
            <Motion.button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-6 py-2 border font-medium text-sm transition-all ${
                activeTab === tab.name
                  ? "bg-[#FF4C15] text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              animate="visible"
            >
              {tab.icon}
              {tab.name}
            </Motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {filteredItems.slice(0, 3).map((item, i) => (
            <FoodCard
              key={item.id}
              item={item}
              addToCart={addToCart}
              cartItems={cartItems}
              index={i}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 3xl:gap-6 2xl:gap-6 xl:gap-6 lg:gap-4 mt-12">
          {filteredItems.slice(3, 7).map((item, i) => (
            <FoodCard
              key={item.id}
              item={item}
              addToCart={addToCart}
              cartItems={cartItems}
              index={i + 3}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

const FoodCard = ({ item, addToCart, cartItems, index }) => {
  const isAlreadyInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  const handleClick = () => {
    if (isAlreadyInCart) {
      toast.warning(`${item.title} is already in cart!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      const cleanItem = { ...item, hasOrderButton: true };
      addToCart(cleanItem);
      toast.success(`${item.title} added to cart!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <Motion.div
      className="bg-[#F8F8F8] overflow-hidden flex flex-col p-6"
      variants={fadeUp}
      custom={index}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
    >
      <div className="w-full 3xl:h-60 2xl:h-60 xl:h-60 lg:h-36 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x240/CCCCCC/FFFFFF?text=Image+Not+Found";
          }}
        />
      </div>
      <div className="flex flex-col flex-grow mt-6">
        <h3 className="text-xl font-semibold text-[#2C6252] leading-tight mb-1">
          {item.title}
        </h3>
        <p className="text-xs text-[#CCCCCC] mb-4 flex-grow mt-2">
          {item.description}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="3xl:text-3xl 2xl:text-3xl xl:text-3xl lg:text-2xl font-bold text-[#2C6252]">
            ${item.price}
            <span className="text-lg text-[#B9B9B9] relative top-2 left-1 font-semibold">/ pcs</span>
          </span>
          <button
            className="bg-[#2C6252] text-white p-2 focus:outline-none focus:ring-2 focus:ring-[#2C6252] focus:ring-opacity-50"
            onClick={handleClick}
          >
            <img src="/Path 2764.svg" alt="Add" />
          </button>
        </div>
      </div>
    </Motion.div>
  );
};

export default Category;
