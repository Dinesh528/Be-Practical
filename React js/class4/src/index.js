import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Router,Switch,Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Header from './components/Header';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Album from './Projects/Album';
import Jokes from './Projects/Jokes';
import Post from './Projects/Post';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={()=> <Header><App/></Header>} />
            <Route exact path='/resume' render={ ()=> <Header><Resume/></Header>} />
             <Route exact path='/jokes' render= { ()=> <Header><Jokes/></Header>} />
            <Route exact path='/album' render={ ()=> <Header><Album/></Header>} />
            <Route exact path='/post' render= { ()=> <Header><Post/></Header>} /> */}
        </Switch>
    </Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
