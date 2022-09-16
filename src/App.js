import React from 'react';

import './App.css';

import background from './background/background.jpg';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      
      <Main />
    </div>
  );
}

export default App;
