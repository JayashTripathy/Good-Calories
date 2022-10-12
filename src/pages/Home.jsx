import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { Header } from "../components/Header";
import { ContentBody } from "../components/ContentBody";
import { Footer } from "../components/Footer";

export const Home = () => {
  const APP_ID = "92c5cf35";
  const [item, setItem] = useState([]);
  const [ingredient, setIngredient] = useState("chicken");

  const [vegan, isVegan] = useState(false);
  const [cuisine, setCuisine] = useState("indian");

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${APP_ID}${
    vegan == true ? "&health=vegetarian" : ""
  }&cuisineType=${cuisine}&random=true&app_key=191a23ec9d4667a1522d76aaa4d56596&diet=high-protein`;

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      console.log(res.data.hits);
      setItem(res.data.hits);
    };
    fetch();
  }, [url]);

  return (
    <>
      <div className="homepage">
        <div className="background">
          <div className="track track-1">
            <div className="track-inner">
              <div className="plane-wrapper">
                <div className="plane">
                  <div className="plane-tail"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="track track-2">
            <div className="track-inner">
              <div className="plane-wrapper">
                <div className="plane">
                  <div className="plane-tail"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Header
          setingredient={setIngredient}
          isvegan={isVegan}
          setcuisine={setCuisine}
        />
        <ContentBody items={item} />
        {/* <Footer />  */}
      </div>
    </>
  );
};
