import React, { Component } from 'react'
import {BrowserRouter as Router,Link,NavLink,Route,Redirect,Switch} from 'react-router-dom';

class Student extends Component {
    render() {
        return (
            <div>
                <Link exact to="/Adddoc" type="button" class="btn btn-light" >Add Doc</Link>
                <Link exact to="/Student" type="button" class="btn btn-light" >See uploaded doc</Link>
                <Link exact to="/Student" type="button" class="btn btn-light" >incoming request</Link>
                <Link exact to="/Student" type="button" class="btn btn-light" >Back</Link>
            </div>
        )
    }
}

export default Student
