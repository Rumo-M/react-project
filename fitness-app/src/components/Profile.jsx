import React from "react";

const Profile = () => {
  const user = {
    name: "Emmanuel Madwendwe",
    age: 28,
    height: "5'10\"",
    weight: "75kg",
    goals: "Weight Loss",
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Height:</strong> {user.height}</p>
        <p><strong>Weight:</strong> {user.weight}</p>
        <p><strong>Goals:</strong> {user.goals}</p>
      </div>
    </div>
  );
};

export default Profile;
