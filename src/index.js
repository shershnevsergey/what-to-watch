import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {generateRandomFilms} from "./mocks/films";

const FILMS_COUNT = 5;
const films = generateRandomFilms(FILMS_COUNT);

ReactDOM.render(<App films={films}/>, document.querySelector(`#root`));
