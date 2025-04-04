import React, { useEffect } from 'react';
import axios from 'axios';

const FetchWorkouts = ({ setWorkouts, setLoading }) => {
  useEffect(() => {
    setLoading(true);
    axios.get('/api/workouts')  // Replace with the correct API endpoint
      .then(response => {
        setWorkouts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching workouts:', error);
        setLoading(false);
      });
  }, [setWorkouts, setLoading]);

  return null;  // No UI, it just fetches data
};

export default FetchWorkouts;
