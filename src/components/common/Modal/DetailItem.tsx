import React, { useState } from "react";
import { Text, Group, rem, Input } from "@mantine/core";
import styled from "styled-components";
import TagButton from "../TagButton";
import FillHeart from "../../../assets/img/Modal/fill-heart.svg";
import EmptyHeart from "../../../assets/img/Modal/empty-heart.svg";
import InputContainer from "../InputContainer";
import CommonButton from "../CommonButton";

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
  width: 100%;
  height: 200px;
  padding: 20px;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

const ReviewFont = styled.h3`
  width: 100%;
  text-align: start;
  padding: 0 5px;
`;

const ClickButton = styled.div<{ state: string }>`
  background-color: #c17878;
  padding: 10px 35px;
  width: 130px;
  border-radius: 99px;
  color: #fff;
  text-align: center;
  ${(props) =>
    props.state === "disabled" &&
    `
      background-color: #747474
    `}
`;

export default function DetailItem({ detail }: DetailProps) {
  const { imgUrl, name, materials, percent, volume, description } = detail;

  const [isLike, setIsLike] = useState<boolean>(false);
  const [page, setPage] = useState<Number>(0);

  return (
    <>
      {page === 0 ? (
        <>
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
          <div
            style={{
              width: "100%",
              zoom: "0.8",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <CommonButton
              text="리뷰 남기기"
              onClick={() => setPage(1)}
              status="active"
            />
            <img
              src={isLike ? FillHeart : EmptyHeart}
              alt=""
              style={{ width: "34px" }}
              onClick={() => setIsLike((prev) => !prev)}
            />
          </div>
        </>
      ) : (
        <>
          <ReviewFont>"{name}"은 어떠셨나요?</ReviewFont>
          <ReviewInput placeholder="리뷰를 남겨보세요!" />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "20px 0 10px 0",
              gap: "10px",
            }}
          >
            <ClickButton state="disabled" onClick={() => setPage(0)}>
              이전
            </ClickButton>
            <ClickButton
              state="active"
              onClick={() => console.log("로그인 페이지로 이동")}
            >
              남기기
            </ClickButton>
          </div>
        </>
      )}
    </>
  );
}
