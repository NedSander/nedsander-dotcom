import React from 'react';
import MainHero from './MainHero.js';
import Footer from './Footer.js';
import MainBody from './MainBody.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainHero></MainHero>
      <MainBody></MainBody>
      <Footer></Footer>
    </div>
  );
}

export default App;
