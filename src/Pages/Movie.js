import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {BASE_URL,API_KEY,IMAGE_BASE_URL} from '../Config';
import {useParams} from 'react-router-dom';
import { Badge } from 'reactstrap';
import './movie.css'
import Reviews from './Reviews';
import Similar from './Similar';

function Movie(props) {
    
    const [movie,setMovie] = useState([]);
    const id = useParams("id")
    useEffect(()=>{
        getMovie();
    },[])


    const getMovie = async() =>{
        const result = await axios.get(`${BASE_URL}/movie/${id.id}?api_key=${API_KEY}`)        
        setMovie(result.data)
    }
    
    return (        
            <div className="container2">
            <a href={movie.homepage}><img className ="image2" src={`${IMAGE_BASE_URL}/${movie && movie.backdrop_path}`} alt={movie.original_title}/></a>
            <div className="movie2">
            <img style = {{width:"15%"}} src={`${IMAGE_BASE_URL}/${movie && movie.poster_path}`} alt={movie.original_title}/>
            <div className="description">
                <h5>{movie && movie.original_title}</h5>
                <p>{movie && movie.overview}</p>
                <div className="description2">
                <div style={{width:"50%"}}>
                <p>Genre:
                {
                    movie.genres && movie.genres.map((item)=>{
                        return(
                          <Badge color="info">{item.name}</Badge>        
                    )})
                }    
                </p>
                <p>Duration: {movie.runtime} minutes</p>
                <p>Release:{movie.release_date && movie.release_date.slice(0,4)}</p>
                <p>Country:
                    {
                        movie.production_countries && movie.production_countries.map((item)=>{
                            return(
                                <p>{item.name}</p>
                            )
                        })
                    }
                </p>
                </div>
                <div style={{width:"50%"}}>
                <p>Production Companies:
                    {
                        movie.production_companies && movie.production_companies.map(item=>{
                            return(
                            <img style={{width:"5%"}} src={`${IMAGE_BASE_URL}/${item.logo_path}`} alt={item.name}/> 
                            )                            
                        })
                    }
                </p> 
                <p>IMDb:{movie.imdb_id && movie.imdb_id}</p>
                </div>
                </div>
            </div>                
            </div>
            <Reviews/>
            <Similar/>           
        </div>
    );
}

export default Movie;