import React, { useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

function SignIn({ data }) {
  useEffect(() => {
    Cookies.set("token", data, { expires: 7, path: "/" });
    const { pathname } = Router;

    if (pathname == "/signin") {
      Router.push("/");
    }
  });

  return <div></div>;
}

export async function getServerSideProps({ query: { token } }) {
  // var url = process.env.API_BASE_URL + signin;
  // const res = await fetch(url);
  // const data = await res.json();
  // console.log(res);
  // return {
  //   props: { data: data.data }, // will be passed to the page component as props
  // };
  return {
    props: { data: token },
  };
}

export default SignIn;
