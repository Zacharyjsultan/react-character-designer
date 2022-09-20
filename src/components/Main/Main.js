import React, { useState } from 'react';
import Character from '../Character/Character';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';

export default function Main() {
  const [shirtImg, setShirt] = useState('one-shirt');
  const [pantImg, setPant] = useState('one-pant');
  const [shoeImg, setShoe] = useState('one-shoe');


  return (
    <div>
      <Controls 
        shirtImg={shirtImg}
        setShirt={setShirt}
        pantImg={pantImg}
        setPant={setPant}
        shoeImg={shoeImg}
        setShoe={setShoe}
       
      />
      <Display 
        shirtImg={shirtImg}
        pantImg={pantImg}
        shoeImg={shoeImg}
      />
      <Character />
    </div>
  );
}
