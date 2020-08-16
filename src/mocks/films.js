import {nanoid} from 'nanoid';

const TITLES = [
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`
];

const POSTERS = [
  `img/macbeth.jpg`,
  `img/aviator.jpg`,
  `img/we-need-to-talk-about-kevin.jpg`,
  `img/what-we-do-in-the-shadows.jpg`,
  `img/revenant.jpg`,
  `img/johnny-english.jpg`,
  `img/shutter-island.jpg`
];

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomItem = (array) => array[getRandomInt(0, array.length - 1)];

const generateRandomFilm = () => ({
  id: nanoid(),
  title: getRandomItem(TITLES),
  poster: getRandomItem(POSTERS)
});

const generateRandomFilms = (countFilms) => {
  const films = [];

  for (let i = 0; i < countFilms; i++) {
    films.push(generateRandomFilm());
  }

  return films;
};

export {generateRandomFilms};
