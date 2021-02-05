import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {BASE_URL,API_KEY} from '../Config'
import {useParams} from 'react-router-dom'
import {Media,ListGroup, ListGroupItem} from 'reactstrap'
import ReadMoreReact from 'read-more-react';

function Reviews(props) {
    const id = useParams("id")
    const [reviews,setReviews] = useState([])

    useEffect(async()=>{
        const result = await axios.get(`${BASE_URL}/movie/${id.id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        console.log(result.data.results)
        setReviews(result.data.results)
        console.log(reviews)
    },[id.id])
    return (
        <div>
            <h2>Review page</h2>
            {
            reviews&&reviews.map((review)=>{
                return(
                    <div >
                    <ListGroup>
                        <ListGroupItem>
                        <Media>
                        <Media body><Media heading>{review && review.author}<ReadMoreReact style={{fontSize:"10px"}} text={review && review.content} /></Media></Media>
                        </Media>
                        </ListGroupItem>
                    </ListGroup>
                    </div>
                     )})
            }       
        </div>
    );
}

export default Reviews;