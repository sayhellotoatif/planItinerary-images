import { Search, MapPin, MessageCircle, UserPlus, Users, Calendar, Filter, Globe } from "lucide-react";

export default function Friends() {
  const friends = [
    {
      id: 1,
      name: "Jerome Bell",
      avatar: "https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Tokyo, Japan",
      currentTrip: "Exploring Shibuya",
      status: "online",
      mutualFriends: 12,
      joinedTrips: 5,
      lastActive: "Active now",
      bio: "Digital nomad exploring Asia. Love street food and photography!",
      interests: ["Photography", "Food", "Culture"],
      nextTrip: "Seoul, Korea - Apr 15",
    },
    {
      id: 2,
      name: "Arlene McCoy",
      avatar: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Bali, Indonesia",
      currentTrip: "Beach hopping in Seminyak",
      status: "traveling",
      mutualFriends: 8,
      joinedTrips: 3,
      lastActive: "2 hours ago",
      bio: "Yoga instructor and travel blogger. Always seeking new adventures.",
      interests: ["Yoga", "Wellness", "Beaches"],
      nextTrip: "Thailand - May 1",
    },
    {
      id: 3,
      name: "Ronald Richards",
      avatar: "https://images.pexels.com/photos/33012182/pexels-photo-33012182.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Bangkok, Thailand",
      currentTrip: "Street food tour",
      status: "online",
      mutualFriends: 15,
      joinedTrips: 7,
      lastActive: "30 minutes ago",
      bio: "Food enthusiast and local guide. Know all the best hidden gems!",
      interests: ["Street Food", "Local Culture", "Markets"],
      nextTrip: "Vietnam - Jun 10",
    },
    {
      id: 4,
      name: "Theresa Webb",
      avatar: "https://images.pexels.com/photos/33027128/pexels-photo-33027128.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Seoul, South Korea",
      currentTrip: "K-Pop studio tours",
      status: "offline",
      mutualFriends: 6,
      joinedTrips: 2,
      lastActive: "1 day ago",
      bio: "K-culture enthusiast and language exchange coordinator.",
      interests: ["K-Pop", "Language Exchange", "Shopping"],
      nextTrip: "Japan - Apr 20",
    },
    {
      id: 5,
      name: "Brooklyn Simmons",
      avatar: "https://images.pexels.com/photos/33010867/pexels-photo-33010867.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Rome, Italy",
      currentTrip: "Art gallery hopping",
      status: "traveling",
      mutualFriends: 20,
      joinedTrips: 9,
      lastActive: "4 hours ago",
      bio: "Art history professor exploring European museums and galleries.",
      interests: ["Art History", "Museums", "Architecture"],
      nextTrip: "Greece - May 15",
    },
    {
      id: 6,
      name: "Ralph Edwards",
      avatar: "https://images.pexels.com/photos/33012182/pexels-photo-33012182.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Cusco, Peru",
      currentTrip: "Machu Picchu trek",
      status: "traveling",
      mutualFriends: 11,
      joinedTrips: 4,
      lastActive: "6 hours ago",
      bio: "Mountain climbing enthusiast and adventure photographer.",
      interests: ["Mountain Climbing", "Photography", "History"],
      nextTrip: "Chile - Jul 1",
    },
  ];

  const friendRequests = [
    {
      id: 1,
      name: "Wade Warren",
      avatar: "https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Paris, France",
      mutualFriends: 3,
    },
    {
      id: 2,
      name: "Kathryn Murphy",
      avatar: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400",
      location: "Barcelona, Spain",
      mutualFriends: 7,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "traveling":
        return "bg-blue-500";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "online":
        return "Online";
      case "traveling":
        return "Traveling";
      case "offline":
        return "Offline";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="flex-1 bg-gray-50 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[32px] font-poppins font-bold text-black mb-2">
            Friends & Travel Community
          </h1>
          <p className="text-[16px] font-poppins text-gray-600">
            Connect with fellow travelers and explore together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-8">
            {/* Search and Filters */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search friends by name, location..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent outline-none font-poppins"
                  />
                </div>

                {/* Filter Button */}
                <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center transition-colors duration-200">
                  <Filter size={18} className="mr-2 text-gray-600" />
                  <span className="font-poppins text-gray-700">Status</span>
                </button>

                {/* Add Friend Button */}
                <button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-6 py-3 rounded-lg flex items-center transition-colors duration-200">
                  <UserPlus size={18} className="mr-2" />
                  <span className="font-poppins font-medium">Add Friend</span>
                </button>
              </div>
            </div>

            {/* Friends List */}
            <div className="space-y-6">
              {friends.map((friend) => (
                <div
                  key={friend.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start space-x-4">
                    {/* Avatar with Status */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={friend.avatar}
                          alt={friend.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        className={`absolute -bottom-1 -right-1 w-5 h-5 ${getStatusColor(friend.status)} border-2 border-white rounded-full`}
                      ></div>
                    </div>

                    {/* Friend Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-[18px] font-poppins font-semibold text-black mb-1">
                            {friend.name}
                          </h3>
                          <div className="flex items-center text-[14px] font-poppins text-gray-600 mb-2">
                            <MapPin size={14} className="mr-1" />
                            {friend.location}
                            <span className="mx-2">•</span>
                            <span className={getStatusColor(friend.status).replace('bg-', 'text-')}>
                              {getStatusText(friend.status)}
                            </span>
                          </div>
                          <p className="text-[14px] font-poppins text-gray-600 mb-3">
                            {friend.bio}
                          </p>
                        </div>
                      </div>

                      {/* Current Activity */}
                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-3">
                        <div className="flex items-center">
                          <Globe size={14} className="text-blue-500 mr-2" />
                          <span className="text-[14px] font-poppins text-blue-700">
                            Currently: {friend.currentTrip}
                          </span>
                        </div>
                      </div>

                      {/* Interests */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {friend.interests.map((interest, index) => (
                            <span
                              key={index}
                              className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[12px] font-poppins"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center space-x-6 text-[14px] font-poppins text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Users size={14} className="mr-1" />
                          {friend.mutualFriends} mutual friends
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {friend.joinedTrips} trips together
                        </div>
                        <div>Last active: {friend.lastActive}</div>
                      </div>

                      {/* Next Trip */}
                      <div className="mb-4">
                        <span className="text-[12px] font-poppins font-medium text-gray-500 uppercase tracking-wider">
                          Next Trip
                        </span>
                        <p className="text-[14px] font-poppins text-gray-700">
                          {friend.nextTrip}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white px-4 py-2 rounded-lg flex items-center transition-colors duration-200">
                          <MessageCircle size={16} className="mr-2" />
                          <span className="text-[14px] font-poppins font-medium">Message</span>
                        </button>
                        <button className="border border-gray-200 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors duration-200">
                          <span className="text-[14px] font-poppins font-medium">View Profile</span>
                        </button>
                        <button className="border border-gray-200 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors duration-200">
                          <span className="text-[14px] font-poppins font-medium">Invite to Trip</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Friend Requests */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-[18px] font-poppins font-semibold text-black mb-4">
                Friend Requests
              </h2>
              <div className="space-y-4">
                {friendRequests.map((request) => (
                  <div key={request.id} className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={request.avatar}
                        alt={request.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[14px] font-poppins font-medium text-black">
                        {request.name}
                      </h4>
                      <p className="text-[12px] font-poppins text-gray-500">
                        {request.location}
                      </p>
                      <p className="text-[11px] font-poppins text-gray-400">
                        {request.mutualFriends} mutual friends
                      </p>
                      <div className="flex space-x-2 mt-2">
                        <button className="bg-[#4A90E2] text-white px-3 py-1 rounded text-[12px] font-poppins font-medium">
                          Accept
                        </button>
                        <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[12px] font-poppins font-medium">
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Online Friends */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-[18px] font-poppins font-semibold text-black mb-4">
                Online Now
              </h2>
              <div className="space-y-3">
                {friends
                  .filter((friend) => friend.status === "online")
                  .map((friend) => (
                    <div key={friend.id} className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src={friend.avatar}
                            alt={friend.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[14px] font-poppins font-medium text-black">
                          {friend.name}
                        </h4>
                        <p className="text-[12px] font-poppins text-gray-500">
                          {friend.location}
                        </p>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-blue-500 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                        <MessageCircle size={16} />
                      </button>
                    </div>
                  ))}
              </div>
            </div>

            {/* Travel Groups */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-[18px] font-poppins font-semibold text-black mb-4">
                Travel Groups
              </h2>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="text-[14px] font-poppins font-medium text-black mb-1">
                    Southeast Asia Explorers
                  </h4>
                  <p className="text-[12px] font-poppins text-gray-500 mb-2">
                    127 members
                  </p>
                  <button className="text-[12px] font-poppins text-[#4A90E2] hover:underline">
                    View Group
                  </button>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="text-[14px] font-poppins font-medium text-black mb-1">
                    Food Lovers Travel
                  </h4>
                  <p className="text-[12px] font-poppins text-gray-500 mb-2">
                    89 members
                  </p>
                  <button className="text-[12px] font-poppins text-[#4A90E2] hover:underline">
                    View Group
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
      `}</style>
    </div>
  );
}