import React from 'react';

import './Catchphrases.css';

export default function Catchphrase({ catchphrases }) {
  return (
    <div className="catchphres">
      Catchphrases
      {catchphrases.map((c) => (
        <li className="catchphrase" key={c}>
          {c}
        </li>
      ))}
    </div>
  );
}
