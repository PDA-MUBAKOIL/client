import React,{useState, useEffect}from 'react'
import SwitchButton from '../../components/common/SwitchButton'
import styled from 'styled-components';
import { Flex } from '@mantine/core';
import map from '../../assets/img/Map/무박오일map 시도.png'
import marker from '../../assets/img/Map/marker.png'

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
  width:30px;
  height:18px;
  font-size: 14px;
  position: absolute;
  font-weight: bold;
  color: rgb(0,0,0,50%);
  top: 10px;
  left: 18px;
  text-align:center;
`

const MarkerCount = styled.div`
  width:39px;
  height:24px;
  font-size: 16px;
  position: absolute;
  font-weight: bold;
  top: 25px;
  left: 14px;
  text-align:center;
`

function MarkerComponent(props:{region:string, fullName:string, left:number, top:number}){
  const onClickMarker = () => {
    //axios.get(`/api/wish/${userId}`,{params:{region:region}})
  }

  useEffect(()=>{

  })

  return(
    <Marker onClick={onClickMarker} left={props.left} top={props.top}>
      <MarkerText>{props.region}</MarkerText>
      <MarkerCount>1</MarkerCount>
    </Marker>
  )
}


export default function LoginMapPage() {
  const [isCity, setIsCity] = useState(false)
  const [name,setName] = useState('진언')
  const [cnt, setCnt] = useState([1,1,1,1,1,1,1,1,1])

  useEffect(()=>{
    // axios.get('api/')
  },[])
  return (
      <Flex h='100vh' direction="column" justify="center" align="center" gap="20">
        <Flex  direction="column" justify="center" align="center" gap="25" >
          <Title><b >{name}님</b>의 무박오일 여행</Title>
          <SwitchButton setIsCity={setIsCity}/>
        </Flex>
         <Map>
         {!isCity? 
          <MarkerContainer>
            <MarkerComponent left={80} top={63} region='경기' fullName='경기도'/>
            <MarkerComponent left={168} top={69} region='강원' fullName='강원도'/>
            <MarkerComponent left={62} top={182} region='충남' fullName='충청남도'/>
            <MarkerComponent left={133} top={149} region='충북' fullName='충청북도'/>
            <MarkerComponent left={88} top={251} region='전북' fullName='전라북도'/>
            <MarkerComponent left={208} top={193} region='경북' fullName='경상북도'/>
            <MarkerComponent left={74} top={326} region='전남' fullName='전라남도'/>
            <MarkerComponent left={166} top={290} region='경남' fullName='경상남도'/>
            <MarkerComponent left={7} top={411} region='제주' fullName='제주특별자치도'/>
          </MarkerContainer> : 
          <MarkerContainer>
            <MarkerComponent left={82} top={91} region='서울' fullName='서울특별시'/>
            <MarkerComponent left={45} top={84} region='인천' fullName='인천광역시'/>
            <MarkerComponent left={88} top={169} region='세종' fullName='세종특별자치시'/>
            <MarkerComponent left={110} top={204} region='대전' fullName='대전광역시'/>
            <MarkerComponent left={63} top={307} region='광주' fullName='광주광역시'/>
            <MarkerComponent left={186} top={237} region='대구' fullName='대구광역시'/>
            <MarkerComponent left={256} top={261} region='울산' fullName='울산광역시'/>
            <MarkerComponent left={224} top={307} region='부산' fullName='부산광역시'/>
          </MarkerContainer> 
         }
         </Map>
      </Flex>
  )
}
