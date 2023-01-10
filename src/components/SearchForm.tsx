import React from 'react'
import styles from "../styles/Search.module.css";
import { Input, Button } from '@mui/material';
import { useWidth } from '../hooks/useWidth';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  searchWord : string,
  setSearchWord : ( word : string) => void,
  handleSubmit : (e : React.FormEvent<HTMLFormElement>) => void
}

export const SearchForm : React.FC<Props> = ({ searchWord, setSearchWord, handleSubmit }) => {
  const width = useWidth();
  
  return (
    <form 
      onSubmit={(e) => handleSubmit(e)}
      className={styles.searchForm}
    >
      {width > 480 ?
        <Input 
          id="standard-basic" 
          placeholder='Find Your Favorite Books!'
          onChange={(e) => setSearchWord(e.currentTarget.value)}
          name="searchWord"
          value={searchWord}
          type="text"
          sx={{
            width : 500,
            height : "40px"
          }}
        /> : 
        <Input
          id="standard-basic" 
          placeholder='Find Your Favorite Books!'
          onChange={(e) => setSearchWord(e.currentTarget.value)}
          name="searchWord"
          value={searchWord}
          type="text"
          sx={{
            width : 300,
            height : "27px",
          }}
        />
      }
      {width > 480 ?
        <Button 
          variant="contained"
          size="large"
          type='submit'
          sx={{
            marginLeft : "20px",
          }}
        >
          Search
        </Button> :
        <Button
          type='submit'
        >
          <SearchIcon
            fontSize='large'
          />
        </Button>
      }
    </form>
  )
}
