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
          this.setState({spaceships: response.data})
        }).catch((error) => {
          console.log(error)
        });



  }
  render() {
    var cruceros = this.state.starships.map(function(crucero){
      return <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">
          {this.state.starships.name}
          </h4>

          <p className="lead">Model: {this.state.users.model}</p>
          <hr className="my-4"/>
          <p>Manufacturer: {this.state.starships.manufacturer}</p>
          <hr className="my-4"/>
          <p>Crew: {this.state.starships.crew}</p>
          <hr className="my-4"/>
          <p>Passengers: {this.state.starships.passengers}</p>
          <hr className="my-4"/>
          <p>Vehicle Class: {this.state.starships.vehicle_class}</p>
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