// import package
import React from 'react'
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
// import local
import styles from '../styles/Button.module.css';


type Props = {
  page : number,
  currentPage : number,
  setPage : (count : number) => void
}

export const ButtonElement = ( props: Props) => {
  const { page, currentPage, setPage } = props
  const returnToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const handleChange = (e : React.ChangeEvent<unknown>, value : number) => {
    setPage(value);
    returnToTop();
  }

  return (
    <div className={styles.buttonContainer}>
      <Typography>Page: {page}</Typography>
      <Pagination 
        count={currentPage} 
        page={page} 
        onChange={handleChange} 
        size="large" 
        />
    </div>
  )
}
