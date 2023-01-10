import React, { useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

export default function User() {
  var token = Cookies.get("token");
  // let token = localStorage.getItem("token");
  // console.log(token);
  if (!token) {
    useEffect(() => {
      console.log("you are not authorize this page");
      const { pathname } = Router;

      if (pathname == "/profile") {
        Router.push("/notfound");
      }
    });
  }

  return (
    <>
      <div></div>
    </>
  );
}
