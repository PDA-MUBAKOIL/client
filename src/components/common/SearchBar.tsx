import React from 'react'
import { Box, Input,MantineThemeProvider, createTheme} from '@mantine/core';
import classes from '../../styles/Navbar.module.css';
import search from '../../assets/img/SearchBar/search.png';
import styled from 'styled-components';
import { useInputState } from '@mantine/hooks';
import { listUp } from '../../lib/api/drinks';

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
}

type TSearch = {
  setValue:React.Dispatch<React.SetStateAction<string>>,
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


export default function SearchBar({setValue, setResult}:TSearch) {   
    const [searchValue,setSearchValue] = useInputState('');
    
    
    const onSubmitSearch = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      setValue(searchValue);
      listUp().then(data=>{
        setResult(data.data);
      })
    }

    const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setSearchValue(e.target.value);
      setValue(e.target.value);
    }


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
                  value={searchValue}
                  onChange={onChangeSearch}
              />
        </form>
      </Box>
    </MantineThemeProvider>
  )
}
