import React from 'react';
//element  based react component
// in case of arrow function=>() is vaild for no parameter or More than one parameter
// in case single parameter=>() is not neccessary
const URL = 'https://jsonplaceholder.typicode.com/posts';

//stateless component
const PostList = ({post: {id, userId,title,body}})=>{
    return(
        <div className="col-md-4">
        <div className="panel panel-info">
            <div className="panel-heading">
                <h3 className="Panel-title">
                    {id} {userId} {title}
                </h3>
            </div>
            <div className="panel panel-body">
             <p className="text-justify">{body}</p>   
            </div>
        </div>
    </div>
    );
};
    


class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }
    componentDidMount(){
        fetch(`${URL}`)
            .then(response=>response.json())
            .then(json=>{
                console.log(json);
                this.setState({
                    posts: json
                });
            })
            .catch(error=>console.log(error));
    }
    render() { 
        return ( 

        <div className="container">
            <div className="row">
                <div className="col-sm-12 text-center jumbotron">
                    <h1>Welcome to React Post page</h1>
                    <p>{this.props.title}</p>
                </div>
            </div>
            <div className="row">
                {this.state.posts.map(x=>(
                    // stateless component call
                    <PostList key={x.id} post={x} ></PostList>
                ))}
            </div>
            </div>
         );
    }
}
 
export default Post;