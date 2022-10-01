import React from "react";

export const ContentBody = ({ items }) => {
  if (items.length != 0) {
    console.log(items[0].recipe.label);
  }
  return (
    <>
      <div className="recipeContent">
        {items.map((item, index) => {
          return (
            <div className="recipeItem" key={index}>
              <h2 className="recipeTitle">{item["recipe"]["label"]}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};
