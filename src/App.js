import React from 'react';
import logo from './logo.svg';
import './App.css';

var instructions = (
  <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
);

var link = (
  <a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {instructions}
        {link}
      </header>
    </div>
  );
}

export default App;
