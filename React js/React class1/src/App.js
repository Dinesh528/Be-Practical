import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Nav from './components/Nav';

function App() {
  
  return (
    <div className="container">
      <Nav/>
        <div className="row">
          <h1 className="jumbotron text-center">Hi Manjunath Welcome to ReactJs</h1>
        </div>
        <Contact name='Manjunath' mobile='878787878' email='manjunath@gmail.com' gender='male' salary='878' />
        <Contact name='Manjunath' mobile='099898898' email='manjunath@gmail.com' gender='male' salary='878' />
    </div>
  );
}

export default App;
