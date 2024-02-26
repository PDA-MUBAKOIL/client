import React, { useCallback, useState } from "react";
import CommonButton from "../../components/common/CommonButton";
import { Text } from "@mantine/core";

import Logo from "../../assets/img/Nav/logo.svg";
import styled from "styled-components";
import InputContainer from "../../components/common/InputContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsEmail } from "../../store/reducers/Auth/email";
import { useAppDispatch } from "../../lib/hooks/reduxHooks";
import Drinks from '../../assets/img/Nav/drinks-icon.svg';

const SignupBody = styled.div`
  background-color: #ebdcdc;
  // footer 없애고 디자인 수정하기
  height: calc(100vh - 62px);
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

export default function NonLoginSignUp() {
  const isEmail = useSelector((state: any) => state.email.isEmail);

  const [email, setEmail] = useState<String>("");
  const [authNum, setAuthNum] = useState<String>("");
  const [nickname, setNickname] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onInputChange = useCallback(
    (
      inputText: String,
      setFn: React.Dispatch<React.SetStateAction<String>>
    ) => {
      setFn(inputText);
    },
    []
  );

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
            <InputContainer
              placeholder="이메일"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onInputChange(e.target.value, setEmail);
              }}
            />
            {isClick && (
              <InputContainer
                placeholder="인증 번호"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  onInputChange(e.target.value, setAuthNum);
                }}
              />
            )}
          </InputBox>
          <ButtonBox>
            {!isClick ? (
              <CommonButton
                text="인증번호 요청"
                onClick={() => setIsClick(true)}
                status="active"
              />
            ) : (
              <CommonButton
                text="이메일 인증"
                onClick={() => dispatch(setIsEmail(true))}
                status="active"
              />
            )}
            <ToLogin to={"/login"}>로그인</ToLogin>
          </ButtonBox>
        </>
      ) : (
        <>
          <InputBox>
            <InputContainer
              placeholder="닉네임"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onInputChange(e.target.value, setNickname);
              }}
            />
            <InputContainer
              placeholder="비밀번호"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onInputChange(e.target.value, setPassword);
              }}
            />
            <InputContainer
              placeholder="비밀번호 확인"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value !== password) {
                  setIsActive(false);
                } else {
                  setIsActive(true);
                }
              }}
            />
          </InputBox>
          <ButtonBox>
            <CommonButton
              text="회원가입"
              onClick={() => dispatch(setIsEmail(false))}
              status={isActive ? "active" : "disabled"}
            />
            <ToLogin to={"/login"}>로그인</ToLogin>
          </ButtonBox>
        </>
      )}
      <img src={Drinks} alt="" style={{ position: 'fixed', bottom: '0' }} />
    </SignupBody>
  );
}
