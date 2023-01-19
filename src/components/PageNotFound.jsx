import React from "react";
import "../components/PageNotFound.css";

const pageNotFound = () => {
  return (
    <>
      <div className="container-pnf">
        <div className="emoji-icon">&#129402;</div>
        <div className="sub-text-pnf">
          {" "}
          Sorry, Unable to find<span className="recipe-text">Recipe!</span>
        </div>
      </div>
    </>
  );
};

export default pageNotFound;
