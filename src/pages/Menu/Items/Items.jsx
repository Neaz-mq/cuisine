import React, { useState } from 'react';

const categoryItems = [
  {
    label: 'BURGERS',
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747893314/burger_rpgir8.png',
    mainContent: {
      items: [
        {
          title: 'Fresh and High-<br /><span class="text-[#FF4C15]">Quality Ingredients</span>',
          description: 'We source only the freshest and highest-quality ingredients to ensure every dish bursts with flavor.',
          price: '$300',
          originalPrice: '$562',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747895053/pngegg_16_t1bk16.png',
          hasOrderButton: false,
        },
        {
          title: 'Juicy Beef<br /><span class="text-[#FF4C15]">Classic</span>',
          description: 'Our signature beef patty, cooked to perfection and served on a toasted bun with fresh veggies.',
          price: '$320',
          originalPrice: '$580',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747894970/pngegg_15_quduhw.png',
          hasOrderButton: true,
        },
        {
          title: 'Spicy BBQ<br /><span class="text-[#FF4C15]">Burger</span>',
          description: 'A smoky and spicy delight with a zesty BBQ sauce, crispy onions, and melted cheese.',
          price: '$310',
          originalPrice: '$570',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747894970/pngegg_15_quduhw.png',
          hasOrderButton: false,
        },
        {
          title: 'Mushroom Swiss<br /><span class="text-[#FF4C15]">Burger</span>',
          description: 'Earthy mushrooms and melted Swiss cheese complement our succulent beef patty perfectly.',
          price: '$305',
          originalPrice: '$565',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747895053/pngegg_16_t1bk16.png',
          hasOrderButton: false,
        },
      ],
      todaySpecial: {
        text: 'Today<br />special<br /><span class="text-[#FF4C15]">burger</span>',
        mainImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747895216/pngegg_12_ndjfjp.png',
        smallImage: null, 
      },
    },
  },
  {
    label: 'CHICKEN',
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747893398/chicken_pibox1.png',
    mainContent: {
      items: [
        {
          title: 'Crispy Fried<br /><span class="text-[#FF4C15]">Chicken</span>',
          description: 'Our chicken is fried to golden perfection, crispy on the outside, juicy on the inside, a true delight.',
          price: '$250',
          originalPrice: '$450',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899500/chicken_item_1.png', 
          hasOrderButton: false,
        },
        {
          title: 'Spicy Chicken<br /><span class="text-[#FF4C15]">Wings</span>',
          description: 'Experience the fiery kick of our spicy chicken wings, perfect for those who love a bit of heat.',
          price: '$280',
          originalPrice: '$490',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899530/chicken_item_2.png', 
          hasOrderButton: true,
        },
        {
          title: 'Grilled Chicken<br /><span class="text-[#FF4C15]">Salad</span>',
          description: 'Healthy and delicious, our grilled chicken salad is packed with fresh greens and tender chicken.',
          price: '$220',
          originalPrice: '$400',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899560/chicken_item_3.png', 
          hasOrderButton: false,
        },
        {
          title: 'Chicken Nuggets<br /><span class="text-[#FF4C15]">Kids Meal</span>',
          description: 'A perfect meal for the little ones, tender chicken nuggets with a side of crispy fries.',
          price: '$180',
          originalPrice: '$350',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899590/chicken_item_4.png', 
          hasOrderButton: false,
        },
      ],
      todaySpecial: {
        text: 'Today<br />special<br /><span class="text-[#FF4C15]">Chicken</span>',
        mainImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899620/big_chicken.png', 
        smallImage: null,
      },
    },
  },
  {
    label: 'PIZZA',
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747893341/pizza_hhbhaj.png',
    mainContent: {
      items: [
        {
          title: 'Classic Pepperoni<br /><span class="text-[#FF4C15]">Pizza</span>',
          description: 'A timeless favorite with rich tomato sauce, mozzarella, and savory pepperoni slices.',
          price: '$450',
          originalPrice: '$700',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747898862/pizza_item_1.png',
          hasOrderButton: false,
        },
        {
          title: 'Margherita<br /><span class="text-[#FF4C15]">Delight</span>',
          description: 'Simple yet perfect, with fresh basil, mozzarella, and a hint of olive oil on a crispy crust.',
          price: '$400',
          originalPrice: '$650',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747898889/pizza_item_2.png',
          hasOrderButton: false,
        },
        {
          title: 'Veggie Supreme<br /><span class="text-[#FF4C15]">Pizza</span>',
          description: 'Loaded with a colorful array of fresh vegetables, olives, and bell peppers.',
          price: '$420',
          originalPrice: '$680',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747898912/pizza_item_3.png',
          hasOrderButton: false,
        },
        {
          title: 'Chicken BBQ<br /><span class="text-[#FF4C15]">Pizza</span>',
          description: 'Tangy BBQ sauce, grilled chicken, red onions, and cilantro create a unique flavor.',
          price: '$480',
          originalPrice: '$750',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747898935/pizza_item_4.png',
          hasOrderButton: false,
        },
      ],
      todaySpecial: {
        text: 'Today<br />special<br /><span class="text-[#FF4C15]">Pizza</span>',
        mainImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899052/big_pizza.png',
        smallImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899017/small_sauce.png',
      },
    },
  },
  {
    label: 'SALAD',
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747893487/salad_g519yo.png',
    mainContent: {
      items: [
        {
          title: 'Garden Fresh<br /><span class="text-[#FF4C15]">Salad</span>',
          description: 'Crisp, fresh greens with a mix of vibrant vegetables and a light vinaigrette dressing.',
          price: '$150',
          originalPrice: '$280',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899700/salad_item_1.png', 
          hasOrderButton: false,
        },
        {
          title: 'Caesar Salad<br /><span class="text-[#FF4C15]">with Chicken</span>',
          description: 'Classic Caesar salad with grilled chicken, croutons, and Parmesan cheese.',
          price: '$200',
          originalPrice: '$350',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899730/salad_item_2.png', 
          hasOrderButton: true,
        },
        {
          title: 'Mediterranean<br /><span class="text-[#FF4C15]">Quinoa Salad</span>',
          description: 'A hearty and healthy salad with quinoa, olives, feta, and sun-dried tomatoes.',
          price: '$230',
          originalPrice: '$420',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899760/salad_item_3.png', 
          hasOrderButton: false,
        },
        {
          title: 'Cobb Salad<br /><span class="text-[#FF4C15]">Supreme</span>',
          description: 'A rich Cobb salad with chicken, bacon, avocado, egg, and blue cheese.',
          price: '$280',
          originalPrice: '$500',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899790/salad_item_4.png', 
          hasOrderButton: false,
        },
      ],
      todaySpecial: {
        text: 'Today<br />special<br /><span class="text-[#FF4C15]">Salad</span>',
        mainImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899820/big_salad.png', 
        smallImage: null,
      },
    },
  },
  {
    label: 'APPETIZER',
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747894100/appetizer_k8n5uw.png',
    mainContent: {
      items: [
        {
          title: 'Crispy French<br /><span class="text-[#FF4C15]">Fries</span>',
          description: 'Golden, crispy, and perfectly salted french fries, a classic appetizer.',
          price: '$80',
          originalPrice: '$150',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899900/appetizer_item_1.png', 
          hasOrderButton: false,
        },
        {
          title: 'Onion Rings<br /><span class="text-[#FF4C15]">with Sauce</span>',
          description: 'Sweet and savory onion rings, deep-fried to perfection, served with a special dipping sauce.',
          price: '$100',
          originalPrice: '$180',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899930/appetizer_item_2.png', 
          hasOrderButton: true,
        },
        {
          title: 'Mozzarella<br /><span class="text-[#FF4C15]">Sticks</span>',
          description: 'Warm, gooey mozzarella sticks coated in crispy breading, served with marinara.',
          price: '$120',
          originalPrice: '$200',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899960/appetizer_item_3.png', 
          hasOrderButton: false,
        },
        {
          title: 'Garlic Bread<br /><span class="text-[#FF4C15]">with Cheese</span>',
          description: 'Toasted garlic bread topped with melted cheese, a perfect companion to any meal.',
          price: '$90',
          originalPrice: '$160',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747899990/appetizer_item_4.png',
          hasOrderButton: false,
        },
      ],
      todaySpecial: {
        text: 'Today<br />special<br /><span class="text-[#FF4C15]">Appetizer</span>',
        mainImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747900020/big_appetizer.png', 
        smallImage: null,
      },
    },
  },
  {
    label: 'DRINKS',
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747894070/drinks_lhdlws.png',
    mainContent: {
      items: [
        {
          title: 'Classic<br /><span class="text-[#FF4C15]">Coca-Cola</span>',
          description: 'The refreshing taste of Coca-Cola, perfectly chilled to quench your thirst.',
          price: '$50',
          originalPrice: '$80',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747900100/drink_item_1.png', 
          hasOrderButton: false,
        },
        {
          title: 'Freshly Squeezed<br /><span class="text-[#FF4C15]">Orange Juice</span>',
          description: 'Natural and invigorating, our freshly squeezed orange juice is a burst of citrus flavor.',
          price: '$70',
          originalPrice: '$120',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747900130/drink_item_2.png', 
          hasOrderButton: true,
        },
        {
          title: 'Creamy Vanilla<br /><span class="text-[#FF4C15]">Milkshake</span>',
          description: 'Indulge in our rich and creamy vanilla milkshake, a sweet treat for any time.',
          price: '$90',
          originalPrice: '$160',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747900160/drink_item_3.png', 
          hasOrderButton: false,
        },
        {
          title: 'Iced Lemon<br /><span class="text-[#FF4C15]">Tea</span>',
          description: 'Cool down with our refreshing iced lemon tea, perfectly balanced between sweet and tart.',
          price: '$60',
          originalPrice: '$100',
          itemImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747900190/drink_item_4.png', 
          hasOrderButton: false,
        },
      ],
      todaySpecial: {
        text: 'Today<br />special<br /><span class="text-[#FF4C15]">Drinks</span>',
        mainImage: 'https://res.cloudinary.com/dxohwanal/image/upload/v1747900220/big_drink.png', 
        smallImage: null,
      },
    },
  },
];


