import {
  LayoutGrid,
  CalendarCheck,
  Search,
  MapPin,
  Users,
  LogOut,
  X,
  Plus,
} from "lucide-react";

export default function Sidebar({ isOpen, onClose, activeTab, setActiveTab }) {
  const generalItems = [
    {
      name: "Dashboard",
      icon: LayoutGrid,
      color: "#FF6B35",
    },
    {
      name: "Itinerary",
      icon: CalendarCheck,
      color: "#4A90E2",
    },
  ];

  const discoverItems = [
    {
      name: "Explore",
      icon: Search,
      color: "#4A90E2",
    },
    {
      name: "Guide",
      icon: MapPin,
      color: "#4A90E2",
    },
    {
      name: "Friends",
      icon: Users,
      color: "#4A90E2",
    },
  ];

  const trips = [
    { name: "Kuala Lumpur", color: "#FF6B35" },
    { name: "Tokyo", color: "#4A90E2" },
    { name: "Bangkok", color: "#28A745" },
    { name: "Hanoi", color: "#DC3545" },
  ];

  const handleItemClick = (itemName) => {
    setActiveTab(itemName);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <div
      className={`w-[280px] bg-white shadow-sm border-r border-gray-200 fixed left-0 top-0 h-full flex flex-col font-inter z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
    >
      {/* Mobile Close Button */}
      <div className="lg:hidden absolute top-4 right-4 z-10">
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
          aria-label="Close menu"
        >
          <X size={20} className="text-gray-700" />
        </button>
      </div>

      {/* User Profile Section */}
      <div className="pt-6 px-6 pb-6">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
            <img
              src="https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Cecilia Puni"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-[16px] font-poppins font-semibold text-black">
              Cecilia Puni
            </h2>
            <p className="text-[12px] font-poppins text-gray-500">
              Part-time Traveller
            </p>
          </div>
        </div>

        {/* New Trip Button */}
        <button className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white rounded-lg py-3 px-4 flex items-center justify-center transition-colors duration-200">
          <Plus size={16} className="mr-2" />
          <span className="font-poppins font-medium">New Trip</span>
        </button>
      </div>

      {/* Menu Sections */}
      <div className="flex-1 px-6 overflow-y-auto scrollbar-hide">
        {/* Trips Section */}
        <div className="mb-8">
          <h3 className="text-[12px] font-poppins font-semibold text-gray-400 uppercase tracking-wider mb-4">
            TRIPS
          </h3>
          <div className="space-y-2">
            {trips.map((trip) => (
              <div key={trip.name} className="flex items-center py-2">
                <div
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: trip.color }}
                ></div>
                <span className="text-[14px] font-poppins text-gray-700">
                  {trip.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* General Section */}
        <div className="mb-8">
          <h3 className="text-[12px] font-poppins font-semibold text-gray-400 uppercase tracking-wider mb-4">
            GENERAL
          </h3>
          <div className="space-y-2">
            {generalItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.name;
              return (
                <div
                  key={item.name}
                  onClick={() => handleItemClick(item.name)}
                  className={`flex items-center py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-[#FFF5F0] border border-[#FF6B35]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <IconComponent
                    size={18}
                    className={`mr-3 ${
                      isActive ? "text-[#FF6B35]" : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`text-[14px] font-poppins ${
                      isActive ? "text-[#FF6B35] font-medium" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Discover Section */}
        <div className="mb-8">
          <h3 className="text-[12px] font-poppins font-semibold text-gray-400 uppercase tracking-wider mb-4">
            DISCOVER
          </h3>
          <div className="space-y-2">
            {discoverItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.name;
              return (
                <div
                  key={item.name}
                  onClick={() => handleItemClick(item.name)}
                  className={`flex items-center py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-[#F0F7FF] border border-[#4A90E2]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <IconComponent
                    size={18}
                    className={`mr-3 ${
                      isActive ? "text-[#4A90E2]" : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`text-[14px] font-poppins ${
                      isActive ? "text-[#4A90E2] font-medium" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-6 border-t border-gray-200">
        <div className="flex items-center py-2 px-3 rounded-lg cursor-pointer hover:bg-red-50 transition-colors duration-200">
          <LogOut size={18} className="mr-3 text-red-500" />
          <span className="text-[14px] font-poppins text-red-500">Logout</span>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .font-inter {
          font-family: 'Inter', sans-serif;
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