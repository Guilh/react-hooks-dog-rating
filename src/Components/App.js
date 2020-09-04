import React, { useContext } from 'react';
import { DogRatingContext } from './Context';
import Dog from './Dog';

function App() {
  const { data } = useContext(DogRatingContext);
  
  return (
    <div className="container">
      { data.map( (dog, index ) => <Dog img={dog} key={index} /> ) }
    </div>
  );
}

export default App;
