import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card";

const film = {
  id: `id-77`,
  title: `my film title`,
  poster: `img/my-poster.jpg`
};

test(`Movie card correctly renders`, () => {
  const movieCard = renderer.create(
      <MovieCard
        film={film}
        changeActiveCard={jest.fn()}
      />).toJSON();

  expect(movieCard).toMatchSnapshot();
});
