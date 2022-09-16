import React from 'react';
import '.Controls.css';

export default function Controls({ handleIncrement, shirtImg, setShirt }) {
  return (
    <div className="character-controls">
      <div> Shirt </div>
      <select name="top" value={ shirtImg } onChange={(e) => { setShirt(e.target.value); handleIncrement('shirtImg'); }}>
        <option></option>
        <option></option>
        <option></option>
      </select>
    </div>
  );
}
