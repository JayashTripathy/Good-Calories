import React from "react";
import "./RecipeContainer.css";
import { UilTimes } from "@iconscout/react-unicons";

const RecipeContainer = (currentData, setCurrentData) => {
  // setCloseBtn(`document.getElementById("#recipe-container")`)
  const handleClick = () => {
    document.getElementById("#recipe-container").style.visibility = "hidden";
  };
  

  return (
    <div className="recipe-container" id="#recipe-container">
      {currentData.currentData ? (
        <>
          <img
            className="fr-image-container"
            src={currentData.currentData.recipe.image}
            alt="image"
          />
          <div className="recipe-data-container">
            <div className="recipe-name">
              {currentData.currentData.recipe.label.split(8)}
            <h5 className="ingredients-list">Ingredients</h5>
            </div>
            <div className="recipe-data">
              {currentData.currentData.recipe.ingredientLines.map(
                (step, index) => {
                  return (
                    <div className="recipe-info" key={index}>
                      <h4 className="step-no">{index + 1}.</h4>
                      <h5 className="step-info">{step}</h5>
                    </div>
                  );
                }
              )}
              {/* <div className="recipe-info">
              <h3 className="step-no">Step - 1 </h3>
              <h5 className="step-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nisi?</h5>
            </div> */}
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      <button className="close-fr-tab" onClick={() => handleClick()}>
        <UilTimes size="35" color="white" />
      </button>
    </div>
  );
};

export default RecipeContainer;
