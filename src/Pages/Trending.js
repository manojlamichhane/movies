import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {BASE_URL,API_KEY} from '../Config'
import './Trending.css'
import CategoryBar from '../Components/CategoryBar';
import MovieCard from '../Components/MovieCard';
  
function Trending(props) {
    const [int,setInt] = useState(6)
    const [trendings,setTrendings] = useState([]);
    
    useEffect(()=>{
        getTrendingMovies()
    },[])

    const getTrendingMovies = async () => {
        const result= await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
        setTrendings(result.data.results)
    }
    const changeInt = ()=>{
        if(int==6){setInt(20)}
        else(setInt(6))
    }
      
    return (
        <div className="container">
          <CategoryBar name="LATEST MOVIES"/>  
          <MovieCard source={trendings}/>
        </div>
    );
}

export default Trending;