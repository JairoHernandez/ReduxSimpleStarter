import _ from 'lodash';
import React, {Component} from 'react'; // Go find the library called 'react' and assign to variable React.
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAa6SAsx2VsIpwOf8i1IL8wnYozl-CxdOQ';


// Create new component. Should produce HTML to put into DOM.
// Think of this as class or factory that produces isntances(objects) of a class component that get's rendered to the DOM.
// Whenever you are going to handle state turn your funcitonal component into a class based component and use render().
class App extends Component {
    constructor(props) { // constructor immediately kicks off a search.
        super(props);

        this.state = {
            videos: [], // starts off as empty array.
            selectedVideo: null
        }; 

        this.videoSearch('surfboards');
    }

    videoSearch(term) { // term is a searchterm

        YTSearch({key: API_KEY, term: term}, (videos) => { 
            
            // this.setState({ videos: videos });
            this.setState({ 
                videos: videos, // populates the array
                selectedVideo: videos[0]
             }); 
            // console.log(this.state);
            // console.log(videos);
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 400);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Take component's generated HTML and put into page(DOM).
// <App /> is an instance of App.
ReactDOM.render(<App />, document.querySelector('.container'));

