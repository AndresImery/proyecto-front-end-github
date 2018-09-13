import React from 'react';
import { Link } from 'react-router-dom';

//const Sep = () => <span> | </span>;

export const NavBar = () =>{
    return(
        <div id="wrapper">

        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li>
                    <div>
                    <a href=""><img id="starLogo" src="img/logo.png" alt=""/></a> 
                    </div>
                </li>
                <li className="sidebar-brand">

                    <a href="#" className="navbar-brand">
                        <div id="logo"></div>
                    </a>

                </li>
                <li id="homeli">
                    <Link to="/">Home</Link>
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
    </div>
    )
}