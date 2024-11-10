import React from 'react';
import MovieElement from './MovieElement';

const Main = ({ Movie, nameSearch }) => {
  return (
    <main>
      {Movie.filter((el) =>
        el.title.toLowerCase().includes(nameSearch.toLowerCase().trim())
      ).map((el) => (
        <MovieElement key={el.id} el={el} />
      ))}
    </main>
  );
};

export default Main;
