import React from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import styled from "styled-components";
import FillHeart from "../../assets/img/Modal/fill-heart.svg";
import CommonButton from "../../components/common/CommonButton";
import { logout } from "../../lib/api/users";
import { userLogout } from "../../store/reducers/Auth/user";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { Button } from "@mantine/core";

const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vh 10vw;
  gap: 30vh;
`;

const UserFont = styled.p`
  font-size: 5vw;
`;

const SubFont = styled.p`
  font-size: 3.5vw;
`;

const WishContainer = styled.div`
  width: 80vw;
  padding: 1vh 0;
  background-color: #f0e9e9;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

const WishButton = styled.div`
  width: 60vw;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #747474;
  font-size: 3vw;
`;

const CallContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
  color: rgba(0, 0, 0, 0.3);
`;

const CallDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 70%;
  gap: 1vw;
`;


export default function LoginMyPage() {
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(['authToken']);

  return (
    <MyContainer>
      <div>
        <UserFont>
          <b>{userState.user.name}</b>님
        </UserFont>
        <SubFont>이메일 &nbsp; | &nbsp; {userState.user.email}</SubFont>
        <WishContainer onClick={()=>{navigate('/wish')}}>
          <WishButton>
            <span>위시리스트</span>
            <img src={FillHeart} alt="" style={{ width: "6vw" }} />
            <span>127</span>
          </WishButton>
        </WishContainer>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2vh",
        }}
      >
        <CallContainer>
          <span>개발자 연락처</span>
          <CallDiv>
            <span>김민우 | roboticts49@gmail.com</span>
            <span>박유진 | yjp8842@naver.com</span>
            <span>박진언 | pjo3789@naver.com</span>
            <span>이한슬 | gkstmf616@gmail.com</span>
          </CallDiv>
        </CallContainer>
            <Button
                radius="xl"
                size="md"
                styles={{
                  root: {
                    backgroundColor: "#C17878",
                    color: "#fff",
                    width:'80vw',
                    fontSize:'4vw'
                  },
                }}
                onClick={() =>
                  dispatch(userLogout()).then((res) => {
                    removeCookie('authToken');
                    navigate("/");
                  })}
              >
                로그아웃
              </Button>
      </div>
    </MyContainer>
  );
}
