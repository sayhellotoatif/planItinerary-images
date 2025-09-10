import { X, MapPin, Users, Calendar, Star } from "lucide-react";

export default function NotificationModal({ onClose }) {
  const notifications = [
    {
      id: 1,
      type: "trip",
      title: "New trip suggestion",
      message: "Jerome Bell suggested visiting Bali this summer",
      time: "2 minutes ago",
      icon: MapPin,
      color: "#4A90E2",
      unread: true,
    },
    {
      id: 2,
      type: "friend",
      title: "Friend joined your trip",
      message: "Arlene McCoy joined your Kuala Lumpur trip",
      time: "1 hour ago",
      icon: Users,
      color: "#28A745",
      unread: true,
    },
    {
      id: 3,
      type: "itinerary",
      title: "Itinerary updated",
      message: "Your Tokyo itinerary has been updated with new activities",
      time: "3 hours ago",
      icon: Calendar,
      color: "#FF6B35",
      unread: false,
    },
    {
      id: 4,
      type: "review",
      title: "New review received",
      message: "Ronald Richards left a 5-star review for your Bangkok guide",
      time: "1 day ago",
      icon: Star,
      color: "#FFD700",
      unread: false,
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-4 right-4 w-[400px] max-w-[calc(100vw-32px)] bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h3 className="text-[18px] font-poppins font-semibold text-black">
            Notifications
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Close notifications"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Notification List */}
        <div className="max-h-[500px] overflow-y-auto">
          {notifications.map((notification) => {
            const IconComponent = notification.icon;
            return (
              <div
                key={notification.id}
                className={`p-4 border-b border-gray-50 hover:bg-gray-25 cursor-pointer transition-colors duration-200 ${
                  notification.unread ? "bg-blue-25" : ""
                }`}
              >
                <div className="flex items-start">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-3 opacity-90"
                    style={{ backgroundColor: `${notification.color}20` }}
                  >
                    <IconComponent
                      size={18}
                      style={{ color: notification.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] font-poppins font-medium text-black mb-1">
                          {notification.title}
                        </p>
                        <p className="text-[13px] font-poppins text-gray-600 leading-relaxed">
                          {notification.message}
                        </p>
                        <p className="text-[12px] font-poppins text-gray-400 mt-2">
                          {notification.time}
                        </p>
                      </div>

                      {/* Unread indicator */}
                      {notification.unread && (
                        <div className="w-2 h-2 bg-[#4A90E2] rounded-full ml-2 mt-1 flex-shrink-0"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100">
          <button className="w-full text-[14px] font-poppins font-medium text-[#4A90E2] hover:text-[#357ABD] transition-colors duration-200">
            Mark all as read
          </button>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .bg-blue-25 {
          background-color: rgba(74, 144, 226, 0.05);
        }
        
        .bg-gray-25 {
          background-color: rgba(0, 0, 0, 0.02);
        }
      `}</style>
    </>
  );
}