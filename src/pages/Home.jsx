import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { Header } from "../components/Header";
import { ContentBody } from "../components/ContentBody";
import PageNotFound from "../components/PageNotFound";
import { Footer } from "../components/Footer";

export const Home = () => {
  const APP_ID = "92c5cf35";
  const [item, setItem] = useState([]);
  const [ingredient, setIngredient] = useState("chicken");

  const [vegan, isVegan] = useState(false);
  const [cuisine, setCuisine] = useState("american");
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${APP_ID}${
    vegan === true ? "&health=vegetarian" : ""
  }&cuisineType=${cuisine}&random=true&app_key=191a23ec9d4667a1522d76aaa4d56596&diet=high-protein`;

  useEffect(() => {
    setIsLoading(false);
    const fetch = async () => {
      const res = await axios.get(url);
      console.log(res.data.hits);
      setItem(res.data.hits);
    };
    fetch();
  }, [url]);

  const checkLength = () => {
    if (item) {
      if (item.length === 0 && isLoading === false) {
        return (
          <div className="container-pnf">
            <PageNotFound />
          </div>
        );
      }
    }
    
  };
  return (
    <>
      <div className="homepage">
        <Header
          setIsLoading={setIsLoading}
          setingredient={setIngredient}
          isvegan={isVegan}
          setcuisine={setCuisine}
        />
        {!isLoading ? (
          <>
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
            <ContentBody items={item} setItems={setItem} />
          </>
        ) : (
          <div className="main-loader">
            <div id="loader"></div>
          </div>
        )}

        {checkLength()}
        {/* <Footer />  */}
      </div>
    </>
  );
};
