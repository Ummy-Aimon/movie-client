import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header1 = () => {
    return (
        <div>
         {/* <Navbar collapseOnSelect expand="lg" bg="info" variant="dark"> */}
  <Container>
  <Navbar.Brand href="#home">Dr.Mike</Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link href="home#about">About</Nav.Link>
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
    </Nav> 
    </Navbar.Collapse>
  </Container>
{/* </Navbar> */}
        </div>
    );
};

export default Header1;
