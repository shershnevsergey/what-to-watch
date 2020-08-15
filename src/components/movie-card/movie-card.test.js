import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card";

test(`Movie card correctly renders`, () => {
  const movieCard = renderer.create(
      <MovieCard
        title="film title 1"
        onTitleClick={jest.fn()}
      />).toJSON();

  expect(movieCard).toMatchSnapshot();
});
