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
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
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

    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(reservationDate);

    toast.success(
      `Table ${selectedTable.label} has been booked on ${formattedDate}  !`
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
      if (newDate.getHours() === 0 && newDate.getMinutes() === 0 && newDate.getSeconds() === 0) {
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
      <Motion.div
        className="3xl:px-16 2xl:px-5 xl:px-14 lg:px-2 mb-24 -mt-14"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Heading */}
        <Motion.div className="text-center lg:text-left mb-10 mt-20" variants={fadeInUp}>
          <h2 className="text-2xl lg:text-4xl font-bold text-[#2C6252] leading-relaxed">
            Know which tables are available <br className="hidden lg:block" />
            <span className="text-[#FF4C15] font-semibold leading-relaxed">
              or reserved at a glance
            </span>{" "}
            <Motion.img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1750157744/Mask_Group_50_s7vgxe.png"
              alt="table"
              className="inline-block w-24 h-8 ml-2 align-middle"
              animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            />
          </h2>
        </Motion.div>

        {/* Grid of Tables */}
        <Motion.div className="grid grid-cols-5 gap-y-12" variants={fadeInUp}>
          {tables.map((table, index) => (
            <Motion.div
              key={index}
              className={`cursor-pointer 3xl:w-44 3xl:h-44 2xl:w-44 2xl:h-44 xl:w-40 xl:h-40 lg:w-28 lg:h-28 flex items-center justify-center text-white font-bold 3xl:text-6xl 2xl:text-6xl xl:text-5xl lg:text-4xl  ${
                table.booked ? "bg-[#FF4C15]" : "bg-[#2C6252]"
              }`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {table.label}
            </Motion.div>
          ))}
        </Motion.div>

        {/* Legend */}
        <Motion.div
          className="flex items-start justify-start gap-16 mt-28 flex-wrap"
          variants={fadeInUp}
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#2C6252]"></div>
            <span className="text-[#A9A2A2] text-sm">Free Table Indicator</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF4C15]"></div>
            <span className="text-[#A9A2A2] text-sm">Booked Table Indicator</span>
          </div>
        </Motion.div>

        {/* Reservation Form */}
        <Motion.div
          className="mt-20 p-6 bg-white shadow-md  max-w-xl mx-auto border"
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-center text-[#2C6252] mb-6">
            Book a Table
          </h3>
          <form className="flex flex-col gap-4">
            {/* Name */}
            <Motion.input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 focus:outline-none focus:ring-2 focus:ring-[#2C6252]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              whileFocus={{ scale: 1.02 }}
            />
            {/* Phone */}
            <Motion.input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 focus:outline-none focus:ring-2 focus:ring-[#2C6252]"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              whileFocus={{ scale: 1.02 }}
            />
            {/* Guests */}
            <Motion.input
              type="number"
              placeholder="Number of Guests"
              className="w-full border p-3 focus:outline-none focus:ring-2 focus:ring-[#2C6252]"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              min={1}
              whileFocus={{ scale: 1.02 }}
            />
            {/* Date Picker */}
            <Motion.div whileFocus={{ scale: 1.02 }}>
              <DatePicker
                selected={reservationDate}
                onChange={handleDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
               dateFormat="MMMM do, yyyy ' & ' h:mm aa"
                placeholderText="Select Date & Time"
                className="w-full border p-3  focus:outline-none focus:ring-2 focus:ring-[#2C6252] cursor-pointer text-sm"
                wrapperClassName="w-full"
                minDate={new Date()}
              />
            </Motion.div>
            {/* Table Select */}
            <Motion.div whileFocus={{ scale: 1.02 }}>
              <Select
                options={tableOptions}
                value={selectedTable}
                onChange={setSelectedTable}
                placeholder="Select a Table"
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
                  menuList: (base) => ({ ...base, maxHeight: 132 }),
                }}
                isSearchable={false}
              />
            </Motion.div>
            {/* Submit */}
            <Motion.button
              type="button"
              onClick={handleBookTable}
              className="mt-4 bg-[#2C6252] hover:bg-[#244f42] text-white font-semibold py-3  transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
            >
              Book Table
            </Motion.button>
          </form>
        </Motion.div>
      </Motion.div>
    </Container>
  );
};

export default Reserve;
