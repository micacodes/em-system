import { createContext, useState, useEffect } from "react";

// Create Context
export const EventContext = createContext();

// Event Provider Component
export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]); // Stores event list
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate fetching events from an API
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        // Simulate API call (Replace with actual API call later)
        const fakeEvents = [
          { id: 1, name: "Tech Conference", date: "2025-05-10", location: "Nairobi" },
          { id: 2, name: "Music Festival", date: "2025-06-15", location: "Mombasa" },
        ];
        setEvents(fakeEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <EventContext.Provider value={{ events, loading }}>
      {children}
    </EventContext.Provider>
  );
};
