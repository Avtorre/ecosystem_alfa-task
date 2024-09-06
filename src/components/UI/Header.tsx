import React from "react";
import classes from "./Header.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/products")}
        >
          Store
        </Navbar.Brand>
        <Nav>
          <Nav.Link onClick={() => navigate("/create-product")}>
            Add product
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
