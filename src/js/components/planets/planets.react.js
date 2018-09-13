import React, { Component } from 'react';
import axios from 'axios';




class Planets extends Component {
  constructor(props){
    super(props);

    this.state = {
      planets : []
    }
  }

  componentWillMount(){

      axios.get('https://swapi.co/api/planets/')
        .then((response) => {
          console.log(response)
          this.setState({planets: response.data})
        }).catch((error) => {
          console.log(error)
        });



  }
  render() {
    var planetas = this.state.planets.map(function(planeta){
      return <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">
          {this.state.planets.name}
          </h4>

          <p className="lead">Model: {this.state.planets.model}</p>
          <hr className="my-4"/>
          <p>Length: {this.state.planets.length}</p>
          <hr className="my-4"/>
          <p>Crew: {this.state.planets.crew}</p>
          <hr className="my-4"/>
          <p>Passengers: {this.state.planets.passengers}</p>
          <hr className="my-4"/>
          <p>Vehicle Class: {this.state.planets.vehicle_class}</p>
        </div>
      </div>
    </div>
    
    })
    return (

      <div className="container">
        <h1 className="my-4">Planets</h1>

            <div className="row">
            {planetas}
            </div>
            
      </div>
            
    );
  }
}

export default Planets;