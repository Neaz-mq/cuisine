import Container from "../../../components/Container";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { toast } from "react-toastify";

const Feast = () => {
  const { addToCart } = useContext(CartContext);

  const feastItems = [
  {
    id: 1,
    title: "Crispy Chicken Wings",
    price: 12,
    image: "https://res.cloudinary.com/dxohwanal/image/upload/v1748323910/Mask_Group_28_hem67i.png",
    description: "Our menu is carefully crafted by expert chefs who bring creativity"
  },

  {
    id: 2,
    title: "Santa's Stuffed Mushrooms",
    price: 12,
    image: "https://res.cloudinary.com/dxohwanal/image/upload/v1748323817/Mask_Group_28_ovt62q.png",
    description: "Our menu is carefully crafted by expert chefs who bring creativity"
  },
  {
    id: 3,
    title: "Classic Roast Brew",
    price: 12,
    image: "https://res.cloudinary.com/dxohwanal/image/upload/v1748323853/Mask_Group_28_vyk1th.png",
    description: "Our menu is carefully crafted by expert chefs who bring creativity"
  },
  {
    id: 4,
    title: "Cheesy Crust Deluxe",
    price: 12,
    image: "https://res.cloudinary.com/dxohwanal/image/upload/v1748323949/Mask_Group_28_re0mpe.png",
    description: "Our menu is carefully crafted by expert chefs who bring creativity"
  }
];


  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      description: item.description, 
    });
    toast.success(`${item.title} added to cart!`);
  };

  return (
    <Container>
      <div className="3xl:px-12 3xl:ml-7 3xl:-mt-24 3xl:mb-44 2xl:px-0 2xl:ml-5 2xl:-mt-24 2xl:mb-44">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#F8F8F8] p-8 mb-10 md:mb-12">
          <div className="flex-1 min-w-[300px] md:mr-5 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-[#2C6252] leading-tight mb-2">
              Enjoy unbeatable deals every <br /> week at <span className="text-[#FF4C15]">Flavors & Feast!</span>
            </h2>
            <p className="text-lg md:text-sm text-[#2C6252] 3xl:mt-3">
              – Free Dessert with any Main Course
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center min-w-[300px] 3xl:-mt-[30rem] 2xl:-mt-[24rem]">
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1748323779/pngegg_63_yi9xit.png"
              alt="Fried Chicken"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {feastItems.map((item) => (
            <div key={item.id} className="bg-[#F8F8F8] overflow-hidden flex flex-col p-4">
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-grow mt-6">
                <h3 className="text-xl font-semibold text-[#2C6252] leading-tight mb-1">
                  {item.title.split(" ")[0]} <br /> {item.title.split(" ").slice(1).join(" ")}
                   <p className="text-xs mt-1 text-[#15AB7F]"></p>
                </h3>
                <p className="text-xs text-[#CCCCCC] mb-4 flex-grow mt-2">
                 {item.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-3xl font-bold text-[#2C6252]">
                    ${item.price} <span className="text-lg text-[#B9B9B9] relative top-2 left-1 font-semibold">/ pcs</span>
                  </span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-[#2C6252] text-white p-2 focus:outline-none focus:ring-2 focus:ring-[#2C6252] focus:ring-opacity-50"
                  >
                    <img src="/Path 2764.svg" alt="Add to cart" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Feast;
