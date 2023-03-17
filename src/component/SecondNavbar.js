import { NavLink } from "react-router-dom";
import logo from "../Assets/images/logo.png";
import "../Assets/css/navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function NavbarComponent() {
  const { cart } = useContext(CartContext);
  // =================== Navbar Component JSX ========================
  return (
    <Navbar
      expand="lg"
      className="bg-custom-dark position-sticky top-0"
      style={{ zIndex: "1" }}
    >
      <Container>
        <NavLink className="navbar-brand" to="/">
          <Navbar.Brand as="span" style={{ fontSize: "2rem", color: "white" }}>
            <img src={logo} alt="logo" width={50} className="me-3 mb-1" />
            Nuts
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex-cr">
            <NavLink className="nav-link text-white" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link text-white" to="/products">
              Products
            </NavLink>
            <NavLink className="nav-link text-white" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/cart">
              <span className="flex-cr text-dark bg-custom-light p-1 px-3 rounded-3">
                {cart.totalItems ? cart.totalItems : 0}{" "}
                <AiOutlineShoppingCart className="ms-2" />
              </span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
