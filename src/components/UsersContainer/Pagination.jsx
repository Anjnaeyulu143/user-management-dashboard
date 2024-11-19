import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-4 flex justify-center items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg hover:bg-gray-400 focus:outline-none transition duration-300"
      >
        Previous
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 text-white rounded-lg focus:outline-none transition duration-300 ${
            currentPage === number
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg hover:bg-gray-400 focus:outline-none transition duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
