import React from 'react';
import styled from 'styled-components';

type ReviewType = {
  _id: string;
  drinkId: string;
  userId: string;
  review: string;
  imgUrl: string;
  isPublic: boolean;
}

export type ReviewProp = {
  item: ReviewType;
}

const ReviewDiv = styled.div`
  width: 98%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  // background-color: rgba(235, 220, 220);
  background-color: #C17878;
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
  font-size: 15px;
`

export const SubFont = styled.span`
  font-size: 14px;
`

export default function MyReviewContainer({ item }: ReviewProp) {
  const { _id, drinkId, userId, review, imgUrl, isPublic } = item;

  return (
    <ReviewDiv>
      <MainFont>✨</MainFont>
      <Content>
        <MainFont>나의 리뷰</MainFont>
        <SubFont>{review}</SubFont>
      </Content>
    </ReviewDiv>
  )
}
