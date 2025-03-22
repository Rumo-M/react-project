import React, { useState } from "react";

const NutritionTracker = () => {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState({ name: "", calories: "" });

  const handleChange = (e) => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const addMeal = () => {
    if (meal.name && meal.calories) {
      setMeals([...meals, { ...meal, id: Date.now() }]);
      setMeal({ name: "", calories: "" });  // Reset the form
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Nutrition Tracker</h2>
      <div>
        <input
          type="text"
          name="name"
          value={meal.name}
          onChange={handleChange}
          placeholder="Meal Name"
          className="p-2 border rounded mb-2"
        />
        <input
          type="number"
          name="calories"
          value={meal.calories}
          onChange={handleChange}
          placeholder="Calories"
          className="p-2 border rounded mb-2"
        />
        <button
          onClick={addMeal}
          className="bg-orange-500 text-white p-2 rounded"
        >
          Add Meal
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mt-4">Your Meals</h3>
        <ul>
          {meals.map((meal) => (
            <li key={meal.id} className="mb-2">
              {meal.name} - {meal.calories} kcal
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NutritionTracker;
