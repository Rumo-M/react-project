import React, { useState } from "react";

const WorkoutTracker = () => {
  const [workouts, setWorkouts] = useState([]);
  const [workout, setWorkout] = useState({ name: "", duration: "", category: "Cardio" });

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const addWorkout = () => {
    const { name, duration, category } = workout;

    if (!name || !duration) {
      alert("Please enter both workout name and duration.");
      return;
    }

    if (isNaN(duration) || duration <= 0) {
      alert("Please enter a valid duration in minutes.");
      return;
    }

    // Prevent duplicate workout names
    if (workouts.some((w) => w.name.toLowerCase() === name.toLowerCase())) {
      alert("This workout already exists. Try a different name!");
      return;
    }

    const newWorkout = { ...workout, id: Date.now() };
    setWorkouts([...workouts, newWorkout]);

    // Reset the form after adding
    setWorkout({ name: "", duration: "", category: "Cardio" });
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Workout Tracker</h1>

      <div className="flex flex-wrap gap-2 items-center mb-4">
        <input
          type="text"
          name="name"
          value={workout.name}
          onChange={handleChange}
          placeholder="Workout Name"
          className="p-2 border rounded w-1/4"
        />
        <input
          type="number"
          name="duration"
          value={workout.duration}
          onChange={handleChange}
          placeholder="Duration (minutes)"
          className="p-2 border rounded w-1/4"
        />
        <select
          name="category"
          value={workout.category}
          onChange={handleChange}
          className="p-2 border rounded w-1/4"
        >
          <option value="Cardio">Cardio</option>
          <option value="Strength">Strength</option>
          <option value="Flexibility">Flexibility</option>
        </select>
        <button
          onClick={addWorkout}
          className="bg-blue-500 text-white p-2 rounded w-1/6"
        >
          Add Workout
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Your Workouts</h2>
        {workouts.length > 0 ? (
          <ul className="list-none">
            {workouts.map((workout) => (
              <li key={workout.id} className="mb-2 flex justify-between items-center border-b pb-2">
                <span>{workout.name} - {workout.duration} min ({workout.category})</span>
                <button
                  onClick={() => deleteWorkout(workout.id)}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No workouts added yet.</p>
        )}
      </div>
    </div>
  );
};

export default WorkoutTracker;
