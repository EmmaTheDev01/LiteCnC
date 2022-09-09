import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-uppercas pt-5">
                        <h1 className="display-3 text-title text-danger">404</h1>
                        <h1>Error</h1>
                        <h4>Page Not Found</h4>
                        <p>
                            the requested page 
                            <span className="text-danger">{this.props.location.pathname}</span>{" "}
                            was not found. Check your spelling. Did you mean <Link to="/">LiteCnc</Link> ?
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;