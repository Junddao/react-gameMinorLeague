import React, { useState, useContext } from "react";
import "./App.css";
import {
  Navbar,
  Container,
  Nav,
  Button,
  NavItem,
  NavLink,
} from "react-bootstrap";

import Data from "./data.js";
import SignIn from "./SignIn.js";
import ProductList from "./ProductList";
import Cart from "./Cart.js";
import Detail from "./Detail.js";

import axios from "axios";

import { Link, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  let [shoes, setShoes] = useState(Data);
  let [stock, setStock] = useState([10, 11, 12]);

  const token = localStorage.getItem("accessToken");

  const [isLoginModalShow, setIsLoginModalShow] = useState(false);

  // if (!token) {
  //   return <SignIn />;
  // }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">게임 마이너리그</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-bar" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
            <Nav
              className="justify-content-end"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink>
                <Button
                  variant="light"
                  onClick={() => {
                    console.log("login clicked");
                    setIsLoginModalShow(!isLoginModalShow);
                  }}
                >
                  로그인
                </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/detail/:id"
          element={<Detail shoes={shoes} stock={stock} setStock={setStock} />}
        ></Route>
      </Routes>
      <SignIn
        show={isLoginModalShow}
        onHide={() => setIsLoginModalShow(false)}
      />
    </div>
  );
}

export default App;
