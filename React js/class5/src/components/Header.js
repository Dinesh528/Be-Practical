import React from 'react';
import {Link} from 'react-router-dom';
const Header = ({children})=>{
    return(
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            Project-1
                        </Link>
                        <button className="navbar-toggle" data-toggle="collapse" data-target="#menu">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/classcomponent'>Class Component</Link>
                            </li>
                            <li>
                                <Link to='/post'>Post</Link>
                            </li>
                            <li>
                                <Link to='/comments'>Comments</Link>
                            </li>
                            <li>
                                <Link to='/albums'>Albums</Link>
                            </li>
                            <li>
                                <Link to='/users'>Users</Link>
                            </li>
                            <li>
                                <Link to='/todos'>Todos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                {children}
            </div>
        </div>
    );
}

export default Header;