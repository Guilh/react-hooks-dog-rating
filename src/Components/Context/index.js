import React, { useState, useEffect } from 'react';

export const DogRatingContext = React.createContext();

export const Provider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breed/hound/images/random/9')
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(err => console.log('Oh noes!', err))
  }, []);

  return (
    <DogRatingContext.Provider value={{ data }}>
      { props.children }
    </DogRatingContext.Provider>
  );
};