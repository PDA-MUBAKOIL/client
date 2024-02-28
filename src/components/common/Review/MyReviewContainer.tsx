import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RootState } from '../../../store/store';
import { useAppSelector } from '../../../lib/hooks/reduxHooks';

const ReviewDiv = styled.div`
  width: 98%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  background-color: rgba(193, 120, 120, 0.8);
  color: #fff;
  display: flex;
  padding: 10px;
  border-radius: 10px;
`

export const Content = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
`

export const MainFont = styled.span`
  font-weight: bold;
`

export const SubFont = styled.span`
  font-size: 15px;
`

export default function MyReviewContainer() {
  const myReview = useAppSelector((state: RootState) => state.myReview);

  useEffect(() => {
    console.log('마이리뷰', myReview)
  }, [])

  return (
    <ReviewDiv>
      <MainFont>✨</MainFont>
      <Content>
        {myReview?.review ? (
          <>
            <MainFont>나의 리뷰</MainFont>
            <SubFont>{myReview?.review}</SubFont>
          </>
        ) : (
          <SubFont>리뷰를 작성해보세요!</SubFont>
        )}
      </Content>
    </ReviewDiv>
  )
}
