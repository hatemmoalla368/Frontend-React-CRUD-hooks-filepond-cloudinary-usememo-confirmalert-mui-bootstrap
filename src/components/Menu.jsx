import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/categories" >Catégories</Nav.Link>
            <Nav.Link as={Link} to="/scategorieapp">Scatégories</Nav.Link>
            
            <Nav.Link as={Link} to="/articleapp">Articles</Nav.Link>
            
            
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default Menu
