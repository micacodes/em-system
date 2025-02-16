import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Users, PlusCircle, Edit, List, UserCheck, Activity } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">Admin Dashboard</h1>
        <p className="text-lg text-gray-600 mt-2">Manage events, users, and more.</p>
      </div>

      {/* Admin Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4 border-l-4 border-purple-700">
          <Calendar size={40} className="text-purple-700" />
          <div>
            <h2 className="text-2xl font-bold">12</h2>
            <p className="text-gray-500">Total Events</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4 border-l-4 border-green-600">
          <Users size={40} className="text-green-600" />
          <div>
            <h2 className="text-2xl font-bold">250</h2>
            <p className="text-gray-500">Registered Users</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4 border-l-4 border-blue-500">
          <Calendar size={40} className="text-blue-500" />
          <div>
            <h2 className="text-2xl font-bold">3</h2>
            <p className="text-gray-500">Upcoming Events</p>
          </div>
        </div>
      </div>

      {/* Event & User Management */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Event Management Panel */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Event Management</h2>
          <div className="space-y-4">
            <Link
              to="/events"
              className="flex items-center justify-between bg-purple-700 text-white px-6 py-4 rounded-xl shadow-md hover:bg-purple-800 transition duration-300"
            >
              <span className="text-lg font-medium">View Events</span>
              <List size={24} />
            </Link>

            <Link
              to="/add-event"
              className="flex items-center justify-between bg-green-600 text-white px-6 py-4 rounded-xl shadow-md hover:bg-green-700 transition duration-300"
            >
              <span className="text-lg font-medium">Add New Event</span>
              <PlusCircle size={24} />
            </Link>

            <Link
              to="/manage-events"
              className="flex items-center justify-between bg-blue-500 text-white px-6 py-4 rounded-xl shadow-md hover:bg-blue-600 transition duration-300"
            >
              <span className="text-lg font-medium">Manage Events</span>
              <Edit size={24} />
            </Link>
          </div>
        </div>

        {/* User Management Panel */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <div className="space-y-4">
            <Link
              to="/users"
              className="flex items-center justify-between bg-indigo-600 text-white px-6 py-4 rounded-xl shadow-md hover:bg-indigo-700 transition duration-300"
            >
              <span className="text-lg font-medium">View Users</span>
              <UserCheck size={24} />
            </Link>

            <Link
              to="/user-registrations"
              className="flex items-center justify-between bg-teal-500 text-white px-6 py-4 rounded-xl shadow-md hover:bg-teal-600 transition duration-300"
            >
              <span className="text-lg font-medium">User Registrations</span>
              <Activity size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="mt-12 bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-2 text-gray-700">🎉 <span className="font-medium">Lawrence Kamau</span> registered for <span className="font-medium">Tech Conference 2025</span></li>
          <li className="py-2 text-gray-700">📢 New event added: <span className="font-medium">Music Festival</span> in Mombasa</li>
          <li className="py-2 text-gray-700">✅ <span className="font-medium">Prof Muchoki</span> was approved as an event organizer</li>
          <li className="py-2 text-gray-700">🚀 <span className="font-medium"> Concert Meetup</span> scheduled for June 2025</li>
        </ul>
      </div>

      {/* Upcoming Events */}
      <div className="mt-12 bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
        <div className="space-y-3">
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-semibold">Tech Conference 2025</h3>
            <p className="text-sm text-gray-600">📅 March 10, 2025 | 📍 Nairobi</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-semibold">Music Festival</h3>
            <p className="text-sm text-gray-600">📅 April 15, 2025 | 📍 Mombasa</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-semibold">Business Expo</h3>
            <p className="text-sm text-gray-600">📅 May 20, 2025 | 📍 Kisumu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
