import React, { useEffect, useState } from "react";
import DrinkDetailCard from "../../components/common/DrinkDetailCard";
import { TSearchResult } from "../../components/common/SearchBar";
import styled from "styled-components";
import { getMyWishes } from "../../lib/api/wish";
import { Flex } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/reduxHooks";
import { useCookies } from "react-cookie";
import AlertHeart from "../../assets/img/Modal/alert-heart.png";
import { RootState } from "../../store/store";
import { getWish } from "../../store/reducers/Review/myReview";
import { getMyWishAll } from "../../store/reducers/Review/myAllWish";

export interface Drink {
  brewerId: string;
  capacity: string;
  description: string;
  id: string;
  imgUrl: string | null;
  material: string;
  name: string;
  percent: string;
  region: string;
  spercent: number[];
  tags: string[];
  __v: number;
  _id: string;
}

export interface Review {
  drinkId: Drink;
  id: string;
  imgUrl: string | null;
  isPublic: boolean;
  review: string | null;
  userId: string;
  __v: number;
  _id: string;
}

const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 18px 15px 18px;
  gap: 14px;
  height: calc(100vh - 208px);
  overflow-y: scroll;
`;

export default function LoginWishPage() {
  const user = useAppSelector((state: RootState) => state.user);
  const myAllWish = useAppSelector((state: RootState) => state.myAllWish.myWishes);
  const myWishLike = useAppSelector((state: RootState) => state.myAllWish.isLike);
  const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);

  // 토큰값 가져오기
  const token = cookies["authToken"];

  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = {
      region: null,
      token: token
    }
    dispatch(getMyWishAll(data))
  }, [dispatch, myWishLike]);

  return (
    <Flex gap="25px" direction="column" align="center" style={{ overflow: 'hidden' }}>
      <div style={{ width: "90vw", paddingTop: "30px", fontSize: "5vw" }}>
        <b>{user.user.name}</b>님의 무박오일 여행
      </div>
      {myAllWish ? (
        <ListItems>
          {myAllWish.map((item, idx) => (
            <DrinkDetailCard key={idx} {...item} />
          ))}
        </ListItems>
      ) : (
        <div
          style={{
            width: "90vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            fontSize: "2.1vh",
            gap: "3vh",
            fontWeight: "bold",
          }}
        >
          <img src={AlertHeart} alt="" style={{ width: "25vw" }} />
          하트를 눌러 위시리스트에 추가해보세요!
        </div>
      )}
    </Flex>
  );
}
