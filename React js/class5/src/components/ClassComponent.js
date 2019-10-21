import React,{Component} from 'react';

const URL = 'https://jsonplaceholder.typicode.com/photos';

// stateless component
const PhotoList = ({photo:{id,albumId,title,url,thumbnailUrl}})=>{
    return(
        <div className="col-md-4">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id} {albumId} {title}
                    </h3>
                </div>
                <div className="panel-body">
                    <img src={url} alt="dinesh" className="img-thumbnail img-responsive"/>
                </div>
            </div>
        </div>
    );
}
class ClassComponent extends Component{
    constructor(props){
        super(props);
        this.state = { photos:[]};
    }

    componentDidMount(){
        fetch(`${URL}`)
            .then(response=>response.json())
            .then(json=>{
                console.log(json);
                this.setState({
                    photos: json
                });
            })
            .catch(error=>console.log(error));
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jumbotron text-center">
                        <h2>Welcome to photos (Albums)</h2>
                        <h3>{this.state.photos.map(x=>(
                            //stateless component call
                            <PhotoList key={x.id} photo={x}></PhotoList>
                        ))}
                        </h3>
                    </div>
                </div>

            </div>
        );
    }
}

export default ClassComponent;