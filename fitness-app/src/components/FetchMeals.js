import React, { useEffect } from 'react';
import axios from 'axios';

const FetchMeals = ({ setMeals, setLoading }) => {
  useEffect(() => {
    setLoading(true);
    axios.get('/api/meals')  // Replace with the correct API endpoint
      .then(response => {
        setMeals(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching meals:', error);
        setLoading(false);
      });
  }, [setMeals, setLoading]);

  return null;  // No UI, it just fetches data
};

export default FetchMeals;
