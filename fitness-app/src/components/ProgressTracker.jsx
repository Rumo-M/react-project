import React, { useState } from "react";

const ProgressTracker = () => {
  const [progress, setProgress] = useState({
    weight: "",
    bodyFat: "",
    muscleMass: "",
    date: new Date().toLocaleDateString(),
  });

  const handleChange = (e) => {
    setProgress({ ...progress, [e.target.name]: e.target.value });
  };

  const saveProgress = () => {
    if (progress.weight && progress.bodyFat && progress.muscleMass) {
      // Store progress (In a real app, save to database)
      alert("Progress Saved!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Progress Tracker</h2>
      <div>
        <input
          type="number"
          name="weight"
          value={progress.weight}
          onChange={handleChange}
          placeholder="Weight (kg)"
          className="p-2 border rounded mb-2"
        />
        <input
          type="number"
          name="bodyFat"
          value={progress.bodyFat}
          onChange={handleChange}
          placeholder="Body Fat Percentage"
          className="p-2 border rounded mb-2"
        />
        <input
          type="number"
          name="muscleMass"
          value={progress.muscleMass}
          onChange={handleChange}
          placeholder="Muscle Mass (kg)"
          className="p-2 border rounded mb-2"
        />
        <button
          onClick={saveProgress}
          className="bg-green-500 text-white p-2 rounded"
        >
          Save Progress
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mt-4">Recent Progress</h3>
        <p>Weight: {progress.weight} kg</p>
        <p>Body Fat: {progress.bodyFat}%</p>
        <p>Muscle Mass: {progress.muscleMass} kg</p>
        <p>Date: {progress.date}</p>
      </div>
    </div>
  );
};

export default ProgressTracker;
