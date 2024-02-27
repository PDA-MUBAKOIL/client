import React, { useCallback, useState } from "react";
import CommonButton from "../../components/common/CommonButton";
import { Text } from "@mantine/core";

import Logo from "../../assets/img/Nav/logo.svg";
import styled from "styled-components";
import InputContainer from "../../components/common/InputContainer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../../lib/hooks/reduxHooks";
import Drinks from '../../assets/img/Nav/drinks-icon.svg';
import { checkEmail, sendEmail, setUserEmail } from "../../store/reducers/Auth/email";
import { RootState } from "../../store/store";
import { userSignup } from "../../store/reducers/Auth/user";

const SignupBody = styled.div`
  background-color: #ebdcdc;
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
  const isEmail = useSelector((state: RootState) => state.email.isEmail);
  const userEmail = useSelector((state: RootState) => state.email.email);

  const [email, setEmail] = useState<string>("");
  const [authNum, setAuthNum] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onInputChange = useCallback(
    (
      inputText: string,
      setFn: React.Dispatch<React.SetStateAction<string>>
    ) => {
      setFn(inputText);
    },
    []
  );

  const [isClick, setIsClick] = useState<boolean>(false);

  const onSubmitSignup = useCallback((email: string, nickname: string, password: string) => {
    const data = { 
      "email": email, 
      "password": password,
      "name": nickname
    };
    dispatch(userSignup(data)).then((res: any) => {
      navigate('/login');
    });
  }, []);
  
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
              value={email}
              type="email"
              placeholder="이메일"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onInputChange(e.target.value, setEmail);
              }}
            />
            {isClick && (
              <InputContainer
                value={authNum}
                type="text"
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
                onClick={() => {
                  setIsClick(true)
                  console.log('email', email)
                  dispatch(setUserEmail(email))
                  dispatch(sendEmail(email))
                }}
                status={email ? "active" : "disabled"}
              />
            ) : (
              <CommonButton
                text="이메일 인증"
                onClick={() => {
                  dispatch(checkEmail(authNum))
                }}
                status={authNum ? "active" : "disabled"}
              />
            )}
            <ToLogin to={"/login"}>로그인</ToLogin>
          </ButtonBox>
        </>
      ) : (
        <>
          <InputBox>
            <InputContainer
              value={nickname}
              type="text"
              placeholder="닉네임"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onInputChange(e.target.value, setNickname);
              }}
            />
            <InputContainer
              value={password}
              type="password"
              placeholder="비밀번호"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onInputChange(e.target.value, setPassword);
              }}
            />
            <InputContainer
              value={password2}
              type="password"
              placeholder="비밀번호 확인"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onInputChange(e.target.value, setPassword2);
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
              onClick={() => onSubmitSignup(userEmail, nickname, password)}
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
