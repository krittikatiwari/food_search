import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Home.css";
function Home() {
  const [advice, setAdvice] = useState([]);
  // const API=process.env.REACT_APP_KEY +'/home?foodtype=IndianSweet'
  useEffect(() => {
    fetch("http://localhost:2000/category")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data);
      })
      .catch((err) => {
        console.log(console.error);
      });
  }, []);
  console.log(advice);
  return (
    <>
      <div className="screen">
        <div className="imae">
          <img src="https://sukhis.com/app/uploads/2022/04/image3-4.jpg"></img>
        </div>
      </div>

      <div className="cuisine">
        <h2 className="cuisine-heading">Cuisine</h2>
        <div className="cuisine-container">
          {advice.map((eac, index) => {
            return (
                <Link to={`/home/${eac._id}`} className="abc">
                <div key={index} className="cuisine-box">
                  <img className="img" src={eac.countryImage} alt="image_" />
                  <div className="cuisine-names">
                    <h2 className="cuisine-name">{eac.country}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
          
        </div>
      </div>
      

      {/* <div className="popular">
        <h2 className="popular-heading">Popular Recipes</h2>
        <div className="popular-container">
          <div className="popular-box">
            <img
              src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg"
              alt="a"
            ></img>
          </div>
          <div className="popular-box">
            <img
              src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg"
              alt="a"
            ></img>
          </div>
          <div className="popular-box">
            <img
              src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg"
              alt="a"
            ></img>
          </div>
          <div className="popular-box">
            <img
              src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg"
              alt="a"
            ></img>
          </div>
          <div className="popular-box">
            <img
              src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg"
              alt="a"
            ></img>
          </div>
          <div className="popular-box">
            <img
              src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg"
              alt="a"
            ></img>
          </div>
          <div className="popular-box">
            <img
              src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg"
              alt="a"
            ></img>
          </div>
          <div className="popular-box">
            <img
              src="https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg"
              alt="a"
            ></img>
          </div> */}
          {/* <div className="popular-box"></div>
            <div className="popular-box"></div>
            <div className="popular-box"></div>
            <div className="popular-box"></div> */}
        {/* </div>
      </div> */}
    </>
  );
}
export default Home;
