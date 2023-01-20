import "../logo/LogoAnimated.css";
import React from "react";

function LogoAnimated() {
  return (
    <>
      <div className="logoAnimation">
        <div className="container">
          <h1>highON</h1>
          <h1>Calories</h1>
          <div className="sub-text">That Matters!</div>
        </div>
        <div className="stars">
          <span className="star star1"></span>
          <span className="star star2"></span>
          <span className="star star3"></span>
        </div>
      </div>
    </>
  );
}

export default LogoAnimated;
