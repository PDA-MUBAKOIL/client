import React, { useEffect, useRef, useState } from "react";
import SearchBar from "../../components/common/SearchBar";
import { TSearchResult } from "../../components/common/SearchBar";
import { Flex } from "@mantine/core";
import styled from "styled-components";

import TagButton from "../../components/common/TagButton";
import DrinkDetailCard from "../../components/common/DrinkDetailCard";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import { setSearch } from "../../store/reducers/Drink/search";
import { searchDrink } from "../../lib/api/drinks";

const LoginSearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  margin-bottom: 2vh;
`;

const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 18px 20px 18px;
  gap: 14px;
  height: 70vh;
  overflow-y: scroll;
`;

export default function LoginSearchPage() {
  const TagContent = [
    "육류",
    "한식",
    "분식",
    "해산물",
    "중식",
    "기름진 음식",
    "양식",
    "과일/디저트",
    "찜/탕",
    "일식",
    "견과류/마른안주",
  ];

  const RegionTag = [
    "서울",
    "인천",
    "대전",
    "세종",
    "광주",
    "울산",
    "부산",
    "대구",
    "경기",
    "충북",
    "충남",
    "강원",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
  ];

  const [result, setResult] = useState<Array<TSearchResult>>([]);
  const search = useAppSelector((state) => state.search.search);
  const dispatch = useAppDispatch();

  function onClickTag(tag: string) {
    dispatch(setSearch("#" + tag));
    searchDrink(tag, null, null, null).then((data) => {
      if (data !== undefined) {
        setResult(data.data);
      }
    });
  }

  function onClickRegion(tag: string) {
    dispatch(setSearch("#" + tag));
    searchDrink(null, null, null, tag).then((data) => {
      console.log('data: ', data)
      if (data !== undefined) {
        setResult(data.data);
      }
    });
  }

  return (
    <LoginSearchPageContainer>
      <Flex h="16vh" align="center" justify="center">
        <SearchBar
          setResult={setResult}
          placeHolder="술의 도수를 검색해보세요. ex) 5, 7"
        />
      </Flex>
      {search === "" ? (
        <div style={{ height: "65vh", overflowY: "scroll" }}>
          <Flex direction="column" w="90vw">
            <div
              style={{
                color: "rgb(0,0,0,0.3)",
                width: "90vw",
                padding: "5px",
                fontSize: "14px",
              }}
            >
              음식태그를 눌러보세요
            </div>
            <Flex wrap="wrap" gap="5px" w="90vw" mb="30">
              {TagContent.map((tag, idx) => {
                return (
                  <TagButton
                    key={idx}
                    text={tag}
                    onClick={() => {
                      onClickTag(tag);
                    }}
                    type="food"
                  />
                );
              })}
            </Flex>
            <div
              style={{
                color: "rgb(0,0,0,0.3)",
                width: "90vw",
                padding: "5px",
                fontSize: "14px",
              }}
            >
              지역태그를 눌러보세요
            </div>
            <Flex wrap="wrap" gap="5px" w="90vw">
              {RegionTag.map((tag, idx) => {
                return (
                  <TagButton
                    key={idx}
                    text={tag}
                    onClick={() => {
                      onClickRegion(tag);
                    }}
                    type="region"
                  />
                );
              })}
            </Flex>
          </Flex>
        </div>
      ) : (
        <ListItems>
          {result.map((item, idx) => (
            <DrinkDetailCard key={idx} {...item} />
          ))}
        </ListItems>
      )}
    </LoginSearchPageContainer>
  );
}
