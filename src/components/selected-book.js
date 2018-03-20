import React,{Component} from 'react';
import BookDescription from './book-description';

class SelectedBook extends Component{
  render(){
    const book = this.props.book;
    if(!book){
      return <div className="selected-book col-8">Loading...</div>
    }
    return (
      <div className="selected-book col-8">
        <img className="book-image" alt={book.title} src={book.thumbnail} />
        <BookDescription book={book} />
      </div>
     )
   }
}

export default SelectedBook;
