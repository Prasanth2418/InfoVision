import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import "./menupage.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AddCart } from "./Reducer/Action";

const MenuPage = () => {
  const [data, setData] = useState([]);
  let dispatch =useDispatch()
  let Navigate=useNavigate()
  useEffect(() => {
    axios
      .get(`https://backend123.azurewebsites.net/infovision/homepageview`)
      .then((res) => setData(res.data));
  }, []);


  const Addcart =(itemId)=>{
    dispatch(AddCart(data,itemId));
   };
   const ordernow = (itemId) => {

    dispatch(AddCart(data, itemId));
    Navigate("/cart")
  };

  return (
    <div className="back">
      <div className="col-xl-12 col-lg-12  body back">
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
                <button type="button" class="btn btn-primary" onClick={()=>Addcart(product.itemId)}>
                  Add to cart
                </button>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" class="btn btn-success"  onClick={() => ordernow(product.itemId)} >
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

export default MenuPage;
