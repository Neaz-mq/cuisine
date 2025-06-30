import { useEffect, useState } from "react";
import Container from "../../components/Container";
import useCart from "../../hooks/useCart";
import Select from "react-select";
import { toast } from "react-toastify";

const Carts = () => {
  // Added removeItem from useCart
  const { cartItems, increaseQty, decreaseQty, removeItem, clearCart } = useCart();

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    phoneNumber: "",
  });
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );
  const total = subtotal;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name");
        const data = await res.json();
        const countryOptions = data
          .map((c) => ({ value: c.name.common, label: c.name.common }))
          .sort((a, b) => a.label.localeCompare(b.label));
        setCountries(countryOptions);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const handleConfirmOrder = () => {
    if (cartItems.length === 0) {
      toast.warning("Please add an item before placing the order!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    const newErrors = {};

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.state.trim()) newErrors.state = "State is required.";
    if (!formData.zip.trim()) newErrors.zip = "Zip code is required.";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required.";
    if (!selectedCountry) newErrors.selectedCountry = "Country is required.";
    if (!isSubscribed) newErrors.isSubscribed = "You must agree to receive emails.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success("The Food order successfully!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Reset form
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        state: "",
        zip: "",
        phoneNumber: "",
      });
      setSelectedCountry(null);
      setIsSubscribed(false);
      setErrors({});

      // Clear the cart
      clearCart();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <div className="bg-white min-h-screen px-4 py-8 md:px-10 3xl:px-[4.2rem] xl:px-32 2xl:px-48">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-semibold">Express checkout</h2>
            <h2 className="text-xs font-semibold mb-4 text-[#CCCCCC] -mt-4">
              **Quick transfer quick checkout
            </h2>
            <div className="bg-[#F8F8F8]">
              <div className="flex flex-wrap gap-20 py-10 ml-20">
                <img
                  src="https://res.cloudinary.com/dxohwanal/image/upload/v1751178073/pngegg_74_pyk2kp.png"
                  alt="Shop Pay"
                  className="h-8"
                />
                <img
                  src="https://res.cloudinary.com/dxohwanal/image/upload/v1751178089/pngegg_75_jmdkyw.png"
                  alt="Apple Pay"
                  className="h-8"
                />
                <img
                  src="https://res.cloudinary.com/dxohwanal/image/upload/v1751178101/pngegg_76_vwcpn5.png"
                  alt="PayPal"
                  className="h-8"
                />
                <img
                  src="https://res.cloudinary.com/dxohwanal/image/upload/v1751178115/pngegg_77_agsvqc.png"
                  alt="Google Pay"
                  className="h-8"
                />
              </div>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <h3 className="text-md font-semibold text-gray-800">Contact information</h3>
              <input
                type="email"
                name="email"
                placeholder="Email address or phone number  *"
                className="w-full border border-gray-300 px-4 py-2 rounded text-sm"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

              <label className="flex items-center space-x-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="accent-green-600"
                  checked={isSubscribed}
                  onChange={(e) => setIsSubscribed(e.target.checked)}
                />
                <span>Email me for news and offer</span>
              </label>
              {errors.isSubscribed && (
                <p className="text-red-500 text-xs">{errors.isSubscribed}</p>
              )}

              {/* Shipping Address */}
              <h3 className="text-md font-semibold text-gray-800">Shipping address</h3>
              <Select
                options={countries}
                value={selectedCountry}
                onChange={setSelectedCountry}
                placeholder="Select country"
                styles={{
                  menuList: (base) => ({ ...base, maxHeight: 220 }),
                  control: (base) => ({
                    ...base,
                    borderColor: "#d1d5db",
                    minHeight: "38px",
                    fontSize: "0.875rem",
                  }),
                }}
              />
              {errors.selectedCountry && (
                <p className="text-red-500 text-xs">{errors.selectedCountry}</p>
              )}

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className="border px-4 py-2 rounded text-sm"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className="border px-4 py-2 rounded text-sm"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
              {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}

              <input
                name="address"
                type="text"
                placeholder="Address line 1 and 2 example"
                className="w-full border px-4 py-2 text-sm"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}

              <input
                name="apartment"
                type="text"
                placeholder="Apartment suite etc (optional)"
                className="w-full border px-4 py-2 text-sm"
                value={formData.apartment}
                onChange={handleChange}
              />

              <div className="grid grid-cols-3 gap-4">
                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  className="border px-4 py-2 text-sm"
                  value={formData.city}
                  onChange={handleChange}
                />
                <input
                  name="state"
                  type="text"
                  placeholder="State"
                  className="border px-4 py-2 text-sm"
                  value={formData.state}
                  onChange={handleChange}
                />
                <input
                  name="zip"
                  type="text"
                  placeholder="Zip code"
                  className="border px-4 py-2 text-sm"
                  value={formData.zip}
                  onChange={handleChange}
                />
              </div>
              {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
              {errors.state && <p className="text-red-500 text-xs">{errors.state}</p>}
              {errors.zip && <p className="text-red-500 text-xs">{errors.zip}</p>}

              <input
                name="phoneNumber"
                type="text"
                placeholder="Phone number *"
                className="w-full border px-4 py-2 text-sm"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}

              <button
                onClick={handleConfirmOrder}
                className="bg-[#2C6252] text-white w-full py-3 font-semibold text-sm mt-4"
              >
                Confirm your order
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-gray-50 p-6 border border-gray-200 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Order summary</h3>
            <div className="space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-sm text-gray-500">Your cart is empty.</p>
              ) : (
                cartItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-800">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.description}</p>
                      <div className="flex items-center mt-2 space-x-2">
                        <button
                          onClick={() => decreaseQty(item.title)}
                          className="bg-gray-200 px-2 py-1 text-sm"
                        >
                          −
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() => increaseQty(item.title)}
                          className="bg-gray-200 px-2 py-1 text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                      ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeItem(item.title)}
                      className="ml-2 text-red-600 hover:text-red-800 font-bold text-sm"
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="pt-4 space-y-10 border-t border-gray-200">
              <div className="text-sm text-gray-700 space-y-5">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>$0</span>
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
