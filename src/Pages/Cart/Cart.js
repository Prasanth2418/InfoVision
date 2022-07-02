import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Image, Row } from "react-bootstrap";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import { deleteUser } from "../Cart/Reducer/Actions";
import "./cart.css";
import PaymentPage from "../Payment/PaymentPage";
import axios from "axios";

const Cart = () => {
  const [data, setData] = useState([]);
  
  const [total, setTotal] = useState();
let dispatch = useDispatch();

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

 

  const deleteItem = (itemId) => {
    dispatch(deleteUser(itemId));
  };
 

  return (
    <>
      <div className="main">
        <div className="Heading">
          <h2 className="heading">
            <b>Your Cart Items</b>
          </h2>
          <hr />
        </div>
        <Row>
          <Col sm={8}>
            <div className="container">
              <div className="row resp2 ">
                <div className="home">
                  <div className="productContainer">
                    <div>
                      {data.map((prod) => (
                        <div
                          className="CartDetails"
                          key={prod.restaurantItem.itemId}
                        >
                          <Row>
                            <Col>
                              <Image
                                src={prod.restaurantItem.imageUrl}
                                alt="image"
                                fluid
                                rounded
                                className="image23"
                              />
                            </Col>

                            <Col className="containt">
                              <div className="menudetails">
                                <span>{prod.restaurantItem.itemName}</span>
                              </div>
                              <div className="increment_decreament mt-2">
                                <Button variant="outline-secondary"> - </Button>&nbsp;&nbsp;
                                <Button variant="outline-secondary"> {prod.quantity} </Button>&nbsp;&nbsp;
                                <Button variant="outline-secondary"> + </Button>
                              </div>
                            </Col>

                            <Col className="containt">
                              ₹ {prod.restaurantItem.itemprice}
                            </Col>

                            <Col className="containt">
                              <div className="removebtn">
                                <Button
                                  variant="danger rounded"
                                  onClick={() =>
                                    deleteItem(prod.restaurantItem.itemId)
                                  }
                                >
                                  {" "}
                                  Remove{" "}
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vertical"></div>
          </Col>
          <Col sm={4}>
        
            <div className="floor_details mt-5 ">
              <h3 className=" ">Employee Details</h3>
              <div className="  fs-5">
                <span>Emp Id : </span>
                <br />
                <span>Emp Name : </span>
                <br />
                <span>Location Code : </span> <br />
                <span>Mobile number :</span>
              </div>
            </div>
        
            <br />
            <div className="floor_details">
              <h3 className=" ">Bill Summary</h3>
              <div className="  fs-5  ml-lg-0">
                <span>Total Items :{data.length} </span>
                <br />
                <span>Total price : ₹ {total} </span>
                <br />
                <span>Shipping Charge : ₹ 30 </span>
                <br />
              </div>
            </div>
            <br />
            <div className="total_price">
              <h3>Total Price: ₹ {total + 30} </h3>
            </div>
          </Col>{" "}
          <hr />
        </Row>
        <Row className="footer23">
          <Col sm>
            <div className="justify-content-center text-align-center mb-3">
              <Link to="/">
                <Button variant="secondary ml-5 rounded">
                  <ArrowBackIosIcon />
                  Back to Home page
                </Button>
              </Link>
            </div>
          </Col>
          <Col sm>
            <div className="payment col-10 mb-3 ">
              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option selected>Card Payment</option>
              </select>
              <small className="payalert">
                &nbsp; Currently we are accepting card payments only !
              </small>
            </div>
          </Col>
          <Col sm>
            <div className="pay">
              <PaymentPage />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Cart;
