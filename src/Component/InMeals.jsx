import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InMeals = () => {
  const { ingredient } = useParams(); 
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMealsByIngredient = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        setMeals(data.meals.slice(0,7)); 
      } catch (error) {
        console.error("Error fetching meals by ingredient:", error);
      }
    };

    fetchMealsByIngredient();
  }, [ingredient]);

  return (
    <div className="w-full h-full px-10 py-5 flex flex-col items-center">
      <h1 className="text-4xl font-roca text-center mb-6">
        Meals with {ingredient}
      </h1>
      {meals.length === 0 ? (
        <p>No meals found for this ingredient.</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="p-4 border rounded-lg shadow-lg text-center cursor-pointer">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <h2 className="text-lg font-roca font-bold text-center mb-2">
                {meal.strMeal}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InMeals;
