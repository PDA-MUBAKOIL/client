import React, { useState } from "react";
import CommonButton from "../../components/common/CommonButton";
import { Text } from "@mantine/core";

import Logo from "../../assets/img/Nav/logo.svg";
import styled from "styled-components";
import InputContainer from "../../components/common/InputContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsEmail } from "../../store/reducers/Auth/email";

const SignupBody = styled.div`
  background-color: #ebdcdc;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding-top: 90px;
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

export default function NonLoginSignUp() {
  const isEmail = useSelector((state: any) => state.email.isEmail);
  const dispatch = useDispatch();

  const [isClick, setIsClick] = useState<boolean>(false);

  console.log(isEmail);
  return (
    <SignupBody>
      <HelloBox>
        <MainFont>함께 하실래요?</MainFont>
        <img src={Logo} alt="" style={{ width: "105px" }} />
      </HelloBox>
      {!isEmail ? (
        <>
          <InputBox>
            <InputContainer placeholder="이메일" />
            {isClick && <InputContainer placeholder="인증 번호" />}
          </InputBox>
          <ButtonBox>
            {!isClick ? (
              <CommonButton
                text="인증번호 요청"
                onClick={() => setIsClick(true)}
              />
            ) : (
              <CommonButton
                text="이메일 인증"
                onClick={() => dispatch(setIsEmail(true))}
              />
            )}
            <ToLogin to={"/login"}>로그인</ToLogin>
          </ButtonBox>
        </>
      ) : (
        <>
          <InputBox>
            <InputContainer placeholder="닉네임" />
            <InputContainer placeholder="비밀번호" />
            <InputContainer placeholder="비밀번호 확인" />
          </InputBox>
          <ButtonBox>
            <CommonButton
              text="회원가입"
              onClick={() => console.log("회원가입 클릭")}
            />
            <ToLogin to={"/login"}>로그인</ToLogin>
          </ButtonBox>
        </>
      )}
    </SignupBody>
  );
}
