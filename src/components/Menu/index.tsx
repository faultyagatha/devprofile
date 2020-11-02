import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Menu = () => {
  return (
    <header>
      <Navbar expand="lg">
        {/* <Container fluid> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="auto">
            <Nav.Link as={Link} to="/">
              Home
              </Nav.Link>
            {/* <Nav.Link as={Link} to="/about">
                About
              </Nav.Link> */}
            <Nav.Link>
              <a href='#about'>About</a>
            </Nav.Link>
          </Nav>
          <Nav className="auto">
            <Nav.Link as={Link} to="/projects">
              Projects
              </Nav.Link>
            <Nav.Link as={Link} to="/">
              Link
                  </Nav.Link>
            <Nav.Link as={Link} to="/">
              Link
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </header>
  )
};

export default Menu;
