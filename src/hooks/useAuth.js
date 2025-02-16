import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Custom Hook for Authentication
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
