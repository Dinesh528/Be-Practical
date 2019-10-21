import React,{Component} from 'react';

const URL = 'https://jsonplaceholder.typicode.com/albums';
const AlbumList=({album:{userId,id,title}})=>{
    return(
        <div className="col-md-4">
            <div className="panel panel-success">
                <div className="panel-body">
                    {userId}.{id}.{title}
                </div>
            </div>
        </div>
    );
}

class  Albums extends Component{
    constructor(props){
        super(props);
        this.state = {
            albums: []
        };
    }
    componentDidMount(){
        fetch(`${URL}`)
        .then(response=>response.json())
        .then(json=>{
            console.log(json)
            this.setState({
                albums:json
            });
        })
        .catch(error=>console.log(error));
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 jumbotron">
                        <h1>Welcome to Albums</h1>
                    </div>
                </div>
                <h4>
                    {this.state.albums.map(x=>(
                        <AlbumList key={x.id} album={x} />
                    ))}
                </h4>
            </div>
        );
    }
}

export default Albums;