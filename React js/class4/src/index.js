import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Router,Switch,Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Header from './components/Header';
import Resume from './components/Resume';
import Portfolio1 from './components/Portfolio1';
import Album from './Projects/Album';
import Jokes from './Projects/Jokes';
import Post from './Projects/Post';
import Users from './components/Users';
import Pnf from './components/Pnf';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={()=> <Header><App/></Header>} />
            <Route exact path='/resume' render={ ()=> <Header><Resume/></Header>} />
            <Route exact path='/jokes' render= { ()=> <Header><Jokes/></Header>} />
            <Route exact path='/album' render={ ()=> <Header><Album/></Header>} />
            <Route exact path='/portfolio1' render= {()=><Header><Portfolio1/></Header>} />
            <Route exact path='/users' render={ ()=><Header><Users/></Header>}/>
            <Route exact path='/post' render= { ()=> <Header><Post/></Header>} />
            <Route exact path='*' render={ ()=>(<Header><Pnf/></Header>)}/>
        </Switch>
    </Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
