import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {BASE_URL,API_KEY,IMAGE_BASE_URL} from '../Config'
import './Trending.css'
import {
    Collapse,Navbar,NavbarToggler,NavbarBrand,
    Nav,NavItem,NavLink,Button,Card, CardImg,Row,Col,
  } from 'reactstrap';
import {Link} from 'react-router-dom'
  
function Trending(props) {
    const [trendings,setTrendings] = useState([]);
    const [int,setInt] = useState(6);
    const [isOpen, setIsOpen] = useState(false);
    const [expansion,setExpansion] = useState("more")
    const toggle = () => setIsOpen(!isOpen);

    const changeInt = () =>{
        if(int==6){
            setInt(20)
            setExpansion("less")
        }
        else{
            setInt(6)
            setExpansion("more")
        }
    }

    useEffect(()=>{
        getTrendingMovies()
    },[int])

    const getTrendingMovies = async () => {
        const result= await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
        setTrendings(result.data.results)
    }
      
    return (
        <div className="container">
        <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand className="button">LATEST MOVIES</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>All</NavLink>
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
          <Button color="success" onClick={changeInt}>View {expansion}</Button>
        </Collapse>
        </Navbar>
        <Row>
            {
            trendings.slice(0,int).map((item)=>{
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
          
          {/*
          <CategoryBar name="LATEST MOVIES" intHandler={changeInt}/>  
          <MovieCard int={int} source={trendings}/>
          */}
        </div>
    );
}

export default Trending;