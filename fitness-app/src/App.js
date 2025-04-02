import React from "react";
import WorkoutTracker from "./components/WorkoutTracker";  // Workout logging component
import ProgressTracker from "./components/ProgressTracker";  // Progress tracking component
import NutritionTracker from "./components/NutritionTracker";  // Nutrition tracking component
import Profile from "./components/Profile";  // User profile component

function App() {
  return (
    <div className="App container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Health & Wellness Tracker</h1>
      
      <div className="space-y-8">
        <Profile />
        <WorkoutTracker />
        <ProgressTracker />
        <NutritionTracker />
      </div>
    </div>
  );
}

export default App;
