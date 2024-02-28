import React, { useEffect, useState } from "react";
import { TSearchResult } from "./SearchBar";
import styled from "styled-components";
import FillHeart from "../../assets/img/Modal/fill-heart.svg";
import EmptyHeart from "../../assets/img/Modal/empty-heart.svg";
import { Flex } from "@mantine/core";
import { Button, rem } from "@mantine/core";
import { useAppDispatch } from "../../lib/hooks/reduxHooks";
import { setIsDetail, setIsShow } from "../../store/reducers/Drink/showModal";
import { setDrinkDetail } from "../../store/reducers/Drink/drinkDetail";
import { useNavigate } from "react-router-dom";
import { setSearch } from "../../store/reducers/Drink/search";
import { deleteMyWish, isWish, writeMyWish } from "../../lib/api/wish";
import { useCookies } from "react-cookie";
import { deletedWish, writeWish } from "../../store/reducers/Review/myReview";
import { setLikeState } from "../../store/reducers/Review/myAllWish";

type TagProp = {
  text: string;
  onClick: () => void;
};

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 10px;
  padding: 2vw;
  box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.25);
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6vw;
  width: 80vw;
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
        fontSize: "2.5vw",
        fontWeight: rem(400),
        borderRadius: rem("5px"),
        border: "solid 1px #C17878",
        margin: "1.5px",
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
  const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);
  // 토큰값 가져오기
  const token = cookies["authToken"];

  function onCardClick() {
    dispatch(setDrinkDetail({ drinkId: item.id }));
    dispatch(setIsShow(true));
    dispatch(setIsDetail(true));
  }

  const navigate = useNavigate();

  function onClickTag(text: string) {
    dispatch(setIsShow(false));
    dispatch(setSearch("#" + text));
    navigate("/search", { state: { tag: "#" + text } });
  }

  function addWish() {
    const data = {
      drinkId: item.id,
      item: {
        review: "",
        imgUrl: "",
        isPublic: true,
        token: token,
      }
    }

    dispatch(writeWish(data))
      .then((res) => {
        setIsLike(true);
      })
  }

  function deleteWish() {
    const data = {
      drinkId: item.id,
      token,
    }
    dispatch(deletedWish(data))
      .then((data) => {
        setIsLike(false);
      });
  }

  useEffect(() => {
    isWish(token, item.id).then((data) => {
      setIsLike(data.data.result);
    });
  });

  useEffect(() => {
    dispatch(setLikeState(isLike))
  }, [isLike])

  return (
    <Card>
      <CardContent>
        <img
          onClick={onCardClick}
          src={item.imgUrl}
          alt={item.name}
          style={{ width: "25%", height: "12vh", objectFit: "contain" }}
        />
        <Flex gap="14px" direction="column" style={{ width: "55vw" }}>
          <Flex onClick={onCardClick} gap="7px" direction="column">
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
                    width: "73%",
                    wordBreak: "break-all",
                  }}
                >
                  {item.brewerId.name}
                </div>
              </Flex>
            </Flex>
          </Flex>
          <div style={{ width: "60vw", display: "block" }}>
            {item.tags.map((tag, idx) => {
              return (
                <TagButton
                  key={idx}
                  text={tag}
                  onClick={() => {
                    onClickTag(tag);
                  }}
                />
              );
            })}
          </div>
        </Flex>
      </CardContent>
      {isLike ? (
        <img
          src={FillHeart}
          alt=""
          style={{ width: "20px" }}
          onClick={() => deleteWish()}
        />
      ) : (
        <img
          src={EmptyHeart}
          alt=""
          style={{ width: "20px" }}
          onClick={() => addWish()}
        />
      )}
    </Card>
  );
}
