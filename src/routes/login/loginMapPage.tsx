import React,{useState}from 'react'
import SwitchButton from '../../components/common/SwitchButton'
import styled from 'styled-components';
import { Flex } from '@mantine/core';
import map from '../../assets/img/Map/무박오일map 시도.png'
import marker from '../../assets/img/Map/marker.png'
import { useNavigate } from 'react-router';

type PinType ={
  top: number,
  left: number
}

const Title = styled.div`
  font-family: 'GangwonEdu_OTFBoldA' !important;
  font-Size : 25px;
`
const Map = styled.div`
  background-image: url('${map}');
  width: 350px;
  height: 500px;
`

const MarkerContainer = styled.div`
  position: relative;
  width: 350px;
  height: 500px;
`


const Marker = styled.button<PinType>`
  background-color: transparent;
  background-image: url('${marker}');
  position: absolute;
  border: none;
  width: 65px;
  height : 65px;
  ${(props)=>
    `top:${props.top}px;
    left: ${props.left}px;`
  }
`




const MarkerText = styled.div`
  font-family: 'Pretendard-Regular' !important;
  width:30px;
  height:18px;
  font-size: 16px;
  position: absolute;
  font-weight: bold;
  top: 15px;
  left: 17px;
  text-align: end;
`

export default function LoginMapPage() {
  const [isCity, setIsCity] = useState(false)
  const [name,setName] = useState('진언')

  return (
      <Flex h='100vh' direction="column" justify="center" align="center" gap="20">
        <Flex  direction="column" justify="center" align="center" gap="25" >
          <Title><b >{name}님</b>의 무박오일 여행</Title>
          <SwitchButton setIsCity={setIsCity}/>
        </Flex>
         <Map>
         {!isCity? 
          <MarkerContainer>
            <Marker left={80} top={63}><MarkerText>경기</MarkerText></Marker>
            <Marker left={168} top={69}><MarkerText>강원</MarkerText></Marker>
            <Marker left={62} top={182}><MarkerText>충남</MarkerText></Marker>
            <Marker left={133} top={149}><MarkerText>충북</MarkerText></Marker>
            <Marker left={88} top={251}><MarkerText>전북</MarkerText></Marker>
            <Marker left={208} top={193}><MarkerText>경북</MarkerText></Marker>
            <Marker left={74} top={326}><MarkerText>전남</MarkerText></Marker>
            <Marker left={166} top={290}><MarkerText>경남</MarkerText></Marker>
            <Marker left={7} top={411}><MarkerText>제주</MarkerText></Marker>
          </MarkerContainer> : 
          <MarkerContainer>
            <Marker left={82} top={91}><MarkerText>서울</MarkerText></Marker>
            <Marker left={45} top={84}><MarkerText>인천</MarkerText></Marker>
            <Marker left={88} top={169}><MarkerText>새종</MarkerText></Marker>
            <Marker left={110} top={204}><MarkerText>대전</MarkerText></Marker>
            <Marker left={63} top={307}><MarkerText>광주</MarkerText></Marker>
            <Marker left={186} top={237}><MarkerText>대구</MarkerText></Marker>
            <Marker left={256} top={261}><MarkerText>울산</MarkerText></Marker>
            <Marker left={218} top={308}><MarkerText>부산</MarkerText></Marker>
          </MarkerContainer> 
         }
         </Map>
      </Flex>
  )
}
