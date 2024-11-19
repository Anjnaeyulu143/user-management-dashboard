// Loader.js
import React from "react";
import { DotLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <DotLoader size={40} color="#4A90E2" loading={true} />
    </div>
  );
};

export default Loader;
