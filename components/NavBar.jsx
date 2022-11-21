import React from "react";
import Link from "next/link";
// import { AiOutlineShopping } from 'react-icons/ai'
import logo from "../public/like.png";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  function CustomizedBadges() {
    return (
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={totalQuantities} color="secondary">
          <ShoppingCartIcon sx={{ fontSize: 30 }} />
        </StyledBadge>
      </IconButton>
    );
  }
  return (
    <nav className="navbar-container">
      <div className="logo">
        <Link href="/">
          {/* <Image src={logo} alt="logo sacha" width="100" height="100" /> */}
          <p>Sacha shopping</p>
        </Link>
      </div>

      <button
        // type="button"
        // className="cart-icon"
        // onClick={() => setShowCart(true)}
      >
        <CustomizedBadges />
      </button>

      {showCart && <Cart />}
    </nav>
  );
};

export default Navbar;
