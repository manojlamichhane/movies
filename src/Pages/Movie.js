import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {BASE_URL,API_KEY,IMAGE_BASE_URL} from '../Config';
import {useParams} from 'react-router-dom';
import './movie.css'

function Movie(props) {
    
    const [alltrendings,setAllTrendings] = useState([]);
    const id = useParams("id")
    console.log(id.id)
    useEffect(()=>{
        getMovie();
    },[])

    const getMovie = async() =>{
        const result = await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
        
        setAllTrendings(result.data.results)
    }
    console.log(alltrendings)
    const res=((alltrendings.find((item)=>item.id==id.id)))
    console.log(res&&res.genre_ids)
    return (
        <div>        
            <div className="container2">
            <img className ="image2" src={`${IMAGE_BASE_URL}/${res && res.backdrop_path}`}/>
            <div className="movie2">
            <img style = {{width:"15%"}} src={`${IMAGE_BASE_URL}/${res && res.poster_path}`}/>
            <div className="description">
                <h5>{res && res.original_title}</h5>
                <p>{res && res.overview}</p>
                <div className="description2">
                <div style={{width:"300px"}}>
                <p>Genre:</p>
                <p>Actor:</p>
                <p>Director:</p>
                <p>Country:</p>
                </div>
                <div style={{width:"300px"}}>
                <p>Duration:</p>
                <p>Quality:</p>
                <p>Release:{res && res.release_date.slice(0,4)}</p>
                <p>IMDb:</p>
                </div>
                </div>
            </div>                
            </div>
            </div>
        </div>
    );
}

export default Movie;