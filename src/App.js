import React,{Component} from 'react';
import BookListItem from './components/book-list-item';
import BookList from './components/book-list';
import SelectedBook from './components/selected-book';
import BookSearch from 'google-books-search';
import SearchBar from './components/search-bar';
import _ from 'lodash';


class App extends Component{
  constructor(props){
    super(props);

    this.state={
      books: [],
      selectedBook:null
    }

    this.bookSearch('Professional JavaScript for Web Developers');
  }

  bookSearch(term){
    //Do the book search and add the found books to the App state.
    BookSearch.search(term,(err,results)=>{
      if(err){
        console.log(err);
      }else{
        this.setState({books:results , selectedBook:results[0]});
      }
    })
  }

  render(){

    const bookSearch = _.debounce((term)=>{this.bookSearch(term)},300);

    return(
      <div id="main-container" className="container">
        <SearchBar onSearchTermChange={bookSearch}/>
        <div className="row App">
          <BookList
          onBookSelect={ book => this.setState({selectedBook:book})}
           books={this.state.books}/>
          <div className="col-1" />
          <SelectedBook book={this.state.selectedBook} />
        </div>
      </div>
    )
  }
}


export default App;
