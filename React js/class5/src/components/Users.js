import React,{Component} from 'react';

const URL = 'https://jsonplaceholder.typicode.com/users';

//stateless Component
const UserList=({
    user:{
        id,
        name,
        username,
        email,
        address:{
            street,
            suite,
            city,
            zipcode,
            geo:{
                lat,
                lng
            }
        }
        
    }
})=>{
    return(
        <div className="col-md-4">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    {id}.{username}
                </div>
                <div className="panel-body">
                    Name: {name}
                </div>
                <div className="panel-body">
                    Email: {email}
                </div>
                <div className="panel-body">
                    Address: 
                    Street: {street} <br></br>
                    Suite:  {suite}<br></br>
                    City:  {city}<br></br>
                    zipcode: {zipcode} <br></br>
                    <pre>
                    Geolocation: <br></br>
                        Longitude: {lng}<br></br>
                        Latitude: {lat}
                    </pre>
                </div>
            </div>
        </div>
    );
}

class Users extends Component {
    constructor(props){
        super(props);
        this.state ={
            users: []
        };
    };

    componentDidMount(){
        fetch(`${URL}`)
        .then(response=>response.json())
        .then(json=>{
            console.log(json);
            this.setState({
                users: json
            });
        })
        .catch(error=>console.log(error));
    }
    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron col-md-12">
                        <h1>Welcome to Users</h1>
                    </div>
                </div>
                <h4>
                    {this.state.users.map(x=>(
                        <UserList key={x.id} user={x} />
                    ))}
                </h4>
            </div>
          );
    }
}
 
export default Users;