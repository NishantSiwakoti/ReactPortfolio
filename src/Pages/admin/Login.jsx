import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://blog-apis-pied.vercel.app/api/auth/login/",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);

      setIsAuthenticated(true);
      setMessage("Login successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
      setMessage(
        error.response?.data?.message || "Login failed, please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-black p-4">
      <div className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 shadow-2xl rounded-xl p-8 max-w-md w-full transform transition-all duration-500 ease-in-out hover:scale-105 mt-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 dark:text-white">
          Login
        </h2>

        {message && (
          <div
            className={`mt-4 text-center ${
              message.includes("successful") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 font-semibold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-300"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 font-semibold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-300"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-purple-600 dark:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 dark:hover:bg-purple-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition-transform transform hover:scale-105 duration-300"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
