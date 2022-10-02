import React, { useState } from 'react';
import Catchphrases from '../Catchphrases/Catchphrases';
import Character from '../Character/Character';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';

export default function Main() {
  const [shirtImg, setShirt] = useState('one-shirt');
  const [pantImg, setPant] = useState('one-pant');
  const [shoeImg, setShoe] = useState('one-shoe');

  const [shirtChanges, setShirtChanges] = useState(0);
  const [pantChanges, setPantChanges] = useState(0);
  const [shoeChanges, setShoeChanges] = useState(0);

  const [catchphrases, setCatchprases] = useState(0);


  const handleIncrement = (outfit) => {
    if (outfit === 'shirtImg') {
      setShirtChanges((prevState) => prevState + 1);
    } else if (outfit === 'pantImg') {
      setPantChanges((prevState) => prevState + 1);
    } else if (outfit === 'shoeImg') {
      setShoeChanges((prevState) => prevState + 1);
    }
  };
  return (
    <div>
      <Controls 
        shirtImg={shirtImg}
        setShirt={setShirt}
        pantImg={pantImg}
        setPant={setPant}
        shoeImg={shoeImg}
        setShoe={setShoe}
        handleIncrement={handleIncrement}
        setCatchprases={setCatchprases}
       
      />
      <Display 
        shirtImg={shirtImg}
        pantImg={pantImg}
        shoeImg={shoeImg}
      />
      <Character shirtChanges={shirtChanges} pantChanges={pantChanges} shoeChanges={shoeChanges} catchphrases={catchphrases} />
      
      <Catchphrases catchphrases={catchphrases} />
    </div>
  );
}
