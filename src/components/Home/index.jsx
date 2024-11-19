import React from "react";
import UsersContainer from "../UsersContainer";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleAddUser = () => {
    localStorage.setItem("userId", null);
    navigate("/user-form");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Container for the whole page */}
      <div className="max-w-6xl mx-auto">
        {/* Centered content */}
        <div className="text-center mb-8">
          <button
            onClick={handleAddUser}
            className="bg-blue-500 w-56 text-white py-2 px-4 rounded-sm shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
          >
            Add User
          </button>
        </div>

        {/* Users Container */}
        <UsersContainer />
      </div>
    </div>
  );
};
