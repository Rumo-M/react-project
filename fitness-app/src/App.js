import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Card from './Card';
import Modal from './Modal';
import Settings from './Settings';
import WorkoutList from './WorkoutList';
import ProgressChart from './components/ProgressChart';
import MealPlanner from './MealPlanner';
import FetchWorkouts from './components/FetchWorkouts';
import FetchMeals from './components/FetchMeals';
import FetchMeditations from './components/FetchMeditations';
import Home from './Home'; // Create different components for each section
import Workout from './Workout';
import Nutrition from './Nutrition';
import Progress from './Progress';

const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [meals, setMeals] = useState([]);
  const [meditations, setMeditations] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Health & Wellness App</h1>

        {/* Navigation Bar */}
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/workout">Workout</a></li>
            <li><a href="/nutrition">Nutrition</a></li>
            <li><a href="/progress">Progress</a></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/workout" 
            element={
              <div>
                <FetchWorkouts setWorkouts={setWorkouts} />
                <WorkoutList workouts={workouts} />
              </div>
            } 
          />
          <Route 
            path="/nutrition" 
            element={
              <div>
                <FetchMeals setMeals={setMeals} />
                <MealPlanner meals={meals} />
              </div>
            } 
          />
          <Route 
            path="/progress" 
            element={
              <div>
                <ProgressChart data={[{ date: '2025-04-01', value: 5 }, { date: '2025-04-02', value: 10 }]} />
              </div>
            } 
          />
        </Routes>

        {/* Open Settings Modal */}
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setModalOpen(true)}>Open Settings</button>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <Settings />
        </Modal>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
