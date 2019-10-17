import React,{Component} from 'react';

class ClassComponent extends Component{
    constructor(props){
        super(props);
        this.state = { num : 10};
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jumbotron text-center">
                        <h2>Welcome to {this.props.title} (Class)</h2>
                        <h3>{this.state.num}</h3>
                    </div>
                </div>

            </div>
        );
    }
}

export default ClassComponent;