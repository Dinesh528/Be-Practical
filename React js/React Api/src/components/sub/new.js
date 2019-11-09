import React, { Component } from 'react';
import Axios from 'axios';

const URL = 'https://dinesh-newsapi.herokuapp.com/addnews'

class New extends Component {

    constructor(props){
        super(props);
        this.state={
            title: '',
            image: '',
            content: '',
            reporter: ''
        };
        //bind
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeReporter = this.onChangeReporter.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
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
        Axios.post(`${URL}`,body)
             .then(res=>{
                 alert('Successfully Created new NEWS.',res);
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
                        <h1 className="text-center">React New Api</h1>
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
                                    value="Create News"
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

export default New;
