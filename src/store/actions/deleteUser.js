import { setUsersList, setIsFetching } from "../reducers/usersSlice";
import axios from "axios";

export const asyncDeleteUser = (userId) => async (dispatch, getState) => {
  try {
    dispatch(setIsFetching(true));

    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const usersList = getState().UsersList.usersList;

    // Filter out the user to delete

    const updatedUsers = usersList.filter((user) => user.id !== userId);

    dispatch(setUsersList(updatedUsers));
  } catch (err) {
    console.error("Error deleting user:", err);
  } finally {
    dispatch(setIsFetching(false));
  }
};
