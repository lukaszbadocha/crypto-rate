import React from 'react';
import './App.css';

import Crypto from './Crypto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png" className="App-logo" alt="logo" />
        <p>Crypto rate</p>
      </header>
      <Crypto />
    </div>
  );
}

export default App;
