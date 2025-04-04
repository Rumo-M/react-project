// FetchMeals.jsx
import React, { useEffect } from 'react';
import axios from 'axios';

const FetchMeals = ({ setMeals }) => {
  useEffect(() => {
    axios.get('https://api.example.com/meals')
      .then(response => setMeals(response.data))
      .catch(error => console.error(error));
  }, [setMeals]);

  return null;
};

export default FetchMeals;
