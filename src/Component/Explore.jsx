import React from 'react';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    
    navigate('/meals');
  };

  return (
    <div className="w-full h-full flex items-center justify-center py-10">
      <button 
        onClick={handleExploreClick} 
        className="px-6 py-3 bg-red-500 text-white font-roca rounded-full"
      >
        Explore
      </button>
    </div>
  );
};

export default Explore;
