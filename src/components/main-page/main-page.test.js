import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from "./main-page";

const films = [`film title 1`, `film title 2`];

test(`Main page correctly renders`, () => {
  const mainPage = renderer.create(<MainPage films={films} />).toJSON();

  expect(mainPage).toMatchSnapshot();
});
