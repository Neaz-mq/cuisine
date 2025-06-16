const Team = () => {
  return (
    <div className="relative bg-white py-16 px-8 md:px-16 lg:px-32">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">      
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1590080877634-4a9b17cf2b71"
            alt="Chef"
            className="rounded-lg object-cover w-80 h-auto"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-orange-500 font-semibold mb-2">Company details</p>
          <h2 className="text-4xl font-bold text-green-900 leading-tight mb-8">
            Our expertise all team members
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1606491956689-2fe2e6ca944b"
                alt="Team Member"
                className="rounded-md mb-4 w-full h-40 object-cover"
              />
              <h4 className="text-green-900 font-semibold mb-1">— Sophia M.</h4>
              <p className="text-sm text-gray-400 mb-2">5 year experience</p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {/* Stars */}
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                {/* Bookmark Icon */}
                <span className="text-orange-400">🔖</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0642"
                alt="Team Member"
                className="rounded-md mb-4 w-full h-40 object-cover"
              />
              <h4 className="text-green-900 font-semibold mb-1">— Sophia M.</h4>
              <p className="text-sm text-gray-400 mb-2">3 year experience</p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <span className="text-orange-400">🔖</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
                alt="Team Member"
                className="rounded-md mb-4 w-full h-40 object-cover"
              />
              <h4 className="text-green-900 font-semibold mb-1">— Sophia M.</h4>
              <p className="text-sm text-gray-400 mb-2">4 year experience</p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <span className="text-orange-400">🔖</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1613145991459-8d83a3bbd2c5"
                alt="Team Member"
                className="rounded-md mb-4 w-full h-40 object-cover"
              />
              <h4 className="text-green-900 font-semibold mb-1">— Sophia M.</h4>
              <p className="text-sm text-gray-400 mb-2">11 year experience</p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <span className="text-orange-400">🔖</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;


