import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';
import news from './components/sub/news';
import New from './components/sub/new';
import Edit from './components/sub/edit';
import pnf from './components/sub/pnf';
export default class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to='/' className="navbar-brand">News Api</Link>
              <button className="navbar-toggle" data-toggle="collapse" data-target="#menu">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="menu">
              <ul className="nav navbar-nav">
                <li><Link to={'/news'} className="nav-link">News</Link></li>
                <li><Link to={'/new'} className="nav-link">New</Link></li>
                <li><Link to={'/edit'} className="nav-link">Edit</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path='/' component={news}></Route>
          <Route  exact path='/new' component={New}></Route>
          <Route exact path='/edit' component={Edit}></Route>
          <Route exact path='/news' component={news}></Route>
          <Route exact path='*' component={pnf}></Route>
        </Switch>
      </Router>
    );
  }
}
