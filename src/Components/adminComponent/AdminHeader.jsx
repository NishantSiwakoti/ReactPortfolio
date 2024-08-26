import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const AdminHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/admin");
    console.log("User logged out");
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
    setDropdownOpen(false);
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const data = {
        oldPassword,
        newPassword,
        confirmPassword,
      };
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        `https://blog-apis-pied.vercel.app/api/auth/change-password/`,
        data,
        { headers }
      );

      if (response.status === 200) {
        console.log("Password updated successfully");
        alert("Password updated successfully");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setShowForgotPassword(false);
        navigate("/dashboard");
      } else {
        setError("Failed to update password");
      }
    } catch (error) {
      console.error("Error changing password", error);
      setError("Error changing password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeForgotPasswordForm = () => {
    setShowForgotPassword(false);
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="text-xl font-bold">Admin Dashboard</div>
      <div className="relative">
        <FaUserCircle
          className="text-3xl cursor-pointer"
          onClick={toggleDropdown}
        />
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
            <div
              className="p-4 cursor-pointer hover:bg-gray-100"
              onClick={handleLogout}
            >
              Logout
            </div>
            <div
              className="p-4 cursor-pointer hover:bg-gray-100"
              onClick={handleForgotPasswordClick}
            >
              Forgot Password
            </div>
          </div>
        )}
      </div>

      {showForgotPassword && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative bg-white shadow-lg rounded-lg p-6 w-80">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeForgotPasswordForm}
            >
              <AiOutlineClose className="text-xl" />
            </button>
            <h3 className="text-lg font-semibold mb-4 text-center">
              Reset Password
            </h3>
            {error && (
              <div className="text-red-500 text-sm text-center mb-4">
                {error}
              </div>
            )}
            <form onSubmit={handleUpdatePassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Old Password
                </label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                disabled={isLoading}
              >
                {isLoading ? "Updating..." : "Update Password"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHeader;
