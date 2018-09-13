import React, { Component } from 'react';
import axios from 'axios';


class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      films : []
    }
  }

  componentWillMount(){

      axios.get('https://swapi.co/api/films/')
        .then((response) => {
          console.log(response)
          this.setState({films: response.results})
        }).catch((error) => {
          console.log(error)
        });



  }
  render() {
    var films = this.props.films.map(function(films){
      return <div className="col-lg-3 col-md-4 col-sm-6 portfolio-item">
      <div id="card" className="card h-100">
        <a href="#"><img id="img" className="card-img-top" src="https://i.jeded.com/i/star-wars-episode-iv--a-new-hope.12987.jpg" alt=""/></a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">Episode {this.state.films.episode_id}</a>
          </h4>
          <ul id="descrip">
            <li>{this.state.films.title}</li>
            <li>{this.state.films.opening_crawl}</li>
            <li>{this.state.films.director}</li>
            <li>{this.state.films.producer}</li>
            <li>{this.state.films.release_date}</li>
          </ul>
        </div>
      </div>
    </div>;
    
    })
    return (

      <div className="container">
        <h1 className="my-4">Home</h1>

            <div className="row">
            {films}
            </div>
            
      </div>
            
    );
  }
}

export default Home;