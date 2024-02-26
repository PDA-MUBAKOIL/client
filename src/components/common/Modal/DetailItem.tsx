import React, { useCallback, useEffect, useState } from "react";
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
import SubmitButton from '../../../assets/img/Modal/submit.svg';
import { getWish, updateWish } from "../../../store/reducers/Review/myReview";

export type DetailType = {
  _id: string,
  name: string,
  percent: string,
  spercent: Array<number>,
  imgUrl: string,
  tags: Array<string>,
  description: string,
  brewerId: {
      _id: string,
      name: string,
      link: string,
      tel: string,
      __v: number,
      id: string
  },
  region: string,
  material: string,
  capacity: string,
  __v: number,
  id: string
};

type DetailProps = {
  detail: DetailType;
};

const ImageDiv = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Content = styled.div`
  width: 100%;
  padding: 10px 3px;
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

const SubFont = styled(Text)`
  font-size: 14px;
  width: 198px;
`;

const TagDiv = styled(Group)`
  margin: 20px 0 10px 0;
`;

const ReviewInput = styled.textarea<{ state: string }>`
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

  ${(props) => 
    props.state === 'disabled' &&
    `
      background-color: rgba(0, 0, 0, 0.1)
    `
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
  gap: 15px;
  overflow-y: scroll;
  padding: 0 0 20px 0;
`

const ReviewInputContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10px;
`

const ClickButton = styled.button<{ state: string }>`
  background-color: #c17878;
  padding: 5px 10px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  ${(props) =>
    props.state === "disabled" &&
    `
      background-color: rgba(0, 0, 0, 0.2)
    `
  }
`;

export default function DetailItem({ detail }: DetailProps) {
  const { _id, imgUrl, name, percent, material, capacity, description, tags } = detail;

  const [isLike, setIsLike] = useState<boolean>(false);
  
  const dispatch = useAppDispatch();
  const [isReview, setIsReview] = useState<boolean>(false);
  const myReview = useAppSelector((state: RootState) => state.myReview);

  const drinkId = useAppSelector((state: RootState) => state.drinkDetail.detail._id);
  const reviewList = useAppSelector((state: RootState) => state.allReview.allReview);
  const userId = useAppSelector((state: RootState) => state.user.id);

  const [review, setReview] = useState<string>("");

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setReview(e.target.value);
    }, []
  )

  useEffect(() => {
    dispatch(getAllWish(drinkId))
    const data = {
      drinkId,
      userId
    }
    dispatch(getWish(data))
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
                  <SubFont>탁주</SubFont>
                </ContentItem>
                <ContentItem style={{ alignItems: "flex-start" }}>
                  <TypeDiv>
                    <TypeFont>원재료</TypeFont>
                    <TypeFont>|</TypeFont>
                  </TypeDiv>
                  <SubFont>{material}</SubFont>
                </ContentItem>
                <ContentItem>
                  <TypeDiv>
                    <TypeFont>도수</TypeFont>
                    <TypeFont>|</TypeFont>
                  </TypeDiv>
                  <SubFont>{percent}</SubFont>
                </ContentItem>
                <ContentItem>
                  <TypeDiv>
                    <TypeFont>용량</TypeFont>
                    <TypeFont>|</TypeFont>
                  </TypeDiv>
                  <SubFont>{capacity}</SubFont>
                </ContentItem>
                <ContentItem style={{ alignItems: "flex-start" }}>
                  <TypeDiv>
                    <TypeFont>소개</TypeFont>
                    <TypeFont>|</TypeFont>
                  </TypeDiv>
                  <SubFont>{description}</SubFont>
                </ContentItem>
              </Group>
              
              <TagDiv>
                {tags.map((tag, idx) => 
                  <TagButton text={tag} onClick={() => console.log("태그 클릭")} />
                )}
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
            {myReview && <MyReviewContainer item={myReview}></MyReviewContainer>}
            {reviewList?.map((review, idx) => 
              <OtherReview key={idx} item={review} />
            )}
          </ReviewList>
          <ReviewInputContainer>
            <ReviewInput 
              disabled={!isLike && true} 
              state={isLike ? "active" : "disabled"} 
              placeholder={isLike ? "리뷰를 남겨보세요!" : "좋아요를 눌러 리뷰를 남겨보세요!"} 
              onChange={(e) => onInputChange(e)}
              value={review}
            />
            <ClickButton 
              disabled={!isLike && true} 
              state={isLike ? "active" : "disabled"} 
              onClick={() => {
                const data = {
                  "drinkId": drinkId,
                  "userId": userId,
                  "item": { 
                    review,
                    "imgUrl": "",
                    "isPublic": true,
                  }
                }
                dispatch(updateWish(data))
                  .then((res) => {
                    setReview('');
                  })
              }}
            ><img src={SubmitButton} alt="" /></ClickButton>
          </ReviewInputContainer>
        </>
      )}
    </>
  );
}
