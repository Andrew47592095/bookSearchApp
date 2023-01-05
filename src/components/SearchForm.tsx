import React from 'react'
import styles from "../styles/Search.module.css";
import { Input, Button } from '@mui/material';

type Props = {
  searchWord : string,
  setSearchWord : ( word : string) => void,
  handleSubmit : (e : React.FormEvent<HTMLFormElement>) => void
}

export const SearchForm : React.FC<Props> = ({ searchWord, setSearchWord, handleSubmit }) => {
  return (
    <form 
      onSubmit={(e) => handleSubmit(e)}
      className={styles.searchForm}
    >
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
      />

      <Button 
        variant="contained" 
        size="large"
        type='submit'
        sx={{
          marginLeft : "20px",
        }}
      >
        Search
      </Button>
    </form>
  )
}
