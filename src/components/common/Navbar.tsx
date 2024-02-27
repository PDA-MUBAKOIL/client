import React from "react";
import Logo from "../../assets/img/Nav/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../lib/hooks/reduxHooks";
import { RootState } from "../../store/store";

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 15px;
  background-color: #ebdcdc;
  width: 100vw;
  height: 10vh;
  z-index: 1;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;
const NavLogo = styled.img`
  width: 11vw;
  height: 8vh;
`;
export default function Navbar() {
  const user = useAppSelector((state: RootState) => state.user.isUser);

  return (
    <NavBarContainer>
      {user ? (
        <Link to={"/map"} style={{ display: "flex", justifyContent: "center" }}>
          <NavLogo src={Logo} alt="navLogo"></NavLogo>
        </Link>
      ) : (
        <Link
          to={"/"}
          onClick={() => {
            window.scroll({ top: 0, behavior: "smooth" });
          }}
        >
          <NavLogo src={Logo} alt="navLogo"></NavLogo>
        </Link>
      )}
    </NavBarContainer>
  );
}
