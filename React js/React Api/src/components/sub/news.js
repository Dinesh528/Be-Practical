import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import SingleNews from './SingleNews';

const URL = "https://dinesh-newsapi.herokuapp.com/";

const News = ({news:{_id,title,content,image,reporter,reptime}})=>(
    <div className="col-md-12">
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h1 className="panel-title">
                    {title} <span className="pull-right">{reptime}</span>
                </h1>
            </div>
            <div className="panel-body">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <img src={image} alt="" className="img-responsive img-thumbnail"/>
                    </div>
                </div>
                <div className="row">
                    <div className="well col-md-12">
                        <p className="text-justify">{content}</p>
                    </div>
                </div>

            </div>
            <div className="panel-footer">
                <h5>{reporter}</h5>
                <Link to={`/edit/${_id}`} className="btn btn-info">Edit</Link>
            </div>
        </div>
    </div>
);

class news extends Component {

    constructor(props){
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount(){
        Axios.get(`${URL}`)
            .then(res=>{
                console.log(res);
                this.setState({
                    news: res.data
                });
            })
            .catch(err=>{
                console.log(err)
            });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jumbotron text-center">
                        <h1 className="text-center">React News Api</h1>
                    </div>
                </div>

                <div className="row">
                    {this.state.news.map(news=>(
                        <SingleNews key={news._id} news={news}/>
                    ))}
                </div>
                
            </div>
        )
    }
}

export default news;
