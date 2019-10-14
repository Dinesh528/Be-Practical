import React from 'react';
import './App.css';
import Title from './components/Title';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1 className="jumbotron">Welcome to react router</h1>
      <Title/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
