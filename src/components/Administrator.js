import React, { Component } from 'react'
import {BrowserRouter as Router,Link,NavLink,Route,Redirect,Switch} from 'react-router-dom';

class Administrator extends Component {
    render() {
        return (
            <div>
                <Link exact to="/Student" type="button" class="btn btn-light" >Add Student</Link>
                <Link exact to="/Adddoc" type="button" class="btn btn-light" >Add Doc</Link>
                <Link exact to="/Student" type="button" class="btn btn-light" >Incoming request</Link>
                <Link exact to="/Student" type="button" class="btn btn-light" >back</Link>
            </div>
        )
    }
}

export default Administrator
