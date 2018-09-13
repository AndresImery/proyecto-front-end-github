import React, { Component } from 'react';
import axios from 'axios';




class Movies extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies : []
    }
  }

  componentWillMount(){

      axios.get('https://swapi.co/api/films/')
        .then((response) => {
          console.log(response)
          this.setState({movies: response.data})
        }).catch((error) => {
          console.log(error)
        });



  }
  render() {
    var films = this.state.movies.map(function(film){
      return <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">
          {this.state.movies.name}
          </h4>

          <p className="lead">Episode: {this.state.movies.episode_id}</p>
          <hr className="my-4"/>
          <p>Title: {this.state.movies.title}</p>
          <hr className="my-4"/>
          <p>Opening Crawl: {this.state.movies.opening_crawl}</p>
          <hr className="my-4"/>
          <p>Date: {this.state.movies.release_date}</p>
          <hr className="my-4"/>
          <p>Director: {this.state.movies.director}</p>
          <hr className="my-4"/>
          <p>Producer: {this.state.movies.producer}</p>
          <hr className="my-4"/>
          <p>Characters: {this.state.movies.characters}</p>
        </div>
      </div>
    </div>
    
    })
    return (

      <div className="container">
        <h1 className="my-4">Films</h1>

            <div className="row">
            {films}
            </div>
            
      </div>
            
    );
  }
}

export default Movies;