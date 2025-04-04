// FetchMeditations.jsx
import React, { useEffect } from 'react';
import axios from 'axios';

const FetchMeditations = ({ setMeditations }) => {
  useEffect(() => {
    axios.get('https://api.Rumo1Health&Wellness.com/meditations')
      .then(response => setMeditations(response.data))
      .catch(error => console.error(error));
  }, [setMeditations]);

  return null;
};

export default FetchMeditations;
