import React, { Component } from 'react';
//stateless component

const Posts= ({
        post:{
            id,
            title,
            body
        }
})=>(
    <div className="col-md-6">
        <div className="form">
            <h4 className="text-center">{title}</h4><hr/>
            <p className="justify">{body}</p>
        </div>
    </div>
);

 class Post extends Component {
    state={ posts:[]};

    fetchPosts=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response  => response.json())
        .then(json => this.setState({posts:json}))
        .catch(error => console.log(error.message));
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jumbotron text-center">
                        <h1>Posts</h1> 
                    </div>
                </div>
                <div className="row">
                    <button onClick={this.fetchPosts} className="btn btn-primary">Get Posts</button>
                </div>
                <div className="row">
                    {this.state.posts.map(post=>(
                        <Posts key={post.id} post={post}/>
                    ))}
                </div>

            </div>
        )
    }
}

export default Post;