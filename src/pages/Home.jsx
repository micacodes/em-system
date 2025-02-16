import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";

const Home = () => {
  // Sample events for display
  const events = [
    { id: 1, title: "Tech Conference 2025", date: "2025-03-10T12:00:00Z", location: "Nairobi" },
    { id: 2, title: "Music Festival", date: "2025-04-15T18:00:00Z", location: "Mombasa" },
    { id: 3, title: "Business Expo", date: "2025-05-20T09:00:00Z", location: "Kisumu" }
  ];

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Discover & Book Amazing Events</h1>
        <p className="text-gray-600 mb-6">Find and participate in exciting events near you.</p>
        <Link to="/events" className="btn-primary">Explore Events</Link>
      </div>

      {/* Upcoming Events */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
