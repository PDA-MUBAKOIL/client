import React from 'react';
import all from '../../assets/img/Footer/all.svg';
import search from '../../assets/img/Footer/search.svg';
import map from '../../assets/img/Footer/map.svg';
import wish from '../../assets/img/Footer/wish.svg';
import my from '../../assets/img/Footer/my.svg';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footerItems'>
        <div className='footerItem'>
          <img src={all} className='footerItemImg' alt='all'></img>
          <div className='footerItemTxt'>전체</div>
        </div>
        <div className='footerItem'>
          <img src={search} className='footerItemImg' alt='search'></img>
          <div className='footerItemTxt'>검색</div>
        </div>
        <div className='footerItem'>
          <img src={map} className='footerItemImg' alt='search'></img>
          <div className='footerItemTxt'>지도</div>
        </div>
        <div className='footerItem'>
          <img src={wish} className='footerItemImg' alt='search'></img>
          <div className='footerItemTxt'>위시</div>
        </div>
        <div className='footerItem'>
          <img src={my} className='footerItemImg' alt='search'></img>
          <div className='footerItemTxt'>My</div>
        </div>
      </div>
    </div>
  )
}
