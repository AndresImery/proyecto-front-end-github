import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//const Sep = () => <span> | </span>;

class NavBar extends Component {
    render(){
        return (
            
    
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    
                    <li className="sidebar-brand">
    
                        <a href="" className="navbar-brand">
                            <div id="logo"></div>
                        </a>
    
                    </li>
                    <li id="homeli">
                        <Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li>
                        <Link to="/Movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/Characters">Characters</Link>
                    </li>
                    <li>
                        <Link to="/Vehicles">Vehicles</Link>
                    </li>
                    <li>
                        <Link to="/Starships">Starships</Link>
                    </li>
                    <li>
                        <Link to="/Planets">Planets</Link>
                    </li>
                </ul>
            </div>
        
        
        );
    }
}



export default NavBar;