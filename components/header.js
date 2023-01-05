import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import Logo from "../public/images/burzt.png";
import Profile from "../public/images/profile.png";
import { Loader } from "./loader";
// import "bootstrap/dist/css/bootstrap.min.css";
import * as customHeader from "./Header.module.css";

function Header({ data }) {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(Cookies.get("token"));
    // window.location.reload();
  }, []);

  const LogOut = () => {
    setLoading(true);
    Cookies.remove("token");
    window.location.reload();
  };

  // console.log(token);
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
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image src={Logo} alt="content" />
            {/* Burzt-Dashboard */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              {/* <Nav.Link href="/" className={customHeader.customLink}>
                Home
              </Nav.Link>
              <Nav.Link href="/profile" className={customHeader.customLink}>
                Profile
              </Nav.Link>
              <Nav.Link href="/contact" className={customHeader.customLink}>
                Contact Us
              </Nav.Link>
              <Nav.Link href="/about" className={customHeader.customLink}>
                About Us
              </Nav.Link> */}
              {!token ? (
                <>
                  <Nav.Link
                    href="https://slack.com/openid/connect/authorize?scope=openid%20email%20profile&response_type=code&redirect_uri=https%3A%2F%2Fburzt.passwise.app%2Fsign-in&client_id=2214326541360.4420644231987"
                    // href="https://slack.com/openid/connect/authorize?scope=openid%20email%20profile&response_type=code&redirect_uri=https%3A%2F%2F1664-206-84-189-11.ap.ngrok.io%2Fsign-in&client_id=3608320528308.4328768473665"
                    className={customHeader.button}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={customHeader.svg}
                      viewBox="0 0 122.8 122.8"
                    >
                      <path
                        d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
                        fill="#E01E5A"
                      ></path>
                      <path
                        d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
                        fill="#36C5F0"
                      ></path>
                      <path
                        d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
                        fill="#2EB67D"
                      ></path>
                      <path
                        d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
                        fill="#ECB22E"
                      ></path>
                    </svg>
                    Sign in with Slack
                  </Nav.Link>
                </>
              ) : (
                <>
                  {/* {!loading ? <Loader /> : null} */}
                  <NavDropdown title="Settings" id="basic-nav-dropdown">
                    <NavDropdown.Item href="profile">
                      {/* <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style="width: 150px;"
                    alt="Avatar" /> */}
                      <Image
                        src={Profile}
                        alt="content"
                        className={customHeader.avatar}
                      />
                    </NavDropdown.Item>
                    <NavDropdown.Item href="profile">Profile</NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4" onClick={LogOut}>
                      {/* <form onSubmit={LogOut}>
                        <button
                          type="submit"
                          // className={customHeader.startedButton}
                        >
                          Log Out
                        </button>
                      </form> */}
                      Sign Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {loading ? <Loader /> : null}
    </>
  );
}

export default Header;
