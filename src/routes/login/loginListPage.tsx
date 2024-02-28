import React, { useEffect, useRef, useState } from "react";
import SearchBar from "../../components/common/SearchBar";
import { TSearchResult } from "../../components/common/SearchBar";
import { Flex, Grid } from "@mantine/core";
import styled from "styled-components";
import DrinkCard from "../../components/common/DrinkCard";
import { Text } from "@mantine/core";
import { listUp } from "../../lib/api/drinks";
import { useAppSelector } from "../../lib/hooks/reduxHooks";
import { RootState } from "../../store/store";

const LoginSearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 70vh;
  overflow-y: scroll;
`;

const MainText = styled(Text)`
  font-size: 5vw;
  padding: 0px 20px;
`;

export default function LoginListPage() {
  const [result, setResult] = useState<Array<TSearchResult>>([]);
  const [searchResult, setSearchResult] = useState<Array<TSearchResult>>([]);
  const [itemsToShow, setItemsToShow] = useState<Array<TSearchResult>>([]);
  const [itemsToShowCount, setItemsToShowCount] = useState(0);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const isSearch = useAppSelector((state: RootState) => state.search.isSearch);

  useEffect(() => {
    listUp().then((data) => {
      setResult(data.data);
      setSearchResult(data.data);
      // setItemsToShow(data.data.slice(0, itemsToShowCount));
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreItems();
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [result]);

  const loadMoreItems = () => {
    setItemsToShowCount((prevCount) => {
      const newCount = prevCount + 30;
      console.log(newCount);
      setItemsToShow(result.slice(0, newCount));
      return newCount;
    });
  };

  return (
    <LoginSearchPageContainer>
      <Flex h="15vh" align="center" justify="center">
        <SearchBar
          setResult={setSearchResult}
          placeHolder="술의 이름을 검색해보세요."
        />
      </Flex>
      <MainText>술 리스트</MainText>
      <ListItems>
        {!isSearch ? (
          itemsToShow?.map((item, idx) => (
            <DrinkCard
              url={item.imgUrl}
              name={item.name}
              drinkId={item.id}
              key={idx}
            />
          ))
        ) : (
          searchResult?.map((item, idx) => (
            <DrinkCard
              url={item.imgUrl}
              name={item.name}
              drinkId={item.id}
              key={idx}
            />
          ))
        )}
        <div ref={observerRef} style={{ height: "10px", width: '100vw' }}></div>
      </ListItems>
    </LoginSearchPageContainer>
  );
}
