import React,{ useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import styles from '../styles/ReactQuery.module.css';
import { ButtonElement } from '../components/ButtonElement';
import { SearchForm } from '../components/SearchForm';
import { SearchResultPage } from '../components/SearchResultPage';
const appId = "1054692824595627335";

const fetchBooks = async (URL : string) => {
  const res = await fetch(URL);
  return res.json();
}

export const ReactQuery = () => {
  // console.log(import.meta.env);

  const [page,setPage] = useState<number>(1);
  const [keyword , setKeyword] = useState<string>("本");
  const [searchWord, setSearchWord] = useState<string>("");
  const appId = "1054692824595627335";
  let URL = `https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404?format=json&keyword=${keyword}&booksGenreId=000&page=${page}&hits=24&applicationId=${appId}`
  const { isLoading, error, data } = useQuery(['Item', URL], () => fetchBooks(URL), { keepPreviousData : true });
  let currentPage : number = 1;
  if(data) {
    currentPage = data.pageCount;  
  }


  
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword(searchWord);
    setSearchWord("");
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
