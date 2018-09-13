import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const App = () => {
    return <Router>
        <div>
            <Route exact path="/build/" component = {Home}/>
            <Route path="/Movies" component = {Movies}/>
            <Route path="/Characters" component = {Characters}/>
            <Route path="/Vehicles" component = {Vehicles}/>
            <Route path="/Starships" component = {Starships}/>
            <Route path="/Planets" component = {Planets}/>


        </div>
        </Router>
};

const Home = () => (
     <div>
     <h2>HOME</h2>
     </div>
)
const Movies = () => (
    <div>
     <h2>MOVIES</h2>
     </div>
)
const Characters = () => (
    <div>
     <h2>CHARACTERS</h2>
     </div>
)
const Vehicles = () => (
    <div>
     <h2>VEHICLES</h2>
     </div>
)
const Starships = () => (
    <div>
     <h2>STARSHIPS</h2>
     </div>
)
const Planets = () => (
    <div>
     <h2>PLANETS</h2>
     </div>
)


export default App;