import React, { useEffect } from 'react'
import { Content, MainFont, SubFont } from './MyReviewContainer'
import styled from 'styled-components';
import { RootState } from '../../../store/store';
import { useAppDispatch, useAppSelector } from '../../../lib/hooks/reduxHooks';
import { getAllWish } from "../../../store/reducers/Review/allReview";

type AllReview = {
  id: string;
}

const ReviewDiv = styled.div`
  width: 98%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  background-color: rgba(235, 220, 220, 0.3);
  display: flex;
  padding: 10px;
  border-radius: 10px;
`

const ImgDiv = styled.div<{ url: string }>`
  width: 230px;
  height: 280px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-top: 10px;
  background-image: url(${props => props.url});
  background-size: 100%;
  background-position: center center;
`

export default function OtherReview({ id }: AllReview) {
  const reviewList = useAppSelector((state: RootState) => state.allReview.allReview);
  console.log(reviewList)

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllWish(id))
  }, [dispatch])

  return (
    <>
      {reviewList?.map((review, idx) => 
        <ReviewDiv key={review._id}>
          <MainFont>✨</MainFont>
          <Content>
            <MainFont>{review.userId}</MainFont>
            <SubFont>{review.review}</SubFont>
            {review.imgUrl && (
              <ImgDiv url={review.imgUrl} />
            )}
          </Content>
        </ReviewDiv>
      )}
    </>
  )
}
