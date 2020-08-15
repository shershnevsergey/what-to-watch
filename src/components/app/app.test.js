import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app";

const films = [`film title 1`, `film title 2`];

test(`App correctly renders`, () => {
  const app = renderer.create(<App films={films} />).toJSON();

  expect(app).toMatchSnapshot();
});
