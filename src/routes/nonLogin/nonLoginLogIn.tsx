import React from "react";
import CommonButton from "../../components/common/CommonButton";
import { Text } from "@mantine/core";

import Logo from "../../assets/img/Nav/logo.svg";
import styled from "styled-components";
import InputContainer from "../../components/common/InputContainer";
import { Link } from "react-router-dom";
import { setIsEmail } from "../../store/reducers/Auth/email";

const SignupBody = styled.div`
  background-color: #ebdcdc;
  // footer 없애고 디자인 수정하기
  height: calc(100vh - 134px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 90px;
  overflow-y: hidden;
`;

const MainFont = styled(Text)`
  font-size: 20px;
`;

const HelloBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const ToLogin = styled(Link)`
  text-decoration: none;
  color: #717171;
`;

export default function NonLoginLogIn() {
  return (
    <SignupBody>
      <HelloBox>
        <MainFont>함께 하실래요?</MainFont>
        <img src={Logo} alt="" style={{ width: "105px" }} />
      </HelloBox>
      <InputBox>
        <InputContainer placeholder="이메일" />
        <InputContainer placeholder="비밀번호" />
      </InputBox>
      <ButtonBox>
        <Link to={"/map"}>
          <CommonButton text="로그인" onClick={() => console.log("로그인")} />
        </Link>
        <ToLogin to={"/signup"}>회원가입</ToLogin>
      </ButtonBox>
    </SignupBody>
  );
}
