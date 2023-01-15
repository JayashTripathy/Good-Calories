import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../components/ContentBody.css";
import RecipeContainer from "./RecipeContainer";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { useState } from "react";

export const ContentBody = ({ items, setItems, setIsLoading }) => {
  const bodyItems = useRef(null);
  const [currentData, setCurrentData] = useState(null);
 
  

  // const handleFrClick = (itemImage) => {
  //   if(currentData){  
  //     return(
  //       <RecipeContainer currentData ={currentData} setCurrentData={setCurrentData} />

  //     )
  //   }
  // };
  const handleFrClick = (data) => {
   
    
    setCurrentData(data)
    document.getElementById("#recipe-container").style.visibility="visible"
  }
  return (
    <>
      <div className="recipeContent" ref={bodyItems}>
        <Swiper
          loop={true}
          speed={100}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide="6"
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 4,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          mous
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <div className="itemsContainer">
            {items.map((item, index) => {
              return (
                <>
                  <SwiperSlide key={index}>
                    <div className="recipeItem">
                      <div className="image-container">
                        <img
                          src={item["recipe"]["image"]}
                          alt=""
                          className="recipeImg"
                        />
                      </div>

                      <div className="recipeTitle">
                        {item["recipe"]["label"].substr(0, 20)}
                      </div>
                      <p className="calorieCount">
                        <span className="calorie-value">
                          {" "}
                          {Math.floor(item["recipe"]["calories"])}
                        </span>{" "}
                        Calories
                      </p>
                      {/* <div className="calories">320kacl</div> */}
                      <div className="nutrition-content">
                        <div className="carbs">
                          Carbs -
                          <span className="carb-values">
                            {" "}
                            &nbsp;
                            {Math.floor(
                              item["recipe"]["totalNutrients"]["CHOCDF"][
                                "quantity"
                              ]
                            )}
                            g
                          </span>
                        </div>
                        <div className="protien">
                          Proteins -
                          <span className="protien-values">
                            {" "}
                            &nbsp;
                            {Math.floor(
                              item["recipe"]["totalNutrients"]["PROCNT"][
                                "quantity"
                              ]
                            )}
                            g
                          </span>
                        </div>
                        <div className="fats">
                          Fats -
                          <span className="fats-values">
                            {" "}
                            &nbsp;
                            {Math.floor(
                              item["recipe"]["totalNutrients"]["FAT"][
                                "quantity"
                              ]
                            )}
                            g
                          </span>
                        </div>
                      </div>
                      <div className="health-labels">
                        {/* <h5>Health Labels</h5> */}

                        <div className="health-labels-list">
                          {item["recipe"]["dietLabels"].map((label, index) => {
                            return (
                              <div className="health-label" key={10 + index}>
                                {label}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <button
                        className="recipe-button"
                        onClick={() => handleFrClick(item)}
                      >
                        Full Recipe
                      </button>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </div>
        </Swiper>
        <RecipeContainer currentData ={currentData} setCurrentData={setCurrentData} />

      </div>
    </>
  );
};
