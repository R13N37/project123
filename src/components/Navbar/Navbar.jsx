import React from "react";
import NavbarView from "./Navbar.view";

const Navbar = (props) => {

  console.log(props)

  return <NavbarView isBlack={props.isBlack}></NavbarView>;
};

export default Navbar;
