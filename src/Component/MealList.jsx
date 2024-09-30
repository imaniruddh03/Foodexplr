import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        setMeals(data.categories.slice(0, 5));  
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };

    fetchMeals();
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="w-full h-full px-10 py-5">
      <h1 className="text-5xl font-roca text-center">Our Top 5 Meals</h1>
      <ul className="grid grid-cols-5 gap-4 py-5">
        {meals.map((meal) => (
          <li 
            key={meal.idCategory} 
            className="meal-item p-5 border rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleCategoryClick(meal.strCategory)}  
          >
            <img src={meal.strCategoryThumb} alt={meal.strCategory} className="w-full h-48 object-cover rounded-full mb-2" />
            <h2 className="text-lg font-roca font-bold text-center mb-2">{meal.strCategory}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealList;
