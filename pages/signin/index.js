import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
// import { Loader } from "../../components/loader";

function SignIn({ data }) {
  const router = useRouter();
  // const [loading, setLoading] = useState(false);

  // console.log(router.pathname);
  useEffect(() => {
    Cookies.set("token", data, { expires: 7, path: "/" });
    if (router.pathname === "/signin") {
      // console.log("route", router);
      router.push("/");
      router.reload(window.location.pathname);
    }
    return window.stop();
    // if (pathname === "/signin") {
    //   console.log("route", pathname);
    // }
    // setTimeout(function () {
    //   const { pathname } = Router;
    //   // window.location.reload();
    //   if (pathname == "/signin") {
    //     setLoading(true);
    //     // window.location.reload();
    //     Router.push("/");
    //     // exit(0);
    //
    //   }
    // }, 2000);
  }, []);

  // console.log(router);
  // if (router == "/signin") {
  //   console.log("cont", router);
  //   // router.push("/");
  //   // if (typeof window === "undefined") {
  //   //   router.reload(window.location.pathname);
  //   // }
  //   // router.reload(window.location.pathname);
  // }
  /* we're on the server */

  // return window.stop();

  // useEffect(() => {
  //   // setLoading(true);
  //   // const { pathname } = Router;
  //   if (router === "/signin") {
  //     // router.push("/");
  //     router.replace("/");
  //   }
  // }, []);

  // const { pathname } = Router;
  // Router.reload(window.location.pathname);
  // if (pathname === "/signin") {

  // }

  // window.location.reload();
  // const { pathname } = Router;
  // if (pathname === "/signin") {
  //   setLoading(true);
  //   Router.push("/");
  //   window.location.reload();
  //   // window.stop();
  // }
  // setTimeout(function () {
  //   const { pathname } = Router;
  //   // window.location.reload();
  //   if (pathname == "/signin") {
  //     setLoading(true);
  //     // window.location.reload();
  //     Router.reload(Router.push("/"));
  //     // exit(0);
  //     // return window.stop();
  //   }
  // }, 1);

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
