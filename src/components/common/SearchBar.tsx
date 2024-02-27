import React, { useEffect } from 'react'
import { Box, Input,MantineThemeProvider, createTheme} from '@mantine/core';
import classes from '../../styles/Navbar.module.css';
import search from '../../assets/img/SearchBar/search.png';
import styled from 'styled-components';
import { searchDrink } from '../../lib/api/drinks';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/reduxHooks';
import { setSearch } from '../../store/reducers/Drink/search';
import { useLocation } from "react-router-dom";

export type TSearchResult ={
  _id: string,
  name: string,
  percent: string,
  spercent: Array<number>,
  imgUrl: string,
  tags: Array<string>,
  description: string,
  brewerId: {
      _id: string,
      name: string,
      link: string,
      tel: string,
      __v: number,
      id: string
  },
  region: string,
  material: string,
  capacity: string,
  __v: number,
  id: string
}

type TSearch = {
  setResult:React.Dispatch<React.SetStateAction<TSearchResult[]>>,
  placeHolder:string
}

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  cursor: pointer;
`

const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input,
        wrapper: classes.wrapper,
        section: classes.section 
      },
    })
  }
});


export default function SearchBar({setResult, placeHolder}:TSearch) {   
    const searchWord = useAppSelector(state=>state.search.search);
    const dispatch = useAppDispatch();
    const location = useLocation();

    const onSubmitSearch = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(location.pathname === '/search'){
        searchDrink(null,Number(searchWord),null,null).then(data=>{
          if(data !== undefined){setResult(data.data);}
          else(setResult([]))
        })
      }else{
        searchDrink(null,null,searchWord,null).then(data=>{
          if(data !== undefined){
            setResult(data.data);}
          else(setResult([]))
      })}
    }

    const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
      dispatch(setSearch(e.target.value));
      if(location.pathname === '/search'){
        searchDrink(null,Number(e.target.value),null,null).then(data=>{
          if(data !== undefined){setResult(data.data);}
          else(setResult([]))
        })
      }else{
        searchDrink(null,null,e.target.value,null).then(data=>{
          if(data !== undefined){setResult(data.data);console.log(data.data);}
          else(setResult([]))
      })
    }}

  useEffect(()=>{
    if(location.state !== null && location.state !== ''){
      dispatch(setSearch(location.state['tag']));
      searchDrink(location.state['tag'].split('#')[1],null,null,null).then(data=>{
        if(data !== undefined){setResult(data.data);}
        location.state = '';
      })
    }else if(location.state === null ){
      dispatch(setSearch(''));
      location.state = '';
    }
  },[searchWord])

  return (
    <MantineThemeProvider theme={theme}>
      <Box  mx="auto">
        <form onSubmit={onSubmitSearch}>
              <Input placeholder={placeHolder}
                  classNames={classes}
                  rightSectionPointerEvents={'auto'}
                  rightSection={
                      <SearchButton> <img src={search} alt='search' /> </SearchButton>
                    }
                  value={searchWord}
                  onChange={onChangeSearch}
              />
        </form>
      </Box>
    </MantineThemeProvider>
  )
}
