import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container">
                        <div class="navbar-header">
                         <a class="navbar-brand" href="#">WebSiteName</a>
                    </div>
                     <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                         <li><a href="#">Page 1</a></li>
                         <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;