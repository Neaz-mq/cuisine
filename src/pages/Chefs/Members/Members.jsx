import Container from "../../../components/Container";


const Members = () => {
    // Array of dummy team member data to populate the cards
    const teamMembers = [
        {
            id: 1,
            name: "Sophia M.",
            image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750150180/pngegg_30_djnqeq.png", // Placeholder image
            yearsExperience: 5,
            rating: 5 // Assuming 5 stars for rating
        },
        {
            id: 2,
            name: "Sophia M.",
            image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750150153/pngegg_28_kzg7un.png", // Placeholder image
            yearsExperience: 5,
            rating: 5
        },
        {
            id: 3,
            name: "Sophia M.",
            image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750150223/pngegg_31_opzccv.png", // Placeholder image
            yearsExperience: 5,
            rating: 5
        },
        {
            id: 4,
            name: "Sophia M.",
            image: "https://res.cloudinary.com/dxohwanal/image/upload/v1750150180/pngegg_30_djnqeq.png", // Placeholder image
            yearsExperience: 5,
            rating: 5
        },
    ];

    return (
        <Container>
            <div className="py-8 md:py-12 3xl:px-16 mt-36 mb-52 ">
                {/* Header Section: Adjusted for left alignment and tag inline with second line */}
                <div className="mb-10 md:mb-16 text-left flex justify-end items-center "> {/* Ensures overall text alignment is left */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C6252] mb-2 leading-relaxed mr-28 "> {/* Removed mb-4 md:mb-0 and text-right */}
                        Our expertise all team <br className="hidden md:block" />
                        {/* Display "members" and the tag inline */}
                        <span className="inline-flex items-center leading-relaxed">
                            members
                            <span className="bg-[#FF4C15] text-white text-sm px-4 py-2 rounded-full shadow-md flex items-center space-x-2 ml-4"> {/* Added ml-4 for spacing */}
                                {/* Company Details (Chef) icon */}
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                                </svg>
                                <span>Company Details (Chef)</span>
                            </span>
                        </span>
                    </h1>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Large Chef Image Section */}
                    <div
                        className="flex justify-end relative 3xl:left-2 2xl:left-2 xl:left-2 lg:left-2 bg-[#3F7765] h-[99%] w-[75%]"
                      
                    >
                        <div className="3xl:-ml-16 3xl:-mr-[22.4rem] 3xl:-mt-32 2xl:-ml-56 2xl:-mt-48 xl:-ml-56 xl:-mt-48 lg:-ml-60 lg:-mt-48">
                            <img
                                src="https://res.cloudinary.com/dxohwanal/image/upload/v1750143426/portrait-happy-male-chef-dressed-uniform_p1e1of.png"
                                alt="Delivery Guy"
                                className="object-contain h-auto w-full 3xl:-ml-2 2xl:-ml-8 xl:-ml-4 lg:ml-4"
                            />
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="grid grid-cols-2 gap-20">
                        {teamMembers.map((member) => (
                           <div key={member.id} className="relative bg-white  p-4 flex flex-col justify-end items-center text-center h-[200px] w-[250px] border  border-gray-400"> {/* Increased height and overflow-visible */}
                                {/* Image: positioned absolutely and taller to overflow */}
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="absolute bottom-0 w-full h-[120%] object-contain z-0" // bottom-0 and h-[120%] for top overflow
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x200/A0A0A0/FFFFFF?text=Image+Error'; }}
                                />

                                {/* Red tag positioned relative to the card's top right */}
                                <div className="absolute top-0 right-0 bg-[#FF4C15] text-white rounded-bl-lg p-1 text-xs z-20">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.3 8.3a1 1 0 011.4 0L10 11.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z"></path>
                                    </svg>
                                </div>

                                {/* Rotated Name - always visible, positioned relative to card */}
                                <div className="absolute -left-8  top-28 -translate-y-1/2 -rotate-90 origin-left text-lg font-semibold text-[#2C6252] whitespace-nowrap z-20">
                                    - {member.name}
                                </div>

                                {/* Experience and Rating - at the bottom, above the image */}
                                <div className="relative z-10 w-full mt-auto flex flex-col items-center text-gray-700 bg-white bg-opacity-75 rounded-md px-2 py-1">
                                    <p className="text-xl font-bold">{member.yearsExperience}</p>
                                    <p className="text-xs text-gray-500 mb-1">five year experience</p>
                                    <div className="flex justify-center space-x-1 text-yellow-400">
                                        {[...Array(member.rating)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Members;
