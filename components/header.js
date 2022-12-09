import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function Header() {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    // console.log(typeof token);
    console.log(typeof token);
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
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/profile">
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">
            Contact Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">
            About Us
          </a>
        </li>
        <li className="nav-item">
          {flag === true ? (
            <>
              <form onSubmit={LogOut}>
                <button type="submit">
                  <a className="nav-link">Log Out</a>
                </button>
              </form>
            </>
          ) : (
            <>
              <a className="nav-link"></a>
            </>
          )}
          {/* <a className="nav-link">Log IN</a> */}
        </li>
      </ul>
    </div>
  );
}

export default Header;
