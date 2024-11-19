import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersList: [],
  isFetching: false,
};

const usersListSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {
    // Update the entire users list
    setUsersList(state, action) {
      state.usersList = action.payload;
    },

    // Set fetching state
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const { setUsersList, updateUser, addUser, deleteUser, setIsFetching } =
  usersListSlice.actions;

export default usersListSlice.reducer;
