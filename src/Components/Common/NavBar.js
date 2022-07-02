import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Avatar from "@mui/material/Avatar";

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
  const [search, setsearch] = useState();

  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" onClick={() => Navigate("/home")}>
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
                  Break Fast
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
            &nbsp; &nbsp; &nbsp; &nbsp;
            <form class="nosubmit">
              <input
                class="nosubmit"
                type="search"
                placeholder="Search for Items..."
                value={search}
              />
            </form>
          </div>
        </div>
        <IconButton className="cart" onClick={() => Navigate("/cart")}>
          <StyledBadge badgeContent={1} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Avatar
          alt="profile"
          className="profile"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHNob3R8ZW58MHx8MHx8&w=1000&q=80"
        />
        &nbsp; &nbsp; &nbsp;
      </nav>
    </div>
  );
};

export default NavBar;
