import React,{ useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import styles from '../styles/ReactQuery.module.css';
import { ButtonElement } from '../components/ButtonElement';
import { SearchForm } from '../components/SearchForm';
import { SearchResultPage } from '../components/SearchResultPage';

const fetchBooks = async (URL : string) => {
  const res = await fetch(URL);
  return res.json();
}

export const ReactQuery = () => {
  const baseUrl = import.meta.env.VITE_URL;
  const [page,setPage] = useState<number>(1);
  const [keyword , setKeyword] = useState<string>("本");
  const [searchWord, setSearchWord] = useState<string>("");
  let URL = `${baseUrl}&keyword=${keyword}&page=${page}`;
  const { isLoading, error, data } = useQuery(['Item', URL], () => fetchBooks(URL), { keepPreviousData : true });
  let currentPage : number = 1;
  if(data) {
    currentPage = data.pageCount;
  }
  
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(searchWord !== "") {
      setKeyword(searchWord);
      setPage(1);
      setSearchWord("");
    }
  }

  return (
    <div className={styles.pageContainer}>
      <SearchForm
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        handleSubmit={handleSubmit}
      />
      <SearchResultPage 
        isLoading={isLoading}
        error={error}
        data={data}
      />
      <ButtonElement
        page={page}
        setPage={setPage}
        currentPage={currentPage}
      />
    </div>
  )
}
