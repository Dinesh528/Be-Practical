import React, { Component } from 'react';
import Axios from 'axios';

const URL = "https://dinesh-newsapi.herokuapp.com/";

class Edit extends Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            image: '',
            content: '',
            reporter: '',
            id: this.props.match.params.id
        };
        //bind
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeReporter = this.onChangeReporter.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount(){
        Axios.get(`${URL}getone/${this.state.id}`)
            .then(res=>{
                console.log(res);
                this.setState({
                    title: res.data.title,
                    image: res.data.image,
                    content: res.data.content,
                    reporter: res.data.reporter
                });
            })
            .catch(err=>{
                console.log(err);
            });
    }
    onChangeTitle(e){
        this.setState({
            title: e.target.value
        });
    }

    onChangeImage(e){
        this.setState({
            image: e.target.value
        });
    }

    onChangeContent(e){
        this.setState({
            content: e.target.value
        });
    }

    onChangeReporter(e){
        this.setState({
            reporter: e.target.value
        });
    }

    submitHandler(e){
        e.preventDefault();
        const body ={
            title:this.state.title,
            image:this.state.image,
            content:this.state.content,
            reporter:this.state.reporter
        };
        console.log(body);
        Axios.put(`${URL}updatenews/${this.state.id}`,body)
             .then(res=>{
                 alert('Successfully Updated new NEWS.',res);
                 window.location= 'http://localhost:3000';
             })
             .catch(err=>{
                 console.log(err);
             });
    }   
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jumbotron text-center">
                        <h1 className="text-center">Edit News Api</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 well">
                        <form method="POST" onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label htmlFor="">Title</label>
                                <input 
                                    type="text" className="form-control"
                                    value={this.state.title}
                                    onChange={this.onChangeTitle}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Image</label>
                                <input 
                                    type="url" className="form-control"
                                    value={this.state.image}
                                    onChange={this.onChangeImage}
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Content</label>
                                <textarea
                                    cols="30"
                                    rows="5"
                                    className="form-control"
                                    value={this.state.content}
                                    onChange={this.onChangeContent}
                                    />      
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Reporter</label>
                                <input 
                                    type="text" className="form-control"
                                    value={this.state.reporter}
                                    onChange={this.onChangeReporter}    
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="submit"
                                    value="Update News"
                                    className="btn btn-info"
                                />    
                            </div>
                        </form>
                    </div>
                 </div>    
            </div>
        )
    }
}

export default Edit;
