import React from "react";
import Calendar from "./components/Calendar";
import eventsData from "./data/events.json";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex">
      {}
      <aside className="w-72 bg-gradient-to-r from-green-400 to-blue-500 p-6 shadow-lg hidden md:block">
        <h2 className="text-xl font-semibold text-white mb-6">My Calendar</h2>
        <div className="rounded-lg bg-white p-4 text-center shadow-lg">
          <p className="text-gray-600 mb-2">Today is</p>
          <p className="text-2xl font-bold">{new Date().toLocaleDateString()}</p>
        </div>
      </aside>

      {}
      <main className="flex-1 p-6">
        {}
        <div className="bg-primary text-white p-4 text-center rounded-lg mb-6">
         
        </div>

        {}
        <div className="bg-white rounded-xl shadow-lg p-6 overflow-hidden">
          <Calendar events={eventsData.events} />
        </div>
      </main>
    </div>
  );
}
