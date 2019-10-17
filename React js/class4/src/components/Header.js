import React, { Component } from 'react';
import {Link} from "react-router-dom";

const Header = ({children}) => {
    return(
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="nav-header">
                        <Link className="navbar-brand" to="/">Dinesh</Link>
                        <button className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse" id="mynavbar">
                        <ul className="navbar-nav nav">
                            <li>
                                <Link to="/resume">Resume</Link>
                            </li>
                            <li>
                                <Link to="/jokes">jokes</Link>
                            </li>
                            <li>
                                <Link to="/album">Album</Link>
                            </li>
                            <li>
                                <Link to="/post">Post</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br/><br/><br/>
            <div className="container">
                {children}
            </div>
        </div>
    );
};

export default Header;