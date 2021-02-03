
import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';


function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
    
  return (
        <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand >Movies</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/"><NavLink>Home</NavLink></Link>
            </NavItem>
          </Nav>
          <NavbarText>Logout</NavbarText>
        </Collapse>
      </Navbar>
      </div>
    );
}

export default NavBar;