import { configureStore } from "@reduxjs/toolkit";
import usersListSlice from "./reducers/usersSlice";

export const store = configureStore({
  reducer: {
    UsersList: usersListSlice,
  },
});
