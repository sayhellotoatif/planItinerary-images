import { Search, MapPin, Star, Heart, Filter, Calendar, DollarSign } from "lucide-react";

export default function Explore() {
  const destinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 1245,
      price: "$850",
      duration: "7 days",
      category: "Beach",
      description: "Tropical paradise with beautiful beaches, temples, and rice terraces",
      highlights: ["Ubud Rice Terraces", "Tanah Lot Temple", "Seminyak Beach"],
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 2180,
      price: "$1,200",
      duration: "5 days",
      category: "City",
      description: "Modern metropolis with rich culture, amazing food, and technology",
      highlights: ["Shibuya Crossing", "Mount Fuji", "Tsukiji Market"],
    },
    {
      id: 3,
      name: "Santorini, Greece",
      image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 892,
      price: "$950",
      duration: "6 days",
      category: "Island",
      description: "Stunning sunsets, white-washed buildings, and crystal-clear waters",
      highlights: ["Oia Sunset", "Red Beach", "Fira Town"],
    },
    {
      id: 4,
      name: "Swiss Alps, Switzerland",
      image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 743,
      price: "$1,400",
      duration: "8 days",
      category: "Mountain",
      description: "Breathtaking mountain landscapes, hiking trails, and alpine lakes",
      highlights: ["Jungfraujoch", "Matterhorn", "Lake Geneva"],
    },
    {
      id: 5,
      name: "Machu Picchu, Peru",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 1567,
      price: "$1,100",
      duration: "9 days",
      category: "Adventure",
      description: "Ancient Inca citadel with incredible history and mountain views",
      highlights: ["Inca Trail", "Machu Picchu Citadel", "Sacred Valley"],
    },
    {
      id: 6,
      name: "Maldives",
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 1089,
      price: "$2,200",
      duration: "5 days",
      category: "Beach",
      description: "Luxury tropical paradise with overwater bungalows and pristine beaches",
      highlights: ["Water Villa", "Coral Reefs", "Sunset Cruise"],
    },
  ];

  const categories = ["All", "Beach", "City", "Mountain", "Island", "Adventure"];

  return (
    <div className="flex-1 bg-gray-50 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[32px] font-poppins font-bold text-black mb-2">
            Explore Destinations
          </h1>
          <p className="text-[16px] font-poppins text-gray-600">
            Discover amazing places around the world
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations, activities..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent outline-none font-poppins"
              />
            </div>

            {/* Filter Button */}
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center transition-colors duration-200">
              <Filter size={18} className="mr-2 text-gray-600" />
              <span className="font-poppins text-gray-700">Filters</span>
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex items-center space-x-2 mt-6 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-[14px] font-poppins font-medium transition-colors duration-200 whitespace-nowrap ${
                  category === "All"
                    ? "bg-[#4A90E2] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                  <Heart size={16} className="text-gray-600 hover:text-red-500" />
                </button>
                <div className="absolute top-3 left-3 bg-[#FF6B35] text-white px-3 py-1 rounded-full">
                  <span className="text-[12px] font-poppins font-medium">{destination.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-[18px] font-poppins font-semibold text-black mb-1">
                      {destination.name}
                    </h3>
                    <div className="flex items-center">
                      <Star size={14} className="text-[#FFD700] mr-1 fill-current" />
                      <span className="text-[14px] font-poppins text-gray-600">
                        {destination.rating} ({destination.reviews})
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[18px] font-poppins font-semibold text-[#4A90E2]">
                      {destination.price}
                    </div>
                    <div className="text-[12px] font-poppins text-gray-500">
                      {destination.duration}
                    </div>
                  </div>
                </div>

                <p className="text-[14px] font-poppins text-gray-600 mb-4 line-clamp-2">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="mb-5">
                  <h4 className="text-[12px] font-poppins font-medium text-gray-500 uppercase tracking-wider mb-2">
                    Highlights
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-[11px] font-poppins"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-[#4A90E2] hover:bg-[#357ABD] text-white py-2 px-4 rounded-lg transition-colors duration-200">
                    <span className="text-[14px] font-poppins font-medium">View Details</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <span className="text-[14px] font-poppins font-medium">Add to Trip</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white px-8 py-3 rounded-lg transition-all duration-200">
            <span className="font-poppins font-medium">Load More Destinations</span>
          </button>
        </div>

        {/* Popular This Week */}
        <div className="mt-16">
          <h2 className="text-[24px] font-poppins font-bold text-black mb-8">
            Popular This Week
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {destinations.slice(0, 3).map((destination) => (
                <div key={destination.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[14px] font-poppins font-medium text-black mb-1">
                      {destination.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star size={12} className="text-[#FFD700] mr-1 fill-current" />
                        <span className="text-[12px] font-poppins text-gray-600">
                          {destination.rating}
                        </span>
                      </div>
                      <span className="text-[12px] font-poppins font-medium text-[#4A90E2]">
                        {destination.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}