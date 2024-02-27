import React, { useEffect, useState } from "react";
import DrinkDetailCard from "../../components/common/DrinkDetailCard";
import { TSearchResult } from "../../components/common/SearchBar";
import styled from "styled-components";
import { getMyWishes } from "../../lib/api/wish";
import { Flex } from "@mantine/core";
import { useAppSelector } from "../../lib/hooks/reduxHooks";
import { useCookies } from "react-cookie";

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

export default function LoginWishPage() {
  const [result, setResult] = useState<Array<TSearchResult>>([]);
  const user = useAppSelector((state) => state.user);
  const ListItems = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 18px;
    gap: 14px;
    height: calc(100vh - 195px);
    overflow-y: scroll;
  `;
  const [cookies, setCookie, removeCookie] = useCookies(['authToken']);

    // 토큰값 가져오기
  const token = cookies['authToken'];

  useEffect(()=>{
    getMyWishes(null, token).then(data=>{
      setResult(data.data.map((data:Review)=>{
        return data['drinkId']
      }));
    })
  },[])
  return (
    <Flex h="calc(100vh - 134px)" gap="25px" direction="column" align="center">
      <div style={{ width: "90vw", paddingTop: "30px", fontSize: "5vw" }}>
        <b>{user.user.name}</b>님의 무박오일 여행
      </div>
      <ListItems>
        {result.map((item, idx) => (
          <DrinkDetailCard key={idx} {...item} />
        ))}
      </ListItems>
    </Flex>
  );
}
