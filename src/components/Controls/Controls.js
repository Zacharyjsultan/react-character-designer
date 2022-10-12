import React, { useState } from 'react';

import './Controls.css';

export default function Controls({
  shirt,
  setShirt,
  pant,
  setPant,
  shoe,
  setShoe,
  setCatchphrases,
  shirtCount,
  setShirtCount,
  pantCount,
  setPantCount,
  shoeCount,
  setShoeCount,
}) {
  const [newCatchphrase, setNewCatchphrase] = useState('');
  const addCatchphrase = () => {
    if (!newCatchphrase) return;
    setCatchphrases((prevState) => {
      return [...prevState, newCatchphrase];
    });
  };

  return (
    <>
      <h1>Fit Picker</h1>
      <div className="character-controls">
        <div className="shirt-drop">
          <label>Shirts</label>
          <select
            className="top"
            value={shirt}
            onChange={(e) => {
              setShirt(e.target.value);
              setShirtCount(shirtCount + 1);
            }}
          >
            <option value="one">shirt 1</option>
            <option value="two">shirt 2</option>
            <option value="three">shirt 3</option>
          </select>
        </div>

        <div className="pants-drop">
          <label>Pants</label>
          <select
            className="middle"
            value={pant}
            onChange={(e) => {
              setPant(e.target.value);
              setPantCount(pantCount + 1);
            }}
          >
            <option value="one">pant 1</option>
            <option value="two">pant 2</option>
            <option value="three">pant 3</option>
          </select>
        </div>

        <div className="shoe-drop">
          <label>Shoes</label>
          <select
            className="bottom"
            value={shoe}
            onChange={(e) => {
              setShoe(e.target.value);
              setShoeCount(shoeCount + 1);
            }}
          >
            <option value="one">shoe 1</option>
            <option value="two">shoe 2</option>
            <option value="three">shoe 3</option>
          </select>
        </div>

        <label>Catchphrase</label>
        <div className="catchphrase-area">
          <input
            placeholder="'write your catchphrase'"
            value={newCatchphrase}
            onChange={(e) => {
              setNewCatchphrase(e.target.value);
            }}
          ></input>
          <button onClick={addCatchphrase}>Add</button>
        </div>
      </div>
    </>
  );
}
