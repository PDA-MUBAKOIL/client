import React from "react";
import { Text } from "@mantine/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BannerContainer = styled.div`
  // background-color: #ebdcdc;
  background: radial-gradient(#EBDCDC 30%, #FFFFFF 70%);
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BannerFont = styled(Text)`
  font-size: 17px;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
`;

const LoginButton = styled.div`
  background-color: #c17878;
  padding: 10px 35px;
  max-width: 115px;
  border-radius: 99px;
  color: #fff;
  margin-top: 15px;
`;

export default function Banner() {
  return (
    <BannerContainer>
      <BannerFont>로그인을 하고</BannerFont>
      <BannerFont>나만의 컬렉션을 만들어보세요!</BannerFont>
      <LinkButton to={"/login"}>
        <LoginButton onClick={() => console.log("로그인 페이지로 이동")}>
          로그인
        </LoginButton>
      </LinkButton>
    </BannerContainer>
  );
}
