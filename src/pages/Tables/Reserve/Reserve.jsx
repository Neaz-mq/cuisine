import { useState } from "react";
import { motion as Motion } from "framer-motion";
import Container from "../../../components/Container";
import { toast } from "react-toastify";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialTables = [
  { label: "T-1", booked: false },
  { label: "T-2", booked: true },
  { label: "T-3", booked: false },
  { label: "T-4", booked: false },
  { label: "T-5", booked: false },
  { label: "T-6", booked: false },
  { label: "T-7", booked: false },
  { label: "T-8", booked: true },
  { label: "T-9", booked: false },
  { label: "T-10", booked: true },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
};

const tableContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const tableItem = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const inputField = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  }),
};

const Reserve = () => {
  const [tables, setTables] = useState(initialTables);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTable, setSelectedTable] = useState(null);
  const [guestCount, setGuestCount] = useState("");
  const [reservationDate, setReservationDate] = useState(null);

  const availableTables = tables.filter((table) => !table.booked);
  const tableOptions = availableTables.map((table) => ({
    value: table.label,
    label: table.label,
  }));

  const handleBookTable = () => {
    if (!name || !phone || !selectedTable || !guestCount || !reservationDate) {
      toast.error("Please fill in all fields to reserve a table.");
      return;
    }

    const updatedTables = tables.map((table) =>
      table.label === selectedTable.value ? { ...table, booked: true } : table
    );

    setTables(updatedTables);

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(reservationDate);

    toast.success(
      `Table ${selectedTable.label} has been booked on ${formattedDate} !`
    );
    setName("");
    setPhone("");
    setGuestCount("");
    setReservationDate(null);
    setSelectedTable(null);
  };

  const handleDateChange = (date) => {
    if (date) {
      const newDate = new Date(date);
      if (
        newDate.getHours() === 0 &&
        newDate.getMinutes() === 0 &&
        newDate.getSeconds() === 0
      ) {
        newDate.setHours(11);
        newDate.setMinutes(0);
      }
      setReservationDate(newDate);
    } else {
      setReservationDate(null);
    }
  };

  return (
    <Container>
      <Motion.section
        className="3xl:px-16 2xl:px-5 xl:px-14 lg:px-2 mb-24 -mt-14"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        aria-labelledby="reservation-heading"
      >
        <Motion.header
          className="text-center lg:text-left mb-10 mt-20"
          variants={fadeInUp}
          custom={1}
        >
          <h2
            id="reservation-heading"
            className="text-2xl lg:text-4xl font-bold text-[#2C6252] leading-relaxed"
          >
            Know which tables are available <br className="hidden lg:block" />
            <span className="text-[#FF4C15] font-semibold">
              or reserved at a glance
            </span>
            <Motion.img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1750157744/Mask_Group_50_s7vgxe.png"
              alt="Stylized restaurant table illustration"
              className="inline-block w-24 h-8 ml-2 align-middle"
              animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
            />
          </h2>
        </Motion.header>

        <Motion.div
          className="grid grid-cols-5 gap-y-12"
          variants={tableContainer}
          initial="hidden"
          animate="visible"
          aria-label="Table Availability Grid"
        >
          {tables.map((table, index) => (
            <Motion.div
              key={index}
              className={`cursor-pointer 3xl:w-44 3xl:h-44 2xl:w-44 2xl:h-44 xl:w-40 xl:h-40 lg:w-28 lg:h-28 flex items-center justify-center text-white font-bold 3xl:text-6xl 2xl:text-6xl xl:text-5xl lg:text-4xl ${
                table.booked ? "bg-[#FF4C15]" : "bg-[#2C6252]"
              }`}
              variants={tableItem}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Table ${table.label} is ${
                table.booked ? "booked" : "available"
              }`}
            >
              {table.label}
            </Motion.div>
          ))}
        </Motion.div>

        <Motion.div
          className="flex items-start justify-start gap-16 mt-28 flex-wrap"
          variants={fadeInUp}
          custom={2}
          role="note"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#2C6252]" aria-hidden="true"></div>
            <span className="text-[#A9A2A2] text-sm">Free Table Indicator</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4C15]" aria-hidden="true"></div>
            <span className="text-[#A9A2A2] text-sm">Booked Table Indicator</span>
          </div>
        </Motion.div>

        <Motion.div
          className="mt-20 p-6 bg-white max-w-xl mx-auto border"
          variants={fadeInUp}
          custom={3}
          role="form"
          aria-label="Reservation Booking Form"
        >
          <h3 className="text-2xl font-semibold text-center text-[#2C6252] mb-6">
            Book a Table
          </h3>
          <form className="flex flex-col gap-4">
            <label className="sr-only" htmlFor="name">Your Name</label>
            <Motion.input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 focus:outline-none focus:ring-1 focus:ring-[#2C6252]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variants={inputField}
              custom={1}
              initial="hidden"
              animate="visible"
            />
            <label className="sr-only" htmlFor="phone">Phone Number</label>
            <Motion.input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 focus:outline-none focus:ring-1 focus:ring-[#2C6252]"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              variants={inputField}
              custom={2}
              initial="hidden"
              animate="visible"
            />
            <label className="sr-only" htmlFor="guests">Number of Guests</label>
            <Motion.input
              id="guests"
              type="number"
              min="1"
              placeholder="Number of Guests"
              className="w-full border p-3 focus:outline-none focus:ring-1 focus:ring-[#2C6252]"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              variants={inputField}
              custom={3}
              initial="hidden"
              animate="visible"
            />
            <label className="sr-only" htmlFor="date-time">Reservation Date</label>
            <Motion.div variants={inputField} custom={4} initial="hidden" animate="visible">
              <DatePicker
                selected={reservationDate}
                onChange={handleDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="MMMM do, yyyy ' & ' h:mm aa"
                placeholderText="Select Date & Time"
                className="w-full border p-3 focus:outline-none focus:ring-1 focus:ring-[#2C6252] text-sm cursor-pointer"
                wrapperClassName="w-full"
                minDate={new Date()}
                id="date-time"
              />
            </Motion.div>
            <label className="sr-only" htmlFor="table-select">Select a Table</label>
            <Motion.div variants={inputField} custom={5} initial="hidden" animate="visible">
              <Select
                inputId="table-select"
                options={tableOptions}
                value={selectedTable}
                onChange={setSelectedTable}
                placeholder="Select a Table"
                isSearchable={false}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: "#d1d5db",
                    minHeight: "44px",
                    borderRadius: "0.375rem",
                    fontSize: "0.95rem",
                    boxShadow: "none",
                    "&:hover": { borderColor: "#2C6252" },
                  }),
                }}
              />
            </Motion.div>
            <Motion.button
              type="button"
              onClick={handleBookTable}
              className="mt-4 bg-[#2C6252] hover:bg-[#244f42] text-white font-semibold py-3 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              Book Table
            </Motion.button>
          </form>
        </Motion.div>
      </Motion.section>
    </Container>
  );
};

export default Reserve;
