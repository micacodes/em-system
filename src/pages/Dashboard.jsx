import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="text-gray-600">Manage events and users.</p>

      <div className="mt-6">
        <Link to="/events" className="btn-primary">View Events</Link>
      </div>
    </div>
  );
};

export default Dashboard;
