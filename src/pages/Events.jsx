import React, { useState } from "react";
import EventCard from "../components/EventCard";

const Events = () => {
  const [search, setSearch] = useState("");

  const events = [
    { id: 1, title: "Tech Conference 2025", date: "2025-03-10T12:00:00Z", location: "Nairobi" },
    { id: 2, title: "Music Festival", date: "2025-04-15T18:00:00Z", location: "Mombasa" },
    { id: 3, title: "Business Expo", date: "2025-05-20T09:00:00Z", location: "Kisumu" }
  ];

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase()) ||
    event.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Explore Events</h1>
        <p className="text-lg text-gray-500 mt-2">Find your next great experience!</p>
      </div>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
        />
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-6">No events found.</p>
      )}
    </div>
  );
};

export default Events;
