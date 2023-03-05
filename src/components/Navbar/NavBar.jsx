import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.png'

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" fixed="top" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="90"
              height="40"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="me-auto justify-content-end">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#home">Offers</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Grocery</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Fashion
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Mobiles
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Electronics
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Appliances</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.6">
                  Explore more
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
