import React, { useState } from 'react';
import Catchphrases from '../Catchphrases/Catchphrases';
import Character from '../Character/Character';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import './Main.css';

export default function Main() {
  const [shirt, setShirt] = useState('one');
  const [pant, setPant] = useState('one');
  const [shoe, setShoe] = useState('one');

  const [shirtCount, setShirtCount] = useState(0);
  const [pantCount, setPantCount] = useState(0);
  const [shoeCount, setShoeCount] = useState(0);

  const [catchphrases, setCatchphrases] = useState([]);

  return (
    <div className="box">
      <Controls
        shirt={shirt}
        setShirt={setShirt}
        pant={pant}
        setPant={setPant}
        shoe={shoe}
        setShoe={setShoe}
        shirtCount={shirtCount}
        setShirtCount={setShirtCount}
        pantCount={pantCount}
        setPantCount={setPantCount}
        shoeCount={shoeCount}
        setShoeCount={setShoeCount}
        setCatchphrases={setCatchphrases}
      />
      <Display
        shirtCount={shirtCount}
        pantCount={pantCount}
        shoeCount={shoeCount}
        catchphrases={catchphrases}
      />
      <Character shirt={shirt} pant={pant} shoe={shoe} />

      <Catchphrases catchphrases={catchphrases} />
    </div>
  );
}
