import React from 'react';
import Nowplaying from './Nowplaying';
import Trending from './Trending';

function Home(props) {
    return (
        <div>
            <Trending/>
            <Nowplaying/>
        </div>
    );
}

export default Home;