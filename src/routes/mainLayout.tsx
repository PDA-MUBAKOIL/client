import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer';

import DetailItem from '../components/common/Modal/DetailItem';
import ModalContainer from '../components/common/Modal/ModalContainer';
import CardList from '../components/common/Modal/CardList';



export default function MainLayout() {
  // 전역적으로 관리해야하는 state
  const [isDetail, setIsDetail] = useState<boolean>(true);
  const [isShow, setIsShow] = useState<boolean>(false);


  // 임시 데이터
  const detail = {
    img: 'https://thesool.com/common/imageView.do?targetId=PR00001219&targetNm=PRODUCT',
    name: '이천미 예술',
    materials: '백미(국산), 밀누룩(국산), 정제수 밀(누룩)함유',
    percent: '14%',
    volume: '750ml',
    description: '국내산 이천 쌀과 500년 전통 누룩으로 빚어 전통 누룩의 깊은 향과 쌀 고유의 자연스러운 단 맛, 부드러운 목 넘김이 좋습니다.'
  }

  return (
    <>
      {isShow && (
        isDetail ? (
          <ModalContainer 
            content={<DetailItem detail={detail} />} 
            setIsShow={setIsShow} 
          />
        ) : (
          <ModalContainer 
            content={<CardList />} 
            setIsShow={setIsShow} 
          />
        )
      )}
      <Navbar />
      <Outlet />
      <button onClick={() => setIsShow(true)}>모달</button>
      <Footer/>
    </>
  )
}
