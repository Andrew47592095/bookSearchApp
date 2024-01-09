// import package
import React, { useState } from 'react'
import { Modal } from '@mui/material';
// import local
import { Book } from '../type/BookType';
import { BookDetail } from './BookDetail';
import  styles from '../styles/indivisualBook.module.css';
import { useWidth } from '../hooks/useWidth';

type Props = {
  book: Book
}

export const IndivisualBook = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { book } = props;
  const width = useWidth();
  const fixedImgUrl = book.largeImageUrl.replace("_ex=200x200", "");

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
            alt={book.title} 
            className={styles.bookImg}
          />
          {width > 480 ? 
            <h3 className={styles.bookTitle}>{book.title}</h3> : ""
          }
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
