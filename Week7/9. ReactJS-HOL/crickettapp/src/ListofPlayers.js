import React from 'react';

const ListofPlayers = () => {
  // Step 1: Declare array of 11 players with name & score
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 45 },
    { name: 'KL Rahul', score: 72 },
    { name: 'Rishabh Pant', score: 60 },
    { name: 'Hardik Pandya', score: 90 },
    { name: 'Shreyas Iyer', score: 55 },
    { name: 'Suryakumar Yadav', score: 95 },
    { name: 'Ravindra Jadeja', score: 40 },
    { name: 'Bumrah', score: 30 },
    { name: 'Shami', score: 75 },
    { name: 'Ashwin', score: 65 }
  ];

  // Step 2: Display all players using map()
  const allPlayers = players.map((p, index) => (
    <li key={index}>{p.name} - {p.score}</li>
  ));

  // Step 3: Filter players with score < 70 using arrow functions
  const lowScorers = players
    .filter(p => p.score < 70)
    .map((p, index) => <li key={index}>{p.name} - {p.score}</li>);

  return (
    <div>
      <h2>All Players</h2>
      <ul>{allPlayers}</ul>

      <h2>Players with Score below 70</h2>
      <ul>{lowScorers}</ul>
    </div>
  );
};

export default ListofPlayers;
