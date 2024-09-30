import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CategoryMeal = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMealsByCategory = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await response.json();
        setMeals(data.meals.slice(0, 5));
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };

    fetchMealsByCategory();
  }, [category]);

  const handleMealClick = (mealId) => {
    navigate(`/meal/${mealId}`);
  };

  return (
    <div className="w-full h-full px-10 py-5">
      <h1 className="text-4xl font-roca text-center mb-4">Meals in {category}</h1>
      <ul className="grid grid-cols-4 gap-4">
        {meals.map((meal) => (
          <li 
            key={meal.idMeal} 
            className="p-4 border rounded-lg shadow-lg text-center cursor-pointer"
            onClick={() => handleMealClick(meal.idMeal)}
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover rounded-lg mb-2" />
            <h2 className="text-lg font-roca font-bold mb-2">{meal.strMeal}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMeal;
