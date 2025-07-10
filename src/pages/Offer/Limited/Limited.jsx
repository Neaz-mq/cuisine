import Container from "../../../components/Container";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { toast } from "react-toastify";
import { motion as Motion } from "framer-motion";

const Limited = () => {
  const { addToCart, cartItems } = useContext(CartContext);

  const limitedItems = [
    {
      id: 1,
      title: "Main Courses",
      description: "Succulent, space-rubbed lamb chops grilled to...",
      price: 200,
      originalPrice: 665,
      image: "https://res.cloudinary.com/dxohwanal/image/upload/v1752123186/offer1_xts2ue.webp",
    },
    {
      id: 2,
      title: "Salads & Sides",
      description: "Succulent, space-rubbed lamb chops grilled to...",
      price: 165,
      originalPrice: 365,
      image: "https://res.cloudinary.com/dxohwanal/image/upload/v1752123462/offer2_mqlcmt.webp",
    },
    {
      id: 3,
      title: "Dessert Items",
      description: "Succulent, space-rubbed lamb chops grilled to...",
      price: 110,
      originalPrice: 335,
      image: "https://res.cloudinary.com/dxohwanal/image/upload/v1752123699/offer3_w3cpxv.webp",
    },
    {
      id: 4,
      title: "Soft Drinks",
      description: "Succulent, space-rubbed lamb chops grilled to...",
      price: 90,
      originalPrice: 225,
      image: "https://res.cloudinary.com/dxohwanal/image/upload/v1752123936/offer4_wsne9i.webp",
    },
  ];

  const handleAddToCart = (item) => {
    const isAlreadyInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    const toastOptions = {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    };

    if (isAlreadyInCart) {
      toast.warning(`${item.title} is already in cart!`, toastOptions);
    } else {
      addToCart(item);
      toast.success(`${item.title} added to cart!`, toastOptions);
    }
  };

  return (
    <Container>
      <section className="bg-white 3xl:px-16 2xl:px-1 xl:px-10 lg:px-0 mt-6 overflow-hidden" aria-labelledby="limited-heading">
        {/* Promo Text */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-base text-[#AAAAAA] mb-2 mt-3 3xl:-ml-0 2xl:-ml-0 xl:-ml-0 lg:-ml-4"
        >
          <p>
            we dish out <br />
            global favorites <br />
            and local <br />
            classics —{" "}
            <span className="text-[#FF4C15] font-semibold">
              now <br /> with up to 50% <br /> OFF!
            </span>
          </p>
        </Motion.div>

        {/* Headings */}
        <header
          className="flex justify-center items-center 3xl:-mt-[10.5rem] 2xl:-mt-[10.2rem] xl:-mt-[10rem] lg:-mt-[9.8rem]"
        >
          <div className="mb-36 3xl:-ml-24 2xl:-ml-40 xl:-ml-6 lg:-ml-2 text-center lg:text-left">
            <Motion.h2
              id="limited-heading"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="3xl:text-7xl 2xl:text-6xl xl:text-6xl lg:text-5xl font-bold text-green-800"
            >
              Limited Time Offer–
            </Motion.h2>
            <Motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="3xl:text-7xl 2xl:text-6xl xl:text-6xl lg:text-5xl font-bold text-[#FF4C15] mt-4"
            >
              Up To 50% Off!
            </Motion.h3>
          </div>
        </header>

        {/* Card Grid */}
        <div className="flex justify-center 3xl:ml-64 2xl:ml-48 xl:ml-44 lg:ml-36 3xl:-mt-8 2xl:-mt-8 xl:-mt-12 lg:-mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-4 2xl:grid-cols-4 3xl:gap-6 2xl:gap-6 xl:gap-4 lg:gap-6 w-fit">
            {limitedItems.map((item, index) => (
              <Motion.article
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`bg-white overflow-hidden 3xl:w-[250px] 2xl:w-[220px] xl:w-[190px] lg:w-[190px] ${
                  item.id === 4 ? "3xl:block 2xl:block xl:block lg:hidden hidden" : ""
                }`}
              >
                <figure>
                  <img
                    src={item.image}
                    alt={`Discounted ${item.title}`}
                    className="w-full h-[160px] object-cover"
                  />
                  <figcaption className="bg-[#2C6252] text-white px-4 py-4">
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-xs mt-1 text-[#15AB7F]">{item.description}</p>
                  </figcaption>
                </figure>

                <div className="text-xs text-[#CCCCCC] px-4 pt-3">
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Grilled Lemon Herb Chicken</li>
                    <li>Paneer Butter Masala (with Naan)</li>
                    <li>Spaghetti Aglio e Olio</li>
                    <li>Thai Green Curry with Rice</li>
                  </ul>
                </div>

                <div className="px-4 py-3 flex justify-between items-center text-[#2C6252] font-bold">
                  <div>
                    <span className="line-through text-[#CCCCCC] mr-2 text-sm">
                      ${item.originalPrice}
                    </span>
                    <span className="text-lg relative top-1">${item.price}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-[#FF4C15] w-7 h-7 flex items-center justify-center text-white rounded-sm text-xs"
                    aria-label={`Add ${item.title} to cart`}
                  >
                    <img src="/Path 2764.svg" alt="Add item to cart" />
                  </button>
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Limited;
