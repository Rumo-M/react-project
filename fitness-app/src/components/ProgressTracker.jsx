import React, { useState } from "react";

const ProgressTracker = () => {
  const [progress, setProgress] = useState({
    weight: "",
    bodyFat: "",
    muscleMass: "",
  });
  const [progressHistory, setProgressHistory] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProgress({ ...progress, [name]: value });
  };

  const saveProgress = () => {
    const { weight, bodyFat, muscleMass } = progress;

    if (!weight || !bodyFat || !muscleMass) {
      alert("Please fill in all fields before saving.");
      return;
    }

    if (weight <= 0 || muscleMass <= 0 || bodyFat < 0 || bodyFat > 100) {
      alert("Please enter valid positive values. Body fat must be between 0-100%.");
      return;
    }

    const newEntry = {
      ...progress,
      date: new Date().toLocaleDateString(),
      id: Date.now(),
    };

    setProgressHistory([newEntry, ...progressHistory]); // Save history
    setProgress({ weight: "", bodyFat: "", muscleMass: "" }); // Clear input fields
    alert("Progress Saved!");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Progress Tracker</h2>
      <div className="flex flex-col gap-2">
        <input
          type="number"
          name="weight"
          value={progress.weight}
          onChange={handleChange}
          placeholder="Weight (kg)"
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="bodyFat"
          value={progress.bodyFat}
          onChange={handleChange}
          placeholder="Body Fat Percentage (%)"
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="muscleMass"
          value={progress.muscleMass}
          onChange={handleChange}
          placeholder="Muscle Mass (kg)"
          className="p-2 border rounded"
        />
        <button
          onClick={saveProgress}
          className="bg-green-500 text-white p-2 rounded"
        >
          Save Progress
        </button>
      </div>

      <h3 className="text-xl font-semibold mt-4">Recent Progress</h3>
      {progressHistory.length > 0 ? (
        <ul className="list-disc ml-4">
          {progressHistory.map((entry) => (
            <li key={entry.id} className="mb-2">
              <strong>{entry.date}:</strong> Weight: {entry.weight} kg, Body Fat: {entry.bodyFat}%, Muscle Mass: {entry.muscleMass} kg
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No progress recorded yet.</p>
      )}
    </div>
  );
};

export default ProgressTracker;
