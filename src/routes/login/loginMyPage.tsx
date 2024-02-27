import React from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import styled from "styled-components";
import FillHeart from "../../assets/img/Modal/fill-heart.svg";
import CommonButton from "../../components/common/CommonButton";
import { logout } from "../../lib/api/users";
import { userLogout } from "../../store/reducers/Auth/user";
import { useNavigate } from "react-router";

const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  gap: 300px;
`;

const UserFont = styled.p`
  font-size: 24px;
`;

const SubFont = styled.p`
  font-size: 14px;
  padding: 0 5px;
`;

const WishContainer = styled.div`
  width: 332px;
  padding: 15px 0;
  background-color: #f0e9e9;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

const WishButton = styled.div`
  width: 72px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #747474;
  font-size: 12px;
`;

const CallContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CallDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: rgba(0, 0, 0, 0.3);
  font-size: 12px;
  gap: 8px 8px;
`;

export default function LoginMyPage() {
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <MyContainer>
      <div>
        <UserFont>
          <b>{userState.name}</b>님
        </UserFont>
        <SubFont>이메일 &nbsp; | &nbsp; {userState.email}</SubFont>
        <WishContainer onClick={()=>{navigate('/wish')}}>
          <WishButton>
            <span>위시리스트</span>
            <img src={FillHeart} alt="" style={{ width: "24px" }} />
            <span>127</span>
          </WishButton>
        </WishContainer>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
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
        <CommonButton
          text="로그아웃"
          onClick={() =>
            dispatch(userLogout(userState.id)).then((res) => navigate("/"))
          }
          status="active"
        />
      </div>
    </MyContainer>
  );
}
