import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import styles from "../styles/BookDetail.module.css";
import { Item } from '../type/BookType';
import Button from '@mui/material/Button';

export const BookDetail = ({ handleClose, book, fixedImgUrl } : { handleClose : () => void, book : Item, fixedImgUrl : string}) => {
  const [favorite, setFavorite] = useState(false);  

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
          <img src={fixedImgUrl} alt={book.Item.title} className={styles.bookImg}/>
        </div>
        <div className={`${styles.bookDescription} ${styles.wrapper}`}>
          <h1>{book.Item.title}</h1>
          <br />
          <h3>著者: {book.Item.author}</h3>
          <h3>価格: ¥{book.Item.itemPrice}</h3>
          <h3>本書について:</h3><p>{book.Item.itemCaption}</p>
        </div>
      </div>
      <Button variant='text'>
        <a 
          href={book.Item.itemUrl}
          className={styles.bookLink}
        >
          購入はこちらから
        </a>
      </Button>
    </div>
  )
}
