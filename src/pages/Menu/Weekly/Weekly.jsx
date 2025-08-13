import { useContext, useState, useEffect, memo, useCallback } from "react";
import { motion as Motion } from "framer-motion";
import PropTypes from "prop-types";
import Container from "../../../components/Container";
import { CartContext } from "../../../context/CartContext";
import { toast } from "react-toastify";
import { BsCartX } from "react-icons/bs"

// Separate data from component for cleaner code
const weeklyFoodData = [
  {
    id: 1,
    title: "Crispy Chicken Wings",
    description: "Our menu is carefully crafted by expert chefs who bring creativity",
    price: 10,
    image: "https://res.cloudinary.com/dxohwanal/image/upload/v1752131105/menu14_ic1vqr.webp",
  },
  {
    id: 2,
    title: "Santa's Stuffed Mushrooms",
    description: "Our menu is carefully crafted by expert chefs who bring creativity",
    price: 12,
    image: "https://res.cloudinary.com/dxohwanal/image/upload/v1752131180/menu15_b2jpqw.webp",
  },
  {
    id: 3,
    title: "Classic Roast Brew",
    description: "Our menu is carefully crafted by expert chefs who bring creativity",
    price: 14,
    image: "https://res.cloudinary.com/dxohwanal/image/upload/v1752131250/menu16_kvd8lx.webp",
  },
  {
    id: 4,
    title: "Cheesy Crust Deluxe",
    description: "Our menu is carefully crafted by expert chefs who bring creativity",
    price: 16,
    image: "https://res.cloudinary.com/dxohwanal/image/upload/v1752131326/menu17_i0xaie.webp",
  },
];

// Reusable food card component
const FoodCard = memo(({ item, index, onAddToCart, isKitchenOpen }) => (
  <Motion.article
    className="bg-[#F8F8F8] overflow-hidden flex flex-col p-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    aria-label={`${item.title} - ${item.description}, $${item.price}/pcs`}
  >
    <div className="w-full 3xl:h-60 2xl:h-60 xl:h-40 lg:h-36 md:h-36 sm:h-36 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/400x240/CCCCCC/FFFFFF?text=Image+Not+Found";
        }}
      />
    </div>

    <div className="flex flex-col flex-grow mt-6">
      <h3 className="3xl:text-xl 2xl:text-xl xl:text-xl lg:text-[14px] md:text-[14px] sm:text-[14px] font-semibold text-[#2C6252] leading-tight mb-1">
        {item.title}
      </h3>
      <p className="text-xs text-[#CCCCCC] mb-4 flex-grow mt-2">{item.description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="3xl:text-3xl 2xl:text-3xl xl:text-3xl lg:text-xl font-bold text-[#2C6252]">
          ${item.price}
          <span className="text-lg text-[#B9B9B9] relative top-2 left-1 font-semibold">/ pcs</span>
        </span>
       <button
  disabled={!isKitchenOpen}
  className={`p-2 flex items-center justify-center  ${
    isKitchenOpen
      ? "bg-[#2C6252] text-white hover:bg-[#1F4B3C] cursor-pointer"
      : "bg-gray-400 text-gray-200 cursor-not-allowed"
  }`}
  onClick={() => isKitchenOpen && onAddToCart(item)}
  aria-label={isKitchenOpen ? `Add ${item.title} to cart` : `${item.title} unavailable`}
  type="button"
>
  {isKitchenOpen ? (
    <img src="/Path 2764.svg" alt="Add to cart icon" />
  ) : (
    <BsCartX size={24} className="animate-pulse " />
  )}
</button>
      </div>
    </div>
  </Motion.article>
));

FoodCard.displayName = "FoodCard";
FoodCard.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  isKitchenOpen: PropTypes.bool.isRequired,
};

const Weekly = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [showMore, setShowMore] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isKitchenOpen, setIsKitchenOpen] = useState(true);

  // Check screen size
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check kitchen availability (10:00 - 22:00)
  useEffect(() => {
    const checkKitchenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      setIsKitchenOpen(hours >= 10 && hours < 12);
    };
    checkKitchenStatus();
    const interval = setInterval(checkKitchenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // Cart handler
  const handleAddToCart = useCallback(
    (item) => {
      const isAlreadyInCart = cartItems.some((cartItem) => cartItem.id === item.id);
      if (isAlreadyInCart) {
        toast.warning(`${item.title} is already in cart!`, { position: "top-center", autoClose: 2000, hideProgressBar: true });
      } else {
        addToCart({ ...item, hasOrderButton: true });
        toast.success(`${item.title} added to cart!`, { position: "top-center", autoClose: 2000, hideProgressBar: true });
      }
    },
    [addToCart, cartItems]
  );

  const visibleItems = isSmallScreen && !showMore ? weeklyFoodData.slice(0, 2) : weeklyFoodData;

  return (
    <Container>
      <div className="sm:px-4 md:px-6 3xl:px-[3.5rem] 2xl:px-4 xl:px-14 lg:px-14 3xl:ml-2 2xl:ml-0 xl:ml-0 lg:-ml-16 md:-ml-16 sm:-ml-[6.5rem] 3xl:mt-24 2xl:mt-20 xl:mt-16 lg:mt-12 md:mt-12 sm:mt-2">
        <div className="py-16 3xl:mb-32 2xl:mb-24 xl:mb-16 lg:mb-12 md:mb-12 sm:mb-12">
          <header className="mb-10 text-center md:text-left">
            <h2 className="3xl:text-4xl 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl font-semibold text-[#2C6252] mb-2">
              Our Signature<span className="font-bold ml-2">Foods</span>
            </h2>
            <p className="3xl:text-lg 2xl:text-lg xl:text-sm lg:text-sm md:text-sm sm:text-sm text-[#B9B9B9]">
              Discover anything you need, the easy way
            </p>
          </header>

          <div
            className="relative w-full h-[400px] bg-cover bg-center overflow-hidden mb-16"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dxohwanal/image/upload/v1752054831/young-smiling-courier-guy-red-uniform-sitting-scooter-holding-paper-bag-saying-hello-white-wall_haw6vn_hdlpgf.webp')",
            }}
            role="img"
            aria-label="Delivery man holding paper bag on scooter"
          >
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[#2C6252] bg-opacity-90 flex items-center justify-center p-8 md:rounded-bl-none text-white 3xl:text-lg 2xl:text-lg xl:text-lg lg:text-lg md:text-sm sm:text-sm font-medium text-center md:text-left shadow-lg">
              <p className="max-w-md">
                Whether you're craving a hearty meal, a sweet treat, or a refreshing coffee —{" "}
                <span className="text-[#FF4D00]">our signature foods</span> have something for everyone.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 3xl:gap-10">
            {visibleItems.map((item, index) => (
              <FoodCard
                key={item.id}
                item={item}
                index={index}
                onAddToCart={handleAddToCart}
                isKitchenOpen={isKitchenOpen}
              />
            ))}
          </div>

          {isSmallScreen && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowMore((prev) => !prev)}
                className="bg-white text-[#2C6252] p-3 rounded-full shadow-lg"
                aria-label={showMore ? "Show less menu items" : "Show more menu items"}
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {showMore ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  )}
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Weekly;
