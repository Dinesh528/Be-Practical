import  React,{Component} from 'react';

const URL='https://jsonplaceholder.typicode.com/todos';

//Stateless Component
const TodoList=({todo:{userId,id,title,completed}})=>{
    return(
        <div className="col-md-4">
            <div className="panel panel-primary">
                <div className="panel-heading">{userId} . {id} . {title} </div>
                <div className="panel-body">{completed} </div>
                <p>{completed}</p>
            </div>
        </div>
    );
}
class Todos extends Component {
    constructor(props){
        super(props);
        this.state={
            todos: []
        };
    };

    componentDidMount(){
        fetch(`${URL}`)
        .then(response=>response.json())
        .then(json=>{
            console.log(json);
            this.setState({
                todos:json
            });
        })
        .catch(error=>console.log(error));
    }
    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jumbotron text-center">
                        <h1>Welcome to TODOS</h1>
                    </div>
                </div>
                <h4>
                    {this.state.todos.map(x=>(
                        <TodoList key={x.id} todo={x} />
                    ))}
                </h4>
            </div>
         );
    }
}
 
export default Todos;