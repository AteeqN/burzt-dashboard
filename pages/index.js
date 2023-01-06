import Head from "next/head";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Link from "next/link";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import { Loader } from "../components/loader";
import { useDispatch, useSelector } from "react-redux";
import { getSampleData } from "./store/actions/sampleAction";
function HomePage({ data, data1 }) {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState();
  const [priceID, setPriceID] = useState();
  const dispatch = useDispatch();
  const sampleListData = useSelector((state) => state.sampleData);
  const { sample } = sampleListData;
  const [packageID, setPackageID] = useState();
  // console.log("redux", sample);
  useEffect(() => {
    setPackageID(data1.price_id);
    setToken(Cookies.get("token"));
    dispatch(getSampleData());
  }, [dispatch]);

  // console.log("package", data);
  // console.log("subscription", data1.price_id);
  // useEffect(() => {
  //   var url = process.env.API_BASE_URL + "user-profile";
  //   const resp = fetch(url, {
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     method: "GET",
  //   });

  //   const data = resp.json();
  //   console.log(data);
  // }, []);
  // Handles the submit event on form submit.

  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log(priceID);
    const apiUrl = process.env.API_URL;

    const data = {
      price_id: priceID,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = `${apiUrl}create-checkout-session`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    console.log(result);
    if (response.status == 200) {
      // console.log(result);
      setLoading(true);
      window.location.replace(result.url);
    } else if (response.status == 403) {
      console.log(result.error);
    }

    // const result = await response.json();
    // result.status(200).json({ result });

    // console.log("sss", result.status);

    // window.location.replace(result.url);
    // alert(`Is this your full name: ${result.data}`);
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Welcome to Burzt Dashboard</title>
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <Link href="#">Burzt Dashboard!</Link>
            {/* <h1>{process.env.API_BASE_URL}</h1> */}
          </h1>
          {/* <h3>{JSON.stringify(sample)}</h3> */}
          {!token ? (
            <div className="container text-center">
              {/* <Link
                href="https://slack.com/openid/connect/authorize?scope=openid%20email%20profile&response_type=code&redirect_uri=https%3A%2F%2Fburzt.passwise.app%2Fsign-in&client_id=2214326541360.4420644231987"
                // href="https://slack.com/openid/connect/authorize?scope=openid%20email%20profile&response_type=code&redirect_uri=https%3A%2F%2Ff148-154-192-134-53.in.ngrok.io%2Fsign-in&client_id=3608320528308.4328768473665"
                className={styles.button}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.svg}
                  viewBox="0 0 122.8 122.8"
                >
                  <path
                    d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
                    fill="#E01E5A"
                  ></path>
                  <path
                    d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
                    fill="#36C5F0"
                  ></path>
                  <path
                    d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
                    fill="#2EB67D"
                  ></path>
                  <path
                    d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
                    fill="#ECB22E"
                  ></path>
                </svg>
                Sign in with Slack
              </Link> */}
            </div>
          ) : (
            <>
              <div className="container d-flex justify-content-center align-content-center">
                <div className="row">
                  {data.data.length > 0 ? (
                    data.data.map((pck, index) => (
                      <div
                        className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
                        key={index}
                      >
                        {packageID === pck.price_id ? (
                          <div className={styles.selectedPackage}>
                            <div
                              className={styles.priceBox}
                              style={{ background: "#5d54fc" }}
                            >
                              <form method="POST" onSubmit={handleSubmit}>
                                <div className="card-header">
                                  <div
                                    className={styles.pricename}
                                    style={{ color: "#fff" }}
                                  >
                                    {pck.title}
                                  </div>
                                </div>
                                <div className="card-body">
                                  <div
                                    className={styles.priceTitle}
                                    style={{ color: "#fff" }}
                                  >
                                    &#x20B9;{pck.amount}{" "}
                                    <small className="text-white"> / mo</small>
                                  </div>
                                  <ul className="list-unstyled mt-3 mb-4">
                                    <li
                                      className={styles.priceDes}
                                      style={{ color: "#fff" }}
                                    >
                                      {pck.description}
                                    </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                  </ul>
                                  {packageID === pck.price_id ? (
                                    <>
                                      <button
                                        type="submit"
                                        // className="w-100 btn btn-lg btn-outline-primary"
                                        className={styles.disabledButton}
                                        onClick={() => {
                                          setPriceID(pck.price_id);
                                        }}
                                        disabled
                                      >
                                        Your Current Plan Active
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <button
                                        type="submit"
                                        // className="w-100 btn btn-lg btn-outline-primary"
                                        className={styles.startedButton}
                                        onClick={() => {
                                          setPriceID(pck.price_id);
                                        }}
                                      >
                                        Get started
                                      </button>
                                    </>
                                  )}
                                </div>
                              </form>
                            </div>
                          </div>
                        ) : (
                          <div className={styles.priceBox}>
                            <form method="POST" onSubmit={handleSubmit}>
                              <div className="card-header">
                                <div className={styles.pricename}>
                                  {pck.title}
                                </div>
                              </div>
                              <div className="card-body">
                                <div className={styles.priceTitle}>
                                  &#x20B9;{pck.amount}{" "}
                                  <small className="text-muted"> / mo</small>
                                </div>
                                <ul className="list-unstyled mt-3 mb-4">
                                  <li className={styles.priceDes}>
                                    {pck.description}
                                  </li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                </ul>
                                {packageID === pck.price_id ? (
                                  <>
                                    <button
                                      type="submit"
                                      // className="w-100 btn btn-lg btn-outline-primary"
                                      className={styles.disabledButton}
                                      onClick={() => {
                                        setPriceID(pck.price_id);
                                      }}
                                      disabled
                                    >
                                      Your Current Plan Active
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <button
                                      type="submit"
                                      // className="w-100 btn btn-lg btn-outline-primary"
                                      className={styles.startedButton}
                                      onClick={() => {
                                        setPriceID(pck.price_id);
                                      }}
                                    >
                                      Get started
                                    </button>
                                  </>
                                )}
                              </div>
                            </form>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div style={{ color: "red" }}> Record not found </div>
                  )}
                </div>
              </div>
            </>
          )}
        </main>
      </div>
      {loading ? <Loader /> : null}
    </>
  );
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  const { cookies } = req;

  const token = cookies.token;
  const apiUrl = process.env.API_URL;

  const endpoint = `${apiUrl}packages`;
  // console.log(endpoint);

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(endpoint, options);
  const result = await response.json();
  // console.log(result);

  const endpoint1 = `${apiUrl}user-profile`;

  const options1 = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const subscripton = await fetch(endpoint1, options1);
  const subresult = await subscripton.json();

  return {
    props: { data: result, data1: subresult },
  };
}

export default HomePage;
