import React, { useEffect, useState } from "react";
import "./Vegetarian.css";
import { Link } from "react-router-dom";
export default function IndianSweet() {
  const [advice, setAdvice] = useState([]);
  const API=process.env.REACT_APP_KEY +'/home?foodtype=IndianSweet'
  useEffect(() => {
    fetch(API)
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
      <div className="vegetarian">
        <div className="vegetarian-container">
          {advice.map((eac, index) => {
            return (
              <Link to={`/indian/${eac._id}`} className="abc">
                <div key={index} className="vegetarian-box">
                  <img className="img" src={eac.image} alt="image_" />
                  <div className="vegetarian-names">
                    <h2 className="vegetarian-name">{eac.name}</h2>
                  </div>
                </div>
              </Link>
            );
          })}

        </div>
      </div>
    </>
  );
}
