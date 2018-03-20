import React from 'react';

const BookDescription = (props) =>{
  const book = props.book;
  if(!book){
    return <div className="book-description">Loading...</div>
  }
  return(
    <div className="book-description">
      <p>Title: {book.title}</p>
      <p>Authors:{book.authors.map((author,step)=>{
        return step!=(book.authors.length-1) ? author+", " : author+"."
      })}</p>
      <p>Description:{book.description ? book.description : 'No description.'}</p>
    </div>
  );
}

export default BookDescription;
