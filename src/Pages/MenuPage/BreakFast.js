import React from "react";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {useParams } from 'react-router-dom';
import { loadProducts } from "./Reducer/Action";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./menupage.css";
import { AddCart } from "./Reducer/Action";





const BreakFast = () => {
  const [data, setData] = useState([]);
  let {itemId} =useParams();
const {users}=useSelector((state)=>state.data);
let dispatch =useDispatch()

  
    useEffect(() => {
      dispatch(loadProducts());
  
  }, []);

  const Addcart =(itemId)=>{
   
   dispatch(AddCart(data,itemId));
  };
  return (
    <div>
      <div className="col-lg-12 col-md-4 body back">
        <div className="row main">
          {users?.map((product) => (
            <div className="card" key={product.itemId}>
              <img src={product.imageUrl} alt="Image" className="Image" />
              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={2.5}
                  precision={product.rating}
                  readOnly
                  className="rating"
                />
              </Stack>

              <h4 className="title">{product.itemName}</h4>
              <h5 className="price">Price:₹{product.itemprice}</h5>

              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" class="btn btn-primary"  onClick={()=>Addcart(product.itemId)}>
                  Add to cart
                </button>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" class="btn btn-success">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreakFast;
