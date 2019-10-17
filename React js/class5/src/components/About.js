import React from 'react';

function Post(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 jumbotron">
                    <h3 className="text-center">Welcome to {props.name} page</h3>
                </div>
            </div>

        </div>
    );
}

export default Post;