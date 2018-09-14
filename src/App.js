import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import NavBar from './js/components/views/NavBar.react';//
import Home from './js/components/home/home.react';//
import Movies from './js/components/movies/movies.react';//
import Characters from './js/components/characters/characters.react';//
import Starships from './js/components/starships/starships.react';//
import Vehicles from './js/components/vehicles/vehicles.react';//
import Planets from './js/components/planets/planets.react';//
import Footer from './js/components/views/Footer.react';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="">
              <NavBar />
              <div id="page-content-wrapper">
                <div className="container-fluid">
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
                </div>
                <hr className="my-4"/>
                <Footer />
              </div>
          </div>
      </BrowserRouter>

  );
  }
}

export default App;
