import React, { Component } from 'react';
import Dog from './Dog';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breed/husky/images/random/9')
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data.message })
      })
      .catch(err => console.log('ERROR: ', err));
  }

  render() {
    return (
      <div className="container">
        { this.state.data.map( (url, index ) => <Dog url={url} key={index} /> ) }
      </div>
    );
  }
}

export default App;
