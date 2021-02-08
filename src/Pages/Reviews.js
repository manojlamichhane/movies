import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {BASE_URL,API_KEY,IMAGE_BASE_URL} from '../Config'
import {useParams} from 'react-router-dom'
import {ListGroup, ListGroupItem} from 'reactstrap'
import ReadMoreReact from 'read-more-react';
import ReactStars from "react-rating-stars-component";

function Reviews(props) {
    const id = useParams("id")
    const [reviews,setReviews] = useState([])
    const [reviewAuthor,setReviewAuthor] = useState([])

    useEffect(async()=>{
        const result = await axios.get(`${BASE_URL}/movie/${id.id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        setReviews(result.data.results)
        console.log(reviews)
        setReviewAuthor(reviews.map((item)=>{return((item.author_details))}))
        console.log(reviewAuthor)
    },[])
    
    if(reviews.length==0){
        return<h2 style={{textAlign:"center"}}>No Reviews Yet</h2>
    }

    return (
    <div>
        <h2>Review page</h2>
        
        {
        reviews&&reviews.map((review)=>{
        return(
          <div>     
          <ListGroup>
              <ListGroupItem>
              <div style={{display:"flex", flexDirection:"column"}}>
              <div style={{display:"flex"}}>    
              <img style={{width:"4%",border:"1px solid black",borderRadius:"20px"}} src={`${IMAGE_BASE_URL}/${review.author_details.avatar_path}`} alt={review.author_details.username.slice(0,2)}></img>
              <p>{review.author_details.username}</p>
              <ReactStars count={5} size={25} value={review.author_details.rating} activeColor="#ffd700"/>
              </div>
              <p><ReadMoreReact readMoreText=".....read more" style={{fontSize:"5px"}} text={review && review.content} /></p>
              </div>
              </ListGroupItem>
          </ListGroup>
          </div>          
            )})
        }       
    </div>
    );
}

export default Reviews;