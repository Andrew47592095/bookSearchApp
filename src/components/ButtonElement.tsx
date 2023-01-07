import React from 'react'
import styles from '../styles/Button.module.css';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

type Props = {
  page : number,
  currentPage : number,
  setPage : (count : number) => void
}

export const ButtonElement : React.FC<Props> = ({ page, setPage, currentPage }) => {
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
