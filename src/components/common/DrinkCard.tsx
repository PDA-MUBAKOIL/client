import React from "react";
import { Container, Text } from "@mantine/core";
import styled from "styled-components";
import { useAppDispatch } from "../../lib/hooks/reduxHooks";
import { setIsDetail, setIsShow } from "../../store/reducers/Drink/showModal";
import { setDrinkDetail } from "../../store/reducers/Drink/drinkDetail";

export type DrinkProp = {
  id: string;
  url: string;
  name: string;
};

const DrinkContainer = styled(Container)`
  width: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0;
  margin: 8px 0;
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
  font-size: 14px;
`;

export default function DrinkCard({ id, url, name }: DrinkProp) {
  const dispatch = useAppDispatch();

  function onDrinkDetailClick() {
    console.log('아이디', id)
    dispatch(setDrinkDetail({ drinkId: id }))
      .then((res) => console.log('데이터어', res))

    dispatch(setIsDetail(true));
    dispatch(setIsShow(true));
  }

  return (
    <DrinkContainer onClick={onDrinkDetailClick}>
      <ImageContainer>
        <Image src={url} alt="" />
      </ImageContainer>
      <NameFont>{name}</NameFont>
    </DrinkContainer>
  );
}
