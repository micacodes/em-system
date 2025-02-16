const API_URL = "https://your-api-url.com/api/auth"; // Replace with actual API URL

// Login Function
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Login failed");

    return data; // Return user data
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};

// Register Function
export const registerUser = async (name, email, password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Registration failed");

    return data; // Return user data
  } catch (error) {
    console.error("Registration error:", error.message);
    throw error;
  }
};

// Logout Function (Clears local storage)
export const logoutUser = () => {
  localStorage.removeItem("user");
};
