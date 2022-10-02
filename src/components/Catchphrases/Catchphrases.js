import React from 'react';

import './Catchphrases.css';

export default function Catchphrases({ catchphrases }) {
  return (
    <div>   
    Catchphrases
      {catchphrases.map((c) => (
        <li className='catchphrase' key={c}>
          {c}
        </li>
      ))}
    </div>
  );
}
