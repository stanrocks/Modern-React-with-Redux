import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  // that function is passing down to a child (search bar) as a prop
  onSearchSubmit(term) {
    console.log(term);
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
