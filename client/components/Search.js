import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.handleParameterUpdates('location', event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.checkIfSearchBlank();
  }

  render() {
    return(
      <div>
        <form className="navbar-form navbar-left" onSubmit={this.handleSubmit}>
          <div className="form-group search-group">
            <input type="text" value={this.props.location} onChange={this.handleChange} className="form-control search-field" placeholder="Search..." />
          </div>
          <button type="submit" className="btn btn-default search-button">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
