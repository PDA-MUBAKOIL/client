import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks/reduxHooks'
import styled from 'styled-components';
import { Flex, Grid } from '@mantine/core';
import { setIsDetail } from '../../../store/reducers/Drink/showModal';
import { setDrinkDetail } from '../../../store/reducers/Drink/drinkDetail';
import { setPage } from '../../../store/reducers/Modal/page';
import { RootState } from '../../../store/store';
import { getAllWish } from '../../../store/reducers/Review/allReview';
import { getWish } from '../../../store/reducers/Review/myReview';

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
  object-fit: contain;
`

const Name = styled.div`
  font-size: 13px;
`

export default function CardList() {
  const cardList = useAppSelector(state=>state.cardList);
  const modalPage = useAppSelector(state=>state.modalPage.page);
  const token = useAppSelector((state: RootState) => state.user.user.token);
  const dispatch = useAppDispatch();


  function onClickCard(drinkId:string){
    dispatch(setDrinkDetail({drinkId:drinkId}))
    dispatch(setIsDetail(true))
    dispatch(setPage(1))

    const data = {
      drinkId: drinkId,
      token: token,
    }

    console.log(drinkId)
    dispatch(getAllWish(data))
    dispatch(getWish(data))
  }

  useEffect(()=>{
    console.log(cardList);
  })
  return (
    <>
      {modalPage === 0 && 
        <Flex w='100%' direction="column" justify="center" align="center" gap="13">
          <Title>{cardList.title}</Title>
            <CardListContainer>
              <Grid style={{padding:'5px 10px 0px 0px', height: '505px', width:'280px', overflowX:'hidden', overflowY:'scroll'}}>
                {cardList.list.map((v,idx:number)=>{
                  return (
                  <Grid.Col key={idx} span={6} style={{display:'flex', justifyContent:'center'}}>
                    <Card onClick={()=>{onClickCard(v.drinkId.id)}} >
                      <Img src={v.drinkId.imgUrl} alt={v._id}></Img>
                      <Name>{v.drinkId.name}</Name>
                    </Card>
                  </Grid.Col>
                  )
                })}
              </Grid>
            </CardListContainer>
        </Flex>
      }
    </>
  )
}
