import { useState } from "react";
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
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">All Events</h1>

      {/* Search Input */}
      <input 
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-6"
      />

      {/* Events Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => <EventCard key={event.id} event={event} />)
        ) : (
          <p className="text-gray-500">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
