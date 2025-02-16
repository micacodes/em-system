import React, { useState } from "react";
import { Eye, EyeOff, Loader, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log("Logged in with:", { email, password, rememberMe });
      navigate("/dashboard"); // Redirect after login
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="rounded border-gray-300 focus:ring-purple-500"
              />
              <span>Remember Me</span>
            </label>
            <Link to="/forgot-password" className="text-purple-600 hover:underline">Forgot Password?</Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-purple-600 text-white py-3 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
            disabled={loading}
          >
            {loading ? <Loader className="animate-spin" size={20} /> : <LogIn size={20} />}
            <span className="ml-2">{loading ? "Logging in..." : "Login"}</span>
          </button>

          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center bg-gray-100 text-gray-700 py-3 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          >
            <AiOutlineGoogle size={20} className="mr-2" />
            Continue with Google
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-purple-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
