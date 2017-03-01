import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'

const NavComponent = () => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            logo
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/game-profile">
            <NavItem eventKey={1}>Gry</NavItem>
          </LinkContainer>
          <LinkContainer to="/users-list">
            <NavItem eventKey={2}>Użytkownicy</NavItem>
          </LinkContainer>
          <LinkContainer to="/user-profile">
            <NavItem eventKey={3}>Profil Użytkownika</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default NavComponent


