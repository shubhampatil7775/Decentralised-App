import React from 'react';
import Logo from '../logo.png';
import {BrowserRouter as Router,Link,NavLink,Route,Redirect,Switch} from 'react-router-dom';

function Home() {
    return (
        <div>
            <img className="Logo" src={Logo} alt="Logo"/>
            <h1>Walchand College Of Engineering,Sangli</h1>
            <h2>Welcome to our blockchain network</h2>
            
            <Link exact to="/Student" type="button" class="btn btn-light" >Student</Link>
            <Link exact to="/Administrator" type="button" class="btn btn-light" >Administrator</Link>
        </div>
    )
}

export default Home;