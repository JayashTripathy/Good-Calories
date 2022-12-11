import React from "react";
import "./Header.css";
import LogoAnimated from "./logo/LogoAnimated"

import { useState } from "react";
import { useEffect } from "react";

export const Header = ({ setingredient, isvegan, setcuisine }) => {
  let checkbox = document.querySelector("#veg_checkbox");
  const [query, setQuery] = useState("");

  const cuisineChange = (cuisine) => {
    setcuisine(cuisine);
    SubmitDetails();
  };

  const SubmitDetails = () => {
    if (checkbox.checked) {
      setingredient(query);
      isvegan(true);
    } else {
      setingredient(query);
      isvegan(false);
    }
  };
  return (
    <>
      <LogoAnimated/>
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

             
              <select name="cusine" id="cusine">
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
    </>
  );
};
