import React from "react";
import "./Indian.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Indian() {
  const { id } = useParams();
  console.log(id);
  const [recipeData, setRecipeData] = useState({ subCategory: [] });

  useEffect(() => console.log(recipeData), [recipeData]);

  useEffect(() => {
    fetch(`http://localhost:2000/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipeData(data);
      });
  }, [id]);

  const subcategory = recipeData.subCategory;
  console.log(subcategory);

  return (
    <>
      <div className="display-img">
        <img src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content6553.jpg" alt="country"></img>
      </div>
      <div className="indian-heading">
        <h1 className="type-of-recipe">{recipeData.country} Food</h1>
      </div>

      <div className="indian-container">
      {subcategory.map((e) => {
          return (
            <Link className="abc">
              <div className="indian-box">
                <img className="img" src={e.foodImage} alt={e.foodType} />
                <div className="indian-names">
                  <h2 className="indian-name">{e.foodType}</h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
