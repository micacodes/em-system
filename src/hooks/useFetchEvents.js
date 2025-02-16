import { useContext } from "react";
import { EventContext } from "../context/EventContext";

// Custom Hook for Fetching Events
const useFetchEvents = () => {
  return useContext(EventContext);
};

export default useFetchEvents;
