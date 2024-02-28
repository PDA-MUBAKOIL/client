import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import DetailItem from "../components/common/Modal/DetailItem";
import ModalContainer from "../components/common/Modal/ModalContainer";

import styled from "styled-components";
import CardList from "../components/common/Modal/CardList";

import { useAppSelector } from "../lib/hooks/reduxHooks";
import { useCookies } from "react-cookie";

const OutletContainer = styled.div<{ isuser: string }>`
  height: 100vh;
  ${(props) =>
    props.isuser === "true"
      ? `
      padding: 8vh 0 9vh 0;
    `
      : `
      padding: 8vh 0 0 0;
    `}
`;

export default function MainLayout() {
  // 전역적으로 관리해야하는 state
  const isDetail = useAppSelector((state) => state.showModal.isDetail);
  const isShow = useAppSelector((state) => state.showModal.isShow);
  const detail = useAppSelector((state) => state.drinkDetail.detail);
  const isUser = useAppSelector((state) => state.user.isUser);

  useEffect(() => {}, []);
  const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);

  // 토큰값 가져오기
  const token = cookies["authToken"];

  return (
    <>
      {isShow &&
        (isDetail ? (
          <ModalContainer content={<DetailItem detail={detail} />} />
        ) : (
          <ModalContainer content={<CardList />} />
        ))}
      <Navbar />
      <OutletContainer isuser={isUser ? "true" : "false"}>
        <Outlet />
      </OutletContainer>
      {/* <button onClick={() => setIsShow(true)}>모달</button> */}
      {token && <Footer />}
    </>
  );
}
