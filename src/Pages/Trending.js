import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {BASE_URL,API_KEY,IMAGE_BASE_URL} from '../Config'
import {Link} from 'react-router-dom'
import {Card, CardImg,Row,Col,} from 'reactstrap';
import './Trending.css'
import CategoryBar from '../Components/CategoryBar';

  
function Trending(props) {
    const [trendings,setTrendings] = useState([]);
    
    useEffect(()=>{
        getTrendingMovies()
    },[])

    const getTrendingMovies = async () => {
        const result= await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
        setTrendings(result.data.results)
    }
      
    return (
        <div className="container">
          <CategoryBar name="LATEST MOVIES"/>  
            <Row>
            {
            trendings.map((item)=>{
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

export default Trending;