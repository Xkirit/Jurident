import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

function Profile() {
  const [settings, setSettings] = useState({
    phoneNumber: true,
    email: true,
    lawyerId: true,
    location: true,
    googleCalendar: false
  });

  const [userInfo, setUserInfo] = useState({
    name: 'Rohan',
    type: 'Lawyer',
    practiceAs: 'Individual',
    phoneNumber: '+91 - 0123456789',
    lawDegree: 'B.Sc.LLB',
    practiceType: 'Civil',
    enrollmentId: 'Code / ID / Year',
    email: 'example@gmail.com',
    address: 'Hyderabad, Telangana'
  });

  const toggleSetting = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <div className="min-h-screen text-white flex flex-col">
      <Navbar />
      <div className="background-circle circle-1"></div>
      <div className="background-circle circle-2"></div>

      <div className="container mx-auto w-full items-center px-6 py-8 max-w-5xl">
        {/* Personal Information Card */}
        <div className="bg-white/5 backdrop-blur-md w-full z-10 rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold text-[#CDA454] mb-6">Personal Information</h2>
          <div className="relative">
                <img 
                  src="https://placekitten.com/100/100" 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full"
                />
              </div>
          <div className="grid grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              
              <div>
                <label className="text-sm text-gray-400">Lawyer Name*</label>
                <div className="text-white bg-[#06030f] p-2 rounded-md">{userInfo.name}</div>
              </div>
              <div>
                <label className="text-sm text-gray-400">Practice as*</label>
                <div className="text-white bg-[#06030f] p-2 rounded-md">{userInfo.practiceAs}</div>
              </div>
              <div>
                <label className="text-sm text-gray-400">Phone Number</label>
                <div className="text-white bg-[#06030f] p-2 rounded-md">{userInfo.phoneNumber}</div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Lawyer or Law student*</label>
                <select className="w-full bg-[#06030f] rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#CDA454]">
                  <option value="lawyer">{userInfo.type}</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-400">Law Degree</label>
                <select className="w-full bg-[#06030f] rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#CDA454]">
                  <option value="bsc">{userInfo.lawDegree}</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-400">Type</label>
                <select className="w-full bg-[#06030f] rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#CDA454]">
                  <option value="civil">{userInfo.practiceType}</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Enrollment ID</label>
                <div className="text-white bg-[#06030f] p-2 rounded-md">{userInfo.enrollmentId}</div>
              </div>
              <div>
                <label className="text-sm text-gray-400">Email</label>
                <div className="text-white bg-[#06030f] p-2 rounded-md">{userInfo.email}</div>
              </div>
              <div>
                <label className="text-sm text-gray-400">Address</label>
                <div className="text-white bg-[#06030f] p-2 rounded-md">{userInfo.address}</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-2 bg-[#CDA454] rounded-md hover:bg-[#c49b2f] transition-colors">Save Changes</button>
            <button className="px-6 py-2 bg-[#4a4a4a] rounded-md hover:bg-[#3a3a3a] transition-colors">Logout</button>
            <button className="px-6 py-2 bg-red-500 rounded-md hover:bg-red-600 transition-colors">Delete Account</button>
          </div>
        </div>

        {/* Settings Section */}
        <div className="backdrop-blur-md z-10 mx-auto max-w-2xl ml-[150px] items-center rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p className="text-gray-400 text-sm mb-6">Choose what you want to show to other lawyers and users</p>

          <div className="space-y-4">
            {Object.entries(settings).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between p-4 bg-[#06030f] rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-lg">
                    {key === 'phoneNumber' && '📱'}
                    {key === 'email' && '✉️'}
                    {key === 'lawyerId' && '🆔'}
                    {key === 'location' && '📍'}
                    {key === 'googleCalendar' && '📅'}
                  </span>
                  <span className="capitalize">
                    {key === 'lawyerId' ? 'Lawyer ID' : 
                     key === 'googleCalendar' ? 'Google Calendar Access' : 
                     key}
                  </span>
                </div>
                <button 
                  onClick={() => toggleSetting(key)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
                    value ? 'bg-[#CDA454]' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-200 ease-in-out ${
                    value ? 'translate-x-6' : 'translate-x-0'
                  }`} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile; 