import React from 'react';
import './nav.scss';
import {Link, NavLink} from 'react-router-dom';
class NavComponent extends React.Component{

    render(){
        return(
            <div className="topnav">
                <NavLink to="/" activeClassName='active' exact>Home</NavLink>
                <NavLink to="/todo" activeClassName='active'>Todo</NavLink>
                <NavLink to="/about" activeClassName='active'>About</NavLink>
                <NavLink to="/user" activeClassName='active'>Users</NavLink>
          </div>
        );
    }
}

export default NavComponent;