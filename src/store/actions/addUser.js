import { toast } from "react-toastify";
import { setUsersList, setIsFetching } from "../reducers/usersSlice";
import axios from "axios";

export const asyncAddUser = (newUser) => async (dispatch, getState) => {
  try {
    dispatch(setIsFetching(true));

    const newUserWithId = {
      ...newUser,
      id: Date.now(),
    };

    await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newUserWithId
    );

    const updatedUsersList = [...getState().UsersList.usersList, newUserWithId];

    // Save updated data to the localStorage

    localStorage.setItem("usersList", JSON.stringify(updatedUsersList));

    dispatch(setUsersList(updatedUsersList));

    // Show success toast
    toast.success("User added successfully!");
  } catch (err) {
    console.error("Failed to add user", err);

    // Show error toast
    toast.error("Failed to add user. Please try again later.");
  } finally {
    dispatch(setIsFetching(false));
  }
};
