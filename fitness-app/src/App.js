import React, { useState } from 'react';
import Footer from './Footer';
import Card from './Card';
import Modal from './Modal';
import Settings from './Settings';
import WorkoutList from './WorkoutList';
import WorkoutDetails from './WorkoutDetails';
import ProgressChart from './components/ProgressChart';
import MealPlanner from './MealPlanner';
import FetchWorkouts from './components/FetchWorkouts';
import FetchMeals from './components/FetchMeals';
import FetchMeditations from './components/FetchMeditations';

const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [meals, setMeals] = useState([]);
  const [meditations, setMeditations] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Health & Wellness App</h1>
      <FetchWorkouts setWorkouts={setWorkouts} />
      <FetchMeals setMeals={setMeals} />
      <FetchMeditations setMeditations={setMeditations} />
      <h2 className="text-2xl font-bold mt-6">Workouts</h2>
      <WorkoutList workouts={workouts} />
      <h2 className="text-2xl font-bold mt-6">Meal Planner</h2>
      <MealPlanner meals={meals} />
      <h2 className="text-2xl font-bold mt-6">Progress Chart</h2>
      <ProgressChart data={[{ date: '2025-04-01', value: 5 }, { date: '2025-04-02', value: 10 }]} />
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setModalOpen(true)}>Open Settings</button>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Settings />
      </Modal>
      <Footer />
    </div>
  );
};

export default App;
