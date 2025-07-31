import React from 'react';

const IndianPlayers = () => {
  // Step 1: Using array destructuring
  const players = ['Virat', 'Rohit', 'Rahul', 'Pant', 'Hardik', 'Iyer'];
  const [p1, p2, p3, p4, p5, p6] = players;

  const oddPlayers = [p1, p3, p5];
  const evenPlayers = [p2, p4, p6];

  // Step 2: Merge arrays using spread (...)
  const T20players = ['Dhawan', 'Bumrah'];
  const RanjiTrophyPlayers = ['Pujara', 'Rahane'];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>{oddPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h2>Even Team Players</h2>
      <ul>{evenPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h2>Merged Players</h2>
      <ul>{mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
