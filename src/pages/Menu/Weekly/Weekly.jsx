import { useContext } from "react";
import { motion as Motion } from "framer-motion";
import Container from "../../../components/Container";
import { CartContext } from "../../../context/CartContext";
import { toast } from "react-toastify";

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

const Weekly = () => {
  const { addToCart, cartItems } = useContext(CartContext);

  const FoodCard = ({ item, index }) => {
    const handleAddToCart = () => {
      const isAlreadyInCart = cartItems.some(cartItem => cartItem.id === item.id);

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
        addToCart({ ...item, hasOrderButton: true });
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
      <Motion.article
        className="bg-[#F8F8F8] overflow-hidden flex flex-col p-6"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        aria-label={`${item.title} - ${item.description}, priced at $${item.price} per piece`}
      >
        <Motion.div
          className="w-full 3xl:h-60 2xl:h-60 xl:h-40 lg:h-36 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
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
        </Motion.div>

        <div className="flex flex-col flex-grow mt-6">
          <h3 className="3xl:text-xl 2xl:text-xl xl:text-xl lg:text-[14px] font-semibold text-[#2C6252] leading-tight mb-1">
            {item.title}
          </h3>
          <p className="text-xs text-[#CCCCCC] mb-4 flex-grow mt-2">{item.description}</p>
          <div className="flex justify-between items-center mt-auto">
            <span className="3xl:text-3xl 2xl:text-3xl xl:text-3xl lg:text-xl font-bold text-[#2C6252]">
              ${item.price}
              <span className="text-lg text-[#B9B9B9] relative top-2 left-1 font-semibold">/ pcs</span>
            </span>
            <button
              className="bg-[#2C6252] text-white p-2 focus:outline-none focus:ring-2 focus:ring-[#2C6252] focus:ring-opacity-50"
              onClick={handleAddToCart}
              aria-label={`Add ${item.title} to cart`}
              type="button"
            >
              <img src="/Path 2764.svg" alt="Add" />
            </button>
          </div>
        </div>
      </Motion.article>
    );
  };

  return (
    <Container>
      <div className="px-4 sm:px-6 3xl:px-[3.5rem] 2xl:px-4 xl:px-14 lg:px-14 3xl:ml-2 2xl:ml-0 xl:ml-0 lg:-ml-16 3xl:mt-24 2xl:mt-20 xl:mt-16 lg:mt-12 ">
        <div className="py-16 3xl:mb-32 2xl:mb-24 xl:mb-16 lg:mb-12">
          {/* Section Header */}
          <header className="mb-10 text-center md:text-left" aria-label="Section header">
            <h2 className="3xl:text-4xl 2xl:text-4xl xl:text-3xl lg:text-2xl font-semibold text-[#2C6252] mb-2">
              Our Signature<span className="font-bold ml-2">Foods</span>
            </h2>
            <p className="3xl:text-lg 2xl:text-lg xl:text-sm text-[#B9B9B9]">
              Discover anything you need, the easy way
            </p>
          </header>

          {/* Main Offer Image and Animated Text Block */}
          <div
            className="relative w-full h-[400px] bg-cover bg-center overflow-hidden mb-16"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dxohwanal/image/upload/v1752054831/young-smiling-courier-guy-red-uniform-sitting-scooter-holding-paper-bag-saying-hello-white-wall_haw6vn_hdlpgf.webp')",
            }}
            role="img"
            aria-label="Background with promotional text about signature foods"
          >
            <Motion.div
              className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[#2C6252] bg-opacity-90 flex items-center justify-center p-8 md:rounded-bl-none text-white text-lg font-medium text-center md:text-left shadow-lg"
              initial={{ x: "100%" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="max-w-md">
                Whether you're craving a hearty meal, a sweet treat, or a refreshing coffee—{" "}
                <span className="text-[#FF4D00]">our signature foods</span> have something for everyone.
              </p>
            </Motion.div>
          </div>

          {/* Food Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 3xl:gap-10 2xl:gap-10 xl:gap-10 lg:gap-4">
            {weeklyFoodData.map((item, index) => (
              <FoodCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Weekly;
