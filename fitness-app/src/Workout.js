// Workout.js
import React, { useState, useEffect } from 'react';
import WorkoutDetails from './WorkoutDetails'; // Importing the WorkoutDetails component for a selected workout

const Workout = () => {
  // Sample data: You can replace this with an API call
  const workoutData = [
    { id: 1, name: 'Push-ups', description: 'A great upper body workout.' },
    { id: 2, name: 'Squats', description: 'Excellent for lower body strength.' },
    { id: 3, name: 'Plank', description: 'Helps strengthen your core.' },
    { id: 4, name: 'Burpees', description: 'Full-body exercise for fitness.' },
  ];

  const [selectedWorkout, setSelectedWorkout] = useState(null);

  useEffect(() => {
    // Here, you would fetch workout data from an API if needed
    // Example: fetch('/api/workouts').then(response => response.json()).then(data => setWorkouts(data));
  }, []);

  const handleWorkoutClick = (workout) => {
    setSelectedWorkout(workout);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Available Workouts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutData.map((workout) => (
          <div
            key={workout.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer"
            onClick={() => handleWorkoutClick(workout)}
          >
            <h3 className="text-xl font-semibold">{workout.name}</h3>
            <p>{workout.description}</p>
          </div>
        ))}
      </div>

      {/* Show workout details when a workout is selected */}
      {selectedWorkout && <WorkoutDetails workout={selectedWorkout} />}
    </div>
  );
};

export default Workout;
