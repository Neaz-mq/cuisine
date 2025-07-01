import Container from "../../../components/Container";

const tableData = [
  { label: "T-1", booked: false },
  { label: "T-2", booked: true },
  { label: "T-3", booked: false },
  { label: "T-4", booked: false },
  { label: "T-5", booked: false },
  { label: "B-1", booked: false },
  { label: "B-2", booked: false },
  { label: "B-3", booked: true },
  { label: "B-4", booked: false },
  { label: "B-5", booked: true },
];

const Reserve = () => {
  return (
    <Container>
    <div className="3xl:px-16 2xl:px-5 xl:px-14 lg:px-2 mb-24 -mt-14">
          {/* Heading */}
      <div className="text-center lg:text-left mb-10 mt-20 ">
        <h2 className="text-2xl lg:text-4xl font-bold text-[#2C6252] leading-relaxed">
          Know which tables are available <br className="hidden lg:block" />
          <span className="text-[#FF4C15]  font-semibold leading-relaxed">or reserved at a glance</span>{" "}
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1750157744/Mask_Group_50_s7vgxe.png"
            alt="table"
            className="inline-block w-24 h-8 ml-2 align-middle"
          />
        </h2>
      </div>

      {/* Grid of Tables */}
      <div className="grid grid-cols-5 gap-y-12  ">
        {tableData.map((table, index) => (
          <div
            key={index}
            className={`3xl:w-44 3xl:h-44 2xl:w-44 2xl:h-44 xl:w-40 xl:h-40 lg:w-28 lg:h-28 flex items-center justify-center text-white font-bold 3xl:text-6xl 2xl:text-6xl xl:text-5xl lg:text-4xl  ${
              table.booked ? "bg-[#FF4C15]" : "bg-[#2C6252]"
            }`}
          >
            {table.label}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-start justify-start gap-16 mt-28 flex-wrap">
        {/* Free */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#2C6252]"></div>
          <span className="text-[#A9A2A2] text-sm">Free Table Indicator</span>
        </div>

        {/* Booked */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FF4C15]"></div>
          <span className="text-[#A9A2A2] text-sm">Booked Table Indicator</span>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Reserve;
