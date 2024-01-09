// import package
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
// import local
import styles from "../styles/BookDetail.module.css";
import { Book } from '../type/BookType';

type Props = {
  handleClose : () => void, 
  book : Book, 
  fixedImgUrl : string
}

export const BookDetail = ( props : Props ) => {
  const [favorite, setFavorite] = useState(false);
  const { handleClose, book, fixedImgUrl } = props; 

  const handleFav = () => {
    if(favorite === true) {
      setFavorite(false);
    } else {
      setFavorite(true);
    }
  }

  return (
    <div className={styles.bookDetail}>
      <div className={styles.icons}>
        <div onClick={handleFav}>
          {favorite !== true ? 
           <StarBorderIcon
            fontSize='large'
            style={{color : "#FFD700"}}
           /> :
           <StarIcon
            fontSize='large'
            style={{color : "#FFD700"}}
           />
          }
        </div>
        
        <CloseIcon 
          fontSize='large'
          onClick={handleClose}
        />
      </div>
      <div className={styles.detailContainer}>
        <div className={styles.wrapper}>
          <img src={fixedImgUrl} alt={book.title} className={styles.bookImg}/>
        </div>
        <div className={`${styles.bookDescription} ${styles.wrapper}`}>
          <h1 className={styles.bookTitle}>{book.title}</h1>
          <br />
          <h3>著者: {book.author}</h3>
          <h3>価格: ¥{book.itemPrice}</h3>
          <h3>本書について:</h3><p>{book.itemCaption}</p>
        </div>
      </div>
      <Button variant='text'>
        <a 
          href={book.itemUrl}
          className={styles.bookLink}
        >
          購入はこちらから
        </a>
      </Button>
    </div>
  )
}
