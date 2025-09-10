import { Search, Star, MapPin, Users, MessageCircle, Filter, Award, Globe } from "lucide-react";

export default function Guide() {
  const guides = [
    {
      id: 1,
      name: "Jerome Bell",
      avatar: "https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 156,
      location: "Tokyo, Japan",
      specialties: ["City Tours", "Food & Culture", "Photography"],
      languages: ["English", "Japanese", "Korean"],
      yearsExperience: 8,
      price: "$45/hour",
      description: "Professional tour guide with deep knowledge of Japanese culture and hidden gems in Tokyo.",
      badges: ["Super Guide", "Cultural Expert"],
      completedTours: 234,
      responseRate: "98%",
    },
    {
      id: 2,
      name: "Arlene McCoy",
      avatar: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 203,
      location: "Bali, Indonesia",
      specialties: ["Beach Tours", "Temple Visits", "Adventure"],
      languages: ["English", "Indonesian", "Dutch"],
      yearsExperience: 6,
      price: "$35/hour",
      description: "Local Balinese guide specializing in cultural experiences and off-the-beaten-path adventures.",
      badges: ["Local Expert", "Adventure Guide"],
      completedTours: 187,
      responseRate: "95%",
    },
    {
      id: 3,
      name: "Ronald Richards",
      avatar: "https://images.pexels.com/photos/33012182/pexels-photo-33012182.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 128,
      location: "Bangkok, Thailand",
      specialties: ["Street Food", "Markets", "Nightlife"],
      languages: ["English", "Thai", "Chinese"],
      yearsExperience: 5,
      price: "$30/hour",
      description: "Bangkok native with extensive knowledge of street food scene and local markets.",
      badges: ["Food Expert"],
      completedTours: 145,
      responseRate: "92%",
    },
    {
      id: 4,
      name: "Theresa Webb",
      avatar: "https://images.pexels.com/photos/33027128/pexels-photo-33027128.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 89,
      location: "Seoul, South Korea",
      specialties: ["K-Culture", "Shopping", "Modern Architecture"],
      languages: ["English", "Korean", "Japanese"],
      yearsExperience: 4,
      price: "$40/hour",
      description: "Young and energetic guide passionate about Korean pop culture and modern Seoul.",
      badges: ["Rising Star", "Culture Expert"],
      completedTours: 92,
      responseRate: "100%",
    },
    {
      id: 5,
      name: "Brooklyn Simmons",
      avatar: "https://images.pexels.com/photos/33010867/pexels-photo-33010867.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 167,
      location: "Rome, Italy",
      specialties: ["Historical Tours", "Art & Museums", "Wine Tasting"],
      languages: ["English", "Italian", "French", "Spanish"],
      yearsExperience: 12,
      price: "$55/hour",
      description: "History professor turned professional guide with expertise in Roman history and Renaissance art.",
      badges: ["History Expert", "Wine Connoisseur"],
      completedTours: 298,
      responseRate: "96%",
    },
    {
      id: 6,
      name: "Ralph Edwards",
      avatar: "https://images.pexels.com/photos/33012182/pexels-photo-33012182.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 142,
      location: "Cusco, Peru",
      specialties: ["Inca Trail", "Mountain Trekking", "Ancient History"],
      languages: ["English", "Spanish", "Quechua"],
      yearsExperience: 10,
      price: "$50/hour",
      description: "Mountain guide and archaeologist specializing in Inca civilization and high-altitude trekking.",
      badges: ["Trek Master", "Archaeological Guide"],
      completedTours: 176,
      responseRate: "94%",
    },
  ];

  const specialtyFilters = ["All", "City Tours", "Food & Culture", "Adventure", "Historical Tours", "Beach Tours"];

  return (
    <div className="flex-1 bg-gray-50 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[32px] font-poppins font-bold text-black mb-2">
            Travel Guides
          </h1>
          <p className="text-[16px] font-poppins text-gray-600">
            Connect with local experts and experienced guides
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
                placeholder="Search guides by name, location, specialty..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent outline-none font-poppins"
              />
            </div>

            {/* Filter Button */}
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center transition-colors duration-200">
              <Filter size={18} className="mr-2 text-gray-600" />
              <span className="font-poppins text-gray-700">More Filters</span>
            </button>
          </div>

          {/* Specialty Filters */}
          <div className="flex items-center space-x-2 mt-6 overflow-x-auto scrollbar-hide">
            {specialtyFilters.map((specialty) => (
              <button
                key={specialty}
                className={`px-4 py-2 rounded-full text-[14px] font-poppins font-medium transition-colors duration-200 whitespace-nowrap ${
                  specialty === "All"
                    ? "bg-[#4A90E2] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-200"
            >
              {/* Guide Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={guide.avatar}
                    alt={guide.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-[18px] font-poppins font-semibold text-black mb-1">
                        {guide.name}
                      </h3>
                      <div className="flex items-center mb-2">
                        <MapPin size={14} className="text-gray-400 mr-1" />
                        <span className="text-[14px] font-poppins text-gray-600">
                          {guide.location}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Star size={14} className="text-[#FFD700] mr-1 fill-current" />
                        <span className="text-[14px] font-poppins text-gray-600">
                          {guide.rating} ({guide.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[18px] font-poppins font-semibold text-[#4A90E2]">
                        {guide.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {guide.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center bg-[#FF6B35] text-white px-3 py-1 rounded-full text-[12px] font-poppins font-medium"
                  >
                    <Award size={12} className="mr-1" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-[14px] font-poppins text-gray-600 mb-4 line-clamp-2">
                {guide.description}
              </p>

              {/* Specialties */}
              <div className="mb-4">
                <h4 className="text-[12px] font-poppins font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-1">
                  {guide.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-[11px] font-poppins"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="mb-4">
                <h4 className="text-[12px] font-poppins font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Languages
                </h4>
                <div className="flex items-center">
                  <Globe size={14} className="text-gray-400 mr-2" />
                  <span className="text-[14px] font-poppins text-gray-600">
                    {guide.languages.join(", ")}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-[16px] font-poppins font-semibold text-black">
                    {guide.completedTours}
                  </div>
                  <div className="text-[12px] font-poppins text-gray-500">Tours</div>
                </div>
                <div className="text-center">
                  <div className="text-[16px] font-poppins font-semibold text-black">
                    {guide.yearsExperience}
                  </div>
                  <div className="text-[12px] font-poppins text-gray-500">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-[16px] font-poppins font-semibold text-black">
                    {guide.responseRate}
                  </div>
                  <div className="text-[12px] font-poppins text-gray-500">Response</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-[#4A90E2] hover:bg-[#357ABD] text-white py-2 px-4 rounded-lg transition-colors duration-200">
                  <span className="text-[14px] font-poppins font-medium">Book Guide</span>
                </button>
                <button className="px-4 py-2 border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <MessageCircle size={16} />
                </button>
                <button className="px-4 py-2 border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <Users size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white px-8 py-3 rounded-lg transition-all duration-200">
            <span className="font-poppins font-medium">Load More Guides</span>
          </button>
        </div>

        {/* Become a Guide Section */}
        <div className="mt-16 bg-gradient-to-r from-[#4A90E2] to-[#357ABD] rounded-xl p-8 text-center text-white">
          <h2 className="text-[28px] font-poppins font-bold mb-4">
            Become a Travel Guide
          </h2>
          <p className="text-[16px] font-poppins mb-8 opacity-90">
            Share your local knowledge and earn money by guiding travelers
          </p>
          <button className="bg-white text-[#4A90E2] hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors duration-200">
            <span className="font-poppins font-medium">Join as Guide</span>
          </button>
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