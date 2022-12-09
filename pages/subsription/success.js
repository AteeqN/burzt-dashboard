import React, { useState, useEffect } from "react";
// import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { getToken, setUserSession } from "../../../Utils/Common";
// import { useSelector, useDispatch } from "react-redux";
// import { setUserCredits } from "../../../features/counter/counterSlice";

function Account(params) {
  // const [error, setError] = useState([]);
  // const [subscription, setSubscription] = useState({});
  // const [subsciptionActive, setSubscriptionActive] = useState("");
  // const [subsciptionCancel, setSubscriptionCancel] = useState("");
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();

  // const id = useParams();
  // const navigate = useNavigate();
  // const { id } = useParams();
  // const token = getToken();
  // console.log(setUserCredits);

  // useEffect(() => {
  //   //Check to see if this is a redirect back from Checkout
  //   axios({
  //     method: "get",
  //     url: `${process.env.REACT_APP_API_URL}v1/user/retrieve-subscription/${id}`,
  //     headers: {
  //       Accept: "application/json",
  //       "content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     // data: {
  //     //     price: "price_1KhY8bHuNOGPY9jaCIulrQ90",
  //     // },
  //   })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         console.log(response.data);
  //         setSubscription(response.data.data);
  //         dispatch(setUserCredits(response.data.user));
  //         // setUserSession(token, response.data.user);
  //         navigate("/user/welcome");
  //         // window.location.href("/account")
  //       }
  //     })
  //     .catch((error) => {});
  // }, []);

  // console.log(subsciptionActive);
  // console.log(subsciptionCancel);
  // console.log(subscription.id);

  // const cancelSubscription = () => {
  //   axios({
  //     method: "delete",
  //     url: `${process.env.REACT_APP_API_URL}v1/user/cancel-subscription/${id}`,
  //     headers: {
  //       Accept: "application/json",
  //       "content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     data: {
  //       subscription_id: subscription.id,
  //     },
  //   })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         console.log(response.data.data);
  //         setSubscription(response.data.data);
  //         navigate("/account");
  //       }
  //     })
  //     .catch((error) => {
  //       if (error.response.status === 500) {
  //         console.log(error.response);
  //       } else if (error.response.status === 401) {
  //         console.log(error.response);
  //       } else {
  //       }
  //     });
  // };

  return (
    <div>
      Payment Success Page
      {/* <h1>Account Detail</h1>
      <h1>Subscription Status:</h1>
      <div>
        {" "}
        {subscription.status === "active" ? (<h1 style={{ color: "green" }}>{subscription.status}</h1>)
          : (<h1 style={{ color: "red" }}>{subscription.status}</h1>)
        }
      </div> */}
      <div>
        {/* <div>
          <button className="btn btn-danger" onClick={() => cancelSubscription()} >Cancel Subscription</button>
        </div> */}
        {/* disabled={!this.state.value} */}
        {/* <div>
          <button className="btn btn-success"> Renew Subscription </button>
        </div> */}

        {/* <div>
          <button> Logout </button>
        </div> */}
      </div>
    </div>
  );
}

export default Account;
