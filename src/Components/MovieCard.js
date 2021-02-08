import React, {useState} from 'react';
import {Card, CardImg,Row,Col,} from 'reactstrap';
import {IMAGE_BASE_URL} from '../Config'
import {Link} from 'react-router-dom'

function MovieCard(props) {
    
    const int = props.int
    console.log(int)
    return (
        <div>
            <Row>
            {
            props.source.slice(0,int).map((item)=>{
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

export default MovieCard;