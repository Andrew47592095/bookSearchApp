import React, { useState } from 'react'
import { Item } from '../type/BookType';
import { BookDetail } from './BookDetail';
import { Modal } from '@mui/material';
import  styles from '../styles/indivisualBook.module.css';

export const IndivisualBook = ({ book } : { book : Item }) => {
  const [open, setOpen] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  const fixedImgUrl = book.Item.largeImageUrl.replace("_ex=200x200", "");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <ul className={styles.unorderedList}>
      <li>
        <div onClick={handleOpen}>
          <img 
            src={fixedImgUrl}
            alt={book.Item.title} 
            className={styles.bookImg}
          />
          <h3 className={styles.bookTitle}>{book.Item.title}</h3>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <BookDetail
            handleClose={handleClose}
            book={book}
            fixedImgUrl={fixedImgUrl}
          />
        </Modal>
      </li>
    </ul>
  )
}
