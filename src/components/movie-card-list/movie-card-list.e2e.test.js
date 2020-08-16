import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCardList from "./movie-card-list";

configure({adapter: new Adapter()});

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

test(`MovieCardList correctly changes activeCard state`, () => {
  const movieCardList = shallow(
      <MovieCardList
        films={films}
      />);

  expect(movieCardList.state(`activeCard`)).toBeNull();

  movieCardList.find(`MovieCard`).first().prop(`changeActiveCard`)(films[0].id);
  expect(movieCardList.state(`activeCard`)).toEqual(films[0].id);

  movieCardList.find(`MovieCard`).last().prop(`changeActiveCard`)(films[2].id);
  expect(movieCardList.state(`activeCard`)).toEqual(films[2].id);
});
