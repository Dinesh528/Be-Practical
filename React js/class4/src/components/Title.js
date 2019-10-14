import React, { Component } from 'react';

class Title extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <img src={this.props.imgUrl} alt='' width="200" height="200" className="imgLogo img-circle"/> 
                    </div>
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <h1 className="text-center">Hello..!</h1>
                        <h3 className="text-center">I am Dinesh...</h3>
                        <p className="text-justify">
                        On it differed repeated wandered required in. Then girl neat why yet knew rose spot. Moreover property we he kindness greatest be oh striking laughter. In me he at collecting affronting principles apartments. Has visitor law attacks pretend you calling own excited painted. Contented attending smallness it oh ye unwilling. Turned favour man two but lovers. Suffer should if waited common person little oh. Improved civility graceful sex few smallest screened settling. Likely active her warmly has. 
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

Title.defaultProps ={
    imgUrl: 'https://www.w3schools.com/bootstrap4/img_avatar3.png'
};

export default Title;