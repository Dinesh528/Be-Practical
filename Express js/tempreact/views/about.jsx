var React = require('react');

class About extends React.Component {
    render() { 
        return ( 
            <div className="container">
                <nav>
                    <a href='/'>Home Page</a>
                    <a href='/about'>About Page</a>
                </nav>
                <div className="row">

                    <div className="jumbotron text-center">
                        <h1>Welcome to React About</h1>
                    </div>
                </div>

            </div>
         );
    }
}
 
export default About;