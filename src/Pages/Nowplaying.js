import React, {useState,useEffect} from 'react';
import {Row,Col,Card, CardImg} from 'reactstrap';
import axios from 'axios'
import './movie.css'
import {BASE_URL,API_KEY,IMAGE_BASE_URL} from '../Config'
import {Link} from 'react-router-dom'
import CategoryBar from '../Components/CategoryBar'

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
            <Row>
            {
            nowplaying.map(item=>{
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

export default Nowplaying;