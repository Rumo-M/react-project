import React from "react";
import WorkoutTracker from "./components/WorkoutTracker";  // Your workout logging component
import ProgressTracker from "./components/ProgressTracker";  // Your progress tracking component
import NutritionTracker from "./components/NutritionTracker";  // Your nutrition tracking component
import Profile from "./components/Profile";  // User profile component

function App() {
  return (
    <div className="App">
      <Profile />
      <WorkoutTracker />
      <ProgressTracker />
      <NutritionTracker />
    </div>
  );
}

export default App;
