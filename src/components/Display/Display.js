import React from 'react';
import './Display.css';

export default function Display({ shirtCount, pantCount, shoeCount }) {
  return (
    <div className="stats">
      <h2>Display Changes</h2>
      <p>{shirtCount}</p>
      <p>{pantCount}</p>
      <p>{shoeCount}</p>
    </div>
  );
}
