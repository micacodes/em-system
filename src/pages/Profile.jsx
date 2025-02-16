import { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">My Profile</h1>

      <div className="mt-6">
        <label className="block text-gray-700">Name</label>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">Email</label>
        <input 
          type="email"
          value={email}
          readOnly
          className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
        />
      </div>
    </div>
  );
};

export default Profile;
