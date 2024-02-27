import React,{useEffect, useState} from 'react'
import SearchBar from '../../components/common/SearchBar';
import { TSearchResult } from '../../components/common/SearchBar';
import { Flex} from '@mantine/core';
import styled from 'styled-components';
import DrinkCard from "../../components/common/DrinkCard";
import { Text } from "@mantine/core";
import { listUp } from '../../lib/api/drinks';

const LoginSearchPageContainer = styled.div`
  display:flex;
  flex-direction: column;
  overflow: hidden;

`

const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 18px;
  gap: 12px;
  overflow-y:scroll;
`;

const MainText = styled(Text)`
  font-size: 20px;
  padding: 0px 20px;
`;

export default function LoginListPage() {

  const [result, setResult] = useState<Array<TSearchResult>>([]);
  useEffect(()=>{
    listUp().then((data)=>{
      setResult(data.data)
    });
  },[])

  return (
    <LoginSearchPageContainer>
      <Flex h='110px' align='center' justify='center'>
        <SearchBar setResult={setResult} placeHolder='술의 이름을 검색해보세요.'/>
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
