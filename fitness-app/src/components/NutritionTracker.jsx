import React, { useState } from "react";

const NutritionTracker = () => {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState({ name: "", calories: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeal({
      ...meal,
      [name]: name === "calories" ? Number(value) : value, // Convert calories to number
    });
  };

  const addMeal = () => {
    if (!meal.name.trim() || meal.calories <= 0 || isNaN(meal.calories)) {
      alert("Please enter a valid meal name and a positive calorie value.");
      return;
    }
    setMeals([...meals, { ...meal, id: Date.now() }]);
    setMeal({ name: "", calories: "" }); // Reset form
  };

  const removeMeal = (id) => {
    setMeals(meals.filter((meal) => meal.id !== id));
  };

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Nutrition Tracker</h2>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          name="name"
          value={meal.name}
          onChange={handleChange}
          placeholder="Meal Name"
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="calories"
          value={meal.calories}
          onChange={handleChange}
          placeholder="Calories"
          className="p-2 border rounded"
          min="1"
        />
        <button
          onClick={addMeal}
          className="bg-orange-500 text-white p-2 rounded"
        >
          Add Meal
        </button>
      </div>

      <h3 className="text-xl font-semibold mt-4">Your Meals</h3>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id} className="flex justify-between items-center mb-2">
            {meal.name} - {meal.calories} kcal
            <button
              onClick={() => removeMeal(meal.id)}
              className="bg-red-500 text-white p-1 rounded ml-2"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mt-4">Total Calories: {totalCalories} kcal</h3>
    </div>
  );
};

export default NutritionTracker;
