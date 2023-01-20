import React from "react";
import "./Header.css";
import LogoAnimated from "./logo/LogoAnimated";

import { useState } from "react";

export const Header = ({
  setingredient,
  isvegan,
  setcuisine,
  setIsLoading,
  setFirstSearch,
}) => {
  let checkbox = document.querySelector("#veg_checkbox");
  const [query, setQuery] = useState("");

  const cuisineChange = (cuisine) => {
    // setIsLoading(true)
    setcuisine(cuisine);
    SubmitDetails();
  };

  const SubmitDetails = () => {
    if (checkbox.checked) {
      setIsLoading(true);
      setingredient(query);
      isvegan(true);
    } else {
      setIsLoading(true);
      setingredient(query);
      isvegan(false);
    }
    setFirstSearch(true);
  };
  return (
    <>
      <div className="header-container">
        <LogoAnimated />
        <div className="header-overlay">
          <form
            className="form-content"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="if-ingredient"
              type="text"
              placeholder="Drop your MAGIC ingredient"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="filterContent">
              <input
                type="checkbox"
                id="veg_checkbox"
                className="checkbox"
                onChange={() => SubmitDetails()}
              />

              <div className="caloriesContent">
                <h3>Cusine</h3>

                <select name="cusine" id="cusine" defaultValue="American">
                  <option
                    value="Indian"
                    onClick={() => {
                      cuisineChange("Indian");
                    }}
                  >
                    Indian
                  </option>
                  <option
                    value="American"
                    onClick={() => {
                      cuisineChange("American");
                    }}
                  >
                    American
                  </option>
                  <option
                    value="Italian"
                    onClick={() => {
                      cuisineChange("Italian");
                    }}
                  >
                    Italian
                  </option>
                  <option
                    value="Japanese"
                    onClick={() => {
                      cuisineChange("Japanese");
                    }}
                  >
                    Japanese
                  </option>
                </select>
              </div>
            </div>
            <input
              type="submit"
              value="Find"
              className="if-submit"
              onClick={SubmitDetails}
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};
