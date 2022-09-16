import React from 'react';

import './Controls.css';

export default function Controls({ handleIncrement, shirtImg, setShirt, pantImg, setPant, shoeImg, setShoe }) {
  return (

    <><h1>Fit Picker</h1><div className="character-controls">

      <div className="shirt-drop">

        <label>Shirts</label>
        <select name="top" value={shirtImg} onChange={(e) => { setShirt(e.target.value); handleIncrement('shirtImg'); } }>
          <option value="one-shirt">shirt 1</option>
          <option value="two-shirt">shirt 2</option>
          <option value="three-shirt">shirt 3</option>
        </select>

      </div>

      <div className="pants-drop">

        <label>Pants</label>
        <select name="middle" value={pantImg} onChange={(e) => { setPant(e.target.value); handleIncrement('pantImg'); } }>
          <option value="one-pant">pant 1</option>
          <option value="two-pant">pant 2</option>
          <option value="three-pant">pant 3</option>
        </select>

      </div>

      <div className="shoe-drop">

        <label>Shoes</label>
        <select name="bottom" value={shoeImg} onChange={(e) => { setShoe(e.target.value); handleIncrement('shoeImg'); } }>
          <option value="one-shoe">shoe 1</option>
          <option value="two-shoe">shoe 2</option>
          <option value="three-shoe">shoe 3</option>
        </select>

      </div>

      <label>Catchphrase</label>
      <div className="catchphrase-area">
        <input placeholder="'write your catchphrase'" name="catchphrase"></input>

      </div>

    </div></>
  );
}
