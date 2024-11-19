import React from "react";

import UserCard from "../UserCard";
import Loader from "./Loader";

import Pagination from "./Pagination";
import useUsersPagination from "../hooks/useUsersPagination.js";

const UsersContainer = () => {
  const {
    usersList,
    isFetching,
    currentUsers,
    currentPage,
    totalPages,
    handlePageChange,
  } = useUsersPagination(3); // Pass the number of users per page as an argument

  return (
    <div>
      {/* Show loader while data is being fetched */}
      {isFetching ? (
        <Loader />
      ) : usersList?.length === 0 ? (
        <h1>Users List is Empty!</h1>
      ) : (
        <>
          {/* Display current users on the page */}
          {currentUsers?.map((user) => (
            <UserCard key={user.id} cardInfo={user} />
          ))}

          {/* Pagination Controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default UsersContainer;
