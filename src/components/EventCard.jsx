import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
      {event?.image && (
        <img
          src={event.image}
          alt={event?.title || "Event Image"}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{event?.title || "Untitled Event"}</h3>
        <p className="text-sm text-gray-600">
          {event?.date || "Date not available"} | {event?.location || "Location not available"}
        </p>
        <p className="text-sm text-gray-700 mt-2">
          {event?.description?.substring(0, 100) || "No description available"}...
        </p>

        <div className="mt-4">
          {event?.id ? (
            <Link to={`/events/${event.id}`}>
              <Button variant="primary">View Details</Button>
            </Link>
          ) : (
            <Button variant="primary" disabled>No Details</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
