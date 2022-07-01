import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../Cart/Reducer/Actions";
import { Image } from "react-bootstrap";

import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./paymentpage.css";

export const SuccessPage = (props) => {
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.cart);

  let dispatch = useDispatch();

  useEffect(() => {
    console.log("working");
    dispatch(loadProducts());
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 text-center">
          <div className="d-flex justify-content-center  mr-4">
            <div>
              <img
                src="https://miro.medium.com/max/444/1*HAyEcz9idnSOTPICgWuuPg.gif"
                alt="BackGround"
                className="backImage"
              />
            </div>

            <div>
              <p className="sucess-pay mt-5 pt-3">Payment Successful</p>
            </div>
          </div>

          <h2 className="suces-thank">Thank You User</h2>
          <p className="suces-order">
            Sit back and relax, your order's on its way !
          </p>
          {users.map((prod) => (
            <div key={prod.restaurantItem.itemId}>
              <div className="d-flex justify-content-between mt-2 mb-5 cont">
                <div>
                  <Image
                    src={prod.restaurantItem.imageUrl}
                    className="succes-img"
                    alt="image"
                    fluid
                    rounded
                  />
                </div>
                <div className="mt-5">
                  <h1 className="succes-head">
                    {prod.restaurantItem.itemName}
                  </h1>
                </div>
                <div className="mt-5 mr-5 pr-5">
                  <p className="succes-para">{prod.restaurantItem.itemprice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
