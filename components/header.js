import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";

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
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/profile">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          {flag === true ? (
            <>
              <form onSubmit={LogOut}>
                <button type="submit">
                  <Link to="#" className="nav-link">
                    Log Out
                  </Link>
                </button>
              </form>
            </>
          ) : (
            <>
              <Link to="#" className="nav-link"></Link>
            </>
          )}
          {/* <a className="nav-link">Log IN</a> */}
        </li>
      </ul>
    </div>
  );
}

export default Header;
