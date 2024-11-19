// src/actions/usersActions.js

import { setUsersList, setIsFetching } from "../reducers/usersSlice";
import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const asyncFetchUsers = () => async (dispatch) => {
  try {
    // Retrieve the cached users list from localStorage
    const cachedUsers = localStorage.getItem("usersList");

    if (cachedUsers) {
      try {
        const parsedUsers = JSON.parse(cachedUsers);

        // Checking if the data in localStorage is valid
        if (Array.isArray(parsedUsers)) {
          dispatch(setUsersList(parsedUsers));
          return;
        } else {
          localStorage.removeItem("usersList");
        }
      } catch (err) {
        localStorage.removeItem("usersList");
      }
    }

    // No valid cache found fetching users from the API
    dispatch(setIsFetching(true));

    const response = await axios.get(API_BASE_URL);
    const users = response.data;

    // Saving users to localStorage and update Redux state
    console.log("Fetched users from API.");
    localStorage.setItem("usersList", JSON.stringify(users));
    dispatch(setUsersList(users));
  } catch (err) {
    console.error("Error fetching users", err);
  } finally {
    dispatch(setIsFetching(false));
  }
};
