import React, { Component } from 'react';
import axios from 'axios';


//var React = require('react');

class Characters extends Component {
  constructor(props){
    super(props);

    this.state = {
      people : []
    }
  }

  componentWillMount(){

      axios.get('https://swapi.co/api/people/')
        .then((response) => {
          console.log(response)
          this.setState({people: response.data.results})
        }).catch((error) => {
          console.log(error)
        });

  }
  render() {
    var people = this.state.people.map(function(persons){
      return <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        <div id="img-top">
          <a id="img-top-a" href="#"><img className="card-img-top" id="img" src="./characters/1_luke_skywalker.jpg" alt=""/></a>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            {persons.name}
          </h4>
          <hr className="my-4"/>
          <p>Species: {persons.species}, {persons.species}</p>
          <hr className="my-4"/>
          <p>Home Planet: {persons.homeworld}</p>
          <hr className="my-4"/>
          <p>Language: {persons.language}</p>
          <hr className="my-4"/>
          <p>Movies:</p>
          <ul>
            <li>{persons.films}</li>
            <li>6</li>
            <li>3</li>
            <li>1</li>
            <li>7</li>
          </ul>
          <hr className="my-4"/>
        </div>
      </div>
    </div>;
    
    })
    return (

      <div className="container">
        <h1 className="my-4">Characters</h1>

            <div className="row">
            {people}
            </div>
            
      </div>
            
    );
  }
}

export default Characters;