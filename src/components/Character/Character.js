import React from 'react';
import './Character.css';

export default function Display({ shirt, pant, shoe }) {
  return (
    <div className="display-fit">
      <div>
        <img src={`${process.env.Public_URL}/items/Shirts/${shirt}-shirt.png`} />
      </div>

      <div>
        <img src={`${process.env.Public_URL}/items/Pants/${pant}-pant.png`} />
      </div>

      <div>
        <img src={`${process.env.Public_URL}/items/Shoes/${shoe}-shoe.png`} />
      </div>
    </div>
  );
}
