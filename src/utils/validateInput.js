export const validateInput = (name, value) => {
    if (!value.trim()) {
      return `${name} is required`;
    }
  
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      return "Invalid email format";
    }
  
    if (name === "password" && value.length < 6) {
      return "Password must be at least 6 characters";
    }
  
    return ""; // No validation error
  };
  