import React, { Component } from 'react';
import StarRating from './StarRating';

class Dog extends Component {

  constructor(props) {
    super(props);
    this.state = { rating: 0 };
  }

  handleSetRating = (newRating) => {
    if (newRating === this.state.rating) {
      this.setState({ rating: 0 });
    } else {
      this.setState({ rating: newRating });
    }
  }

  render() {
    return (
      <div className="card">
        <div>
          <img src={this.props.url} alt='A random husky dog' />
        </div>
        <h3>Rating: {this.state.rating}</h3>
        <StarRating 
          rating={this.state.rating} 
          setRating={this.handleSetRating}
        /> 
      </div>
    );
  }
}

export default Dog;