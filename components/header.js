import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
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
    <div className="container">
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
                  {/* <Link href="#" className="nav-link"> */}
                  Log Out
                  {/* </Link> */}
                </button>
              </form>
            </>
          ) : (
            <>
              <Link href="#" className="nav-link"></Link>
            </>
          )}
          {/* <a className="nav-link">Log IN</a> */}
        </li>
      </ul>
    </div>
  );
}

export default Header;
