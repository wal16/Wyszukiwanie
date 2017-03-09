import React from 'react'
import {Navbar, Nav, NavItem, } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'

const NavComponent = () => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/games-list">
            <img src={process.env.PUBLIC_URL + '/img/pozyczme-logo-blue2.svg'}
                 alt="Logo PożyczME"/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/games-list">
            <NavItem eventKey={1}>Lista gier</NavItem>
          </LinkContainer>
          <LinkContainer to="/game-profile">
            <NavItem eventKey={1}>Karta gry</NavItem>
          </LinkContainer>
                    <LinkContainer to="/users-list">
            <NavItem eventKey={2}>Użytkownicy</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <LinkContainer to="/user-profile/1">
            <NavItem>Zaloguj się</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default NavComponent


