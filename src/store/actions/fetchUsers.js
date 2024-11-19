// src/actions/usersActions.js

import { setUsersList, setIsFetching } from "../reducers/usersSlice";
import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const asyncFetchUsers = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const usersList = state.UsersList.usersList;

    // Skip fetching if users list is already populated
    if (usersList && usersList.length > 0) {
      console.log("Users list already populated. Skipping fetch.");
      dispatch(setUsersList(usersList));
      return;
    }

    dispatch(setIsFetching(true)); // Start fetching

    const response = await axios.get(API_BASE_URL);

    // Dispatch to update state
    dispatch(setUsersList(response.data));
  } catch (err) {
    console.error("Error fetching users", err);
  } finally {
    dispatch(setIsFetching(false)); // Finish fetching
  }
};