const Items = () => {
  const [selected, setSelected] = useState('BURGERS');

  // Find the currently selected category's data
  const selectedCategoryData = categoryItems.find(item => item.label === selected);

  if (!selectedCategoryData) {
    // Handle case where no data is found for the selected category
    return <div className="text-center mt-64 text-red-500">Category not found.</div>;
  }

  const { items, todaySpecial } = selectedCategoryData.mainContent;

  return (
    <div className='mt-52 3xl:-ml-8 '>
      {/* Category Navigation */}
      <div className="bg-[#2C6252] py-8 flex justify-center space-x-36 px-8">
        {categoryItems.map((item) => (
          <div
            key={item.label}
            onClick={() => setSelected(item.label)}
            className="flex flex-col items-center cursor-pointer relative"
          >
            <img src={item.image} alt={item.label} className="w-14 h-14" />
            <span
              className={`mt-4 text-xs font-semibold ${selected === item.label ? 'text-white' : 'text-[#138261]' // Changed to match background color for invisibility
                }`}
            >
              {/* Always render the label directly, visibility controlled by text color */}
              {item.label}
            </span>
            {
              selected === item.label && (
                <div className="absolute bottom-0 w-full h-1  -mb-4"></div>
              )
            }
          </div>
        ))}
      </div>
      {/* Main Section - Dynamically rendered based on selected category */}
      <div className="bg-white py-12 px-4 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

        {/* Left Section - Menu Items */}
       <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12"> {/* Reduced gap-y */}
    {items.map((item, index) => (
        <div key={index} className="bg-[#F8F8F8] p-16 flex flex-col items-start h-96">
            {/* Using dangerouslySetInnerHTML for titles to render <br /> and spans */}
            <h2 className="text-lg font-semibold text-[#2C6252]" dangerouslySetInnerHTML={{ __html: item.title }}></h2>
            <p className="text-gray-500 text-sm mt-1 mb-4">
                {item.description}
            </p>
            <div className="flex items-center justify-between w-full mt-auto">
                <img
                    src={item.itemImage}
                    alt="Food"
                    className="w-40 h-auto object-contain -ml-4"
                />
                <div className="flex flex-col items-end">
                    <div className="flex items-end gap-x-1">
                        <div className="text-2xl font-bold text-[#2C6252] leading-none">
                            {item.price}
                        </div>
                        <span className="text-base line-through text-[#FF4C15] relative top-4 font-bold">
                            {item.originalPrice}
                        </span>
                    </div>
                    {item.hasOrderButton && (
                        <button className="bg-[#FF4C15] text-white text-sm font-bold px-3 py-2 relative top-8 left-4">
                            Order Now
                        </button>
                    )}
                </div>

            </div>
        </div>
    ))}
</div>

        {/* Right Section - Today Special */}
        <div className="bg-white text-[#2C6252] rounded-lg p-6 relative overflow-hidden flex flex-col justify-start items-center text-center">
          {/* Using dangerouslySetInnerHTML for todaySpecial text */}
          <div className="text-7xl font-bold leading-tight mt-10" dangerouslySetInnerHTML={{ __html: todaySpecial.text }}></div>
          {todaySpecial.smallImage && (
            <img src={todaySpecial.smallImage} alt="Small decoration" className="absolute top-6 right-6 w-16 h-auto" />
          )}
          <img src={todaySpecial.mainImage} alt="Main Special" className="mt-8 w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Items;