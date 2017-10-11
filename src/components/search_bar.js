// import React from 'react';

// const SearchBar = () => {
//     // Turns into a call of React.createElement() which is why you always import React.
//     return <input />; 
// };

// Syntactic sugar. { Component } is same as -- const Component = React.Comopnent.
import React, { Component } from 'react'; 

// class SearchBar extends React.Component {
class SearchBar extends Component { // same as previous line using syntactic sugar.

    constructor(props) {
        super(props); // super allows you to access methods from parent class 'Component'.

        // Plain JS object I already mentioned.
        // Only time you will ever see state setup this way is in the constructor function.
        // Any where else you would use this.setState. It's ok to use it again at this.state.term but dont ever set it =equal to something again.
        this.state = {term: ''}; // As user types it will update this.state.term. the property term can be anything.
    }

    render() {
        // return <input onChange={this.onInputChange}/>;
        // Refactor to this.
        // return <input onChange={event => console.log(event.target.value)} />;
        // Refactor with state.
        return (
            <div className="search-bar">
                <input 
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    // Event handler can use name handleInputChange which is common in React community.
    // 'Input' is name of element you're watching for event.
    // 'Change' is name of the event itself.
    // Reads whenever input changes run its code.
//     onInputChange(event) { // event can be called e or event or anything and also an OBJECT!
//         console.log(event.target.value);
//     }
}

export default SearchBar;