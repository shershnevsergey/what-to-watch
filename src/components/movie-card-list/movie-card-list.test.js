import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardList from "./movie-card-list";

const films = [
  {
    id: `id-77`,
    title: `my film title 1`,
    poster: `img/my-poster1.jpg`
  },
  {
    id: `id-78`,
    title: `my film title 2`,
    poster: `img/my-poster2.jpg`
  },
  {
    id: `id-79`,
    title: `my film title 3`,
    poster: `img/my-poster3.jpg`
  }
];

test(`MovieCardList correctly renders`, () => {
  const movieCard = renderer.create(
      <MovieCardList
        films={films}
      />).toJSON();

  expect(movieCard).toMatchSnapshot();
});
