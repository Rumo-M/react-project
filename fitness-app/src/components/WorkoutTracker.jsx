import React, { useState } from "react";

const WorkoutTracker = () => {
  const [workouts, setWorkouts] = useState([]);
  const [workout, setWorkout] = useState({ name: "", duration: "", category: "Cardio" });

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const addWorkout = () => {
    if (workout.name && workout.duration) {
      setWorkouts([...workouts, { ...workout, id: Date.now() }]);
      setWorkout({ name: "", duration: "", category: "Cardio" });  // Reset the form after adding
    }
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Workout Tracker</h1>
      
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={workout.name}
          onChange={handleChange}
          placeholder="Workout Name"
          className="p-2 border rounded mr-2"
        />
        <input
          type="text"
          name="duration"
          value={workout.duration}
          onChange={handleChange}
          placeholder="Duration (e.g., 30 minutes)"
          className="p-2 border rounded mr-2"
        />
        <select
          name="category"
          value={workout.category}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="Cardio">Cardio</option>
          <option value="Strength">Strength</option>
          <option value="Flexibility">Flexibility</option>
        </select>
        <button
          onClick={addWorkout}
          className="bg-blue-500 text-white p-2 rounded ml-2"
        >
          Add Workout
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Your Workouts</h2>
        <ul>
          {workouts.map((workout) => (
            <li key={workout.id} className="mb-2 flex justify-between items-center">
              <span>{workout.name} - {workout.duration} ({workout.category})</span>
              <button
                onClick={() => deleteWorkout(workout.id)}
                className="bg-red-500 text-white p-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutTracker;
