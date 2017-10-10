import React from 'react'; // Go find the library called 'react' and assign to variable React.
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAa6SAsx2VsIpwOf8i1IL8wnYozl-CxdOQ';


// Create new component. Should produce HTML to put into DOM.
// Think of this as class or factory that produces isntances(objects) of a class component that get's rendered to the DOM.
const App = () => {
    // return JSX, which looks like HTML but it's reallJS
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take component's generated HTML and put into page(DOM).
// <App /> is an instance of App.
ReactDOM.render(<App />, document.querySelector('.container'));

