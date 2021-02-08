import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {BASE_URL,API_KEY,IMAGE_BASE_URL} from '../Config'
import {Link,useParams} from 'react-router-dom'
import {Card, CardImg,Row,Col,} from 'reactstrap';


function Similar(props) {
    const [similar,setSimilar] = useState([])
    const id =useParams("id")

    useEffect(async()=>{
        const result = await axios.get(`${BASE_URL}/movie/${id.id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
        setSimilar(result.data.results)
    },[])

    if(similar.length==0){
        return<h2 style={{textAlign:"center"}}>No Similar Movies</h2>
    }

    return (
        <div>
            <h2>Similar Movies</h2>
            <Row>
            {
            similar.map((item)=>{
            return(    
            <Col sm="2">
            <Link to={`/movies/${item.id}`}>
            <Card>
                <CardImg className = "image" src={`${IMAGE_BASE_URL}${item.poster_path}`} alt="Card image cap" />
            </Card>
            </Link>
            </Col>
              )})  
            }
            </Row>
        </div>
    );
}

export default Similar;