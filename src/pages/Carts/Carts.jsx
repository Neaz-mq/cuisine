import Container from "../../components/Container";
import { useCart } from "../../context/CartContext";

const Carts = () => {
  const { cartItems, increaseQty, decreaseQty } = useCart();

  const subtotal = cartItems.reduce(
  (acc, item) => acc + parseFloat(item.price.replace("$", "")) * item.quantity,
  0
);


  const total = subtotal;

  return (
    <Container>
      <div className="bg-white min-h-screen px-4 py-8 md:px-10 3xl:px-[4.2rem] xl:px-32 2xl:px-48">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ✅ Left side: Form - unchanged */}
          <div className="lg:col-span-2 space-y-8">
            {/* Express Checkout */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Express checkout</h2>
              <div className="flex flex-wrap gap-14">
                <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1751178073/pngegg_74_pyk2kp.png" alt="Shop Pay" className="h-8" />
                <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1751178089/pngegg_75_jmdkyw.png" alt="Apple Pay" className="h-8" />
                <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1751178101/pngegg_76_vwcpn5.png" alt="PayPal" className="h-8" />
                <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1751178115/pngegg_77_agsvqc.png" alt="Google Pay" className="h-8" />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-md font-semibold text-gray-800">Contact information</h3>
              <input type="email" placeholder="Email address or phone number" className="w-full border border-gray-300 px-4 py-2 rounded text-sm" />
              <label className="flex items-center space-x-2 text-sm text-gray-600">
                <input type="checkbox" className="accent-green-600" />
                <span>Email me for news and offer</span>
              </label>
            </div>

            {/* Shipping Address */}
            <div className="space-y-4">
              <h3 className="text-md font-semibold text-gray-800">Shipping address</h3>
              <select className="w-full border border-gray-300 px-4 py-2 rounded text-sm text-gray-600">
                <option>Country</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First name" className="border px-4 py-2 rounded text-sm" />
                <input type="text" placeholder="Last name" className="border px-4 py-2 rounded text-sm" />
              </div>
              <input type="text" placeholder="Address line 1 and 2 example" className="w-full border px-4 py-2 rounded text-sm" />
              <input type="text" placeholder="Apartment suite etc (optional)" className="w-full border px-4 py-2 rounded text-sm" />
              <div className="grid grid-cols-3 gap-4">
                <input type="text" placeholder="City" className="border px-4 py-2 rounded text-sm" />
                <input type="text" placeholder="State" className="border px-4 py-2 rounded text-sm" />
                <input type="text" placeholder="Zip code" className="border px-4 py-2 rounded text-sm" />
              </div>
              <input type="text" placeholder="Phone number" className="w-full border px-4 py-2 rounded text-sm" />
              <label className="flex items-start space-x-2 text-sm text-gray-600">
                <input type="checkbox" className="mt-1 accent-green-600" />
                <span>
                  Get SMS alerts about your order<br />
                  <span className="text-xs text-gray-400">
                    Stay updated via SMS about order status, shipping updates, and delivery notifications.
                  </span>
                </span>
              </label>
              <div className="flex justify-between text-sm mt-4">
                <a href="/" className="text-green-800 font-semibold">Return to home pages</a>
              </div>
              <button className="bg-[#2C6252] text-white w-full py-3 rounded-sm font-semibold text-sm mt-4">
                Confirm your order
              </button>
            </div>
          </div>

          {/* ✅ Right side: Order Summary */}
          <div className="bg-gray-50 p-6 border border-gray-200 rounded-lg space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Order summary</h3>

            <div className="space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-sm text-gray-500">Your cart is empty.</p>
              ) : (
                cartItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 rounded object-cover" />
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-800">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.description}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center mt-2 space-x-2">
                        <button
                          onClick={() => decreaseQty(item.title)}
                          className="bg-gray-200 px-2 py-1 rounded text-sm"
                        >−</button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() => increaseQty(item.title)}
                          className="bg-gray-200 px-2 py-1 rounded text-sm"
                        >+</button>
                      </div>
                    </div>

                    <div className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                      ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Discount and Totals */}
            <div className="pt-4 space-y-10 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Gift card or discount code"
                  className="w-full border px-3 py-2 rounded text-sm"
                />
                <button className="bg-gray-700 text-white text-sm px-3 py-2 rounded">
                  Apply
                </button>
              </div>

              <div className="text-sm text-gray-700 space-y-5">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery charges</span>
                  <span className="text-green-600">Free</span>
                </div>
              </div>

              <div className="flex justify-between text-md font-bold pt-2">
                <span>Total</span>
                <span className="text-green-700">USD ${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default Carts;
