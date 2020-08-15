import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from "./movie-card";

configure({adapter: new Adapter()});

test(`MovieCard title click correctly works`, () => {
  const onTitleClickMock = jest.fn();

  const movieCard = shallow(
      <MovieCard
        title="film title 1"
        onTitleClick={onTitleClickMock}
      />);

  movieCard.find(`.small-movie-card__title`).simulate(`click`);

  expect(onTitleClickMock).toHaveBeenCalledTimes(1);
});
