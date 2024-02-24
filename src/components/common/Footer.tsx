import React from "react";
import all from "../../assets/img/Footer/all.svg";
import search from "../../assets/img/Footer/search.svg";
import map from "../../assets/img/Footer/map.svg";
import wish from "../../assets/img/Footer/wish.svg";
import my from "../../assets/img/Footer/my.svg";
import styled from "styled-components";
import { useNavigate } from "react-router";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  border-top: solid 1px #e8e8e8;
`;

const FooterItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 71px;
  width: 100%;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  gap: 6px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

const FooterItemImg = styled.img`
  width: 26px;
  height: 26px;
`;

const FooterItemTxt = styled.div`
  font-size: 10px;
  text-align: center;
`;

function FooterItemComponent(props: { src: string; txt: string; url: string }) {
  const navigate = useNavigate();

  return (
    <FooterItem
      onClick={() => {
        navigate(props.url);
      }}
    >
      <FooterItemImg src={props.src} alt={props.txt} />
      <FooterItemTxt className="footerItemTxt">{props.txt}</FooterItemTxt>
    </FooterItem>
  );
}

export default function Footer() {
  return (
    <FooterContainer>
      <FooterItems>
        <FooterItemComponent src={all} txt="전체" url="/list" />
        <FooterItemComponent src={search} txt="검색" url="/search" />
        <FooterItemComponent src={map} txt="지도" url="/map" />
        <FooterItemComponent src={wish} txt="위시" url="/wish" />
        <FooterItemComponent src={my} txt="마이" url="/my" />
      </FooterItems>
    </FooterContainer>
  );
}
