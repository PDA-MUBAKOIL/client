import React, { useEffect, useRef, useState } from "react";
import Banner from "../../components/common/Banner";
import DrinkCard from "../../components/common/DrinkCard";
import { Text } from "@mantine/core";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import { setDrinkList } from "../../store/reducers/Drink/allDrink";
import { RootState } from "../../store/store";
import { TSearchResult } from "../../components/common/SearchBar";

type DrinkType = {
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

const ListContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`

const ListItems = styled.div`
  height: 52vh;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

const MainText = styled(Text)`
  font-size: 20px;
  padding: 20px;
`;

export default function NonLoginMainPage() {
  const dispatch = useAppDispatch();
  const drinkState = useAppSelector((state: RootState) => state.drinkList);

  useEffect(() => {
    dispatch(setDrinkList());
  }, [dispatch]);

  const [itemsToShow, setItemsToShow] = useState<Array<TSearchResult>>([]);
  const [itemsToShowCount, setItemsToShowCount] = useState(0);
  const observerRef = useRef<HTMLDivElement | null>(null);

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
  }, [drinkState]);

  const loadMoreItems = () => {
    setItemsToShowCount((prevCount) => {
      const newCount = prevCount + 30;
      console.log(newCount);
      setItemsToShow(drinkState?.data.slice(0, newCount));
      return newCount;
    });
  };

  return (
    <ListContainer>
      <Banner />
      <MainText>술 리스트</MainText>
      <ListItems>
        {itemsToShow?.map((item: DrinkType, idx: number) => (
          <DrinkCard
            // key={item._id}
            key={item._id}
            url={item.imgUrl}
            name={item.name}
            drinkId={item._id}
          />
        ))}
        <div ref={observerRef} style={{ height: "10px", width: '100vw' }}></div>
      </ListItems>
    </ListContainer>
  );
}
