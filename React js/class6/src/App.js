import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import Music from './components/Music';
import About from './components/About';
import Contact from './components/Contact';
import Pnf from './components/Pnf';
 class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to='/' className="navbar-brand">
                React Music Player
              </Link>
              <button
                className="navbar-toggle"
                data-target="#menu"
                data-toggle="collapse"
               >
                <span className="icon-bar"></span>   
                <span className="icon-bar"></span>   
                <span className="icon-bar"></span>   

              </button> 
            </div>
            <div className="navbar-collapse collapse" id="menu">
              <ul className="nav navbar-nav">
                <li>
                  <Link to='/music'>Music Player</Link>
                </li>
                <li>
                  <Link  to="/about">About</Link>
                </li>
                <li>
                  <Link to ='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path='/' component={Music}/>
          <Route exact path='/music' component={Music}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='*' component={Pnf}/>
        </Switch>
      </Router>
    )
  }
}
export default App;
