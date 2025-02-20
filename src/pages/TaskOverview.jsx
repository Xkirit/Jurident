import { useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Calendar from '../components/Calendar';
import Footer from '../components/Footer';

function TaskOverview() {
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    type: ''
  });

  const tasks = {
    total: 5,
    pending: 3,
    done: 2
  };

  const events = [
    {
      id: 1,
      title: "Jack",
      date: "2025-02-21 09:00 AM"
    },
    {
      id: 2,
      title: "Adam",
      date: "2025-02-21 10:00 AM"
    },
    {
      id: 3,
      title: "Ron",
      date: "2025-02-21 10:00 AM"
    },
    {
      id: 4,
      title: "Ron vs Joy",
      date: "2025-02-21 11:00 PM"
    },
    {
      id: 5,
      title: "Ron",
      date: "2025-02-21 10:00 AM"
    }
  ];

 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New event:', newEvent);
    setShowModal(false);
    setNewEvent({ title: '', date: '', time: '', type: '' });
  };

  return (
    <div className=" min-h-screen text-white flex flex-col ">
      <div className={`${showModal ? 'blur-sm' : ''} transition-all duration-200`}>
        
        <div className="background-circle circle-1 "></div>
        <div className="background-circle circle-2"></div>
        <Navbar />
        <main className="bg-transparent container mx-auto px-6 py-8 max-w-6xl z-10 ">
          <div className="grid grid-cols-2 gap-8">
            {/* Left side - Events */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Task Overview</h1>
                <button 
                  onClick={() => setShowModal(true)}
                  className="bg-[#D4AF37] text-white px-4 py-2 rounded-md hover:bg-[#C4A137] transition-colors"
                >
                  + Add Event
                </button>
              </div>

              {/* Task Stats */}
              <div className="flex gap-4 mb-12">
                <div className="bg-white bg-opacity-10 rounded-lg px-6 py-4">
                  <div className="text-2xl font-bold">{tasks.total}</div>
                  <div className="text-sm text-gray-400">Total</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg px-6 py-4">
                  <div className="text-2xl font-bold">{tasks.pending}</div>
                  <div className="text-sm text-gray-400">Pending</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg px-6 py-4">
                  <div className="text-2xl font-bold">{tasks.done}</div>
                  <div className="text-sm text-gray-400">Done</div>
                </div>
              </div>

              {/* Events list */}
              <div className="space-y-3">
                {events.map(event => (
                  <div key={event.id} className="flex items-center justify-between bg-white bg-opacity-5 p-4 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-12 bg-yellow-500 rounded-full"></div>
                      <div>
                        <div className="font-semibold">{event.title}</div>
                        <div className="text-sm text-gray-400">{event.date}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="text-red-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Calendar */}
            <div>
              <Calendar />
            </div>
          </div>
        </main>
      </div>

      {/* Add Event Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="bg-[#060125] rounded-lg p-6 w-96 z-50">
            <h2 className="text-xl font-bold text-center mb-6">Add Event</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter Event Title"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                  className="w-full bg-[#06030f] text-white p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="DD / MM /YYYY"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                  className="w-full bg-[#06030f] text-white p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Select a time"
                  value={newEvent.time}
                  onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                  className="w-full bg-[#06030f] text-white p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              <div>
                <select
                  value={newEvent.type}
                  onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                  className="w-full bg-[#06030f] text-white p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                >
                  <option value="">Select a value</option>
                  <option value="blue">Blue</option>
                  <option value="orange">Orange</option>
                  <option value="green">Green</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-white py-2 rounded-md hover:bg-[#C4A137] transition-colors"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default TaskOverview;