import React, { useState } from 'react'
import { Quotes } from './components/Quotes';
import './index.css';



function App() {


  return (
    <div className="App" >
      <header className="App-header">
      <p>Furkan's Random Quote Machine</p>
      </header>
      <div className='quote-wrapper' id='quote-wrapper'>
          <Quotes />
      </div>
    </div>
  );
}

export default App;
