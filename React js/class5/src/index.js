import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router,Route,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import About from './components/About';
import Post from './components/Post';
import ClassComponent from './components/ClassComponent';
import Pnf from './components/Pnf';
import Header from './components/Header';
import Comments from './components/Comments';
import Albums from './components/Albums';
import Users from './components/Users';
import Todos from './components/Todo';

//stateless component

const myRoute = (
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={()=>( <Header><App/></Header>)} />
            <Route exact path='/about' render={()=>(<Header><About/></Header>)} />
            <Route exact path= '/post' render= { ()=>( <Header><Post/></Header>)}/>
            <Route exact path='/classcomponent' render= { ()=>( <Header><ClassComponent/></Header>)}/>
            <Route exact path='/comments' render = { ()=>(<Header><Comments/></Header>)} />
            <Route exact path ='/albums' render={ ()=>(<Header><Albums/></Header>)} />
            <Route exact path='/users' render= {()=>(<Header><Users/></Header>)} />
            <Route exact path='/todos' render= { ()=>(<Header><Todos/></Header>)} />
            <Route exact path='*' render={ ()=>( <Header><Pnf/></Header>)} />
        </Switch>
    </Router>
);

ReactDOM.render(myRoute, document.getElementById('root'));
serviceWorker.unregister();
