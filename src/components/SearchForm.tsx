// import pacakge
import React from "react";
import { Input, Button } from "@mui/material";
// import local
import styles from "../styles/Search.module.css";
import { useWidth } from "../hooks/useWidth";

type Props = {
  searchWord: string;
  setSearchWord: (word: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const SearchForm = (props: Props) => {
  const width = useWidth();
  const { searchWord, setSearchWord, handleSubmit } = props;

  const searchInput = () => {
    return (
      <Input
        id="standard-basic"
        placeholder="Find Your Favorite Books!"
        onChange={(e) => setSearchWord(e.currentTarget.value)}
        name="searchWord"
        value={searchWord}
        type="text"
        sx={{
          width: width > 480 ? 500 : 300,
          height: width > 480 ? "40px" : "27px",
        }}
      />
    );
  };

  const searchButton = () => {
    return (
      <Button
        variant="contained"
        size={width > 480 ? "large" : "small"}
        type="submit"
        sx={{
          marginLeft: width > 480 ? "20px" : 0,
        }}
      >
        Search
      </Button>
    );
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.searchForm}>
      {searchInput()}
      {searchButton()}
    </form>
  );
};
