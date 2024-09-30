import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const lightBackgroundColors = [
  'bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-pink-100', 
  'bg-purple-100', 'bg-orange-100', 'bg-teal-100', 'bg-indigo-100'
];

const MealDetail = () => {
  const { mealId } = useParams(); 
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        const data = await response.json();
        setMeal(data.meals[0]); 
      } catch (error) {
        console.error("Error fetching meal details:", error);
      }
    };

    fetchMealDetails();
  }, [mealId]);

  if (!meal) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-4xl">
        Loading...
      </div>
    );
  }

  const tags = meal.strTags ? meal.strTags.split(',') : [];

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-200 py-10">
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-3xl">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
          {meal.strMeal}
        </h1>
        <div className="flex flex-col gap-10 items-center">
          
          <div className="flex-1">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-96 object-cover rounded-2xl shadow-md"
            />
          </div>

          <div className="flex-1 text-center">
            <p className="text-xl font-semibold mb-2">
              <strong>Category:</strong> <span className="text-gray-600">{meal.strCategory}</span>
            </p>
            <p className="text-xl font-semibold mb-4">
              <strong>Area:</strong> <span className="text-gray-600">{meal.strArea}</span>
            </p>
            
            {tags.length > 0 && (
              <div className="mt-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-semibold text-gray-800 ${lightBackgroundColors[index % lightBackgroundColors.length]}`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <h3 className="text-3xl font-semibold text-gray-800 my-6">Ingredients:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {Object.keys(meal)
                .filter((key) => key.startsWith("strIngredient") && meal[key])
                .map((key, i) => (
                  <Link
                    key={i}
                    to={`/ingredient/${meal[key]}`}
                    className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-center shadow-sm transition transform hover:scale-105 cursor-pointer"
                  >
                    {meal[key]}
                  </Link>
                ))}
            </div>

            <h3 className="text-3xl font-semibold text-gray-800 my-6">Instructions:</h3>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              {meal.strInstructions}
            </p>

            {meal.strYoutube && (
              <div>
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition-all"
                >
                  Watch on YouTube
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
