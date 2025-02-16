import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();

  // Dummy event data
  const event = {
    id,
    title: "Tech Conference 2025",
    date: "2025-03-10T12:00:00Z",
    location: "Nairobi",
    description: "A premier tech conference featuring top industry experts."
  };

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-purple-700">{event.title}</h1>
      <p className="text-gray-500 mt-2">{new Date(event.date).toDateString()}</p>
      <p className="text-gray-700 mt-4">{event.description}</p>
      <p className="text-gray-600 mt-2">Location: {event.location}</p>
    </div>
  );
};

export default EventDetails;
