
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";


import React, { useEffect, useState } from "react";
import "./cart.css";


import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const navigate = useNavigate();
  const[product,setProducts]=useState([])

  const handleClick = () => {
    navigate("/");
  };

  const fetchData = () => {
    fetch("https://backend123.azurewebsites.net/infovision/cart?cartId=dec5ac08-14c2-4d61-bf6a-fc12eaa2597f")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setProducts(data)
        const item=data.length()
      })
  }

const deleteItem=()=>{
  
  }
  

  useEffect(() => {
    fetchData()
  }, []);

  

  return (
    <>
      <section>
        <div className="Heading">
          <h2 className="heading">
            {" "}
            <b>Your Cart Items</b>
          </h2>
          <hr />
        </div>

        <div className="container">
          
          <div className="row resp2 ">
          <div className="home">
  
        <div className="productContainer">
          <ListGroup>
            {product.map((prod) => (
              <ListGroup.Item key={prod.restaurantItem.itemId}>
                <Row>
                  <Col>
                    <Image src={prod.restaurantItem.imageUrl} alt="image" fluid rounded />
                  </Col>
                  <Col>
                    <span>{prod.restaurantItem.itemName}</span>
                  </Col>
                  <Col>₹ {prod.restaurantItem.itemprice}</Col>
                  <Col></Col>

                  <Col>
                    <Button
                      type="button"
                      variant="light"
                     onClick={()=>deleteItem(prod.restaurantItem.itemId)}
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
     
    </div>
</div>
            </div>
      </section>
    </>
  );
};

export default Cart;