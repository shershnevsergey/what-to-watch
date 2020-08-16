import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from "./main-page";

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

test(`Main page correctly renders`, () => {
  const mainPage = renderer.create(
      <MainPage films={films} />
  ).toJSON();

  expect(mainPage).toMatchSnapshot();
});
