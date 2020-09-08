import React, { useState } from 'react';
import StarRating from './StarRating';

function Dog({ url }) {
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
        <img src={url} alt='A random hound dog' />
      </div>
      <h3>Rating: {rating}</h3>
      <StarRating 
        rating={rating} 
        setRating={handleSetRating}
      /> 
    </div>
  );
}

export default Dog;