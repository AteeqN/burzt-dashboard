import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Account(data) {
  console.log(data.data.message);

  return (
    <div className="container text-center" style={{ minHeight: 750 }}>
      <div className="row">
        <div className="col-6" style={{ color: "green" }}>
          {data.data.message}
        </div>
        <div className="col-6">
          <a href="/">Go Back</a>
        </div>
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
