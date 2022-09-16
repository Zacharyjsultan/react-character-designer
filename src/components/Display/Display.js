import React from 'react';

export default function Display({ shirtImg, pantImg, shoeImg }) {
  return (
    <div className="display-fit">
      <div>
        <img src={`${process.env.Public_URL}/items/${shirtImg}.png`}/>

      </div>

      <div>

      </div>

      <div>

      </div>

    </div>
  );
}
