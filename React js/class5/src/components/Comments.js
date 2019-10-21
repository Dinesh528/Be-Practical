import React,{Component} from 'react';

const URL = 'https://jsonplaceholder.typicode.com/comments';

// stateless Component
const CommentList = ({comment:{id,name,email,body,postId}})=>{
    return(
                <div className="col-md-4">
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            {id}.{postId}.{name}
                        </div>
                        <div className="panel-body">
                            {body}
                        </div>
                        <p className="panel-footer">{email}</p>
                    </div>
                </div>
    );
}

class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount(){
        fetch(`${URL}`)
        .then(response=>response.json())
        .then(json=>{
            console.log(json);
            this.setState({
                comments:json
            });
        })
        .catch(error=>console.log(error));
    }
    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center jumbotron">
                        <h1>Welcome to React Fake API => Comments</h1>
                    </div>
                </div> 
                    <h4>
                        {this.state.comments.map(x=>(
                            <CommentList key={x.id} comment={x} />
                        ))}
                    </h4>
            </div>
         );
    }
}
 
export default Comments;