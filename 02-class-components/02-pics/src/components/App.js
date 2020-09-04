import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  // that function is passing down to a child (search bar) as a prop
  onSearchSubmit(term) {
    // console.log(term);
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
      },
      headers: {
        Authorization: 'Client-ID XuNzyZOVv6xRMZ2bCmpqEi5J7PsUJhXpvn8sSH305lE',
      },
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
