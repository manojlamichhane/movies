import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {BASE_URL,API_KEY,IMAGE_BASE_URL} from '../Config'
import {Link} from 'react-router-dom'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Row,
    Col,
  } from 'reactstrap';
import {
    Card, CardImg
  } from 'reactstrap';
import './Trending.css'

  
function Trending(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
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
        <Navbar color="light" light expand="md">
        <NavbarBrand className="button">LATEST MOVIES</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/"><NavLink>All</NavLink></Link>
            </NavItem>
            <NavItem>
              <NavLink>Action</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Thriller</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Romance</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Logout</NavbarText>
        </Collapse>
        </Navbar>
        <div>
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
        </div>
    );
}

export default Trending;