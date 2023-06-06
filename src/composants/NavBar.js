import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import ReactStars from 'react-stars'

export const NavBar = ({handleSearch,handleRating,rate}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Form className="d-flex">
            <Form.Control
            onChange={(e)=>handleSearch(e)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          
          <ReactStars
          onChange={handleRating}
          count={5}
          value={rate}
          size={20}
          edit={true}
           color2={'#ffd700'}/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
