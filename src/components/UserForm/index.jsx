import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm.js";
import { validateUserForm } from "../../utils/validateUserForm";
import { asyncAddUser } from "../../store/actions/addUser.js";
import { asyncUpdateUser } from "../../store/actions/updateUser.js";
import { FormInput } from "./FormInput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { usersList } = useSelector((state) => state.UsersList);

  const userId = localStorage.getItem("userId");
  const existingUser = usersList?.find((user) => user.id.toString() === userId);

  const { formData, errors, handleInputChange, validate, setFormData } =
    useForm(
      {
        name: "",
        username: "",
        email: "",
        company: { name: "" },
      },
      validateUserForm
    );

  useEffect(() => {
    if (userId && existingUser) {
      setFormData({
        name: existingUser.name || "",
        username: existingUser.username || "",
        email: existingUser.email || "",
        company: { name: existingUser.company.name || "" },
      });
    }
  }, [userId, existingUser, setFormData]);

  const handleSubmit = async () => {
    if (!validate()) return;
    await dispatch(asyncAddUser(formData));
    toast.success("User added successfully!", {
      onClose: () => navigate("/"), // Navigate after toast closes
    });
  };

  const handleUpdate = async () => {
    if (!validate()) return;
    await dispatch(asyncUpdateUser(userId, formData));
    toast.success("User updated successfully!", {
      onClose: () => navigate("/"), // Navigate after toast closes
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="w-full max-w-lg bg-white rounded-lg">
        <div className="space-y-4 p-6">
          <FormInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter Full Name"
            error={errors.name}
          />
          <FormInput
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter Username"
            error={errors.username}
          />
          <FormInput
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter Email"
            error={errors.email}
          />
          <FormInput
            label="Department"
            name="company.name"
            value={formData.company.name}
            onChange={handleInputChange}
            placeholder="Enter Department"
            error={errors["company.name"]}
          />
          <div className="flex flex-col gap-2">
            {existingUser ? (
              <button
                onClick={handleUpdate}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Update
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            )}
            <button
              onClick={() => navigate("/")}
              className="w-full bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-center" autoClose={2000} />
    </div>
  );
};
