import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Login</h1>

      <div className="mt-6">
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mt-4">
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <button className="btn-primary mt-4">Login</button>
      <p className="mt-4 text-gray-600">Don't have an account? <Link to="/register" className="text-purple-700">Sign up</Link></p>
    </div>
  );
};

export default Login;
