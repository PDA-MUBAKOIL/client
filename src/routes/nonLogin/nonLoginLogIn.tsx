import React, { useCallback, useEffect, useState } from "react";
import CommonButton from "../../components/common/CommonButton";
import { Text, em } from "@mantine/core";

import Logo from "../../assets/img/Nav/logo.svg";
import styled from "styled-components";
import InputContainer from "../../components/common/InputContainer";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../store/reducers/Auth/user";
import { useAppDispatch } from "../../lib/hooks/reduxHooks";

import { useCookies } from "react-cookie";

export type User = {
  email: String;
  password: String;
};

export const SignupBody = styled.div`
  background-color: #ebdcdc;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6vh;
  overflow-y: hidden;
  padding-top: 8vh;
`;

const MainFont = styled(Text)`
  font-size: 1rem;
`;

const HelloBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ToLogin = styled(Link)`
  text-decoration: none;
  color: #717171;
  font-size: 90%;
`;

const ErrorFont = styled.span`
  font-size: 13px;
  color: #871806;
  text-align: center;
`;

export default function NonLoginLogIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
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

  const [cookies, setCookie] = useCookies(["authToken"]);

  const onSubmitLogin = useCallback((email: string, password: string) => {
    const data = { email, password };
    dispatch(userLogin(data)).then((res: any) => {
      if (res.type === "auth/userLogin/rejected") {
        setIsError(true);
      } else {
        setCookie("authToken", res.payload.user.token);
        navigate("/");
      }
    });
  }, []);

  useEffect(() => {
    if (email && password) {
      setIsActive(true);
    }
    if (!email || !password) {
      setIsActive(false);
    }
  }, [email, password]);

  return (
    <SignupBody>
      <HelloBox>
        <MainFont>함께 하기</MainFont>
        <img src={Logo} alt="" style={{ width: "30vw" }} />
      </HelloBox>
      <InputBox>
        <InputContainer
          value={email}
          type="email"
          placeholder="이메일"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onInputChange(e.target.value, setEmail);
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
        {isError && <ErrorFont>이메일/비밀번호가 일치하지 않습니다.</ErrorFont>}
      </InputBox>
      <ButtonBox>
        <CommonButton
          text="로그인"
          onClick={() => onSubmitLogin(email, password)}
          status={isActive ? "active" : "disabled"}
        />
        <ToLogin to={"/signup"}>회원가입</ToLogin>
      </ButtonBox>
      {/* <img src={Drinks} alt="" style={{ position: 'fixed', bottom: '0' }} /> */}
    </SignupBody>
  );
}
