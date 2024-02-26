import React, { useEffect } from "react";
import Banner from "../../components/common/Banner";
import DrinkCard from "../../components/common/DrinkCard";
import { Text } from "@mantine/core";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import { setDrinkList } from "../../store/reducers/Drink/allDrink";
import { RootState } from "../../store/store";

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

const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 18px;
  gap: 12px;
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

  return (
    <>
      <Banner />
      <MainText>술 리스트</MainText>
      <ListItems>
        {drinkState.data?.map((item: DrinkType, idx: number) => (
          <DrinkCard
            // key={item._id}
            key={idx}
            url={item.imgUrl}
            name={item.name}
            id={item.id}
          />
        ))}
      </ListItems>
    </>
  );
}
