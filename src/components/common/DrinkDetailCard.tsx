import React, { useEffect, useState } from "react";
import { TSearchResult } from "./SearchBar";
import styled from "styled-components";
import FillHeart from "../../assets/img/Modal/fill-heart.svg";
import EmptyHeart from "../../assets/img/Modal/empty-heart.svg";
import { Flex } from "@mantine/core";
import { Button, rem } from "@mantine/core";
import { useAppDispatch } from "../../lib/hooks/reduxHooks";
import { setIsDetail, setIsShow } from "../../store/reducers/Drink/showModal";

type TagProp = {
  text: string;
  onClick: () => void;
};

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 321px;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.25);
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 280px;
`;

function TagButton({ text, onClick }: TagProp) {
  return (
    <Button
      style={{
        paddingLeft: rem("12px"),
        paddingRight: rem("12px"),
        height: rem("18px"),
        backgroundColor: "#DFBBBB",
        color: "#000",
        fontSize: rem("8px"),
        fontWeight: rem(400),
        borderRadius: rem("5px"),
        border: "solid 1px #C17878",
      }}
      onClick={onClick}
    >
      #{text}
    </Button>
  );
}

export default function DrinkDetailCard(item: TSearchResult) {
  const [isLike, setIsLike] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  function onCardClick() {
    dispatch(setIsShow(true));
    dispatch(setIsDetail(true));
  }

  return (
    <Card>
      <CardContent onClick={onCardClick}>
        <img
          src={item.imgUrl}
          alt={item.name}
          style={{ width: "80px", height: "100px", objectFit: "cover" }}
        />
        <Flex gap="14px" direction="column" style={{ width: "100%" }}>
          <Flex gap="7px" direction="column">
            <div style={{ fontSize: "14px" }}>{item.name}</div>
            <Flex gap="4px" direction="column">
              <Flex gap="8px">
                <div style={{ fontSize: "10px" }}>도수</div>
                <div style={{ fontSize: "10px" }}>|</div>
                <div style={{ fontSize: "10px" }}>{item.percent}</div>
              </Flex>
              <Flex gap="8px">
                <div style={{ fontSize: "10px" }}>용량</div>
                <div style={{ fontSize: "10px" }}>|</div>
                <div style={{ fontSize: "10px" }}>{item.capacity}</div>
              </Flex>
              <Flex gap="8px">
                <div style={{ fontSize: "10px" }}>제조</div>
                <div style={{ fontSize: "10px" }}>|</div>
                <div
                  style={{
                    fontSize: "10px",
                    width: "80%",
                    wordBreak: "break-all",
                  }}
                >
                  {item.brewerId.name}
                </div>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap="3px">
            {item.tags.map((tag, idx) => {
              return <TagButton key={idx} text={tag} onClick={() => {}} />;
            })}
          </Flex>
        </Flex>
      </CardContent>
      {isLike ? (
        <img
          src={FillHeart}
          alt=""
          style={{ width: "20px" }}
          onClick={() => setIsLike(false)}
        />
      ) : (
        <img
          src={EmptyHeart}
          alt=""
          style={{ width: "20px" }}
          onClick={() => setIsLike(true)}
        />
      )}
    </Card>
  );
}
