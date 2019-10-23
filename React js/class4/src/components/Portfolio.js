import React, { Component } from 'react';
import PROJECTS from './assets/Projects';

const Projects= props => {
    const{title,description,url,image}= props.mydata;

    return(
        <div className="col-md-4">
            <h3 className="text-center">{title}</h3>
            <img src={image}  alt="" className="img-thumbnail img-responsive"/>
            <p className="text-justify">{description}</p>
            <a className="btn btn-primary" href={url}>{url}</a>
        </div>
    );
}

class Portfolio extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h3 className="text-default">My Project Portfolio</h3>
                    </div>
                </div>
                <div className="row">
                    {
                        PROJECTS.map(obj => (
                            <Projects key={obj.id} mydata={obj}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Portfolio;