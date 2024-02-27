import React, { useEffect } from "react";
import { Content, MainFont, SubFont } from "./MyReviewContainer";
import styled from "styled-components";
import { RootState } from "../../../store/store";
import { useAppSelector } from "../../../lib/hooks/reduxHooks";

const ReviewDiv = styled.div`
  width: 98%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  background-color: rgba(235, 220, 220, 0.3);
  display: flex;
  padding: 10px;
  border-radius: 10px;
`;

const ImgDiv = styled.div<{ url: string }>`
  width: 230px;
  height: 280px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-top: 10px;
  background-image: url(${(props) => props.url});
  background-size: 100%;
  background-position: center center;
`;

export default function OtherReview() {
  const myReview = useAppSelector((state: RootState) => state.myReview);
  const reviewList = useAppSelector(
    (state: RootState) => state.allReview.allReview
  );

  useEffect(() => {
    console.log("리뷰리스트", reviewList);
  }, []);

  return (
    <>
      {reviewList?.map(
        (review, idx) =>
          myReview.userId !== review.userId?._id && (
            <ReviewDiv key={review._id}>
              <MainFont>✨</MainFont>
              <Content>
                <MainFont>{review.userId?.name}</MainFont>
                <SubFont>{review?.review}</SubFont>
                {review.imgUrl && <ImgDiv url={review.imgUrl} />}
              </Content>
            </ReviewDiv>
          )
      )}
    </>
  );
}
