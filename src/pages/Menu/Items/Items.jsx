import { useState } from 'react';
import Container from '../../../components/Container';
import useCart from '../../../hooks/useCart';
import { toast } from 'react-toastify';


const categoryItems = [
  {
    label: 'BURGERS', 
    itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747893314/burger_rpgir8.png',
    mainContent: {
      items: [
        {
          title: 'Fresh Burger',
          description: 'We source only the freshest and highest-quality ingredients to ensure every dish bursts with flavor.',
          price: '$300',
          originalPrice: '$562',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747895053/pngegg_16_t1bk16.png',
          hasOrderButton: false,
        },
        {
          title: 'Juicy Burger',
          description: 'Our signature beef patty, cooked to perfection and served on a toasted bun with fresh veggies.',
          price: '$320',
          originalPrice: '$580',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747894970/pngegg_15_quduhw.png',
          hasOrderButton: true,
        },
        {
          title: 'Spicy BBQ Burger',
          description: 'A smoky and spicy delight with a zesty BBQ sauce, crispy onions, and melted cheese.',
          price: '$310',
          originalPrice: '$570',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747894970/pngegg_15_quduhw.png',
          hasOrderButton: false,
        },
        {
          title: 'Mushroom Swiss Burger',
          description: 'Earthy mushrooms and melted Swiss cheese complement our succulent beef patty perfectly.',
          price: '$305',
          originalPrice: '$565',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747895053/pngegg_16_t1bk16.png',
          hasOrderButton: false,
        },
      ],
      todaySpecial: {
        text: 'Today<br />special<br /><span class="text-[#FF4C15]">Burger</span>',
        mainImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748061492/pngegg_16_hkoq5b.png'
      },
    },
  },
  {
    label: 'CHICKEN',
    itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747893398/chicken_pibox1.png',
    mainContent: {
      items: [
        {
          title: 'Crispy Fried Chicken',
          description: 'Our chicken is fried to golden perfection, crispy on the outside, juicy on the inside, a true delight.',
          price: '$250',
          originalPrice: '$450',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748060318/pngegg_2_e2f6jx.png',
          hasOrderButton: false,
        },
        {
          title: 'Spicy Chicken Wings',
          description: 'Experience the fiery kick of our spicy chicken wings, perfect for those who love a bit of heat.',
          price: '$280',
          originalPrice: '$490',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748060318/pngegg_2_e2f6jx.png',
          hasOrderButton: true,
        },
        {
          title: 'Grilled Chicken Salad',
          description: 'Healthy and delicious, our grilled chicken salad is packed with fresh greens and tender chicken.',
          price: '$220',
          originalPrice: '$400',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748060318/pngegg_2_e2f6jx.png',
          hasOrderButton: false,
        },
        {
          title: 'Chicken Nuggets Meal',
          description: 'A perfect meal for the little ones, tender chicken nuggets with a side of crispy fries.',
          price: '$180',
          originalPrice: '$350',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748060318/pngegg_2_e2f6jx.png',
          hasOrderButton: false,
        },
      ],
      todaySpecial: {
        text: 'Today<br />special<br /><span class="text-[#FF4C15]">Chicken</span>',
        mainImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748061492/pngegg_16_hkoq5b.png'
      },
    },
  },
  {
    label: 'PIZZA',
    itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747893341/pizza_hhbhaj.png',
    mainContent: {
      items: [
        {
          title: 'Classic Pepperoni Pizza',
          description: 'A timeless favorite with rich tomato sauce, mozzarella, and savory pepperoni slices.',
          price: '$450',
          originalPrice: '$700',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748060806/pngegg_98_himcvk.png',
          hasOrderButton: false,
        },
        {
          title: 'Margherita Delight',
          description: 'Simple yet perfect, with fresh basil, mozzarella, and a hint of olive oil on a crispy crust.',
          price: '$400',
          originalPrice: '$650',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748060806/pngegg_98_himcvk.png',
          hasOrderButton: true,
        },
        {
          title: 'Veggie Supreme Pizza',
          description: 'Loaded with a colorful array of fresh vegetables, olives, and bell peppers.',
          price: '$420',
          originalPrice: '$680',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748060906/pngegg_100_r1c5t3.png',
          hasOrderButton: false,
        },

        {
          title: 'Chicken BBQ Pizza',
          description: 'Tangy BBQ sauce, grilled chicken, red onions, and cilantro create a unique flavor.',
          price: '$480',
          originalPrice: '$750',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748060906/pngegg_100_r1c5t3.png',
          hasOrderButton: false,
        },
      ],
      todaySpecial: {
        text: 'Today<br />special<br /><span class="text-[#FF4C15]">Pizza</span>',
        mainImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748061492/pngegg_16_hkoq5b.png',
      },
    },
  },
  {
    label: 'SALAD', 
    itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747893487/salad_g519yo.png',
    mainContent: {
      items: [
        {
          title: 'Garden Fresh Salad',
          description: 'Crisp, fresh greens with a mix of vibrant vegetables and a light vinaigrette dressing.',
          price: '$150',
          originalPrice: '$280',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748062060/pngegg_-_2025-05-10T162558.555_qajswo.png',
          hasOrderButton: false,
        },
        {
          title: 'Caesar Salad Chicken',
          description: 'Classic Caesar salad with grilled chicken, croutons, and Parmesan cheese.',
          price: '$200',
          originalPrice: '$350',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748062060/pngegg_-_2025-05-10T162558.555_qajswo.png',
          hasOrderButton: true,
        },
        {
          title: 'Mediterranean Quinoa Salad',
          description: 'A hearty and healthy salad with quinoa, olives, feta, and sun-dried tomatoes.',
          price: '$230',
          originalPrice: '$420',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748062107/pngegg_-_2025-05-10T162604.036_wiikj2.png',
          hasOrderButton: false,
        },
        {
          title: 'Cobb Salad Supreme',
          description: 'A rich Cobb salad with chicken, bacon, avocado, egg, and blue cheese.',
          price: '$280',
          originalPrice: '$500',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748062107/pngegg_-_2025-05-10T162604.036_wiikj2.png',
          hasOrderButton: false,
        },
      ],
      todaySpecial: {
        text: 'Today<br />special<br /><span class="text-[#FF4C15]">Salad</span>',
        mainImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748061447/pngegg_-_2025-05-10T162508.499_nghth8.png'
      },
    },
  },
  {
    label: 'APPETIZER', 
    itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747894100/appetizer_k8n5uw.png',
    mainContent: {
      items: [
        {
          title: 'Crispy French Fries',
          description: 'Golden, crispy, and perfectly salted french fries, a classic appetizer.',
          price: '$80',
          originalPrice: '$150',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747895053/pngegg_16_t1bk16.png',
          hasOrderButton: false,
        },
        {
          title: 'Onion Rings Sauce',
          description: 'Sweet and savory onion rings, deep-fried to perfection, served with a special dipping sauce.',
          price: '$100',
          originalPrice: '$180',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747895053/pngegg_16_t1bk16.png',
          hasOrderButton: true,
        },
        {
          title: 'Mozzarella Sticks',
          description: 'Warm, gooey mozzarella sticks coated in crispy breading, served with marinara.',
          price: '$120',
          originalPrice: '$200',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747895053/pngegg_16_t1bk16.png',
          hasOrderButton: false,
        },
        {
          title: 'Garlic Bread with Cheese',
          description: 'Toasted garlic bread topped with melted cheese, a perfect companion to any meal.',
          price: '$90',
          originalPrice: '$160',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747895053/pngegg_16_t1bk16.png',
          hasOrderButton: false,
        },
      ],
      todaySpecial: {
        text: 'Today<br />special<br /><span class="text-[#FF4C15]">Appetizer</span>',
        mainImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748061492/pngegg_16_hkoq5b.png'
      },
    },
  },
  {
    label: 'DRINKS', 
    itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747894070/drinks_lhdlws.png',
    mainContent: {
      items: [
        {
          title: 'Classic Coca-Cola',
          description: 'The refreshing taste of Coca-Cola, perfectly chilled to quench your thirst.',
          price: '$50',
          originalPrice: '$80',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747894970/pngegg_15_quduhw.png',
          hasOrderButton: false,
        },
        {
          title: 'Freshly Squeezed Orange Juice',
          description: 'Natural and invigorating, our freshly squeezed orange juice is a burst of citrus flavor.',
          price: '$100',
          originalPrice: '$120',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747894970/pngegg_15_quduhw.png',
          hasOrderButton: true,
        },
        {
          title: 'Creamy Vanilla Milkshake',
          description: 'Indulge in our rich and creamy vanilla milkshake, a sweet treat for any time.',
          price: '$90',
          originalPrice: '$160',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747894970/pngegg_15_quduhw.png',
          hasOrderButton: false,
        },
        {
          title: 'Iced Lemon Tea',
          description: 'Cool down with our refreshing iced lemon tea, perfectly balanced between sweet and tart.',
          price: '$60',
          originalPrice: '$100',
          image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747894970/pngegg_15_quduhw.png',
          hasOrderButton: false,
        },
      ],
      todaySpecial: {
        text: 'Today<br />special<br /><span class="text-[#FF4C15]">Drinks</span>',
        mainImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1748061492/pngegg_16_hkoq5b.png'
      },
    },
  },
];

