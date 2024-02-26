import React, { useEffect, useState } from "react";
import { Text, Group, rem } from "@mantine/core";
import styled from "styled-components";
import TagButton from "../TagButton";
import FillHeart from "../../../assets/img/Modal/fill-heart.svg";
import EmptyHeart from "../../../assets/img/Modal/empty-heart.svg";
import ToggleButton from "./ToggleButton";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks/reduxHooks";
import { RootState } from "../../../store/store";
import MyReviewContainer from "../Review/MyReviewContainer";
import { getAllWish } from "../../../store/reducers/Review/allReview";
import OtherReview from "../Review/OtherReview";

export type DetailType = {
  _id: string;
  tags: Array<string>;
  brewerId: string;
  region: string;
  capacity: string;
  imgUrl: string;
  name: string;
  materials: string;
  percent: string;
  volume: string;
  description: string;
};

type DetailProps = {
  detail: DetailType;
};

type FontType = {
  children: String;
  view: String;
};

const ImageDiv = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Content = styled.div`
  width: 100%;
  max-height: 330px;
  overflow-y: scroll;
  // display: flex;
  // flex-direction: column;
  padding: 0 3px;
`;

const ContentItem = styled(Group)`
  width: 100%;
`;

const TypeDiv = styled(Group)`
  width: 69px;
  justify-content: space-between;
`;

const MainFont = styled(Text)`
  font-size: 20px;
  font-weight: 700;
`;

const TypeFont = styled(Text)`
  font-weight: 600;
  font-size: 14px;
`;

const SubFont = styled(Text)<FontType>`
  font-size: 14px;
  width: 198px;
  ${(props) =>
    props.view === "description" &&
    `
      max-height: 125px;
      overflow-y: scroll;
    `}
`;

const TagDiv = styled(Group)`
  margin: 20px 0;
`;

const ReviewInput = styled.textarea`
  border: none;
  background-color: #ebdcdc;
  width: 80%;
  height: 60px;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

const ReviewFont = styled.h3`
  width: 100%;
  text-align: start;
  padding: 0 5px;
  margin: 10px 0;
`;

const ReviewList = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  padding: 0 0 20px 0;
`

const ReviewInputContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10px;
`

const ClickButton = styled.div<{ state: string }>`
  background-color: #c17878;
  padding: 5px 10px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  ${(props) =>
    props.state === "disabled" &&
    `
      background-color: #747474
    `}
`;

export default function DetailItem({ detail }: DetailProps) {
  const { imgUrl, name, materials, percent, volume, description } = detail;

  const [isLike, setIsLike] = useState<boolean>(false);
  
  const dispatch = useAppDispatch();
  const [isReview, setIsReview] = useState<boolean>(false);
  const myReview = useAppSelector((state: RootState) => state.myReview);

  const detailId = useAppSelector((state: RootState) => state.drinkDetail.detail._id);
  const reviewList = useAppSelector((state: RootState) => state.allReview.allReview);

  useEffect(() => {
    dispatch(getAllWish(detailId))
  }, [])

  return (
    <>
      <ToggleButton isReview={isReview} setIsReview={setIsReview} />
      {!isReview ? (
        <>
          <div style={{ maxHeight: '500px', overflowY: 'scroll' }}>
            <ImageDiv src={imgUrl} />
            <Content>
              <MainFont>{name}</MainFont>

              <Group
                style={{
                  flexDirection: "column",
                  gap: rem(4),
                  marginTop: rem(10),
                }}
              >
                <ContentItem>
                  <TypeDiv>
                    <TypeFont>종류</TypeFont>
                    <TypeFont>|</TypeFont>
                  </TypeDiv>
                  <SubFont view="">탁주</SubFont>
                </ContentItem>
                <ContentItem style={{ alignItems: "flex-start" }}>
                  <TypeDiv>
                    <TypeFont>원재료</TypeFont>
                    <TypeFont>|</TypeFont>
                  </TypeDiv>
                  <SubFont view="">{materials}</SubFont>
                </ContentItem>
                <ContentItem>
                  <TypeDiv>
                    <TypeFont>도수</TypeFont>
                    <TypeFont>|</TypeFont>
                  </TypeDiv>
                  <SubFont view="">{percent}</SubFont>
                </ContentItem>
                <ContentItem>
                  <TypeDiv>
                    <TypeFont>용량</TypeFont>
                    <TypeFont>|</TypeFont>
                  </TypeDiv>
                  <SubFont view="">{volume}</SubFont>
                </ContentItem>
                <ContentItem style={{ alignItems: "flex-start" }}>
                  <TypeDiv>
                    <TypeFont>소개</TypeFont>
                    <TypeFont>|</TypeFont>
                  </TypeDiv>
                  <SubFont view="description">{description}</SubFont>
                </ContentItem>
              </Group>

              <TagDiv>
                <TagButton text="보쌈" onClick={() => console.log("태그 클릭")} />
                <TagButton
                  text="김치찜"
                  onClick={() => console.log("태그 클릭")}
                />
                <TagButton text="튀김" onClick={() => console.log("태그 클릭")} />
              </TagDiv>
            </Content>
          </div>
          <img
            src={isLike ? FillHeart : EmptyHeart}
            alt=""
            style={{ width: "24px", marginTop: '10px' }}
            onClick={() => setIsLike((prev) => !prev)}
          />
        </>
      ) : (
        <>
          <ReviewFont>"{name}"은 어떠셨나요?</ReviewFont>
          <ReviewList>
            <MyReviewContainer item={myReview}></MyReviewContainer>
            {reviewList.map((review, idx) => 
              <OtherReview key={idx} item={review} />
            )}
          </ReviewList>
          <ReviewInputContainer>
            <ReviewInput placeholder="리뷰를 남겨보세요!" />
            <ClickButton state="active" onClick={() => {
              
            }}>남기기</ClickButton>
          </ReviewInputContainer>
        </>
      )}
    </>
  );
}
