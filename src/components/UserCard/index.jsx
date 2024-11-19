import React from "react";
import { useDispatch } from "react-redux";
import { asyncDeleteUser } from "../../store/actions/deleteUser";
import { useNavigate } from "react-router-dom";
import { ConfirmationModal } from "../ConfirmationModal";
import { useModal } from "../hooks/useModal";

const UserCard = ({ cardInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isModalOpen, openModal, closeModal } = useModal();

  const {
    name,
    username,
    company: { name: companyName },
    email,
    id,
  } = cardInfo;

  const handleDelete = () => {
    openModal();
  };

  const handleConfirmDelete = () => {
    dispatch(asyncDeleteUser(id));
    closeModal();
  };

  const handleEdit = () => {
    localStorage.setItem("userId", id);
    navigate("/user-form");
  };

  return (
    <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 p-4">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <h4 className="text-gray-600">{username}</h4>
        <h5 className="text-gray-500">{email}</h5>
        <p className="text-gray-400">Department: {companyName}</p>

        <div className="mt-4 flex justify-between gap-2">
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleConfirmDelete}
        title="Delete User"
        message={`Are you sure you want to delete the user "${username}"?`}
      />
    </div>
  );
};

export default UserCard;
