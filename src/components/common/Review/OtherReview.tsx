import React from 'react'
import { Content, MainFont, ReviewProp, SubFont } from './MyReviewContainer'
import styled from 'styled-components';

const ReviewDiv = styled.div`
  width: 98%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  background-color: rgba(235, 220, 220, 0.3);
  display: flex;
  padding: 10px;
  border-radius: 10px;
`

export default function OtherReview({ item }: ReviewProp) {
  const { _id, drinkId, userId, review, imgUrl, isPublic } = item;

  return (
    <ReviewDiv>
      <MainFont>✨</MainFont>
      <Content>
        <MainFont>{userId}</MainFont>
        <SubFont>{review}</SubFont>
      </Content>
    </ReviewDiv>
  )
}
