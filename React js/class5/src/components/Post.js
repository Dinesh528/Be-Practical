import React from 'react';
//element  based react component
// in case of arrow function=>() is vaild for no parameter or More than one parameter
// in case single parameter=>() is not neccessary
const Post= (props)=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 jumbotron text-center">
                    <h3>{props.title}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 well">
                    <h3 className="text-info">Fname:{props.name}</h3>
                    <h3 className="text-warming">Sname:{props.sname}</h3>
                </div>
            </div>

        </div>
    )
}

export default Post;