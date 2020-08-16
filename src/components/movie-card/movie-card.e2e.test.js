import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from "./movie-card";

configure({adapter: new Adapter()});

const film = {
  id: `id-77`,
  title: `my film title`,
  poster: `img/my-poster.jpg`
};

test(`MovieCard correctly selects by hover`, () => {
  const changeActiveCardMock = jest.fn();

  const movieCard = shallow(
      <MovieCard
        film={film}
        changeActiveCard={changeActiveCardMock}
      />);

  movieCard.find(`.small-movie-card`).simulate(`mouseenter`);

  expect(changeActiveCardMock).toHaveBeenCalledTimes(1);
  expect(changeActiveCardMock).toHaveBeenNthCalledWith(1, film.id);
});
