import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./menupage.css";
import { AddCart } from "./Reducer/Action";

const Snacks = () => {
  const [data, setData] = useState([]);
  let dispatch =useDispatch()
  useEffect(() => {
    axios
      .get(
        `https://backend123.azurewebsites.net/infovision/homepageview/menu?foodType=SNACKS&location=Hyderabad`
      )
      .then((res) => setData(res.data));
  }, []);


  const Addcart =(itemId)=>{
   dispatch(AddCart(data,itemId));
   };
  return (
    <div>
      <div className="col-lg-12 col-md-4 body back">
        <div className="row main">
          {data.map((product) => (
            <div className="card" key={product.id}>
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

export default Snacks;
