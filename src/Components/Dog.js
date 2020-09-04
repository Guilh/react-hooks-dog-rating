import React, { useState } from 'react';
import StarRating from './StarRating';

function Dog({ img }) {
  const [ rating, setRating ] = useState(0);

  const handleSetRating = (newRating) => {
    if (newRating === rating) {
      setRating(0);
    } else {
      setRating(newRating);
    }
  }

  return (
    <div className="card">
      <div>
        <img src={img} alt='A random hound' />
      </div>
      <h3>Rating: {rating}</h3>
      <StarRating rating={rating} onSetRating={handleSetRating} /> 
    </div>
  );
}

export default Dog;