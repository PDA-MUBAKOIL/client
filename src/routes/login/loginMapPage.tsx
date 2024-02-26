import React,{useState, useEffect}from 'react'
import SwitchButton from '../../components/common/SwitchButton'
import styled from 'styled-components';
import { Flex } from '@mantine/core';
import defaultMap from '../../assets/img/Map/무박오일map 시도.png'
import marker from '../../assets/img/Map/marker.png'
import { useAppDispatch, useAppSelector } from '../../lib/hooks/reduxHooks';
import { setCardList } from '../../store/reducers/Drink/cardList';
import { getMyRegionWishCnt, getMyWishes } from '../../lib/api/wish';
import { setIsDetail, setIsShow } from '../../store/reducers/Drink/showModal';
import gengi from '../../assets/img/Map/경기도.png';
import gangwon from '../../assets/img/Map/강원도.png';
import chungbok from '../../assets/img/Map/충북.png';
import chungnam from '../../assets/img/Map/충남.png';
import geongnam from '../../assets/img/Map/경남.png';
import geongbok from '../../assets/img/Map/경북.png';
import jeonbok from '../../assets/img/Map/전북.png';
import jeonnam from '../../assets/img/Map/전남.png';
import jeju from '../../assets/img/Map/제주.png';
import seoul from '../../assets/img/Map/서울.png';
import incheon from '../../assets/img/Map/인천.png';
import sejong from '../../assets/img/Map/세종.png';
import daejeon from '../../assets/img/Map/대전.png';
import daegu from '../../assets/img/Map/대구.png';
import busan from '../../assets/img/Map/부산.png';
import ulsan from '../../assets/img/Map/울산.png';
import gwangju from '../../assets/img/Map/광주.png';


type PinType ={
  top: number,
  left: number
}


const Title = styled.div`
  font-family: 'GangwonEdu_OTFBoldA' !important;
  font-Size : 25px;
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




function MarkerComponent(props:{region:string, fullName:string, left:number, top:number, cnt:number, setMap:React.Dispatch<React.SetStateAction<string>>,  img:string}){
  const dispatch = useAppDispatch();
  const user = useAppSelector(state=>state.user);
  var clickState = false;

  const onClickMarker = () => {
    if(clickState){
      getMyWishes(user.id, props.region).then(data=>{
        const action = setCardList({
          title: props.fullName,
          list: data.data.map((v,idx)=>{return{...v,drinkId:`drinkId${idx}`}})
        })
        dispatch(action);
        dispatch(setIsDetail(false));
        dispatch(setIsShow(true));
      })}else{
        props.setMap(props.img);
        clickState = true;
      }
  }



  useEffect(()=>{

  
  },[])

  return(
    <>
    { props.cnt !== 0 ? <Marker onClick={onClickMarker} left={props.left} top={props.top}>
      <MarkerText>{props.region}</MarkerText>
      <MarkerCount>{props.cnt}</MarkerCount>
    </Marker>: null}
    </>
  )
}


export default function LoginMapPage() {
  const [isCity, setIsCity] = useState(false)
  const user = useAppSelector(state=>state.user);
  const [map,setMap] = useState(defaultMap);

  const BaseMap =styled.div`
    background-image: url('${defaultMap}');
    width: 350px;
    height: 500px;
  `
  const Map = styled.div`
    background-image: url('${map}');
    width: 350px;
    height: 500px;
  `

  const [cnt, setCnt] = useState(
    {
      "서울": 0, "인천": 0, "대전": 0, "세종": 0,
      "광주": 0, "울산": 0, "부산":	0, "대구": 0,
      "경기":	0, "충북": 0, "충남":	0, "강원": 0,
      "전북":	0, "전남": 0, "경북":	0, "경남": 0, "제주": 0
    })



  useEffect(()=>{
    getMyRegionWishCnt(user.id).then((data)=>{
      setCnt(data.data)
    })
    setMap(defaultMap);

  },[isCity])

  return (
      <Flex h='calc(100vh - 134px)' direction="column" justify="center" align="center" gap="20">
        <Flex  direction="column" justify="center" align="center" gap="25" >
          <Title><b >{user.name}님</b>의 무박오일 여행</Title>
          <SwitchButton setIsCity={setIsCity}/>
        </Flex>
         <Map>
          <BaseMap>
            {!isCity? 
              <MarkerContainer>
                <MarkerComponent img={gengi} setMap={setMap}left={80} top={63} region='경기' fullName='경기도' cnt={cnt['경기']}/>
                <MarkerComponent img={gangwon} setMap={setMap} left={168} top={69} region='강원' fullName='강원도' cnt={cnt['강원']}/>
                <MarkerComponent img={chungnam} setMap={setMap} left={62} top={182} region='충남' fullName='충청남도' cnt={cnt['충남']}/>
                <MarkerComponent img={chungbok} setMap={setMap} left={133} top={149} region='충북' fullName='충청북도' cnt={cnt['충북']}/>
                <MarkerComponent img={jeonbok} setMap={setMap} left={88} top={251} region='전북' fullName='전라북도' cnt={cnt['전북']}/>
                <MarkerComponent img={geongbok} setMap={setMap} left={208} top={193} region='경북' fullName='경상북도' cnt={cnt['경북']}/>
                <MarkerComponent img={jeonnam} setMap={setMap} left={74} top={326} region='전남' fullName='전라남도' cnt={cnt['전남']}/>
                <MarkerComponent img={geongnam} setMap={setMap} left={166} top={290} region='경남' fullName='경상남도' cnt={cnt['경남']}/>
                <MarkerComponent img={jeju} setMap={setMap} left={7} top={411} region='제주' fullName='제주특별자치도' cnt={cnt['제주']}/>
              </MarkerContainer> : 
              <MarkerContainer>
                <MarkerComponent img={seoul} setMap={setMap} left={82} top={91} region='서울' fullName='서울특별시' cnt={cnt['서울']}/>
                <MarkerComponent img={incheon} setMap={setMap} left={45} top={84} region='인천' fullName='인천광역시' cnt={cnt['인천']}/>
                <MarkerComponent img={sejong} setMap={setMap} left={88} top={169} region='세종' fullName='세종특별자치시' cnt={cnt['세종']}/>
                <MarkerComponent img={daejeon} setMap={setMap} left={110} top={204} region='대전' fullName='대전광역시' cnt={cnt['대전']}/>
                <MarkerComponent img={gwangju} setMap={setMap} left={63} top={307} region='광주' fullName='광주광역시' cnt={cnt['광주']}/>
                <MarkerComponent img={daegu} setMap={setMap} left={186} top={237} region='대구' fullName='대구광역시' cnt={cnt['대구']}/>
                <MarkerComponent img={ulsan} setMap={setMap} left={256} top={261} region='울산' fullName='울산광역시' cnt={cnt['울산']}/>
                <MarkerComponent img={busan} setMap={setMap} left={224} top={307} region='부산' fullName='부산광역시' cnt={cnt['부산']}/>
              </MarkerContainer> 
            }
          </BaseMap>
         </Map>
      </Flex>
  )
}
