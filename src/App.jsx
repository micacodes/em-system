import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";  // ✅ Import routes

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <AppRoutes />  {/* ✅ Routes are here */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
