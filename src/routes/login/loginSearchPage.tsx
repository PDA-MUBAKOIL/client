import React,{useEffect, useState} from 'react'
import SearchBar from '../../components/common/SearchBar';
import { TSearchResult } from '../../components/common/SearchBar';
import { Flex} from '@mantine/core';
import styled from 'styled-components';
import DrinkCard from "../../components/common/DrinkCard";
import { Text } from "@mantine/core";

const LoginSearchPageContainer = styled.div`
  display:flex;
  flex-direction: column;
  overflow: hidden;
  height: calc(100vh - 134px)

`

const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 18px;
  gap: 12px;
  height: calc(100vh - 274px);
  overflow-y:scroll;
`;

const MainText = styled(Text)`
  font-size: 20px;
  padding: 0px 20px;
`;

export default function LoginSearchPage() {
    // 임시데이터
  const temp = {      
  _id: "65d8413288669a99299535ed",
  tags: [
      "양식",
      "기름진음식"
  ],
  description: "오크에 숙성했기 때문에 깊은 향과 맛을 가지고 있답니다.색은 루비처럼 붉은빛을 띠며 약간의 단맛이 입안을 감싼 후에 상큼한 신맛으로 마무리됩니다.",
  brewerId: "65d8413188669a992995342e",
  region: "충북",
  capacity: "750ml",
  material: "머루, 포도, 백설탕, 효모, 메타중아황산칼륨, 아황산함유",
  __v: 0,
  id: "65d8413288669a99299535ed"}

  const data:Array<TSearchResult> = [
    {
      imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001095&targetNm=PRODUCT",
      name: "이천미 예술",
      ...temp
    },
    {
      imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001220&targetNm=PRODUCT",
      name: "우곡소주",
      ...temp
    },
    {
      imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001218&targetNm=PRODUCT",
      name: "맵시 막걸리 블랙라벨",
      ...temp
    },
    {
      imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001212&targetNm=PRODUCT",
      name: "조오탁",
      ...temp
    },
    {
      imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001197&targetNm=PRODUCT",
      name: "무박이일",
      ...temp
    },
    {
      imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001190&targetNm=PRODUCT",
      name: "탱자C",
      ...temp
    },
    {
      imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001187&targetNm=PRODUCT",
      name: "BURNT 번트",
      ...temp
    },
    {
      imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001218&targetNm=PRODUCT",
      name: "맵시 막걸리 블랙라벨",
      ...temp
    },
  ];

  const [value, setValue] = useState('');
  const [result, setResult] = useState(data.concat(data));


  return (
    <LoginSearchPageContainer>
      <Flex h='110px' align='center' justify='center'>
        <SearchBar setValue={setValue} setResult={setResult}/>
      </Flex>
      <MainText>술 리스트</MainText>
      <ListItems>
        {result.map((item, idx) => (
          <DrinkCard url={item.imgUrl} name={item.name} id={item.id} key={idx}/>
        ))}
      </ListItems>
    </LoginSearchPageContainer>

  )
}
