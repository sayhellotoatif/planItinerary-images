import { Bell, Search, Download } from "lucide-react";

export default function Header({ showNotifications, setShowNotifications }) {
  return (
    <header className="bg-white w-full px-6 lg:px-8 py-6 border-b border-gray-100">
      {/* Top Section */}
      <div className="flex items-center justify-between mb-6">
        {/* Greeting */}
        <div>
          <h1 className="text-[28px] lg:text-[32px] font-poppins font-bold text-black">
            Good Morning, Cecil 👋
          </h1>
          <p className="text-[16px] font-poppins text-gray-600 mt-1">
            Plan your itinerary with us
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Search Button */}
          <button className="hidden md:flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200">
            <Search size={16} className="mr-2 text-gray-500" />
            <span className="text-[14px] font-poppins text-gray-600">Search</span>
          </button>

          {/* Notification Button */}
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200"
            aria-label="Notifications"
          >
            <Bell size={18} className="text-gray-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>

          {/* Get Apps Button */}
          <button className="hidden md:flex items-center px-4 py-2 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors duration-200">
            <Download size={16} className="mr-2" />
            <span className="text-[14px] font-poppins font-medium">Get Apps</span>
          </button>
        </div>
      </div>

      {/* Stories Section */}
      <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide pb-2">
        {/* Add Your Story */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-100 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center">
            <span className="text-[24px]">+</span>
          </div>
          <span className="text-[12px] font-poppins text-gray-600 mt-1">Add</span>
        </div>

        {/* Story Items */}
        {[
          {
            name: "Jerome Bell",
            avatar: "https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=400",
            story: "https://images.pexels.com/photos/853155/pexels-photo-853155.jpeg?auto=compress&cs=tinysrgb&w=400"
          },
          {
            name: "Arlene McCoy",
            avatar: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400",
            story: "https://images.pexels.com/photos/4140887/pexels-photo-4140887.jpeg?auto=compress&cs=tinysrgb&w=400"
          },
          {
            name: "Ronald Richards",
            avatar: "https://images.pexels.com/photos/33012182/pexels-photo-33012182.jpeg?auto=compress&cs=tinysrgb&w=400",
            story: "https://images.pexels.com/photos/853155/pexels-photo-853155.jpeg?auto=compress&cs=tinysrgb&w=400"
          },
          {
            name: "Theresa Webb",
            avatar: "https://images.pexels.com/photos/33027128/pexels-photo-33027128.jpeg?auto=compress&cs=tinysrgb&w=400",
            story: "https://images.pexels.com/photos/4140887/pexels-photo-4140887.jpeg?auto=compress&cs=tinysrgb&w=400"
          },
        ].map((story) => (
          <div key={story.name} className="flex-shrink-0 flex flex-col items-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-[#FF6B35] p-0.5">
                <img
                  src={story.story}
                  alt={story.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                <img
                  src={story.avatar}
                  alt={`${story.name} avatar`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-[12px] font-poppins text-gray-600 mt-1 max-w-[60px] truncate">
              {story.name.split(' ')[0]}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </header>
  );
}