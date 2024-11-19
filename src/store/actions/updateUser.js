import { setIsFetching, setUsersList } from "../reducers/usersSlice";
import axios from "axios";

export const asyncUpdateUser =
  (userId, updatedData) => async (dispatch, getState) => {
    console.log("userId:", userId);
    console.log("updatedData:", updatedData);

    try {
      dispatch(setIsFetching(true));

      //  const response = await axios.put(
      //`https://jsonplaceholder.typicode.com/users/${userId}`
      //);

      const usersList = getState().UsersList.usersList;

      const updatedUsersList = usersList.map((user) => {
        if (user.id.toString() === userId) {
          const updatedCompany = updatedData.company
            ? {
                ...user.company,
                ...updatedData.company,
              }
            : user.company;

          return {
            ...user,
            ...updatedData,
            company: updatedCompany,
          };
        }
        return user;
      });

      // Dispatch the updated users list to the Redux store
      dispatch(setUsersList(updatedUsersList));

      console.log("Updated users:", updatedUsersList);
    } catch (err) {
      console.error("Error updating user:", err);
    } finally {
      dispatch(setIsFetching(false));
    }
  };
