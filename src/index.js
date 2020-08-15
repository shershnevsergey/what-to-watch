import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `Revenant`];

ReactDOM.render(<App films={films}/>, document.querySelector(`#root`));
