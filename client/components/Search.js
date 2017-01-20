import React from 'react';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchPlaces(this.state.value);
  }

  render() {
    return(
      <div>
        <form className="navbar-form navbar-left" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Search..." />
          </div>
          <button type="submit" className="btn btn-default">Search</button>
        </form>
      </div>
    )
  }
}

export default Search
