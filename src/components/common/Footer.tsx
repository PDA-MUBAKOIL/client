import React from 'react';
import all from '../../assets/img/Footer/all.svg';
import search from '../../assets/img/Footer/search.svg';
import map from '../../assets/img/Footer/map.svg';
import wish from '../../assets/img/Footer/wish.svg';
import my from '../../assets/img/Footer/my.svg';
import styled from 'styled-components';

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`

const FooterItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 71px;
  width:100%
`

const FooterItem = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  gap: 6px;
`

const FooterItemImg = styled.img`
  width: 26px;
  height: 26px;
`

const FooterItemTxt = styled.div`
  font-size: 10px;
  text-align: center;
`

function FooterItemComponent(props:{src:string, txt:string}){
  return(
    <FooterItem>
      <FooterItemImg src={props.src} alt={props.txt}/>
      <FooterItemTxt className='footerItemTxt'>{props.txt}</FooterItemTxt>
    </FooterItem>
  )
}

export default function Footer() {
  return (
    <FooterContainer>
      <FooterItems>
        <FooterItemComponent {...{src:`${all}`, txt:'전체'}}/>
        <FooterItemComponent {...{src:`${search}`, txt:'검색'}}/>
        <FooterItemComponent {...{src:`${map}`, txt:'지도'}}/>
        <FooterItemComponent {...{src:`${wish}`, txt:'위시'}}/>
        <FooterItemComponent {...{src:`${my}`, txt:'My'}}/>
      </FooterItems>
    </FooterContainer>
  )
}
