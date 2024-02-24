import React from "react";
import { Text } from "@mantine/core";
import styled from "styled-components";

const BannerContainer = styled.div`
  background-color: #ebdcdc;
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const BannerFont = styled(Text)`
  font-size: 17px;
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
      <LoginButton onClick={() => console.log("로그인 페이지로 이동")}>
        로그인
      </LoginButton>
    </BannerContainer>
  );
}
