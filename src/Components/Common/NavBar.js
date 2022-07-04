import React, { useState,useEffect } from "react";
import "./navbar.css";
import axios from "axios"
import Logo from "../../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import { getAuth, signOut } from "firebase/auth"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";



const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const NavBar = () => {
  const Navigate = useNavigate();
 const [data,setData]=useState([])
 const auth = getAuth();

  useEffect(() => {
    axios.get("https://backend123.azurewebsites.net/infovision/cart?cartId=dec5ac08-14c2-4d61-bf6a-fc12eaa2597f").then((res)=>setData(res.data))
  }, []);


  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" onClick={() => Navigate("/")}>
            <img src={Logo} className="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="snip1189">
              <li>
                <button
                  onClick={() => Navigate("/Breakfast")}
                  data-hover="Break Fast"
                  className="text"
                >
                  BreakFast
                </button>
              </li>
              <li>
                <button
                  onClick={() => Navigate("/Lunch")}
                  data-hover="Lunch"
                  className="text"
                >
                  Lunch
                </button>
              </li>
              <li>
                <button
                  onClick={() => Navigate("/Snacks")}
                  data-hover="Snacks"
                  className="text"
                >
                  Snacks
                </button>
              </li>
              <li>
                <button
                  onClick={() => Navigate("/Dinner")}
                  data-hover="Dinner"
                  className="text"
                >
                  Dinner
                </button>
              </li>
            </ul>{" "}
           
            
          </div>
        </div>
        <IconButton className="cart" onClick={() => Navigate("/cart")}>
          <StyledBadge badgeContent={data.length} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="dropdown">
       
 
  <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="Avatar" class="avatar" id="dropdownMenuButton" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false"/>

  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
    <button class="dropdown-item" onClick={()=>(Navigate("/ViewProfile"))}>View Profile</button>
    <hr/>
    <button class="dropdown-item" href="#">Help</button>
    <hr/>
    <button class="dropdown-item" href="#">Settings</button>
    <hr/>
    <button class="dropdown-item logout"onClick={()=>signOut(auth).then(Navigate("/"))}>LogOut</button>
  </div>
</div>
        
        &nbsp;  
      </nav>
    </div>
  );
};

export default NavBar;
