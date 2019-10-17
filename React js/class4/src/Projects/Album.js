import React, { Component } from 'react';

//Stateless component
const Photo = ({ photo: { id, title,url,thumbnailUrl}})

 class Album extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jumbotron text-center">
                        <h1>Album</h1>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Album;
