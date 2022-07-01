import React, { useEffect, useState } from "react";
import { loadProducts } from "../Cart/Reducer/Actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";
import { deleteUser } from "../Cart/Reducer/Actions";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Cart = () => {
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.cart);

  let dispatch = useDispatch()
  const handleClick = () => {
    navigate("/");
  };



  useEffect(() => {

    dispatch(loadProducts());

  }, []);

  const deleteItem = (itemId) => {
    dispatch(deleteUser(itemId));

  }



  return (
    <>
      <div className="main">

        <div className="Heading">
          <h2 className="heading"><b>Your Cart Items</b></h2>
          <hr />
        </div>
        <Row>
          <Col sm={8}>
            <div className="container">
              <div className="row resp2 ">
                <div className="home">

                  <div className="productContainer">
                    <div >
                      {users.map((prod) => (
                        <div className="CartDetails" key={prod.restaurantItem.itemId}>

                          <Row>
                            <Col >

                              <Image src={prod.restaurantItem.imageUrl} alt="image" fluid rounded />

                            </Col>

                            <Col className="containt">
                              <div className="menudetails">
                                <span>{prod.restaurantItem.itemName}</span>
                              </div>
                              <div className='increment_decreament mt-2'>
                                <Button variant="outline-secondary"> - </Button>
                                <Button variant="outline-secondary"> 2 </Button>
                                <Button variant="outline-secondary"> + </Button>
                              </div>
                            </Col>

                            <Col className="containt">₹ {prod.restaurantItem.itemprice}</Col>


                            <Col className="containt">
                              <div className="removebtn">
                                <Button
                                  variant="danger rounded"
                                  onClick={() => deleteItem(prod.restaurantItem.itemId)}
                                > Remove </Button>
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
          </Col>
          <Col sm={4}>
            <div className="floor_details mt-5 ">
              <h3 className=" ">Employee Details</h3>
              <div className="  fs-5">
                <span>Emp Id :</span><br />
                <span>Emp Name :</span><br />
                <span>Location Code :</span> <br />
                <span>Mobile number :</span>
              </div>
            </div>
            <br />
            <div className="floor_details">
              <h3 className=" ">Bill Summary</h3>
              <div className="  fs-5  ml-lg-0">
                <span>Total Items : 3</span><br />
                <span>Total price : ₹ 550 </span><br />
                <span>Shipping Charge  : ₹ 50 </span><br />
                <span>GST  : ₹ 30 </span><br />
              </div>
            </div><br />
            <div className="total_price" >
              <h3>Total Price: ₹ 630.00 </h3>
            </div>
          </Col> <hr />

        </Row>
        <Row>
          <Col sm>
            <div className='justify-content-center text-align-center mb-3'>
              <Link to="/">
                <Button variant="secondary ml-5 rounded"><ArrowBackIosIcon />Back to Home page</Button>
              </Link>
            </div></Col>
          <Col sm>
            <div className="payment col-10 mb-3 ">
              <select
                className="form-select "
                aria-label="Default select example"
              >
                <option selected>Payment Method</option>
                <option value="card">Card Payment</option>
                <option value="upi">UPI Payment</option>
              </select>
            </div>
          </Col>
          <Col sm>
            <div className="px-5">
              <Button variant="warning rounded"> Payment Now <ArrowForwardIosIcon /></Button>
            </div>
          </Col>
        </Row>
      </div>

    </>
  );
};

export default Cart;