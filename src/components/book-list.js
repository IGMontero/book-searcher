import React,{Component} from 'react';
import BookListItem from './book-list-item';
import '../App.css';

const BookList = (props) =>{
  const books = props.books;
  if(!books){
    return(
      <div>Loading...</div>
    )
  }

   const bookList = books.map((book)=>{
    return <BookListItem
    onBookSelect ={props.onBookSelect}
    key={book.id}
    book={book} />
  })

  return(
    <ol className="book-list col-3">
      {bookList}
    </ol>
  )
}

export default BookList;
