import React, { Component } from 'react';

/****Define a new class called SearchBar
And give it acces to all the functionality react.component has***/
class SearchBar extends Component {
    //All JS classes have a special function called constructor
    //Its the first and only function called automatically whenever a new
    //a new instance of the class is created
    constructor(props) {
            super(props);
            this.state = { term: ''};
        }
    render() {
        return(
            <div className='search-bar'>
            <input 
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    } 
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}
export default SearchBar;


//State is a plain JS object to record and react to user events;
//Each class based component that we define has its own state object;
//Whenever a state compnent is change it re-renders, it also forces its children to re-rendered