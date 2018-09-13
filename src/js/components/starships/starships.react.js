import React, { Component } from 'react';
import axios from 'axios';




class Starships extends Component {
  constructor(props){
    super(props);

    this.state = {
      spaceships : []
    }
  }

  componentWillMount(){

      axios.get('https://swapi.co/api/starships/')
        .then((response) => {
          console.log(response)
          this.setState({spaceships: response.data.results})
        }).catch((error) => {
          console.log(error)
        });



  }
  render() {
    var cruceros = this.state.starships.map(function(starships){
      return <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">
          {starships.name}
          </h4>

          <p className="lead">Model: {starships.model}</p>
          <hr className="my-4"/>
          <p>Manufacturer: {starships.manufacturer}</p>
          <hr className="my-4"/>
          <p>Crew: {starships.crew}</p>
          <hr className="my-4"/>
          <p>Passengers: {starships.passengers}</p>
          <hr className="my-4"/>
          <p>Vehicle Class: {starships.vehicle_class}</p>
        </div>
      </div>
    </div>
    
    })
    return (

      <div className="container">
        <h1 className="my-4">Starships</h1>

            <div className="row">
            {cruceros}
            </div>
            
      </div>
            
    );
  }
}

export default Starships;