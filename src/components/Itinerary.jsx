import { Calendar, Clock, MapPin, Users, Plus, Edit3 } from "lucide-react";

export default function Itinerary() {
  const itineraries = [
    {
      id: 1,
      title: "Kuala Lumpur Adventure",
      destination: "Kuala Lumpur, Malaysia",
      image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=400",
      startDate: "Mar 15, 2024",
      endDate: "Mar 20, 2024",
      duration: "5 days",
      participants: 3,
      activities: [
        {
          day: 1,
          date: "Mar 15",
          activities: [
            { time: "09:00", title: "Arrive at KLIA Airport", location: "Kuala Lumpur International Airport" },
            { time: "12:00", title: "Check-in at Hotel", location: "Grand Hyatt Kuala Lumpur" },
            { time: "15:00", title: "Visit Petronas Towers", location: "KLCC" },
            { time: "18:00", title: "Dinner at Jalan Alor", location: "Bukit Bintang" },
          ]
        },
        {
          day: 2,
          date: "Mar 16",
          activities: [
            { time: "08:00", title: "Breakfast at Hotel", location: "Grand Hyatt" },
            { time: "09:30", title: "Batu Caves Tour", location: "Batu Caves" },
            { time: "13:00", title: "Lunch at Central Market", location: "Central Market" },
            { time: "15:00", title: "National Museum Visit", location: "Kuala Lumpur" },
          ]
        },
        {
          day: 3,
          date: "Mar 17",
          activities: [
            { time: "09:00", title: "Merdeka Square", location: "Dataran Merdeka" },
            { time: "11:00", title: "Sultan Abdul Samad Building", location: "Kuala Lumpur" },
            { time: "14:00", title: "KL Tower Visit", location: "KL Tower" },
            { time: "19:00", title: "Night Market", location: "Petaling Street" },
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Sapa Mountain Trek",
      destination: "Sapa, Vietnam",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=400",
      startDate: "Apr 10, 2024",
      endDate: "Apr 17, 2024",
      duration: "7 days",
      participants: 2,
      activities: [
        {
          day: 1,
          date: "Apr 10",
          activities: [
            { time: "08:00", title: "Train from Hanoi", location: "Hanoi Railway Station" },
            { time: "20:00", title: "Arrive in Sapa", location: "Sapa Town" },
            { time: "21:00", title: "Check-in Hotel", location: "Sapa Luxury Hotel" },
          ]
        },
        {
          day: 2,
          date: "Apr 11",
          activities: [
            { time: "07:00", title: "Ham Rong Mountain", location: "Sapa" },
            { time: "10:00", title: "Cat Cat Village", location: "Cat Cat Village" },
            { time: "15:00", title: "Local Market Visit", location: "Sapa Market" },
          ]
        }
      ]
    }
  ];

  return (
    <div className="flex-1 bg-gray-50 p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-[32px] font-poppins font-bold text-black mb-2">
              My Itineraries
            </h1>
            <p className="text-[16px] font-poppins text-gray-600">
              Manage and view your travel plans
            </p>
          </div>
          <button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-6 py-3 rounded-lg flex items-center transition-colors duration-200">
            <Plus size={20} className="mr-2" />
            <span className="font-poppins font-medium">Create New</span>
          </button>
        </div>

        {/* Itineraries List */}
        <div className="space-y-8">
          {itineraries.map((itinerary) => (
            <div key={itinerary.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Itinerary Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden">
                      <img
                        src={itinerary.image}
                        alt={itinerary.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-[20px] font-poppins font-semibold text-black mb-2">
                        {itinerary.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-[14px] font-poppins text-gray-600">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {itinerary.destination}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {itinerary.startDate} - {itinerary.endDate}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {itinerary.duration}
                        </div>
                        <div className="flex items-center">
                          <Users size={14} className="mr-1" />
                          {itinerary.participants} people
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <Edit3 size={18} />
                  </button>
                </div>
              </div>

              {/* Daily Activities */}
              <div className="p-6">
                <div className="space-y-6">
                  {itinerary.activities.map((day) => (
                    <div key={day.day}>
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-[14px] font-poppins font-medium mr-3">
                          {day.day}
                        </div>
                        <h3 className="text-[16px] font-poppins font-semibold text-black">
                          Day {day.day} - {day.date}
                        </h3>
                      </div>
                      
                      <div className="ml-11 space-y-3">
                        {day.activities.map((activity, index) => (
                          <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-75 transition-colors duration-200">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-8 bg-white border border-gray-200 rounded text-center flex items-center justify-center">
                                <span className="text-[12px] font-poppins font-medium text-gray-700">
                                  {activity.time}
                                </span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-[14px] font-poppins font-medium text-black mb-1">
                                {activity.title}
                              </h4>
                              <p className="text-[12px] font-poppins text-gray-500 flex items-center">
                                <MapPin size={12} className="mr-1" />
                                {activity.location}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-gray-100">
                  <button className="flex-1 bg-[#4A90E2] hover:bg-[#357ABD] text-white py-2 px-4 rounded-lg transition-colors duration-200">
                    <span className="text-[14px] font-poppins font-medium">View Full Details</span>
                  </button>
                  <button className="px-6 py-2 border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <span className="text-[14px] font-poppins font-medium">Share</span>
                  </button>
                  <button className="px-6 py-2 border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <span className="text-[14px] font-poppins font-medium">Export</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for additional itineraries */}
        <div className="bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-200 p-12 text-center">
          <Calendar size={48} className="text-gray-300 mx-auto mb-4" />
          <h3 className="text-[18px] font-poppins font-medium text-gray-500 mb-2">
            Ready for your next adventure?
          </h3>
          <p className="text-[14px] font-poppins text-gray-400 mb-6">
            Create a new itinerary to start planning your trip
          </p>
          <button className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-6 py-3 rounded-lg inline-flex items-center transition-colors duration-200">
            <Plus size={18} className="mr-2" />
            <span className="font-poppins font-medium">Create New Itinerary</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .bg-gray-75 {
          background-color: rgba(0, 0, 0, 0.03);
        }
      `}</style>
    </div>
  );
}