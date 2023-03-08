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
    <Navbar bg="transparent" className="custom-navbar" expand="lg">
      <Container>
        <NavLink className="navbar-brand" to="/">
          <Navbar.Brand as="span" style={{ fontSize: "2rem" }}>
            <img src={logo} alt="logo" width={50} className="me-3" />
            Nuts
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex-cr">
            <NavLink className="nav-link" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link " to="/products">
              Products
            </NavLink>
            <NavLink className="nav-link " to="/about">
              About
            </NavLink>
            <NavLink className="nav-link text-white" to="/cart">
              <span className="flex-cr bg-custom-dark p-1 px-3 rounded-3">
                0 <AiOutlineShoppingCart className="ms-2 text-white" />
              </span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
