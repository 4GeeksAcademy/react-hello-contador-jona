import React from "react";
import Digit from "./Digit";

const Home = ({ seconds }) => {
  const secondsString = seconds.toString().padStart(6, "0");

  return (
    <div className="counter">
      <div className="digit">
        <i className="fa-solid fa-clock"></i>
      </div>
      {secondsString.split("").map((digit, index) => (
        <Digit key={index} value={digit} />
      ))}
    </div>
  );
};

export default Home;
