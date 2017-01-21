import React from 'react';

class Flash extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.removeFlashMessage();
  }

  render() {
    return (
      <div className="alert alert-danger">
        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="btn btn-default exit-button">X</button>
        </form>
        {this.props.message}
      </div>
    );
  }
}

export default Flash;
