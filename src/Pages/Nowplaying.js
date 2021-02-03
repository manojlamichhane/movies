import React, {useState,useEffect} from 'react';
import {
    Collapse,Navbar,NavbarToggler,NavbarBrand,
    Nav,NavItem,NavLink,NavbarText,Row,Col
  } from 'reactstrap';
import axios from 'axios'
import './movie.css'
import {BASE_URL,API_KEY,IMAGE_BASE_URL} from '../Config'
import {
    Card, CardImg
  } from 'reactstrap';
import {Link} from 'react-router-dom'

function Nowplaying(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [nowplaying,setNowPlaying] = useState([]);

    const toggle = () => setIsOpen(!isOpen);

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
          <NavbarText>Logout</NavbarText>
        </Collapse>
        </Navbar>
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
                )
            })
        }
        </Row>
        </div>
    );
}

export default Nowplaying;