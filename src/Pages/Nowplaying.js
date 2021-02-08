import React, {useState,useEffect} from 'react';
import axios from 'axios'
import './movie.css'
import {BASE_URL,API_KEY,IMAGE_BASE_URL} from '../Config'
import {
    Collapse,Navbar,NavbarToggler,NavbarBrand,
    Nav,NavItem,NavLink,Button,Card, CardImg,Row,Col,
  } from 'reactstrap';
import {Link} from 'react-router-dom'



import CategoryBar from '../Components/CategoryBar'
import MovieCard from '../Components/MovieCard'

function Nowplaying(props) {
    const [nowplaying,setNowPlaying] = useState([]);
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
        getNowPlaying()
    },[])

    const getNowPlaying = async()=>{
        const res = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
        setNowPlaying(res.data.results)
    }
    return (
        <div className="container">
        <Navbar color="light" light expand="md">
        <NavbarBrand className="button">NOW PLAYING</NavbarBrand>
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
            nowplaying.slice(0,int).map((item)=>{
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

            {/*
            <CategoryBar name="NOW PLAYING"/>    
            <MovieCard source={nowplaying}/>
            */}
        </div>
    );
}

export default Nowplaying;