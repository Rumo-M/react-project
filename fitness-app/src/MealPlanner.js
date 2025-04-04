// MealPlanner.jsx
import React from 'react';

const MealPlanner = ({ meals }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {meals.map((meal, index) => (
        <div key={index} className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-bold">{meal.name}</h3>
          <p>{meal.calories} Calories</p>
        </div>
      ))}
    </div>
  );
};

export default MealPlanner;