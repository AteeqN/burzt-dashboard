import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function Header() {
  const [flag, setFlag] = useState(false);

  // useEffect(() => {
  //   const token = Cookies.get("token");
  //   if (!token) {
  //     setFlag(false);
  //   }
  //   setFlag(true);
  // }, []);

  // const LogOut = () => {
  //   // const token = Cookies.get("token");
  //   Cookies.remove("token");
  //   setFlag(false);
  //   // if (!token) {
  //   //   Router.push("/");
  //   // }
  //   // useEffect(() => setToken(), []);
  // };

  return (
    <div className="container">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item">
          {/* {flag === "false" ? (
            <>
              <a className="nav-link">Login</a>
            </>
          ) : (
            <>
              <a className="nav-link" onClick={LogOut}>
                Log Out
              </a>
            </>
          )} */}
          <a className="nav-link">Log Out</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
