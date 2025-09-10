import { Calendar, DollarSign, Users, MapPin, Star, Clock } from "lucide-react";

export default function Dashboard() {
  const upcomingTrips = [
    {
      id: 1,
      destination: "Kuala Lumpur - Ipoh",
      image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400",
      budget: "$1,200",
      days: 5,
      people: 3,
      date: "Mar 15-20",
    },
    {
      id: 2,
      destination: "Sapa - Ninh Binh",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=400",
      budget: "$800",
      days: 7,
      people: 2,
      date: "Apr 10-17",
    },
  ];

  const suggestions = [
    {
      id: 1,
      name: "Central Market",
      location: "Kuala Lumpur, Malaysia",
      image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.5,
      guide: "Jerome Bell",
      description: "Historic shopping center with local crafts and food",
    },
    {
      id: 2,
      name: "Merdeka Square",
      location: "Kuala Lumpur, Malaysia",
      image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      guide: "Arlene McCoy",
      description: "Historical square with colonial architecture",
    },
  ];

  const friends = [
    {
      name: "Jerome Bell",
      avatar: "https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Tokyo, Japan",
    },
    {
      name: "Arlene McCoy",
      avatar: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Bali, Indonesia",
    },
    {
      name: "Ronald Richards",
      avatar: "https://images.pexels.com/photos/33012182/pexels-photo-33012182.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Bangkok, Thailand",
    },
    {
      name: "Theresa Webb",
      avatar: "https://images.pexels.com/photos/33027128/pexels-photo-33027128.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Seoul, South Korea",
    },
  ];

  return (
    <div className="flex-1 bg-gray-50 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="xl:col-span-2 space-y-8">
            {/* Upcoming Trips */}
            <div>
              <h2 className="text-[24px] font-poppins font-bold text-black mb-6">
                Upcoming Trip
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingTrips.map((trip) => (
                  <div
                    key={trip.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={trip.image}
                        alt={trip.destination}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-[18px] font-poppins font-semibold text-black mb-3">
                        {trip.destination}
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <DollarSign size={16} className="text-[#4A90E2] mr-2" />
                          <span className="text-[14px] font-poppins text-gray-600">
                            {trip.budget}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="text-[#FF6B35] mr-2" />
                          <span className="text-[14px] font-poppins text-gray-600">
                            {trip.days} days
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Users size={16} className="text-[#28A745] mr-2" />
                          <span className="text-[14px] font-poppins text-gray-600">
                            {trip.people} people
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="text-[#6C757D] mr-2" />
                          <span className="text-[14px] font-poppins text-gray-600">
                            {trip.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For your Malaysia Trip */}
            <div>
              <h2 className="text-[24px] font-poppins font-bold text-black mb-6">
                For your Malaysia Trip
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {suggestions.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={suggestion.image}
                        alt={suggestion.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-[16px] font-poppins font-semibold text-black mb-2">
                        {suggestion.name}
                      </h3>
                      <div className="flex items-center mb-2">
                        <MapPin size={14} className="text-gray-400 mr-1" />
                        <span className="text-[12px] font-poppins text-gray-500">
                          {suggestion.location}
                        </span>
                      </div>
                      <div className="flex items-center mb-3">
                        <Star size={14} className="text-[#FFD700] mr-1 fill-current" />
                        <span className="text-[12px] font-poppins text-gray-600">
                          {suggestion.rating}
                        </span>
                        <span className="text-[12px] font-poppins text-gray-400 ml-2">
                          Guide: {suggestion.guide}
                        </span>
                      </div>
                      <p className="text-[12px] font-poppins text-gray-600 line-clamp-2">
                        {suggestion.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Friends Location */}
            <div>
              <h2 className="text-[20px] font-poppins font-bold text-black mb-6">
                Friends Location
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                {/* Map Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <MapPin size={32} className="text-[#4A90E2] mx-auto mb-2" />
                    <p className="text-[14px] font-poppins text-gray-600">Interactive Map</p>
                  </div>
                  
                  {/* Sample location markers */}
                  <div className="absolute top-4 left-6 w-3 h-3 bg-[#FF6B35] rounded-full border-2 border-white shadow-sm"></div>
                  <div className="absolute top-8 right-8 w-3 h-3 bg-[#28A745] rounded-full border-2 border-white shadow-sm"></div>
                  <div className="absolute bottom-6 left-8 w-3 h-3 bg-[#4A90E2] rounded-full border-2 border-white shadow-sm"></div>
                  <div className="absolute bottom-4 right-6 w-3 h-3 bg-[#DC3545] rounded-full border-2 border-white shadow-sm"></div>
                </div>

                {/* Friends List */}
                <div className="space-y-3">
                  {friends.map((friend) => (
                    <div key={friend.name} className="flex items-center">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                        <img
                          src={friend.avatar}
                          alt={friend.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-[14px] font-poppins font-medium text-black">
                          {friend.name}
                        </p>
                        <p className="text-[12px] font-poppins text-gray-500">
                          {friend.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* One Week Itinerary */}
            <div>
              <h2 className="text-[20px] font-poppins font-bold text-black mb-6">
                One Week Itinerary - Malacca
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Malacca"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[16px] font-poppins font-semibold text-black mb-4">
                    Heritage City Adventure
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] font-poppins text-gray-600">Budget</span>
                      <span className="text-[14px] font-poppins font-medium text-black">$950</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] font-poppins text-gray-600">Duration</span>
                      <span className="text-[14px] font-poppins font-medium text-black">7 days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] font-poppins text-gray-600">People</span>
                      <span className="text-[14px] font-poppins font-medium text-black">4 people</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-[#4A90E2] text-white py-2 px-4 rounded-lg hover:bg-[#357ABD] transition-colors duration-200">
                    <span className="text-[14px] font-poppins font-medium">View Details</span>
                  </button>
                </div>
              </div>
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
      `}</style>
    </div>
  );
}