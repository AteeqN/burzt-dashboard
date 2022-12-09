import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css";

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
  //Check to see if this is a redirect back from Checkout
  // const getSubscription = async (event) => {
  //   // event.preventDefault();
  //   var token = Cookies.get("token");
  //   console.log(token);

  //   const apiUrl = process.env.API_URL;

  //   const data = {
  //     checkout_session_id: process.env.CS_ID,
  //   };

  //   const JSONdata = JSON.stringify(data);

  //   const endpoint = `${apiUrl}store-subscription`;
  //   console.log(endpoint);

  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSONdata,
  //   };

  //   const response = await fetch(endpoint, options);
  //   const result = await response.json();
  //   // console.log(response.status);
  //   if (response.status == 200) {
  //     console.log(result);
  //     // window.location.replace(result.url);
  //   } else if (response.status == 403) {
  //     console.log(result.error);
  //   }

  //   // const result = await response.json();
  //   // result.status(200).json({ result });

  //   // console.log("sss", result.status);

  //   // window.location.replace(result.url);
  //   // alert(`Is this your full name: ${result.data}`);
  // };

  useEffect(() => {
    // getSubscription();
  }, []);

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

  return <div>Payment Success Page</div>;
}

export default Account;
