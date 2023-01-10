import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { selectTokenUser, selectTokenState } from "../slices/counterSlice";

function NotFound() {
  const userToken = useSelector(selectTokenUser);
  const userState = useSelector(selectTokenState);
  return (
    <div
      className="container text-center"
      style={{ height: 600, marginTop: 200 }}
    >
      {userToken === 0 ? (
        <></>
      ) : (
        <>
          <h1>Page Not Found 404</h1>{" "}
        </>
      )}{" "}
    </div>
  );
}

export default NotFound;
