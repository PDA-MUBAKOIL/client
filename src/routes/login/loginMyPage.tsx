import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import styled from "styled-components";
import FillHeart from "../../assets/img/Modal/fill-heart.svg";
import CommonButton from "../../components/common/CommonButton";
import { logout } from "../../lib/api/users";
import { userLogout } from "../../store/reducers/Auth/user";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import { Button } from "@mantine/core";
import { RootState } from "../../store/store";
import { getMyWishes } from "../../lib/api/wish";

const MyContainer = styled.div`
  height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1vh 10vw;
  // gap: 21vh;
`;

const UserFont = styled.p`
  font-size: 6vw;
`;

const SubFont = styled.p`
  font-size: 3.5vw;
  padding: 0 2vw;
`;

const WishContainer = styled.div`
  width: 85vw;
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
  const userState = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [wishCnt,setWishCnt] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);

  // 토큰값 가져오기
  const token = cookies["authToken"];

  useEffect(()=>{
    getMyWishes(null,token).then(data=>{
      setWishCnt(data.data.length);
    })
  })
  return (
    <MyContainer>
      <div>
        <UserFont>
          <b>{userState.user.name}</b>님
        </UserFont>
        <SubFont>이메일 &nbsp; | &nbsp; {userState.user.email}</SubFont>
        <WishContainer
          onClick={() => {
            navigate("/wish");
          }}
        >
          <WishButton>
            <span>위시리스트</span>
            <img src={FillHeart} alt="" style={{ width: "6vw" }} />
            <span>{wishCnt}</span>
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
          <span style={{ fontSize: "2vh" }}>개발자 연락처</span>
          <CallDiv>
            <span style={{ fontSize: "1.5vh" }}>
              김민우 | roboticts49@gmail.com
            </span>
            <span style={{ fontSize: "1.5vh" }}>
              박유진 | yjp8842@naver.com
            </span>
            <span style={{ fontSize: "1.5vh" }}>
              박진언 | pjo3789@naver.com
            </span>
            <span style={{ fontSize: "1.5vh" }}>
              이한슬 | gkstmf616@gmail.com
            </span>
          </CallDiv>
        </CallContainer>
        <Button
          radius="xl"
          size="md"
          styles={{
            root: {
              backgroundColor: "#C17878",
              color: "#fff",
              width: "80vw",
              fontSize: "4vw",
              height: "7vh",
            },
          }}
          onClick={() =>
            dispatch(userLogout()).then((res) => {
              removeCookie("authToken");
              navigate("/");
            })
          }
        >
          로그아웃
        </Button>
      </div>
    </MyContainer>
  );
}
