import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../lib/hooks/reduxHooks';
import { getAllWish } from '../../../store/reducers/Review/allReview';
import { useCookies } from 'react-cookie';
import { getWish } from '../../../store/reducers/Review/myReview';

type ToggleProps = {
  isReview: boolean;
  setIsReview: React.Dispatch<React.SetStateAction<boolean>>;
  drinkId: string;
  userId: string;
}

const ToggleContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 0 25px 0;
`

const ToggleBtn1 = styled.div<{ isreview: string }>`
  width: 100%;
  height: 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  ${(props) => 
    props.isreview === 'true' ?
    `
      background-color: #C17878;
      color: #fff;
      
    ` :
    `
      border: solid 1px #C17878;
    `
  }
`

const ToggleBtn2 = styled.div<{ isreview: string }>`
  width: 100%;
  height: 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  ${(props) => 
    props.isreview === 'true' ?
    `
      background-color: #C17878;
      color: #fff;
    ` :
    `
      border: solid 1px #C17878;
    `
  }
`

export default function ToggleButton({ isReview, setIsReview }: ToggleProps) {
  useEffect(() => {
    if (isReview) {
      setIsReview(true);
    } else {
      setIsReview(false);
      
    }
  }, [isReview])

  return (
    <ToggleContainer>
      <ToggleBtn1 onClick={() => setIsReview(false)} isreview={isReview ? "false" : "true"}>디테일</ToggleBtn1>
      <ToggleBtn2 onClick={() => setIsReview(true)} isreview={isReview ? "true" : "false"}>리뷰</ToggleBtn2>
    </ToggleContainer>
  )
}
