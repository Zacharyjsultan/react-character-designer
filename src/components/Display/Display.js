import React from 'react';

export default function Display({ shirtImg, pantImg, shoeImg }) {
  return (
    <div className="display-fit">
      <div>
        <img src={`${process.env.Public_URL}/public/${shirtImg}.png`}/>

      </div>

      <div>
        <img src={`${process.env.Public_URL}/public/${pantImg}.png`}/>
      </div>

      <div>
        <img src={`${process.env.Public_URL}/public/${shoeImg}.png`}/>
      </div>

    </div>
  );
}
