import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    // console.log(typeof token);
    // console.log(typeof token);
    if (token) {
      setFlag(true);
    }
    // if ((token === undefined) | (token === null)) {
    //   setFlag(false);
    // }
    // setFlag(true);
  }, []);

  const LogOut = () => {
    // const token = Cookies.get("token");
    Cookies.remove("token");
    setFlag(false);
    window.location.reload();
    // if (!token) {
    //   Router.push("/");
    // }
    // useEffect(() => setToken(), []);
  };

  return (
    <>
      {/* <div className="container">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" href="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            {flag === true ? (
              <>
                <form onSubmit={LogOut}>
                  <button type="submit" className="btn btn-primary mt-1">
                    Log Out
                  </button>
                </form>
              </>
            ) : (
              <>
                <Link href="#" className="nav-link"></Link>
              </>
            )}
            
          </li>
        </ul>
      </div> */}

      {/* new menu in react boostrap */}

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Burzt-Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              {flag === true ? (
                <>
                  <form onSubmit={LogOut}>
                    <Button type="submit">Log Out</Button>
                  </form>
                </>
              ) : (
                <></>
              )}

              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
