import React from "react";

const Digit = ({ value }) => {
  return (
    <div className="digit bg-dark text-white p-3 m-1 rounded">
      {value}
    </div>
  );
};

export default Digit;
