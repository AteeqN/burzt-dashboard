import Head from "next/head";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
// import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage({ data }) {
  const [token, setToken] = useState();
  useEffect(() => setToken(Cookies.get("token")), []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Next.js!</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Burzt Dashboard!</a>
        </h1>
        {!token ? (
          <div className="container text-center">
            <a
              href="https://slack.com/openid/connect/authorize?scope=openid%20email%20profile&response_type=code&redirect_uri=https%3A%2F%2Ff0a7-206-84-190-103.ap.ngrok.io%2Fslack%2Foauth_redirect&client_id=3608320528308.4328768473665"
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
            </a>
          </div>
        ) : (
          <>
            <div className="container">
              <div className="row mb-3 text-center">
                <div className="col-md-8 offset-md-2">
                  <div className="row">
                    <div className="col">
                      <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                          <h4 className="my-0 fw-normal">Free</h4>
                        </div>
                        <div className="card-body">
                          <h1 className="card-title pricing-card-title">
                            $0
                            <small className="text-muted fw-light">/mo</small>
                          </h1>
                          <ul className="list-unstyled mt-3 mb-4">
                            <li>10 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                          </ul>
                          <button
                            type="button"
                            className="w-100 btn btn-lg btn-outline-primary"
                          >
                            Sign up for free
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                          <h4 className="my-0 fw-normal">Pro</h4>
                        </div>
                        <div className="card-body">
                          <h1 className="card-title pricing-card-title">
                            $15
                            <small className="text-muted fw-light">/mo</small>
                          </h1>
                          <ul className="list-unstyled mt-3 mb-4">
                            <li>20 users included</li>
                            <li>10 GB of storage</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                          </ul>
                          <button
                            type="button"
                            className="w-100 btn btn-lg btn-primary"
                          >
                            Get started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                {/* <div className="col">
                  <div className="card mb-4 rounded-3 shadow-sm border-primary">
                    <div className="card-header py-3 text-white bg-primary border-primary">
                      <h4 className="my-0 fw-normal">Enterprise</h4>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title pricing-card-title">
                        $29<small className="text-muted fw-light">/mo</small>
                      </h1>
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>30 users included</li>
                        <li>15 GB of storage</li>
                        <li>Phone and email support</li>
                        <li>Help center access</li>
                      </ul>
                      <button
                        type="button"
                        className="w-100 btn btn-lg btn-primary"
                      >
                        Contact us
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default HomePage;
