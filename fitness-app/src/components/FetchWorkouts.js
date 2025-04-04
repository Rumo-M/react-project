// FetchWorkouts.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchWorkouts = ({ setWorkouts }) => {
  useEffect(() => {
    axios.get('https://api.Rumo1healthwellness.com/workouts')
      .then(response => setWorkouts(response.data))
      .catch(error => console.error(error));
  }, [setWorkouts]);

  return null;
};

export default FetchWorkouts;
