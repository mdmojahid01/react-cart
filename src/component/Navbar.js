import { NavLink } from "react-router-dom";
import logo from "../Assets/images/logo.png";
import "../Assets/css/navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";

function NavbarComponent() {
  const { cart } = useContext(CartContext);
  const [scroll, setScroll] = useState(false);
  document.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  // =================== Navbar Component JSX ========================
  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${
        scroll ? "position-fixed top-0 bg-custom-dark scroll-nav-color" : ""
      }`}
      style={{ transition: "background-color 300ms linear" }}
    >
      <Container>
        <NavLink className="navbar-brand" to="/">
          <Navbar.Brand as="span" style={{ fontSize: "2rem" }}>
            <img src={logo} alt="logo" width={50} className="me-3 mb-1" />
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
            <NavLink
              className={`nav-link cart-color ${
                scroll ? "text-dark" : "text-light"
              }`}
              to="/cart"
            >
              <span
                className={`flex-cr p-1 px-3 rounded-3 cart-color ${
                  scroll ? "bg-custom-light" : "bg-custom-dark"
                }`}
              >
                {cart.totalItems ? cart.totalItems : 0}{" "}
                <AiOutlineShoppingCart className={`ms-2 cart-color`} />
              </span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
