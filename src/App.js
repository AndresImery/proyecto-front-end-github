import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import NavBar from './js/components/views/NavBar.react';//
import Home from './js/components/home/home.react';//
import Movies from './js/components/movies/movies.react';//
import Characters from './js/components/characters/characters.react';//
import Starships from './js/components/starships/starships.react';//
import Vehicles from './js/components/vehicles/vehicles.react';//
import Planets from './js/components/planets/planets.react';//

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <NavBar />
              <div id="page-content-wrapper">
                <div className="container-fluid overlay">
                <div id="navbar-wrapper">
                  <a href="#menu-toggle" className="btn btn-outline-success" id="menu-toggle">Menu</a>
                </div>
                </div>
                <div id="contenido" className="container-fluid">
                  <br />
                    <div className="container">
                      <Route exact path="/" component={Home} />
                      <Route path="/Movies" component={Movies} />
                      <Route path="/Characters" component={Characters} />
                      <Route path="/Vehicles" component={Vehicles} />
                      <Route path="/Starships" component={Starships} />
                      <Route path="/Planets" component={Planets} />
                    </div>
                </div>
                <div id="pieDePagina">
                  <footer className="page-footer font-small blue">
                    <div className="footer-copyright text-center py-3">© 2018 EN VI
                      <a href="#">Proyecto Front-End Andres/Camilo/Isaac</a>
                    </div>
                  </footer>
                </div>
              </div>
          </div>
      </BrowserRouter>

  );
  }
}

export default App;
