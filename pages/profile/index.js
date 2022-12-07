import React from "react";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "next/router";
// import Middlewar from "../_middleware.ts";

function Profile({ data }) {
  console.log(data);
  const LogOut = () => {
    // const token = Cookies.get("token");
    Cookies.remove("token");
    // if (!token) {
    //   Router.push("/");
    // }
    // useEffect(() => setToken(), []);
  };
  return (
    <>
      {/* <Middlewar /> */}
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <h1> Hello {data.name}</h1>
          </div>
          <div className="col-8">
            <form onSubmit={LogOut}>
              <button type="submit">Logout</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  const { cookies } = req;
  console.log(cookies);
  const token = cookies.token;
  var url = process.env.API_BASE_URL + "user-profile";
  const resp = await fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  const data = await resp.json();
  // console.log(data);
  return {
    // props: { data: data.data }, // will be passed to the page component as props
    props: { data: data },
  };
}

export default Profile;
