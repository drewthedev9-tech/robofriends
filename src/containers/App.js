import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js'
import Scroll from '../components/Scroll.js'

import './App.css';
import {setSearchField} from '../actions.js'

const mapStateToProps = state =>{
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}


// declaring a class the react way instead of function
class App extends Component {
    constructor () {
        // Needed for using this.
        super()
        this.state = {
            robots : [], 
           
        }
}

// part of cycles in react, fetch ins method of the window object
// gets a json file that is just a pbject in json then converted to javascript.
// fetch gets the file from URL, fetch also comes with its own method too called
// Json
componentDidMount() {
   
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    // ,then needs to be here to return after the promise is made by json function
    // to create output.
    .then(users => this.setState({robots:users}));
}

  render (){
        // destructured to clean code.
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
       return !robots.length ?
     <h1>Loading</h1>:
       (
            // Components, they are reusable.
            <div className = 'tc'>
                <h1 className='f1 red'>Robo Friends</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        )
       }
       
    }
    



    
    export default connect(mapStateToProps, mapDispatchToProps)(App);