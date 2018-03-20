import React from 'react';
import '../App.css';

const BookListItem = ({book,onBookSelect}) => {
  return(
    <div onClick={()=>onBookSelect(book)}  className="book-list-item">
      {book.title}
    </div>
  )
}


export default BookListItem;
