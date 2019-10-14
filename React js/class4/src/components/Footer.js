import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="row bg-warning">
                <div className="col-md-5">
                    <h4>All rights Reserved. @2019</h4>
                </div>
                <div className="col-md-7">
                    <form>
                        <fieldset>
                            <h4>Contact us</h4>
                            <hr/>
                            <div className="form-group">
                                <input type="email" className="form-control" required placeholder="abc@gmail.com"/>
                            </div>
                            <div className="form-group">
                                <input type="number" className="form-control" required placeholder="94949-xxxxx"/>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-info" required value="Contact Us"/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

export default Footer;