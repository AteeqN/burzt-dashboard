import React, { useEffect, useState } from "react";
import Router from "next/router";
import Cookies from "js-cookie";
import { Loader } from "../../components/loader";

function SignIn({ data }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Cookies.set("token", data, { expires: 7, path: "/" });
    // setTimeout(function () {
    //   const { pathname } = Router;
    //   // window.location.reload();
    //   if (pathname == "/signin") {
    //     setLoading(true);
    //     // window.location.reload();
    //     Router.push("/");
    //     // exit(0);
    //     // return window.stop();
    //   }
    // }, 2000);
  });

  // window.location.reload();
  // const { pathname } = Router;
  // if (pathname === "/signin") {
  //   setLoading(true);
  //   Router.push("/");
  //   window.location.reload();
  //   // window.stop();
  // }
  setTimeout(function () {
    const { pathname } = Router;
    // window.location.reload();
    if (pathname == "/signin") {
      setLoading(true);
      // window.location.reload();
      Router.reload(Router.push("/"));
      // exit(0);
      // return window.stop();
    }
  }, 1);

  // setTimeout(function () {
  //   const { pathname } = Router;
  //   if (pathname == "/signin") {
  //     setLoading(true);
  //     window.location.reload();
  //     Router.push("/");
  //     // exit(0);
  //     return window.stop();
  //   }
  // }, 1);
  // {loading ? <Loader /> : null}
  return <div>{loading ? <Loader /> : null}</div>;
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
