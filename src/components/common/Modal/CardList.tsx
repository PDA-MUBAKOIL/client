import React from 'react'
import { useAppSelector } from '../../../lib/hooks/reduxHooks'
import styled from 'styled-components';
import { Flex, Grid } from '@mantine/core';

export type ICard = {
        _id: string,
        drinkId: string,
        userId: string,
        review: string,
        imgUrl: string,
        isPublic: boolean,}

const Title = styled.div`
  font-size: 20px;
`

const CardListContainer = styled.div`
  overflow-x:hidden;
  width: 270px;


`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 154px;
  gap: 8px;
  border-radius: 15px;
  overflow:hidden;
  box-shadow: 0px 3px 10px 0 rgba(0,0,0,0.25);
`

const Img = styled.img`
  width: 120px;
  height: 120px;
`

const Name = styled.div`
  font-size: 13px;
`

export default function CardList() {
  const cardList = useAppSelector(state=>state.cardList);


  return (
    <Flex w='100%' direction="column" justify="center" align="center" gap="13">
      <Title>{cardList.title}</Title>
        <CardListContainer>
          <Grid style={{padding:'5px 10px 0px 0px', height: '505px', width:'280px', overflowX:'hidden', overflowY:'scroll'}}>
            {cardList.list.map((v:ICard,idx:number)=>{
              return (
              <Grid.Col key={idx} span={6} style={{display:'flex', justifyContent:'center'}}>
                <Card >
                  <Img src={v.imgUrl} alt={v._id}></Img>
                  <Name>{v.drinkId}</Name>
                </Card>
              </Grid.Col>
              )
            })}
          </Grid>
        </CardListContainer>
    </Flex>

  )
}
