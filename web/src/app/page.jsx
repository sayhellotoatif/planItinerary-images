import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Itinerary from "../components/Itinerary";
import Explore from "../components/Explore";
import Guide from "../components/Guide";
import Friends from "../components/Friends";
import NotificationModal from "../components/NotificationModal";

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Itinerary':
        return <Itinerary />;
      case 'Explore':
        return <Explore />;
      case 'Guide':
        return <Guide />;
      case 'Friends':
        return <Friends />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-[280px] transition-all duration-300">
        {/* Mobile Header Bar */}
        <div className="lg:hidden bg-white border-b border-gray-200 px-3 py-2.5 flex items-center justify-between sticky top-0 z-30">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Menu size={20} className="text-gray-700" />
          </button>
          <h1 className="text-[18px] font-poppins font-semibold text-black">
            TripPlanner
          </h1>
          <div className="w-8" />
        </div>

        {/* Header */}
        <Header 
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
        />

        {/* Content */}
        {renderContent()}

        {/* Notification Modal */}
        {showNotifications && (
          <NotificationModal onClose={() => setShowNotifications(false)} />
        )}
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