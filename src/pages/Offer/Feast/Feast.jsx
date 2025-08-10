import Container from "../../../components/Container";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { toast } from "react-toastify";
import { motion as Motion } from "framer-motion";

const Feast = () => {
  const { addToCart, cartItems } = useContext(CartContext);

  const feastItems = [
    {
      id: 1,
      title: "Crispy Chicken Wings",
      price: 12,
      image:
        "https://res.cloudinary.com/dxohwanal/image/upload/v1752126479/offer12_wn37pv.webp",
      description:
        "Our menu is carefully crafted by expert chefs who bring creativity",
    },
    {
      id: 2,
      title: "Santa's Stuff Mushrooms",
      price: 14,
      image:
        "https://res.cloudinary.com/dxohwanal/image/upload/v1752126715/offer13_jefv2j.webp",
      description:
        "Our menu is carefully crafted by expert chefs who bring creativity",
    },
    {
      id: 3,
      title: "Classic Roast Brew",
      price: 16,
      image:
        "https://res.cloudinary.com/dxohwanal/image/upload/v1752127012/offer14_viddzm.webp",
      description:
        "Our menu is carefully crafted by expert chefs who bring creativity",
    },
    {
      id: 4,
      title: "Cheesy Crust Deluxe",
      price: 18,
      image:
        "https://res.cloudinary.com/dxohwanal/image/upload/v1752127252/offer15_fc5m1h.webp",
      description:
        "Our menu is carefully crafted by expert chefs who bring creativity",
    },
  ];

  const handleAddToCart = (item) => {
    const isAlreadyInCart = cartItems.some((cartItem) => cartItem.id === item.id);

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
      addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        description: item.description,
      });
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

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05 },
  };

  const buttonVariants = {
    hover: { scale: 1.1, backgroundColor: "#FF4C15", transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <Container>
      <section
        aria-labelledby="feast-hero-heading"
        className="3xl:px-12 3xl:ml-7 3xl:mt-4 3xl:mb-56 2xl:px-0 2xl:ml-5 2xl:-mt-24 2xl:mb-52 xl:px-8 xl:ml-5 xl:-mt-20 xl:mb-44 lg:px-3 lg:-ml-6 lg:-mt-44 lg:mb-44 md:px-3 md:-ml-6 md:-mt-44 md:mb-44 sm:px-3 sm:-ml-6 sm:-mt-44 sm:mb-44"
      >
        {/* Hero Section */}
        <div
          className="flex flex-col md:flex-row items-center justify-between bg-[#F8F8F8] p-8 mb-10 md:mb-12"
          role="region"
          aria-label="Feast hero section with deals"
        >
          <div className="flex-1 min-w-[300px] md:mr-5 text-center md:text-left mb-8 md:mb-0">
            <h2
              id="feast-hero-heading"
              className="text-3xl 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-xl font-bold text-[#2C6252] leading-tight mb-2"
            >
              Enjoy unbeatable deals every <br /> week at{" "}
              <span className="text-[#FF4C15]">Flavors & Feast!</span>
            </h2>
            <p className="text-lg md:text-sm text-[#2C6252] 3xl:mt-3">
              – Free Dessert with any Main Course
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center min-w-[300px] 3xl:-mt-[30rem] 2xl:-mt-[24rem] xl:-mt-[21rem] lg:-mt-[17rem] md:-mt-[12rem] sm:-mt-[17rem]">
            <Motion.img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1752125671/offer11_hhovyb.webp"
              alt="Delicious fried chicken wings"
              className="w-full h-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              draggable={false}
            />
          </div>
        </div>

        {/* Menu Grid */}
        <Motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          role="list"
          aria-label="Feast menu items"
        >
          {feastItems.map((item) => (
            <Motion.article
              key={item.id}
              className="bg-[#F8F8F8] overflow-hidden flex flex-col p-4"
              variants={itemVariants}
              whileHover="hover"
              tabIndex={0}
              role="button"
              aria-pressed="false"
              aria-label={`Add ${item.title} to cart`}
            >
              <div className="w-full 3xl:h-48 2xl:h-48 xl:h-48 lg:h-full overflow-hidden ">
                <Motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full 3xl:h-full 2xl:h-full xl:h-full lg:h-36 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  draggable={false}
                />
              </div>
              <div className="flex flex-col flex-grow mt-6">
                <h3 className="3xl:text-xl 2xl:text-xl xl:text-xl lg:text-base md:text-base sm:text-base font-semibold text-[#2C6252] leading-tight mb-1">
                  {item.title.split(" ")[0]} <br />{" "}
                  {item.title.split(" ").slice(1).join(" ")}
                </h3>
                <p className="3xl:text-xs 2xl:text-xs xl:text-xs lg:text-[9px] md:text-[9px] sm:text-[9px] text-[#CCCCCC] mb-4 flex-grow mt-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl sm:text-xl font-bold text-[#2C6252]">
                    ${item.price}{" "}
                    <span className="3xl:text-lg 2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-base text-[#B9B9B9] relative top-2 left-1 font-semibold">
                      / pcs
                    </span>
                  </span>
                  <Motion.button
                    onClick={() => handleAddToCart(item)}
                    className="bg-[#2C6252] text-white p-2 focus:outline-none focus:ring-2 focus:ring-[#2C6252] focus:ring-opacity-50"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    aria-label={`Add ${item.title} to cart`}
                  >
                    <img src="/Path 2764.svg" alt="Add to cart" />
                  </Motion.button>
                </div>
              </div>
            </Motion.article>
          ))}
        </Motion.div>
      </section>
    </Container>
  );
};

export default Feast;
