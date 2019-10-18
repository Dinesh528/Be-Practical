import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';

import Navbar from './components/Navbar'

class App extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //const title = 'React Stateless';
    return (
      <div>
    <Navbar logo="Be-Practical" />
    <div className="container">
      <div className="row">
        <div className="row">
          <div className="jumbotron">
            <h1 className="text-center">{this.props.title}</h1>
          </div>
        </div>
      </div>
    </div>    
      </div>
    );
}
}

// default Props

App.defaultProps = {
  title: 'React Default Props',
  subtitle: 'Welcome to react.js',
  num: 22,
  status: true,
  sayHi: function() {
    alert('Say Hi');
  },
  colors: ['Blue', 'Black', 'Orange', 'Pink']
};


// validate props
App.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  num: PropTypes.number,
  status: PropTypes.bool,
  sayHi: PropTypes.func,
  colors: PropTypes.array
};

export default App;
