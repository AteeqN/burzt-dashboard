import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectTokenUser, selectTokenState } from "../../slices/counterSlice";
import styles from "../../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Loader } from "../../components/loader";
// import Middlewar from "../_middleware.ts";

function Profile({ data }) {
  const [subscription, setEmptySubscription] = useState("");
  const userToken = useSelector(selectTokenUser);
  const userState = useSelector(selectTokenState);
  // const [loading, setLoading] = useState(false);
  // setEmptySubscription(data.subscription_status);
  useEffect(() => {
    if (data.subscription_status.length === 0) {
      // setLoading(true);
      console.log("subscripiton is empty now");
      setEmptySubscription("Not Active");
      // setSubscription("Subscription is not active yet");
    } else if (data.subscription_status.length > 0) {
      if (data.subscription_status === "active") {
        // setLoading(true);
        setEmptySubscription("Active");
      } else if (data.subscription_status === "canceled") {
        // setLoading(true);
        setEmptySubscription("Cancel");
      }
    }
  }, [data]);

  return (
    <>
      {/* <Middlewar /> */}
      {userToken === 0 ? (
        <></>
      ) : (
        <>
          <div className={styles.container}>
            <main className={styles.main}>
              <div className="row">
                <div className="col-12">
                  <h1> User Profile Page </h1>
                </div>
                <div className="col-12">
                  <div className="col-8">
                    <h1> Hello {data.name}</h1>
                    <h1>
                      {" "}
                      Subscription Status:{" "}
                      <span className="text-primary">{subscription}</span>
                    </h1>
                  </div>
                  <div className="col-4">
                    <Image
                      src={data.image_uri}
                      alt="profile-logo"
                      width="100"
                      height="100"
                    />

                    {/* <Image src="/vercel.svg" width="300" height="300" alt="" /> */}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </>
      )}

      {/* {loading ? <Loader /> : null} */}
    </>
  );
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  const { cookies } = req;
  // console.log(cookies);
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
  console.log(data);
  return {
    // props: { data: data.data }, // will be passed to the page component as props
    props: { data: data },
  };
}

export default Profile;
