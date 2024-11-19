import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchUsers } from "../../store/actions/fetchUsers.js";
const useUsersPagination = (usersPerPage = 3) => {
  const { usersList, isFetching } = useSelector((state) => state.UsersList);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(asyncFetchUsers());
  }, [dispatch]);

  // Calculate pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersList?.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(usersList?.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return {
    usersList,
    isFetching,
    currentUsers,
    currentPage,
    totalPages,
    handlePageChange,
  };
};

export default useUsersPagination;
