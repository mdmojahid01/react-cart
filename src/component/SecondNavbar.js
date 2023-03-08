import { NavLink } from "react-router-dom";
import logo from "../Assets/images/logo.png";
import "../Assets/css/navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  // =================== Navbar Component JSX ========================
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className="navbar-brand" to="/">
          <Navbar.Brand as="span">
            <img src={logo} alt="logo" width={40} className="me-3" />
            Nuts
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/">
              <span className="flex-cr bg-dark text-white px-2 rounded-3">
                0 <AiOutlineShoppingCart className="ms-2 text-primary" />
              </span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
