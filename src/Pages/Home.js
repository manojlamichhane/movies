import React from 'react';
import Nowplaying from './Nowplaying';
import Trending from './Trending';
import Slides from './Slides';


function Home(props) {
    return (
        <div>
            <Slides/>
            <Trending/>
            <Nowplaying/>
            
        </div>
    );
}

export default Home;