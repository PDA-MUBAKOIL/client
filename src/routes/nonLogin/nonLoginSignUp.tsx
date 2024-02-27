import React, { useCallback, useState } from "react";
import CommonButton from "../../components/common/CommonButton";
import { Text } from "@mantine/core";

import Logo from "../../assets/img/Nav/logo.svg";
import styled from "styled-components";
import InputContainer from "../../components/common/InputContainer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../../lib/hooks/reduxHooks";
import Drinks from "../../assets/img/Nav/drinks-icon.svg";
import {
  alreadyEmail,
  checkEmail,
  sendEmail,
  setIsEmail,
  setUserEmail,
} from "../../store/reducers/Auth/email";
import { RootState } from "../../store/store";
import { userSignup } from "../../store/reducers/Auth/user";
import { SignupBody, ToLogin } from "./nonLoginLogIn";

const MainFont = styled(Text)`
  font-size: 1rem;
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

export default function NonLoginSignUp() {
  const isEmail = useSelector((state: RootState) => state.email.isEmail);
  const userEmail = useSelector((state: RootState) => state.email.email);

  const [email, setEmail] = useState<string>("");
  const [authNum, setAuthNum] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);

  const [isAlready, setIsAlready] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(true);
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

  function checkAlreadyEmail(email: string) {
    dispatch(alreadyEmail(email)).then((res) => {
      console.log("이미 있는지", res.payload);
      if (res.payload.result === true) {
        navigate("/signup");
        setIsAlready(true);
      } else {
        setIsClick(true);
        console.log("email", email);
        dispatch(setUserEmail(email));
        dispatch(sendEmail(email));
      }
    });
  }

  function checkIsAuth(authNum: string) {
    dispatch(checkEmail(authNum))
      .then((res) => {
        console.log(res.payload)
        if (res.payload.result === false) {
          setIsAuth(false);
        } else {
          dispatch(setIsEmail(true))
        }
      })
  }

  const [isClick, setIsClick] = useState<boolean>(false);

  const onSubmitSignup = useCallback(
    (email: string, nickname: string, password: string) => {
      const data = {
        email: email,
        password: password,
        name: nickname,
      };
      dispatch(userSignup(data)).then((res: any) => {
        if (res.result && res.result === false) {
          navigate("/signup");
        } else {
          navigate("/login");
        }
      });
    },
    []
  );

  return (
    <SignupBody>
      <HelloBox>
        <MainFont>함께 하실래요?</MainFont>
        <img src={Logo} alt="" style={{ width: "30vw" }} onClick={() => dispatch(setIsEmail(false))} />
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
            {isAlready && (
              <div style={{ color: "red", fontSize: "12px", paddingLeft: 12 }}>
                이미 존재하는 이메일입니다.
              </div>
            )}
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
            {!isAuth && (
              <div style={{ color: "red", fontSize: "12px", paddingLeft: 12 }}>
                인증번호가 같지 않습니다.
              </div>
            )}
          </InputBox>
          <ButtonBox>
            {!isClick ? (
              <CommonButton
                text="인증번호 요청"
                onClick={() => {
                  checkAlreadyEmail(email);
                }}
                status={email ? "active" : "disabled"}
              />
            ) : (
              <CommonButton
                text="이메일 인증"
                onClick={() => checkIsAuth(authNum)}
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
    </SignupBody>
  );
}
