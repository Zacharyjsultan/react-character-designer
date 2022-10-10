import React from 'react';

export default function Display({ shirtCount, pantCount, shoeCount }) {
  return (
    <div className="stat left">
      <h1>Stats</h1>
      <p>{shirtCount}</p>
      <p>{pantCount}</p>
      <p>{shoeCount}</p>
    </div>
  );
}
