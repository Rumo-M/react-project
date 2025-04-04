// WorkoutList.jsx
import React from 'react';

const WorkoutList = ({ workouts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {workouts.map((workout, index) => (
        <div key={index} className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-bold">{workout.name}</h3>
          <p>{workout.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
