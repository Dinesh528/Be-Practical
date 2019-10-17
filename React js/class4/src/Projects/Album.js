import React, { Component } from 'react';

//Stateless component
const Photo = ({ photo: { id, title,url,thumbnailUrl}})=>
    (<div className="col-md-4">
        <h4 className="text-center">{title}</h4>
        <img src={url} alt="" className="img-responsive img-thumbnail"/>
        <a href="{thumbnailUrl}" className="btn btn-info">Open Image</a>
    </div>)
;

 class Album extends Component {
     state= {photos:[]};
     
     fetchAlbums = ()=>{
         fetch('https://jsonplaceholder.typicode.com/photos')
         .then(response => response.json())
         .then(json=>this.setState({photos:json}))
         .catch(error => console.log(error.message));
     }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jumbotron text-center">
                        <h1>Album</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron text-center">Album List</div>
                    </div>
                </div>
                <div className="row">
                    <button onClick={this.fetchAlbums} className="btn btn-primary">Load Albums</button>
                </div>
                <div className="row">
                    {this.state.photos.map(photo=>(
                        <Photo key={photo.id} photo={photo}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Album;
