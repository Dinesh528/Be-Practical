import React, { Component } from 'react'
import Search from './sub/Search';
import Artist from './sub/Artist';
import Track from './sub/Track';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

 class Music extends Component {
    state = {
        artist:null,
        tracks: []
    };

    componentDidMount(){
        this.searchArtist('Arijit Singh');
    }
    searchArtist = artistQuery => {
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
        .then(response => response.json())
        .then(json=>{
            console.log(json);

            if(json.artists.total > 0){
                const artist = json.artists.items[0];
                this.setState({ artist });

                //api to call top tracks
                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                .then(response => response.json())
                .then(json => {
                    console.log(json.tracks);
                    this.setState( {tracks: json.tracks});
                })
                .catch(error => alert(error.message))

            }
        })
        .catch(error => alert(error.message));
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jumbotron text-center">
                        <h1>Welcome to Music Component</h1>
                    </div>
                </div>
                <Search search={this.searchArtist}/>  
                <Track tracks={this.state.tracks}/>
                <Artist artist={this.state.artist}/>        
            </div>
        )
    }
}

export default Music;
