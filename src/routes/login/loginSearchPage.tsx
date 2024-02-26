import React, { useEffect, useState } from "react";
import SearchBar from "../../components/common/SearchBar";
import { TSearchResult } from "../../components/common/SearchBar";
import { Flex } from "@mantine/core";
import styled from "styled-components";

import TagButton from "../../components/common/TagButton";
import DrinkDetailCard from "../../components/common/DrinkDetailCard";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import { setSearch } from "../../store/reducers/Drink/search";
import { listUp } from "../../lib/api/drinks";
import { useLocation } from "react-router-dom";

const LoginSearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: calc(100vh - 134px);
  align-items: center;
`;

const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 18px;
  gap: 14px;
  height: calc(100vh - 274px);
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
    "견과류/마른 안주",
  ];

  const [result, setResult] = useState<Array<TSearchResult>>([]);
  const search = useAppSelector((state) => state.search.search);
  const dispatch = useAppDispatch();
  const location = useLocation();

  function onClickTag(tag: string) {
    dispatch(setSearch(tag));
    listUp().then((data) => {
      setResult(data.data);
    });
  }

  useEffect(() => {
  }, [search]);
  return (
    <LoginSearchPageContainer>
      <Flex h="110px" align="center" justify="center">
        <SearchBar setResult={setResult} />
      </Flex>
      {search === "" ? (
        <Flex direction="column" w="350px">
          <Flex wrap="wrap" gap="5px">
            {TagContent.map((tag, idx) => {
              return (
                <TagButton
                  key={idx}
                  text={tag}
                  onClick={() => {
                    onClickTag("#" + tag);
                  }}
                />
              );
            })}
          </Flex>
        </Flex>
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
