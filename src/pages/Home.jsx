import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";

const Home = () => {
  const events = [
    { id: 1, title: "Tech Conference 2025", date: "2025-03-10T12:00:00Z", location: "Nairobi" },
    { id: 2, title: "Music Festival", date: "2025-04-15T18:00:00Z", location: "Mombasa" },
    { id: 3, title: "Business Expo", date: "2025-05-20T09:00:00Z", location: "Kisumu" }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Discover & Book Amazing Events</h1>
        <p className="text-lg mb-6">Find and participate in exciting events near you.</p>
        <Link to="/events" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
          Explore Events
        </Link>
      </div>

      {/* Upcoming Events */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Upcoming Events</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
