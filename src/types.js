import PropsTypes from 'prop-types';

const film = PropsTypes.exact({
  id: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  poster: PropsTypes.string.isRequired
});

export {film};
