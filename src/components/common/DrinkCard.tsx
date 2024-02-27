import React, { useEffect, useState } from "react";
import { Container, Text } from "@mantine/core";
import styled from "styled-components";
import { useAppDispatch } from "../../lib/hooks/reduxHooks";
import { setIsDetail, setIsShow } from "../../store/reducers/Drink/showModal";
import { setDrinkDetail } from "../../store/reducers/Drink/drinkDetail";
import { getWish } from "../../store/reducers/Review/myReview";
import { getAllWish } from "../../store/reducers/Review/allReview";
import { useCookies } from "react-cookie";

export type DrinkProp = {
  drinkId: string;
  url: string;
  name: string;
};

const DrinkContainer = styled(Container)`
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 144px;
  gap: 8px;
  margin: 8px 0;
  padding: 0;
`;
const ImageContainer = styled.div`
  width: 100px;
  height: 120px;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const NameFont = styled(Text)`
  word-break: keep-all;
  text-align: center;
  font-size: 3vw;
`;

export default function DrinkCard({ drinkId, url, name }: DrinkProp) {
  const dispatch = useAppDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(['authToken']);

    // 토큰값 가져오기
  const token = cookies['authToken'];

  function onDrinkDetailClick(drinkId: string) {
    const action = setDrinkDetail({ drinkId: drinkId });
    dispatch(action);
    dispatch(setIsDetail(true));
    dispatch(setIsShow(true));

    const data = {
      drinkId: drinkId,
      token: token,
    }

    console.log(drinkId)
    dispatch(getAllWish(data))
    dispatch(getWish(data))
  }

  return (
    <DrinkContainer onClick={() => onDrinkDetailClick(drinkId)}>
      <ImageContainer>
        <Image src={url} alt="" />
      </ImageContainer>
      <NameFont>{name}</NameFont>
    </DrinkContainer>
  );
}
