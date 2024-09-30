import React from 'react'
import MealList from './Component/MealList'
import Explore from './Component/Explore'
import Navbar from './Component/Navbar'
import CategoryMeal from './Component/CategoryMeal'
import MealDetail from './Component/MealDetail'
import InMeals from './Component/InMeals'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Explore />} />
        <Route path="/meals" element={<MealList />} />
        <Route path="/category/:category" element={<CategoryMeal />} />
        <Route path="/meal/:mealId" element={<MealDetail />} />
        <Route path="/ingredient/:ingredient" element={<InMeals />} />

      </Routes>
      
    </Router>
  )
}

export default App
