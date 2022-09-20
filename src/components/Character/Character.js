import React from 'react';

export default function Character({ shirtChange, pantChange, shoeChange, catchphrases }) {
  return (
    <div className='character-changes'>
      <span className='characterChanges'>
        You have changed the shirt <p>{`${shirtChange}`} </p> times, the pants <p>{`${pantChange}`}</p> times, and the Shoes <p>{`${shoeChange}`}</p>times.
        <>
        </>
        <div> {catchphrases.map((catchphrase) => (
          <li key={catchphrase}>{catchphrase}</li>
        ))}</div>
      </span>
    </div>
  );
}
