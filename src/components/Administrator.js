import React, { Component } from 'react'
import {BrowserRouter as Router,Link,NavLink,Route,Redirect,Switch} from 'react-router-dom';

class Administrator extends Component {
    render() {
        return (
            <div>
                <Link exact={true} to="/AddStudent" type="button" className="btn btn-light" >Add Student</Link>
                <Link exact={true} to="/AddUserData" type="button" className="btn btn-light">Add IMP Data</Link>
                <Link exact={true} to="/Adddoc" type="button" className="btn btn-light" >Add Doc</Link>
                <Link exact={true} to="/ViewRequest" type="button" className="btn btn-light" >View request</Link>
                <Link exact={true} to="/Student" type="button" className="btn btn-light" >Home</Link>
            </div>
        )
    }
}

export default Administrator
