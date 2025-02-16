import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
        <p className="text-sm text-gray-600">{event.date} | {event.location}</p>
        <p className="text-sm text-gray-700 mt-2">{event.description.substring(0, 100)}...</p>
        
        <div className="mt-4">
          <Link to={`/events/${event.id}`}>
            <Button variant="primary">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
