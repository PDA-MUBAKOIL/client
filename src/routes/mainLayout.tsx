import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer';

import DetailItem from '../components/common/Modal/DetailItem';
import ModalContainer from '../components/common/Modal/ModalContainer';

export default function MainLayout() {
  // 전역적으로 관리해야하는 state
  const [isDetail, setIsDetail] = useState(true);

  // 임시 데이터
  const detail = {
    name: '이천미 예술',
    materials: '백미(국산), 밀누룩(국산), 정제수 밀(누룩)함유',
    percent: '14%',
    volume: '750ml',
    description: '국내산 이천 쌀과 500년 전통 누룩으로 빚어 전통 누룩의 깊은 향과 쌀 고유의 자연스러운 단 맛, 부드러운 목 넘김이 좋습니다.'
  }

  return (
    <>
      {/* {isDetail ? (
        <ModalContainer content={<DetailItem detail={detail} />} />
      ) : (
        // 특정 지역 눌렀을 때 나오는 술 이미지 리스트 컴포넌트 만들어서 넣기
        <ModalContainer content={<div>카드리스트</div>} />
      )} */}
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}
