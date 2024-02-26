import React, { useEffect } from 'react'
import { Box, Input,MantineThemeProvider, createTheme} from '@mantine/core';
import classes from '../../styles/Navbar.module.css';
import search from '../../assets/img/SearchBar/search.png';
import styled from 'styled-components';
import { listUp } from '../../lib/api/drinks';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/reduxHooks';
import { setSearch } from '../../store/reducers/Drink/search';
import { useLocation } from "react-router-dom";

export type TSearchResult ={
  _id: string,
  name: string,
  imgUrl: string,
  tags: Array<string>,
  description: string,
  brewerId: string,
  region: string,
  capacity: string,
  material: string,
  __v: number,
  id: string,
  percent: string
}

type TSearch = {
  setResult:React.Dispatch<React.SetStateAction<TSearchResult[]>>
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


export default function SearchBar({setResult}:TSearch) {   
    const searchWord = useAppSelector(state=>state.search.search);
    const dispatch = useAppDispatch();
    const location = useLocation();

    const onSubmitSearch = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      listUp().then(data=>{
        setResult(data.data);
      })
    }

    const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
      dispatch(setSearch(e.target.value));
      listUp().then(data=>{
        setResult(data.data);
      })
    }

  useEffect(()=>{
    if(location.state){
      dispatch(setSearch(location.state['tag']));
      listUp().then(data=>{
        setResult(data.data);
      })
    }else{
      dispatch(setSearch(''));
    }
  },[])

  return (
    <MantineThemeProvider theme={theme}>
      <Box maw={350} mx="auto">
        <form onSubmit={onSubmitSearch}>
              <Input placeholder='검색어를 입력하세요' 
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
