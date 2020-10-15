import React, { Component } from 'react'
import {BrowserRouter as Router,Link,NavLink,Route,Redirect,Switch} from 'react-router-dom';

class Student extends Component {
    render() {
        return (
            <div>
                <Link exact={true} to="/Adddoc" type="button" className="btn btn-light" >Add Doc</Link>
                <Link exact={true} to="/Student" type="button" className="btn btn-light" >See uploaded doc</Link>
                <Link exact={true} to="/ViewRequest" type="button" className="btn btn-light" >View request</Link>
                <Link exact={true} to="/AddRequest" type="button" className="btn btn-light" >Add request</Link>
                <Link exact={true} to="/Student" type="button" className="btn btn-light" >Back</Link>
            </div>
        )
    }
}

export default Student
