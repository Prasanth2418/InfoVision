import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const PaymentPage = () => {
  const navigate = useNavigate();

  const [product] = useState({
    name: "",

    price: 50,
  });
  const [data, setData] = useState([]);

  const [total, setTotal] = useState();
  //   let dispatch = useDispatch();
  useEffect(() => {
    setTotal(
      data.reduce(
        (acc, curr) =>
          acc + Number(curr.restaurantItem.itemprice) * curr.quantity,
        0
      )
    );
  }, [data]);
  useEffect(() => {
    axios
      .get(
        "https://backend123.azurewebsites.net/infovision/cart?cartId=dec5ac08-14c2-4d61-bf6a-fc12eaa2597f"
      )
      .then((res) => setData(res.data));
  }, []);

  async function handleToken(token) {
    const response = await axios
      .get("https://ssid5w.sse.codesandbox.io/")

      .then(
        (response) => console.log("Working"),

        navigate("/Success"),

        alert("Success")
      );
  }

  return (
    <div className="product23">
      <StripeCheckout
        stripeKey="pk_test_51KizaRSG6dDLlcjJWj1gLxdztzdK41Su8hei0gbgeXslyFnJYx5prvSYDY0YORFi12WMxprnKhK19GOrtmmBH08m00ehulGL5J"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={(total + 30) * 100}
        name={product.name}
      />
    </div>
  );
};

export default PaymentPage;
