// Card.jsx
import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded" />}
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Card;