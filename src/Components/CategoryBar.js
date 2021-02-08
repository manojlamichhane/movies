import React,{useState} from 'react';
import {
    Collapse,Navbar,NavbarToggler,NavbarBrand,
    Nav,NavItem,NavLink,Button
  } from 'reactstrap';


function CategoryBar(props) {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand className="button">{props.name}</NavbarBrand>
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
          <Button color="success" onClick={()=>props.intHandler}>View More</Button>
        </Collapse>
        </Navbar>
        </div>
    );
}

export default CategoryBar;