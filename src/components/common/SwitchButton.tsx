import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type ToggleType = {
  cityshow: string;
}

export type ShowType = {
  setIsCity: (state:boolean) => void;
}

const BtnWrapper = styled.div `
  display: flex;
  z-index: 0;
`;

const CheckBox = styled.input`
  display: none;
`;

const ButtonLabel = styled.label<ToggleType>`
  z-index: 10;
  width: 200px;
  height: 50px;
  border-radius: 100px;
  background-color: #fff;
  border: solid 1px #C17878;
  
  ${(props) => 
    props.cityshow === "true" ?
    `
      &::before {
        display: flex;
        position: absolute;
        // before 요소가 이동할 경로의 길이만큼 width 지정
        width: 200px;
        height: 50px;
        padding-right: 40px;
        // 우측에 text가 오기 위함
        justify-content: flex-end;
        align-items: center;
        content: '도';
        font-weight: bold;
        color: #000;
        transition: all 0.2s ease-out;
      };
      &::after {
        display: flex;
        position: relative;
        width: 7rem;
        height: 50px;
        justify-content: center;
        align-items: center;
        /* true일 때는 좌측에 있어야 함 */
        left: 0;
        border-radius: 100px;
        background-color: #C17878;
        content: '시';
        font-weight: bold;
        color: #fff;
        transition: all 0.2s ease-out;
        margin: -1px;
      }
    ` :
    `
      &::before {
        display: flex;
        position: absolute;
        // before 요소가 이동할 경로의 길이만큼 width 지정
        width: 200px;
        height: 50px;
        padding-left: 40px;
        // 좌측에 text가 오게 하기
        justify-content: flex-start;
        align-items: center;
        content: '시';
        font-weight: bold;
        color: #000;
        transition: all 0.2s ease-out;
      }
    
      &::after {
        display: flex;
        position: relative;
        width: 7rem;
        height: 50px;
        justify-content: center;
        align-items: center;
        // false일 때 우측에 있어야하므로 전체 길이의 반만큼 이동한 상태
        left: 90px;
        border-radius: 100px;
        background-color: #C17878;
        content: '도';
        font-weight: bold;
        color: #fff;
        transition: all 0.2s ease-out;
        margin: -1px;
      }
    `
  }
`;

export default function SwitchButton({ setIsCity }: ShowType) {
  const [cityShow, setCityShow] = useState<boolean>(false);

  const toggleHandler = () => {
    setCityShow(prev => !prev);
  }

  useEffect(() => {
    if (!cityShow) {
      setIsCity(false);
    } else {
      setIsCity(true);
    }
  }, [cityShow])

  return (
    <BtnWrapper>
      <CheckBox type="checkbox" id='toggleBtn' onChange={toggleHandler} />
      <ButtonLabel htmlFor="toggleBtn" cityshow={cityShow ? "true" : "false"} />
    </BtnWrapper>
  )
}
