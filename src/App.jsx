import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => <div className="p-6 text-center">Home Page</div>;
const Events = () => <div className="p-6 text-center">Events Page</div>;
const Dashboard = () => <div className="p-6 text-center">Dashboard Page</div>;
const Login = () => <div className="p-6 text-center">Login Page</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
