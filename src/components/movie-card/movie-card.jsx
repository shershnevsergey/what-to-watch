import React from 'react';
import PropTypes from 'prop-types';
import {film as filmPropTypes} from "../../types";

const MovieCard = ({film, changeActiveCard}) => {
  const {id, title, poster} = film;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => changeActiveCard(id)}>
      <div className="small-movie-card__image">
        <img src={poster}
          alt="Macbeth" width="280" height="175"/>
      </div>
      <h3
        className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
        >{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: filmPropTypes.isRequired,
  changeActiveCard: PropTypes.func.isRequired
};

export default MovieCard;
