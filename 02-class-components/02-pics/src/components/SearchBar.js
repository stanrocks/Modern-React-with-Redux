import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  // solved 'this' context issue with arrow function:
  onFormSubmit = (event) => {
    event.preventDefault();
    // calling function onSubmit passed via props from parent
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* controlled element: */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
