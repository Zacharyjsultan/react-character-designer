import React, { useState } from 'react';
import Catchphrases from '../Catchphrases/Catchphrases';
import Character from '../Character/Character';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';

export default function Main() {
  const [shirt, setShirt] = useState('one');
  const [pant, setPant] = useState('one');
  const [shoe, setShoe] = useState('one');

  const [shirtCount, setShirtCount] = useState(0);
  const [pantCount, setPantCount] = useState(0);
  const [shoeCount, setShoeCount] = useState(0);

  const [catchphrases, setCatchphrases] = useState([]);

  return (
    <div>
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
      <Display shirt={shirt} pant={pant} shoe={shoe} />
      <Character
        shirtCount={shirtCount}
        pantCount={pantCount}
        shoeCount={shoeCount}
        catchphrases={catchphrases}
      />

      <Catchphrases catchphrases={catchphrases} />
    </div>
  );
}
