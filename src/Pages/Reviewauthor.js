import React,{useState,useEffect} from 'react';
import {BASE_URL,API_KEY} from '../Config'
import axios from 'axios'

function Reviewauthor(props) {
    const id = props.id
    const [reviews,setReviews] = useState([])
    
    useEffect(async()=>{
        const result = await axios.get(`${BASE_URL}/movie/${id.id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        console.log(result.data.results)
        setReviews(result.data.results)
        //console.log(reviewAuthor)
    },[id.id])

    const reviewAuthor = reviews.map((item)=>{
    return item.author_details
    }
    )
    return (
        <div>
            {reviewAuthor.map((item)=>{
                 return(
                    <p>{item.name}</p>
                )       
            })}
        </div>
    );
}

export default Reviewauthor;