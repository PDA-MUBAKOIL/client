import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import DetailItem from "../components/common/Modal/DetailItem";
import ModalContainer from "../components/common/Modal/ModalContainer";

import styled from "styled-components";
import CardList from "../components/common/Modal/CardList";

import { useAppSelector } from "../lib/hooks/reduxHooks";

const OutletContainer = styled.div`
  padding: 62px 0 72px 0;
`;

export default function MainLayout() {

  // 전역적으로 관리해야하는 state
  const isDetail = useAppSelector(state=>state.showModal.isDetail);
  const isShow = useAppSelector(state=>state.showModal.isShow);
  const detail = useAppSelector(state=>state.drinkDetail.detail)


  useEffect(() => {

  }, []);

  return (
    <>
      {isShow &&
        (isDetail ? (
          <ModalContainer
            content={<DetailItem detail={detail} />}/>
        ) : (
          <ModalContainer content={<CardList />} />
        ))}
      <Navbar />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      {/* <button onClick={() => setIsShow(true)}>모달</button> */}
      <Footer />
    </>
  );
}
