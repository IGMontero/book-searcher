import React,{Component} from 'react';


class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      term:''
    }
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render(){
  return(
    <div>
      <label for="search-bar">Search for a book: </label>
      <input onChange={event => this.onInputChange(event.target.value)} id="search-bar" type="text" placeholder="Harry Potter"/>
    </div>
  )
}
}

export default SearchBar;
