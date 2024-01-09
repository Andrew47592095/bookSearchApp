import React from 'react'
import { Item } from '../type/BookType'
import { Data } from '../type/BookType'
import { IndivisualBook } from './IndivisualBook'
import styles from '../styles/ReactQuery.module.css'

type Props = {
  isLoading : boolean,
  error : unknown,
  data : Data,
}

export const SearchResultPage = (props: Props) => {
  const { isLoading, error, data } = props;
  return (
    <div className={styles.resultContainer}>
      {
        isLoading ? <h1>Loading....</h1> :
        error ? <h1>error</h1> :
        data ?
        data.Items.map((book : Item) => (
          <div key={book.Item.isbn + book.Item.title}>
            <IndivisualBook
              book={book.Item}
            />
          </div>
        )) : ""
      }
    </div>
  )
}
