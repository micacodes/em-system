const API_URL = "https://your-api-url.com/api/events"; // Replace with actual API URL

// Fetch Events Function
export const fetchEvents = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Failed to fetch events");

    return data; // Return event list
  } catch (error) {
    console.error("Error fetching events:", error.message);
    throw error;
  }
};

// Fetch Single Event by ID
export const fetchEventById = async (eventId) => {
  try {
    const response = await fetch(`${API_URL}/${eventId}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Event not found");

    return data;
  } catch (error) {
    console.error("Error fetching event:", error.message);
    throw error;
  }
};
