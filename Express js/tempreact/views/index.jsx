var React = require('react');

class Dinesh extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        return(
            <div className="container">
                <nav>
                    <a href='/'>Home Page</a>
                    <a href='/about'>About Page</a>
                </nav>
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron text-center">
                            <h1>Welcome to React Dinesh</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {this.props.persons.map(item=>{
                        return(
                            <div key={item.id}>
                                <h3>Name={item.name}</h3>
                                <h3>Email={item.email} </h3>
                                <h3>Mobile {item.mobile}</h3>
                            </div>    
                        );
                    })}
                </div>
            </div>
        );
    }
}

module.exports = Dinesh;