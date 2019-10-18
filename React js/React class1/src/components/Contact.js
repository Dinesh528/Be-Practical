import React,{Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h1 className="panel-title">{this.props.name}</h1>
                        </div>
                        <div>
                            <h3>Mobile<span className="pull-right"> {this.props.mobile} </span></h3>
                            <h3>Email<span className="pull-right"> {this.props.email} </span></h3>
                            <h3>Gender<span className="pull-right"> {this.props.gender} </span></h3>
                            <h3>Salary<span className="pull-right"> {this.props.salary} </span></h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;