import React from "react";
import all from "../../assets/img/Footer/all.svg";
import search from "../../assets/img/Footer/search.svg";
import map from "../../assets/img/Footer/map.svg";
import wish from "../../assets/img/Footer/wish.svg";
import my from "../../assets/img/Footer/my.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  background-color: #fff;
  border-top: solid 1px #e8e8e8;
`;

const FooterItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  gap: 2px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`;

const FooterItemImg = styled.img`
  width: 7vw;
  height: 5vh;
`;

const FooterItemTxt = styled.div`
  font-size: 1.8vh;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
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
        <FooterItemComponent src={my} txt="마이" url="/mypage" />
      </FooterItems>
    </FooterContainer>
  );
}
