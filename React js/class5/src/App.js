import React from 'react';
import './App.css';
import Post from './components/Post';
import About from './components/About';
import ClassComponent from './components/ClassComponent';
function App() {
  return (
    <div className="App">
      <div className="row"> 
      <Post title="Constant element Component" name="Dinesh" sname="Peta" /> 
      </div>
      <div className="row">
        <About name="Functional Components"/>
      </div>
      <div className="row">
        <ClassComponent title="Class Component"/>
      </div>
    </div>
  );
}

export default App;
