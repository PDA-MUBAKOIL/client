import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RootState } from '../../../store/store';
import { useAppDispatch, useAppSelector } from '../../../lib/hooks/reduxHooks';
import { getWish } from '../../../store/reducers/Review/myReview';

type MyReview = {
  id: string;
  userId: string;
}

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

export default function MyReviewContainer({ id, userId }: MyReview) {
  const myReview = useAppSelector((state: RootState) => state.myReview);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const data = {
      drinkId: id,
      userId: "65dbfad95b84725d49586c45"
    }
    dispatch(getWish(data))
  }, [dispatch])

  return (
    <ReviewDiv>
      <MainFont>✨</MainFont>
      <Content>
        <MainFont>나의 리뷰</MainFont>
        <SubFont>{myReview.review}</SubFont>
      </Content>
    </ReviewDiv>
  )
}
