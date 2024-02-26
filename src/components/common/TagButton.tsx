import React from 'react';
import { Button, rem } from '@mantine/core';
import { setSearch } from '../../store/reducers/Drink/search';
import { useAppDispatch } from '../../lib/hooks/reduxHooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { setIsShow } from '../../store/reducers/Drink/showModal';

type TagProp = {
  text: string;
  onClick: () => void;
}


export default function TagButton({ text, onClick }: TagProp) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  function onClickTag(){
    dispatch(setIsShow(false));
    dispatch(setSearch('#'+text))
    if(location.pathname !== '/search'){
      navigate('/search',{state:{tag:'#'+text}});
    }
    onClick();
  }

  return (
    <Button
      style={{ 
        paddingLeft: rem('21px'), 
        paddingRight: rem('21px'),
        backgroundColor: '#DFBBBB',
        color: '#000',
        fontSize: rem('12px'),
        fontWeight: rem(400),
        borderRadius: rem('10px'),
        border: 'solid 1px #C17878'
      }}
      onClick={onClickTag}
    >
      #{text}
    </Button>
  )
}
