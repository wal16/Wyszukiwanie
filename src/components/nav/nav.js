import React from 'react'
import {Navbar, Nav, NavItem, Image} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'
import './nav.css'

import LogUserOut from '../logout/logout'

const NavComponent = () => (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <Image src={process.env.PUBLIC_URL + '/img/pozyczme-logo-blue2.svg'}
                 alt="Logo PożyczME"/>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="/games-list">
          <NavItem eventKey={1}>Nasze gry</NavItem>
        </LinkContainer>
        <LinkContainer to="/users-list">
          <NavItem eventKey={2}>Użytkownicy</NavItem>
        </LinkContainer>
        <LinkContainer to="/my-profile">
          <NavItem eventKey={3}>Mój profil</NavItem>
        </LinkContainer>
        <LogUserOut/>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

)

export default NavComponent


