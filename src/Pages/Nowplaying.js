import React, {useState,useEffect} from 'react';
import axios from 'axios'
import './movie.css'
import {BASE_URL,API_KEY} from '../Config'
import CategoryBar from '../Components/CategoryBar'
import MovieCard from '../Components/MovieCard'

function Nowplaying(props) {
    const [nowplaying,setNowPlaying] = useState([]);

    useEffect(()=>{
        getNowPlaying()
    },[])

    const getNowPlaying = async()=>{
        const res = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
        console.log(res.data.results)
        setNowPlaying(res.data.results)
    }
    return (
        <div className="container">
            <CategoryBar name="NOW PLAYING"/>    
            <MovieCard source={nowplaying}/>
        </div>
    );
}

export default Nowplaying;