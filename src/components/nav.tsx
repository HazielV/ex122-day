/* import { NavLink } from 'react-router' */
import { useState } from 'react'
import { NavLink } from 'react-router'
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap'

export default function MyNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <Navbar expand="md">
      <NavbarBrand href="/">Inicio</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          {/* nav-item */}
          <NavItem>
            {/* nav-link */}
            <NavLink className={'nav-link'} to="/carnes">
              Carnes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={'nav-link'} to="/panaderia">
              Panaderia
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={'nav-link'} to="/verduras">
              Verduras
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={'nav-link'} to="/frutas">
              Frutas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={'nav-link'} to="/lacteos">
              Lácteos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={'nav-link'} to="/bebidas">
              Bebidas
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}
{
  /* <nav>
<NavLink to="/" end>
  Home
</NavLink>
<NavLink to="/trending" end>
  Trending Concerts
</NavLink>
<NavLink to="/concerts">All Concerts</NavLink>
<NavLink to="/account">Account</NavLink>
</nav> */
}
