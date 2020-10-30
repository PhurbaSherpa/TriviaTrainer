import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar, Nav} from 'react-bootstrap'

const navbar = ({handleClick, isLoggedIn}) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand as={Link} to="/home">
      <h3>Trivia Trainer</h3>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      {isLoggedIn ? (
        <Nav className="ml-auto">
          <Nav.Item className="navitem" onClick={handleClick}>
            Logout
          </Nav.Item>
        </Nav>
      ) : (
        <Nav className="ml-auto">
          <Nav.Item className="navitem" as={Link} to="/login" href="#home">
            Login
          </Nav.Item>
          <Nav.Item className="navitem" as={Link} to="/signup" href="#link">
            Sign Up
          </Nav.Item>
        </Nav>
      )}
    </Navbar.Collapse>
  </Navbar>
)

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(navbar)
