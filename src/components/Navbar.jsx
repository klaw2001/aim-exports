import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-transparent mynavbar py-4">
      <Container>
        <Navbar.Brand href="/" className="text-white">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="border-0"/>
        <Navbar.Collapse id="navbarScroll"> 
          <Nav
            className="mx-auto mt-2 my-lg-0 navbar-elements"
            // style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/about-us">About</NavLink>
            <NavLink to="/">Services</NavLink>
            <NavLink to="/">Portfolio</NavLink>
            <NavLink to="/">Blog</NavLink>
            <NavLink to="/">Contact</NavLink>
          </Nav>
            <a href="/contact" className="app-btn">
                Get Quote
            </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
