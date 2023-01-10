import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectTokenUser, selectTokenState } from "../../slices/counterSlice";
import "bootstrap/dist/css/bootstrap.min.css";

function Account(data) {
  const userToken = useSelector(selectTokenUser);
  const userState = useSelector(selectTokenState);
  console.log(data.data.message);

  return (
    <div className="container text-center" style={{ minHeight: 750 }}>
      <div className="row">
        {userToken === 0 ? (
          <></>
        ) : (
          <>
            <div className="col-6" style={{ color: "green" }}>
              <h1>{data.data.message}</h1>
            </div>
            <div className="col-6">
              <Link href="/">Go Back</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  const { cookies } = req;

  const token = cookies.token;
  const apiUrl = process.env.API_URL;

  const sessionID = context.query.session_id;
  // console.log(sessionID);
  const data = {
    session_id: sessionID,
  };

  const JSONdata = JSON.stringify(data);

  const endpoint = `${apiUrl}store-subscription`;
  // console.log(endpoint);

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

  return {
    props: { data: result },
  };
}

export default Account;
