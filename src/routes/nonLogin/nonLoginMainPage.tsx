import React from "react";
import Banner from "../../components/common/Banner";
import DrinkCard from "../../components/common/DrinkCard";
import { Text } from "@mantine/core";
import styled from "styled-components";

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
  // 임시데이터
  const data = [
    {
      url: "https://thesool.com/common/imageView.do?targetId=PR00001095&targetNm=PRODUCT",
      name: "이천미 예술",
      id: "",
    },
    {
      url: "https://thesool.com/common/imageView.do?targetId=PR00001220&targetNm=PRODUCT",
      name: "우곡소주",
      id: "",
    },
    {
      url: "https://thesool.com/common/imageView.do?targetId=PR00001218&targetNm=PRODUCT",
      name: "맵시 막걸리 블랙라벨",
      id: "",
    },
    {
      url: "https://thesool.com/common/imageView.do?targetId=PR00001212&targetNm=PRODUCT",
      name: "조오탁",
      id: "",
    },
    {
      url: "https://thesool.com/common/imageView.do?targetId=PR00001197&targetNm=PRODUCT",
      name: "무박이일",
      id: "",
    },
    {
      url: "https://thesool.com/common/imageView.do?targetId=PR00001190&targetNm=PRODUCT",
      name: "탱자C",
      id: "",
    },
    {
      url: "https://thesool.com/common/imageView.do?targetId=PR00001187&targetNm=PRODUCT",
      name: "BURNT 번트",
      id: "",
    },
    {
      url: "https://thesool.com/common/imageView.do?targetId=PR00001218&targetNm=PRODUCT",
      name: "맵시 막걸리 블랙라벨",
      id: "",
    },
  ];

  return (
    <>
      <Banner />
      <MainText>술 리스트</MainText>
      <ListItems>
        {data.map((item, idx) => (
          <DrinkCard url={item.url} name={item.name} id={item.id} />
        ))}
      </ListItems>
    </>
  );
}