const Items = () => {
  const [selected, setSelected] = useState('BURGERS');
  const { addToCart } = useCart();


  // Find the currently selected category's data
  const selectedCategoryData = categoryItems.find(item => item.label === selected);

  if (!selectedCategoryData) {
    // Handle case where no data is found for the selected category
    return <div className="text-center mt-64 text-red-500">Category not found.</div>;
  }

  const { items, todaySpecial } = selectedCategoryData.mainContent;

  return (
    <Container>
      <div className='3xl:mt-24 2xl:mt-24 xl:mt-20 lg:mt-20 3xl:ml-[4rem] 3xl:mr-12 2xl:ml-4 2xl:mr-10 xl:ml-14 xl:mr-12 lg:-ml-3 lg:mr-16 overflow-hidden'>
        {/* Category Navigation */}
        <div className="bg-[#2C6252] py-8 flex justify-center 3xl:space-x-24 2xl:space-x-20 xl:space-x-20 lg:space-x-16 px-8">
          {categoryItems.map((item) => (
            <div
              key={item.label}
              onClick={() => setSelected(item.label)}
              className="flex flex-col items-center cursor-pointer relative"
            >
              <img src={item.itemImage} alt={item.label} className="w-14 h-14" />
              <span
                className={`mt-4 text-xs font-semibold ${selected === item.label ? 'text-white' : 'text-[#138261]'
                  }`}
              >
                {item.label}
              </span>
              {
                selected === item.label && (
                  <div className="absolute bottom-0 w-full h-1 -mb-4"></div>
                )
              }
            </div>
          ))}
        </div>

        {/* Main Section - Dynamically rendered based on selected category */}
        <div className="bg-white py-12 px-4 3xl:px-0 2xl:px-14 xl:px-14 lg:px-14 grid grid-cols-1 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 gap-10 mt-10">

          {/* Left Section - Menu Items */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 lg:-ml-16 3xl:-ml-0 2xl::-ml-0 xl::-ml-0">
            {items.map((item, index) => (
              <div key={index} className="bg-[#F8F8F8] 3xl:p-12 2xl:p-12 xl:p-12 lg:p-10 flex flex-col items-start h-96">
                <h2 className="text-lg font-semibold text-[#2C6252]" dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                <p className="text-gray-500 text-sm mt-4 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between w-full mt-auto">
                  <img
                    src={item.image}
                    alt="Food"
                    className="w-40 h-auto object-contain -ml-4"
                  />
                  <div className="flex flex-col items-end">
                    <div className="flex items-end gap-x-1">
                      <div className="3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-lg font-bold text-[#2C6252] leading-none">
                        {item.price}
                      </div>
                      <span className="3xl:text-base 2xl:text-base xl:text-base lg:text-sm line-through text-[#FF4C15] relative top-4 font-bold">
                        {item.originalPrice}
                      </span>
                    </div>

                    {item.hasOrderButton && (
                      <button
                        className="bg-[#FF4C15] text-white text-sm font-bold px-2 py-2 relative top-8 3xl:left-1 2xl:left-0 xl:left-0 whitespace-nowrap"
                        onClick={() => {
                          const result = addToCart({
                            title: item.title,
                            description: item.description,
                            image: item.image,
                            price: parseFloat(item.price.replace('$', '')),
                          });

                          if (result.success) {
                            toast.success(`${item.title.replace(/<[^>]+>/g, '')} added to cart!`);
                          } else {
                            toast.warning(`${item.title.replace(/<[^>]+>/g, '')} is already in cart!`);
                          }
                        }}
                      >
                        Order Now
                      </button>
                    )}


                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right Section - Today Special */}
          <div className="bg-white text-[#2C6252] p-6 relative overflow-hidden flex flex-col justify-start items-center text-center lg:top-24 xl:top-36 2xl:top-20 3xl:top-10 3xl:left-0 2xl:left-0 xl:left-0 lg:left-10">
            {/* Using dangerouslySetInnerHTML for todaySpecial text */}
            <div className="3xl:text-7xl 2xl:text-6xl xl:text-5xl lg:text-4xl font-bold 3xl:leading-tight 2xl:leading-tight xl:leading-tight lg:leading-snug mt-10" dangerouslySetInnerHTML={{ __html: todaySpecial.text }}></div>
            <img src={todaySpecial.mainImage} alt="Main Special" className="mt-8 w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Items;