import Container from "../../../components/Container";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { toast } from "react-toastify";

const Limited = () => {
  const { addToCart } = useContext(CartContext);

  const limitedItems = [
    {
      id: 1,
      title: "Main Courses",
      description: "Succulent, space-rubbed lamb chops grilled to...",
      price: 200,
      originalPrice: 665,
      image: "https://res.cloudinary.com/dxohwanal/image/upload/v1748260629/Mask_Group_24_d1rzdd.png",
    },
    {
      id: 2,
      title: "Salads & Sides",
      description: "Succulent, space-rubbed lamb chops grilled to...",
      price: 165,
      originalPrice: 365,
      image: "https://res.cloudinary.com/dxohwanal/image/upload/v1748260721/Mask_Group_25_sl9hoh.png",
    },
    {
      id: 3,
      title: "Salads & Sides",
      description: "Succulent, space-rubbed lamb chops grilled to...",
      price: 50,
      originalPrice: 69,
      image: "https://res.cloudinary.com/dxohwanal/image/upload/v1748260767/Mask_Group_26_u8gbdd.png",
    },
    {
      id: 4,
      title: "Soft Drinks",
      description: "Succulent, space-rubbed lamb chops grilled to...",
      price: 200,
      originalPrice: 665,
      image: "https://res.cloudinary.com/dxohwanal/image/upload/v1748260812/Mask_Group_27_q5glog.png",
    },
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
      <div className="bg-white 3xl:px-16 2xl:px-1 xl:px-10 lg:px-0 mt-6 ">
        <div className="text-base text-[#AAAAAA] mb-2 mt-3 3xl:-ml-0 2xl:-ml-0 xl:-ml-0 lg:-ml-4">
          we dish out <br />
          global favorites <br />
          and local <br />
          classics —{" "}
          <span className="text-[#FF4C15] font-semibold">
            now <br /> with up to 50% <br /> OFF!
          </span>
        </div>

        <div className="flex justify-center items-center 3xl:-mt-[10.5rem] 2xl:-mt-[10.2rem] xl:-mt-[10rem] lg:-mt-[9.8rem]">
          <div className="mb-36 3xl:-ml-24 2xl:-ml-40 xl:-ml-6 lg:-ml-2">
            <h2 className="3xl:text-7xl 2xl:text-6xl xl:text-6xl lg:text-5xl font-bold text-green-800">Limited Time Offer–</h2>
            <h3 className="3xl:text-7xl 2xl:text-6xl xl:text-6xl lg:text-5xl font-bold text-[#FF4C15] mt-4">Up To 50% Off!</h3>
          </div>
        </div>

        <div className="flex justify-center 3xl:ml-64 2xl:ml-48 xl:ml-44 lg:ml-36 3xl:-mt-8 2xl:-mt-8 xl:-mt-12 lg:-mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-4 2xl:grid-cols-4 3xl:gap-6 2xl:gap-6 xl:gap-4 lg:gap-6 w-fit">
            {limitedItems.map((item) => (
              <div
                key={item.id}
                className={`bg-white overflow-hidden 3xl:w-[250px] 2xl:w-[220px] xl:w-[190px] lg:w-[190px] ${item.id === 4 ? "3xl:block 2xl:block xl:block lg:hidden hidden" : ""}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[160px] object-cover"
                />
                <div className="bg-[#2C6252] text-white px-4 py-4">
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-xs mt-1 text-[#15AB7F]">{item.description}</p>
                </div>
                <div className="text-xs text-[#CCCCCC] px-4 pt-3 space-y-1">
                  <p>• Grilled Lemon Herb Chicken</p>
                  <p>• Paneer Butter Masala (with Naan)</p>
                  <p>• Spaghetti Aglio e Olio</p>
                  <p>• Thai Green Curry with Rice</p>
                </div>
                <div className="px-4 py-3 flex justify-between items-center text-[#2C6252] font-bold">
                  <div>
                    <span className="line-through text-[#CCCCCC] mr-2 text-sm">${item.originalPrice}</span>
                    <span className="text-lg relative top-1">${item.price}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-[#FF4C15] w-7 h-7 flex items-center justify-center text-white rounded-sm text-xs"
                  >
                    <img src="/Path 2764.svg" alt="Add" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Limited;
