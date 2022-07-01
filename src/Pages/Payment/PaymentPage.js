import React, { useState } from "react";

import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

import { useNavigate } from "react-router-dom";

export const PaymentPage = () => {
  const navigate = useNavigate();

  const [product] = useState({
    name: "",

    price: 50,
  });

  async function handleToken(token) {
    // console.log({token, addresses});

    const response = await axios
      .get("https://ssid5w.sse.codesandbox.io/")

      .then(
        (response) => console.log("Working"),

        navigate("/Success"),

        alert("Success")
      );
  }

  return (
    <div className="product">
      {/*<h1>{product.name}</h1>

  <h3>{product.price}</h3>   */}

      <StripeCheckout
        stripeKey="pk_test_51KizaRSG6dDLlcjJWj1gLxdztzdK41Su8hei0gbgeXslyFnJYx5prvSYDY0YORFi12WMxprnKhK19GOrtmmBH08m00ehulGL5J"
        // Token as call back function

        token={handleToken}
        billingAddress
        shippingAddress
        amount={product.price}
        name={product.name}
      />
    </div>
  );
};

export default PaymentPage;

// Required npm installations to the code npm i react-stripe-checkout;
