import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const URL = "https://dinesh-newsapi.herokuapp.com/";
export default class SingleNews extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(id){
        console.log(id);
        const status = window.confirm('Are you sure you want to delete id='+id);
        if(status){
            Axios.delete(`${URL}deletenews/${id}`)
                .then(res=>{
                    alert('Successfully Deleted News.',res);
                    window.location='http://localhost:3000';
                })
                .catch(err=>{
                    console.log(err);
                });
        }else{
            return null;
        }
    }
    render() {
        return (
            <div>
                <div className="col-md-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h1 className="panel-title">
                                {this.props.news.title} <span className="pull-right">{this.props.news.reptime}</span>
                            </h1>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <img src={this.props.news.image} alt="" className="img-responsive img-thumbnail" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="well col-md-12">
                                    <p className="text-justify">{this.props.news.content}</p>
                                </div>
                            </div>

                        </div>
                        <div className="panel-footer">
                            <h5>{this.props.news.reporter}</h5>
                            <Link to={`/edit/${this.props.news._id}`} className="btn btn-info">Edit</Link>
                            <Button 
                            style="btn btn-danger" 
                            title="Delete"
                            delete={this.onDelete.bind(this,this.props.news._id)}    
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const Button = props=>(
    <button className={props.style} onClick={props.delete}>
        {props.title}
    </button>
)