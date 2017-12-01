import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM    from 'react-dom';
import YTSearch    from 'youtube-api-search';
import SearchBar   from './components/search_bar';
import VideoList   from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY         = 'YOUR_API_KEY';

//create a new component
//should produce HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [], 
            selectedVideo: null
        };

        this.videoSearch('')
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term}, (videos) => {
            //Whith ES6 if the key and value (look below) they can be set to just that one term.
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) } , 300);

    return (
        <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))

//State is a plain JS object to record and react to user events;
//Each class based component that we define has its own state object;
//Whenever a state compnent is change it re-renders, it also forces its children to re-rendered

//Downwards data flow = Only the most parent component in a App
//-should be respnsible for fetching data (API or FLUX or Redux)
//-Index.js is the most parent compeoonent the rest are children.