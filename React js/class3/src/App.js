import React, { Component } from 'react';
import Counter from './components/Counter';
import ReactDOM from 'react-dom';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {num : 0};
    this.mountComponent= this.mountComponent.bind(this);
    this.unMountComponent = this.unMountComponent.bind(this);
  }

  mountComponent(){
    console.log('Component mounting event triggered');
    ReactDOM.render(<Counter likes={this.state.num}/>, document.getElementById('renderHere'));
  }

  unMountComponent(){
    console.log('Component unmounting event is triggered..');
    ReactDOM.unmountComponentAtNode(document.getElementById('renderHere'));
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12 jumbotron">
            <h3 className="text-center">React LifeCycle</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button onClick={this.mountComponent} className="btn btn-primary">
              Mount Component
            </button>
            <button onClick={this.unMountComponent} className="btn btn-warning">
              UnMount Component
            </button>
          </div>
        </div>
        <div className="row" id="renderHere"></div>
      </div>
    );
  }
}

export default App;