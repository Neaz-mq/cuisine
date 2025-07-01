import { useEffect, useState } from "react";
import Container from "../../components/Container";
import useCart from "../../hooks/useCart";
import Select from "react-select";
import { toast } from "react-toastify";

const Carts = () => {
  const { cartItems, increaseQty, decreaseQty, removeItem, clearCart } = useCart();
  const [selectedShipping, setSelectedShipping] = useState("uber-eats");
  const [paymentMethod, setPaymentMethod] = useState("cod"); // 'cod' = Cash on Delivery

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

  // State for online payment form fields
  const [cardDetails, setCardDetails] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    ccv: "",
  });
  const [isAgreedToTerms, setIsAgreedToTerms] = useState(false); // For the "agree to condition" checkbox

  const [discountCode, setDiscountCode] = useState("");
  const [errors, setErrors] = useState({});
  // Errors for online payment fields
  const [paymentErrors, setPaymentErrors] = useState({});


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
    const newPaymentErrors = {};

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.state.trim()) newErrors.state = "State is required.";
    if (!formData.zip.trim()) newErrors.zip = "Zip code is required.";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required.";
    if (!selectedCountry) newErrors.selectedCountry = "Country is required.";
    // The subscription checkbox seems unrelated to order confirmation for billing, so I'll remove its validation here unless it's explicitly needed.
    // if (!isSubscribed) newErrors.isSubscribed = "You must agree to receive emails.";


    if (paymentMethod === "online") {
      if (!cardDetails.cardholderName.trim()) newPaymentErrors.cardholderName = "Cardholder name is required.";
      if (!cardDetails.cardNumber.trim()) newPaymentErrors.cardNumber = "Card number is required.";
      if (!/^\d{16}$/.test(cardDetails.cardNumber.replace(/\s/g, ''))) newPaymentErrors.cardNumber = "Invalid card number (16 digits required)."; // Basic validation
      if (!cardDetails.expiryDate.trim()) newPaymentErrors.expiryDate = "Expiry date is required.";
      if (!/^\d{2}\/\d{2}$/.test(cardDetails.expiryDate)) newPaymentErrors.expiryDate = "Invalid expiry date (MM/YY)."; // Basic validation
      if (!cardDetails.ccv.trim()) newPaymentErrors.ccv = "CCV is required.";
      if (!/^\d{3,4}$/.test(cardDetails.ccv)) newPaymentErrors.ccv = "Invalid CCV (3 or 4 digits)."; // Basic validation
      if (!isAgreedToTerms) newPaymentErrors.isAgreedToTerms = "You must agree to the condition.";
    }


    setErrors(newErrors);
    setPaymentErrors(newPaymentErrors);


    if (Object.keys(newErrors).length === 0 && Object.keys(newPaymentErrors).length === 0) {
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
      setErrors({});

      // Reset online payment form if applicable
      setCardDetails({
        cardholderName: "",
        cardNumber: "",
        expiryDate: "",
        ccv: "",
      });
      setIsAgreedToTerms(false);
      setPaymentErrors({});

      // Clear the cart
      clearCart();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for online payment field changes
  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };


  // Handler for discount code input
  const handleDiscountCodeChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const applyDiscount = () => {
    console.log("Applying discount code:", discountCode);
    // You would typically send this discountCode to your backend
    // to validate and apply the discount, then update the total.
    toast.info(`Discount code "${discountCode}" applied (for demonstration).`, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    // In a real app, you would fetch updated cart totals or recalculate with discount.
    // For now, it just shows a toast.
  };


  return (
    <Container>
      <div className="bg-white min-h-screen px-4 py-8 md:px-10 3xl:px-[4.2rem] xl:px-32 2xl:px-48 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Form */}
            <div className="space-y-4">
              {/* Billing Details */}
              <h3 className="text-3xl font-semibold text-gray-800">Billing Details</h3>

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
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full border border-gray-300 px-4 py-2 rounded text-sm"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

              <input
                name="phoneNumber"
                type="text"
                placeholder="Phone number"
                className="w-full border px-4 py-2 text-sm"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}

              {/* Shipping Method Selection */}
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-gray-800 mb-2 pt-8">Available Shipping Method</h4>

                <div className="space-y-4">
                  {/* Uber Eats */}
                  <label
                    className={`flex items-center justify-between border  px-4 py-3 cursor-pointer ${selectedShipping === "uber-eats" ? "border-gray-500 bg-gray-50" : "border-gray-200"
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1751346396/63cecf750aa7463091b17adf_5310366-uber-eats-logo-png-and-vector-logo-download-uber-eats-png-3500_3500_preview_thtrrl.png" alt="Uber Eats" className="w-12 h-12" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-gray-800">Uber eats</p>
                          <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full">Suggested</span>
                        </div>
                        <p className="text-sm text-gray-500">Delivery time: 20m/35m</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-green-800 font-semibold text-sm">
                      Free
                      <input
                        type="radio"
                        name="shipping"
                        value="uber-eats"
                        checked={selectedShipping === "uber-eats"}
                        onChange={() => setSelectedShipping("uber-eats")}
                        className="accent-green-700"
                      />
                    </div>
                  </label>

                  {/* Food Panda */}
                  <label
                    className={`flex items-center justify-between border  px-4 py-3 cursor-pointer ${selectedShipping === "food-panda" ? "border-gray-500 bg-gray-50" : "border-gray-200"
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1751346468/Group_973_w3ofel.png" alt="Food Panda" className="w-12 h-12" />
                      <div>
                        <p className="font-semibold text-gray-800">Food panda</p>
                        <p className="text-sm text-gray-500">Delivery time: 1h/1.35h</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-green-800 font-semibold text-sm">
                      Free
                      <input
                        type="radio"
                        name="shipping"
                        value="food-panda"
                        checked={selectedShipping === "food-panda"}
                        onChange={() => setSelectedShipping("food-panda")}
                        className="accent-green-700"
                      />
                    </div>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-gray-800 mb-2 pt-8">Payment Method</h4>

                <div className="space-y-3 bg-gray-50 p-4 rounded-md">
                  {/* Online Payment */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="online"
                      checked={paymentMethod === "online"}
                      onChange={() => setPaymentMethod("online")}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">Online Payment</p>
                      <p className="text-sm text-gray-600">Pay securely using a card or mobile wallet.</p>
                    </div>
                  </label>

                  {/* Cash on Delivery */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">Cash on Delivery</p>
                      <p className="text-sm text-gray-600">Pay with cash upon delivery.</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Online Payment Form Section - Conditionally Rendered */}
              {paymentMethod === "online" && (
                <div className="mt-8 p-6 border border-gray-200  space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-800">Credit card / debit card</h3>
                    <div className="flex items-center gap-8">
                      <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1751348676/pngegg_84_rh7u9t.png" alt="Mastercard" className="h-10" />
                      <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1751348700/pngegg_85_i6czbr.png" alt="Visa" className="h-10" />
                      <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1751348721/pngegg_86_icrxs1.png" alt="American Express" className="h-10" />
                      <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1751348785/pngegg_92_lbmpaf.png" alt="Ria Money Transfer" className="h-10" />

                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700">Cardholder name</label>
                      <input
                        type="text"
                        id="cardholderName"
                        name="cardholderName"
                        placeholder="Lynette Kunze"
                        className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
                        value={cardDetails.cardholderName}
                        onChange={handleCardDetailsChange}
                      />
                      {paymentErrors.cardholderName && <p className="text-red-500 text-xs mt-1">{paymentErrors.cardholderName}</p>}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card number</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          placeholder="5316 8e71 7571 5545" // Placeholder for visual reference
                          className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
                          value={cardDetails.cardNumber}
                          onChange={handleCardDetailsChange}
                          maxLength="19" // Max length for 16 digits + 3 spaces
                        />
                        {paymentErrors.cardNumber && <p className="text-red-500 text-xs mt-1">{paymentErrors.cardNumber}</p>}
                      </div>
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Date</label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          placeholder="24/28" // Placeholder for visual reference
                          className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
                          value={cardDetails.expiryDate}
                          onChange={handleCardDetailsChange}
                          maxLength="5" // MM/YY
                        />
                        {paymentErrors.expiryDate && <p className="text-red-500 text-xs mt-1">{paymentErrors.expiryDate}</p>}
                      </div>
                      <div>
                        <label htmlFor="ccv" className="block text-sm font-medium text-gray-700">CCV <span className="text-gray-400 text-sm ml-1">?</span></label>
                        <input
                          type="text"
                          id="ccv"
                          name="ccv"
                          placeholder="2659" // Placeholder for visual reference
                          className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md text-sm"
                          value={cardDetails.ccv}
                          onChange={handleCardDetailsChange}
                          maxLength="4"
                        />
                        {paymentErrors.ccv && <p className="text-red-500 text-xs mt-1">{paymentErrors.ccv}</p>}
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="text-blue-500 text-lg mr-1">&#9432;</span>
                      Credit card payments may take up to 24th to be processed
                      <span className="text-gray-400 text-sm ml-1">?</span>
                    </p>

                    <label className="flex items-center gap-2 mt-4 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isAgreedToTerms}
                        onChange={(e) => setIsAgreedToTerms(e.target.checked)}
                        className="form-checkbox h-4 w-4 text-green-600 rounded"
                      />
                      <span className="text-gray-700 text-sm">If you agree this condition please mark</span>
                    </label>
                    {paymentErrors.isAgreedToTerms && <p className="text-red-500 text-xs mt-1">{paymentErrors.isAgreedToTerms}</p>}
                  </div>
                </div>
              )}

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
            {/* Discount Code Section */}
            <div className="pt-10 border-t border-gray-200">
              <div className="flex mb-10"> {/* Added mb-4 for spacing */}
                <input
                  type="text"
                  placeholder="Gift card or discount code"
                  className="flex-1 border border-gray-300 px-4 py-2  text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  value={discountCode}
                  onChange={handleDiscountCodeChange}
                />
                <button
                  onClick={applyDiscount}
                  className="bg-gray-400 text-white px-6 py-2  font-semibold text-sm hover:bg-gray-500 transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="space-y-10  bg-white p-6 ">
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

              {/* Dotted line - Added here */}
              <div className="border-t border-dashed border-gray-300 my-4"></div>

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