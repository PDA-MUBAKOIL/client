import React from "react";
import Logo from "../../assets/img/Nav/logo.svg";
import styled from "styled-components";

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 15px;
  background-color: #ebdcdc;
  width: 100%;
  height: 62px;
  z-index: 99;
`;
const NavLogo = styled.img`
  width: 45px;
  height: 45px;
`;
export default function Navbar() {
  return (
    <NavBarContainer>
      <NavLogo src={Logo} alt="navLogo"></NavLogo>
    </NavBarContainer>
  );
}
