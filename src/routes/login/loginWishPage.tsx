import React, { useEffect, useState } from "react";
import DrinkDetailCard from "../../components/common/DrinkDetailCard";
import { TSearchResult } from "../../components/common/SearchBar";
import styled from "styled-components";
import { getMyWishes } from "../../lib/api/wish";
import { Flex } from "@mantine/core";
import { useAppSelector } from "../../lib/hooks/reduxHooks";
import { useCookies } from "react-cookie";
import AlertHeart from "../../assets/img/Modal/alert-heart.png";

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
  padding: 5px 18px;
  gap: 14px;
  height: calc(100vh - 195px);
  overflow-y: scroll;
`;

export default function LoginWishPage() {
  const [result, setResult] = useState<Array<TSearchResult>>([]);
  const user = useAppSelector((state) => state.user);
  const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);

  // 토큰값 가져오기
  const token = cookies["authToken"];

  useEffect(() => {
    getMyWishes(null, token).then((data) => {
      setResult(
        data.data.map((data: Review) => {
          return data["drinkId"];
        })
      );
    });
  }, []);
  return (
    <Flex h="calc(100vh - 124px)" gap="25px" direction="column" align="center">
      <div style={{ width: "90vw", paddingTop: "30px", fontSize: "5vw" }}>
        <b>{user.user.name}</b>님의 무박오일 여행
      </div>
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
      <ListItems>
        {result.map((item, idx) => (
          <DrinkDetailCard key={idx} {...item} />
        ))}
      </ListItems>
    </Flex>
  );
}
