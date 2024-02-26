import React from "react";
import Logo from "../../assets/img/Nav/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../lib/hooks/reduxHooks";

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
  z-index: 1;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;
const NavLogo = styled.img`
  width: 45px;
  height: 45px;
`;
export default function Navbar() {
  const user = useAppSelector(state => state.user.isUser);

  return (
    <NavBarContainer>
      {user ? <Link to={"/map"}> 
        <NavLogo src={Logo} alt="navLogo"></NavLogo>
        </Link>
      : <Link to={"/"}>
          <NavLogo src={Logo} alt="navLogo"></NavLogo>
        </Link>
      }
    </NavBarContainer>
  );
}
