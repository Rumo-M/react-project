import React, { useState } from 'react';

const NutritionTracker = () => {
  const [meal, setMeal] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");
  const [mealLog, setMealLog] = useState([]);

  const handleAddMeal = () => {
    setMealLog([
      ...mealLog,
      { meal, calories, protein, carbs, fats }
    ]);
    setMeal(""); // Clear the input fields after adding
    setCalories("");
    setProtein("");
    setCarbs("");
    setFats("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Nutrition Tracker</h2>
      <div className="mb-4">
        <input
          type="text"
          className="p-2 border rounded w-full mb-2"
          placeholder="Meal Name"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        />
        <div className="grid grid-cols-4 gap-4">
          <input
            type="number"
            className="p-2 border rounded"
            placeholder="Calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
          <input
            type="number"
            className="p-2 border rounded"
            placeholder="Protein (g)"
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
          />
          <input
            type="number"
            className="p-2 border rounded"
            placeholder="Carbs (g)"
            value={carbs}
            onChange={(e) => setCarbs(e.target.value)}
          />
          <input
            type="number"
            className="p-2 border rounded"
            placeholder="Fats (g)"
            value={fats}
            onChange={(e) => setFats(e.target.value)}
          />
        </div>
      </div>
      <button
        onClick={handleAddMeal}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Meal
      </button>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Meal Log</h3>
        <ul className="list-disc pl-5">
          {mealLog.map((item, index) => (
            <li key={index} className="mb-2">
              <strong>{item.meal}</strong> - {item.calories} kcal, {item.protein}g protein, {item.carbs}g carbs, {item.fats}g fats
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NutritionTracker;
