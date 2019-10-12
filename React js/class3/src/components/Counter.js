import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
    
    constructor(props){
        super(props);
        this.state = { popular: false};

        this.updateLikes = this.updateLikes.bind(this);
    }

    updateLikes(){
        ReactDOM.render(
            <Counter likes={this.props.likes + 1}/>,
            document.getElementById('renderHere')
        );
    }

    //1.(Mounting)
    componentWillMount(){
        console.log('component has started mounting');
    }

    //2.mounting
    componentDidMount(){
        console.log('Component has mounted');
    }

    componentWillReceiveProps(nextProps,nextContext){
        console.log("Component will recieve props called");
        console.log("Should component update nextProps = ",nextProps);
        this.setState({
            popular: nextProps.likes >=10
        });
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Component should update or not?");
        console.log("should component update nextProps=", nextProps);
        console.log("should component update nextState=", nextState);
        return true;
    }

    componentWillUpdate(nextProps,nextState,nextContext){
        console.log("component will update is called ..");
        console.log("Component will update nextProps=", nextProps);
        console.log("component will update nextState=", + nextState);
    }

    render(){
        console.log('Component has rendered');
        return(
            <div className="container">
                <div className="row"><br/>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <div className="panel-title text-center">Counter</div>
                        </div>
                        <div className="panel-body">
                            <h3>{this.state.popular? 'I am Popular' : null}</h3>
                                <button onClick={this.updateLikes} className="btn btn-info">
                                    Likes={this.props.likes}
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Component did update is called");
        console.log("Component did updated prevProps=", prevProps);
        console.log("Component did updated prevState=",prevState);
    }

    componentWillUnmount(){
        console.log("Component is successfully un mounted..");
    }
}

export default Counter;